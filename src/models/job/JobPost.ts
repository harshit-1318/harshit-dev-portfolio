import mongoose, { Schema } from 'mongoose';
import { JOB_TYPES, JOB_STATUSES, type IJobPostDoc } from './types';

const JobPostSchema = new Schema<IJobPostDoc>(
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
      enum: JOB_TYPES,
      required: [true, 'Job type is required'],
    },
    location: {
      type: String,
      trim: true,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    applicationUrl: {
      type: String,
      trim: true,
      default: '',
    },
    status: {
      type: String,
      enum: JOB_STATUSES,
      default: 'Saved',
      index: true,
    },
    isPublic: {
      type: Boolean,
      default: false,
      index: true,
    },
    appliedDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Compound indexes for dashboard queries
JobPostSchema.index({ status: 1, appliedDate: -1 });
JobPostSchema.index({ isPublic: 1, status: 1 });

const JobPost =
  (mongoose.models.JobPost as mongoose.Model<IJobPostDoc>) ||
  mongoose.model<IJobPostDoc>('JobPost', JobPostSchema);

export default JobPost;
