
import mongoose from 'mongoose'

const ContentSchema = new mongoose.Schema({
  section: {
    type: String,
    required: true,
    unique: true,
    enum: [
      'about-us',
      'study-with-us', 
      'research',
      'alumni',
      'contact',
      'facilities',
      'browse-by',
      'hero-section',
      'general-settings'
    ]
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
    default: {}
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

// Pre-save middleware to update the updatedAt field
ContentSchema.pre('save', function(next) {
  this.updatedAt = new Date()
  next()
})

export default mongoose.models.Content || mongoose.model('Content', ContentSchema)
