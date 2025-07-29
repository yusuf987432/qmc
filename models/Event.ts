import mongoose from 'mongoose'

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  startDate: {
    type: Date,
    required: true,
  },
  endDate: Date,
  location: String,
  isVirtual: {
    type: Boolean,
    default: false,
  },
  virtualLink: String,
  banner: String,
  category: String,
  status: {
    type: String,
    enum: ['upcoming', 'ongoing', 'completed', 'cancelled'],
    default: 'upcoming',
  },
  registrationRequired: {
    type: Boolean,
    default: false,
  },
  registrationLink: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Event || mongoose.model('Event', EventSchema)