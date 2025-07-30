
import mongoose from 'mongoose'

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  jobType: {
    type: String,
    required: true,
    enum: ['full-time', 'part-time', 'contract', 'internship', 'temporary'],
    default: 'full-time'
  },
  salary: {
    min: Number,
    max: Number,
    currency: {
      type: String,
      default: 'NGN'
    },
    period: {
      type: String,
      enum: ['hourly', 'monthly', 'yearly'],
      default: 'monthly'
    }
  },
  requirements: [{
    type: String,
    trim: true
  }],
  responsibilities: [{
    type: String,
    trim: true
  }],
  benefits: [{
    type: String,
    trim: true
  }],
  applicationDeadline: {
    type: Date,
    required: true
  },
  applicationMethod: {
    type: String,
    enum: ['internal', 'external', 'email'],
    default: 'internal'
  },
  applicationLink: {
    type: String,
    trim: true
  },
  applicationEmail: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['draft', 'open', 'closed', 'filled'],
    default: 'draft'
  },
  featured: {
    type: Boolean,
    default: false
  },
  experienceLevel: {
    type: String,
    enum: ['entry', 'mid', 'senior', 'executive'],
    default: 'mid'
  },
  tags: [{
    type: String,
    trim: true
  }],
  postedBy: {
    type: String,
    required: true,
    default: 'QMC HR Department'
  }
}, {
  timestamps: true
})

// Index for better query performance
JobSchema.index({ status: 1, applicationDeadline: 1 })
JobSchema.index({ department: 1, jobType: 1 })

export default mongoose.models.Job || mongoose.model('Job', JobSchema)
