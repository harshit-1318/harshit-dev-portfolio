import mongoose, { Schema } from 'mongoose';
import { EXPERIENCE_TYPES, type IExperienceDoc } from './types';

const ExperienceSchema = new Schema<IExperienceDoc>(
  {
    company: {
      type: String,
      required: [true, 'Company name is required'],
      trim: true,
      index: true,
    },
    role: {
      type: String,
      required: [true, 'Role is required'],
      trim: true,
    },
    type: {
      type: String,
      enum: EXPERIENCE_TYPES,
      required: [true, 'Employment type is required'],
    },
    location: {
      type: String,
      trim: true,
      default: '',
    },
    startDate: {
      type: String,
      required: [true, 'Start date is required'],
    },
    endDate: {
      type: String,
      default: '',
    },
    current: {
      type: Boolean,
      default: false,
      index: true,
    },
    bullets: {
      type: [String],
      default: [],
    },
    technologies: {
      type: [String],
      default: [],
    },
    order: {
      type: Number,
      default: 0,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// Compound index for timeline queries
ExperienceSchema.index({ current: -1, order: 1 });

const Experience =
  (mongoose.models.Experience as mongoose.Model<IExperienceDoc>) ||
  mongoose.model<IExperienceDoc>('Experience', ExperienceSchema);

export default Experience;
