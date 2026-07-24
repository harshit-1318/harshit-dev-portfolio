import mongoose from "mongoose";
import fs from "fs";
import path from "path";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
  var isMockDb: boolean | undefined;
}

const cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

// Monkey-patch Mongoose if we are in mock mode (safe from hot-reloads)
if (!(global as any).isMongoosePatched) {
  (global as any).originalExec = mongoose.Query.prototype.exec;
  (global as any).originalSave = mongoose.Model.prototype.save;
  (global as any).isMongoosePatched = true;

  mongoose.Query.prototype.exec = async function (this: any, ...args: any[]) {
    if (global.isMockDb) {
      const modelName = this.model.modelName;
      console.log(`[MockDB] Intercepted query for model: ${modelName}, op: ${this.op}`);
      
      const seedDir = path.join(process.cwd(), "data", "seed");
      const seedPath = path.join(process.cwd(), "seed.json");
      let seedData: any = {};
      try {
        if (fs.existsSync(seedDir)) {
          const files = fs.readdirSync(seedDir);
          for (const file of files) {
            if (file.endsWith(".json")) {
              const key = path.basename(file, ".json");
              seedData[key] = JSON.parse(fs.readFileSync(path.join(seedDir, file), "utf8"));
            }
          }
        } else if (fs.existsSync(seedPath)) {
          seedData = JSON.parse(fs.readFileSync(seedPath, "utf8"));
        }
      } catch (err) {
        console.error("[MockDB] Error reading seed data:", err);
      }

      let key = modelName.toLowerCase();
      if (key === "project") key = "projects";
      else if (key === "experience") key = "experiences";
      else if (key === "certificate") key = "certificates";
      else if (key === "contactmessage") key = "contactmessages";

      const data = seedData[key];

      // Determine query type (findOne vs find)
      if (this.op === "findOne" || this.op === "findOneAndUpdate" || this.op === "findByIdAndUpdate") {
        const updateData = this.getUpdate ? this.getUpdate() : null;
        let doc = Array.isArray(data) ? (data[0] || {}) : (data || {});
        if (updateData) {
          const sets = updateData.$set || updateData;
          doc = { ...doc, ...sets };
        }
        if (!doc._id) {
          doc._id = new mongoose.Types.ObjectId().toString();
        }
        return doc;
      } else if (this.op === "findOneAndDelete" || this.op === "findByIdAndDelete") {
        return { _id: this.getFilter ? this.getFilter()._id : "deleted" };
      } else if (this.op === "find") {
        const docs = Array.isArray(data) ? data : (data ? [data] : []);
        return docs.map((doc: any) => {
          if (doc && typeof doc === "object" && !doc._id) {
            return { ...doc, _id: new mongoose.Types.ObjectId().toString() };
          }
          return doc;
        });
      } else {
        return { acknowledged: true, deletedCount: 1, modifiedCount: 1 };
      }
    }
    return (global as any).originalExec.apply(this, args);
  };

  mongoose.Model.prototype.save = async function (this: any, ...args: any[]) {
    if (global.isMockDb) {
      console.log(`[MockDB] Mocked save for model: ${this.constructor.modelName}`);
      if (!this._id) {
        this._id = new mongoose.Types.ObjectId();
      }
      return this;
    }
    return (global as any).originalSave.apply(this, args);
  };
}

async function dbConnect(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 2000, // Fail fast (2 seconds) so frontend doesn't wait
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("Successfully connected to MongoDB.");
      global.isMockDb = false;
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.warn("--------------------------------------------------------------------------------");
    console.warn("[WARNING] MongoDB connection failed. Running in static offline mockup mode.");
    console.warn("[WARNING] Database queries will be answered using data from seed.json.");
    console.warn("--------------------------------------------------------------------------------");
    global.isMockDb = true;
    cached.conn = mongoose; // Return mongoose instance to bypass crashes
  }

  return cached.conn;
}

export default dbConnect;
