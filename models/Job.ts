import mongoose from 'mongoose'

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  department: String,
  location: String,
  type: {
    type: String,
    enum: ['full-time', 'part-time', 'contract', 'temporary'],
    default: 'full-time',
  },
  description: {
    type: String,
    required: true,
  },
  requirements: [String],
  benefits: [String],
  salary: String,
  applicationDeadline: Date,
  applicationInstructions: String,
  externalUrl: String,
  status: {
    type: String,
    enum: ['open', 'closed', 'draft'],
    default: 'draft',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Job || mongoose.model('Job', JobSchema)