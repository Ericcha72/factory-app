import mongoose from 'mongoose';

export interface IIssue {
  factoryId: string;
  title: string;
  description: string;
  images: string[];
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED';
  createdBy: string;
  assignedTo?: string;
  createdAt: Date;
  updatedAt: Date;
}

const issueSchema = new mongoose.Schema<IIssue>({
  factoryId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String }],
  status: { 
    type: String, 
    enum: ['OPEN', 'IN_PROGRESS', 'RESOLVED'],
    default: 'OPEN'
  },
  createdBy: { type: String, required: true },
  assignedTo: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const Issue = mongoose.model<IIssue>('Issue', issueSchema);