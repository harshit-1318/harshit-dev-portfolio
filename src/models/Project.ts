import mongoose, { Schema } from 'mongoose';
import { PROJECT_CATEGORIES, type IProjectDoc, type ProjectCategory } from './project-types';

export { PROJECT_CATEGORIES };
export type { ProjectCategory, IProjectDoc };

const ProjectSchema = new Schema<IProjectDoc>(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Project slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    longDescription: {
      type: String,
      default: '',
    },
    techStack: {
      type: [String],
      default: [],
    },
    features: {
      type: [String],
      default: [],
    },
    githubUrl: {
      type: String,
      trim: true,
      default: '',
    },
    liveUrl: {
      type: String,
      trim: true,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    screenshots: {
      type: [String],
      default: [],
    },
    category: {
      type: String,
      enum: PROJECT_CATEGORIES,
      required: [true, 'Category is required'],
      index: true,
    },
    featured: {
      type: Boolean,
      default: false,
      index: true,
    },
    order: {
      type: Number,
      default: 0,
      index: true,
    },
    metrics: {
      type: Map,
      of: String,
    },
    challenges: {
      type: String,
      default: '',
    },
    solutions: {
      type: String,
      default: '',
    },
    architectureSteps: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

ProjectSchema.index({ featured: -1, order: 1 });
ProjectSchema.index({ category: 1, order: 1 });

const Project =
  (mongoose.models.Project as mongoose.Model<IProjectDoc>) ||
  mongoose.model<IProjectDoc>('Project', ProjectSchema);

export default Project;
