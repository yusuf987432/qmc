
import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongoose'
import Event from '@/models/Event'
import { getServerSession } from 'next-auth'

// GET - Fetch all events
export async function GET(request: NextRequest) {
  try {
    await connectToDatabase()
    
    const { searchParams } = new URL(request.url)
    const upcoming = searchParams.get('upcoming')
    const limit = searchParams.get('limit')
    const featured = searchParams.get('featured')
    
    let query = {}
    
    if (upcoming === 'true') {
      query = { 
        ...query,
        eventDate: { $gte: new Date() },
        status: 'published'
      }
    }
    
    if (featured === 'true') {
      query = { ...query, featured: true }
    }
    
    let eventsQuery = Event.find(query).sort({ eventDate: 1 })
    
    if (limit) {
      eventsQuery = eventsQuery.limit(parseInt(limit))
    }
    
    const events = await eventsQuery
    return NextResponse.json(events)
  } catch (error) {
    console.error('Events fetch error:', error)
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 })
  }
}

// POST - Create new event
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectToDatabase()
    
    const body = await request.json()
    const event = new Event(body)
    await event.save()
    
    return NextResponse.json(event, { status: 201 })
  } catch (error) {
    console.error('Event creation error:', error)
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 })
  }
}
