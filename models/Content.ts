import mongoose from 'mongoose'

const ContentSchema = new mongoose.Schema({
  section: {
    type: String,
    required: true,
    enum: ['about', 'study', 'browse', 'research', 'alumni', 'contact', 'facilities']
  },
  key: {
    type: String,
    required: true,
  },
  title: String,
  content: String,
  images: [String],
  metadata: mongoose.Schema.Types.Mixed,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

ContentSchema.index({ section: 1, key: 1 }, { unique: true })

export default mongoose.models.Content || mongoose.model('Content', ContentSchema)