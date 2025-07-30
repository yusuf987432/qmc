
import mongoose from 'mongoose'

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    maxlength: 200,
    trim: true
  },
  eventDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  },
  eventTime: {
    start: {
      type: String,
      required: true
    },
    end: {
      type: String
    }
  },
  location: {
    venue: {
      type: String,
      required: true,
      trim: true
    },
    address: {
      type: String,
      trim: true
    },
    isOnline: {
      type: Boolean,
      default: false
    },
    onlineLink: {
      type: String,
      trim: true
    }
  },
  category: {
    type: String,
    required: true,
    enum: [
      'conference', 
      'workshop', 
      'seminar', 
      'graduation', 
      'open-day', 
      'research', 
      'alumni', 
      'training',
      'webinar',
      'other'
    ],
    default: 'seminar'
  },
  targetAudience: [{
    type: String,
    enum: [
      'students', 
      'faculty', 
      'alumni', 
      'staff', 
      'public', 
      'professionals', 
      'researchers'
    ]
  }],
  bannerImage: {
    url: String,
    alt: String,
    publicId: String
  },
  gallery: [{
    url: String,
    alt: String,
    publicId: String
  }],
  registrationRequired: {
    type: Boolean,
    default: false
  },
  registrationLink: {
    type: String,
    trim: true
  },
  registrationDeadline: {
    type: Date
  },
  maxAttendees: {
    type: Number,
    min: 0
  },
  currentAttendees: {
    type: Number,
    default: 0,
    min: 0
  },
  ticketPrice: {
    amount: {
      type: Number,
      min: 0,
      default: 0
    },
    currency: {
      type: String,
      default: 'NGN'
    },
    isFree: {
      type: Boolean,
      default: true
    }
  },
  organizer: {
    name: {
      type: String,
      required: true,
      default: 'Queen\'s Medical Centre'
    },
    email: {
      type: String,
      trim: true
    },
    phone: {
      type: String,
      trim: true
    }
  },
  speakers: [{
    name: {
      type: String,
      required: true,
      trim: true
    },
    title: {
      type: String,
      trim: true
    },
    bio: {
      type: String
    },
    image: {
      url: String,
      alt: String
    }
  }],
  agenda: [{
    time: {
      type: String,
      required: true
    },
    activity: {
      type: String,
      required: true
    },
    speaker: String,
    duration: String
  }],
  tags: [{
    type: String,
    trim: true
  }],
  status: {
    type: String,
    enum: ['draft', 'published', 'cancelled', 'completed'],
    default: 'draft'
  },
  featured: {
    type: Boolean,
    default: false
  },
  seoTitle: {
    type: String,
    trim: true
  },
  seoDescription: {
    type: String,
    trim: true
  },
  relatedEvents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  }]
}, {
  timestamps: true
})

// Indexes for better query performance
EventSchema.index({ eventDate: 1, status: 1 })
EventSchema.index({ category: 1, featured: 1 })
EventSchema.index({ tags: 1 })

export default mongoose.models.Event || mongoose.model('Event', EventSchema)
