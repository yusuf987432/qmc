
import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongoose'
import Event from '@/models/Event'
import { getServerSession } from 'next-auth'

interface RouteParams {
  params: { id: string }
}

// GET - Fetch single event
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    await connectToDatabase()
    
    const event = await Event.findById(params.id)
    
    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 })
    }
    
    return NextResponse.json(event)
  } catch (error) {
    console.error('Event fetch error:', error)
    return NextResponse.json({ error: 'Failed to fetch event' }, { status: 500 })
  }
}

// PUT - Update event
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectToDatabase()
    
    const body = await request.json()
    const event = await Event.findByIdAndUpdate(
      params.id,
      { ...body, updatedAt: new Date() },
      { new: true, runValidators: true }
    )
    
    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 })
    }
    
    return NextResponse.json(event)
  } catch (error) {
    console.error('Event update error:', error)
    return NextResponse.json({ error: 'Failed to update event' }, { status: 500 })
  }
}

// DELETE - Delete event
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectToDatabase()
    
    const event = await Event.findByIdAndDelete(params.id)
    
    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 })
    }
    
    return NextResponse.json({ message: 'Event deleted successfully' })
  } catch (error) {
    console.error('Event delete error:', error)
    return NextResponse.json({ error: 'Failed to delete event' }, { status: 500 })
  }
}
