import mongoose, { Schema } from 'mongoose';
import type { IContactMessageDoc } from './types';

const ContactMessageSchema = new Schema<IContactMessageDoc>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true,
      index: true,
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      trim: true,
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
    },
    read: {
      type: Boolean,
      default: false,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index for unread messages dashboard query
ContactMessageSchema.index({ read: 1, createdAt: -1 });

const ContactMessage =
  (mongoose.models.ContactMessage as mongoose.Model<IContactMessageDoc>) ||
  mongoose.model<IContactMessageDoc>('ContactMessage', ContactMessageSchema);

export default ContactMessage;
