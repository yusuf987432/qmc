
import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongoose'
import Content from '@/models/Content'
import { getServerSession } from 'next-auth'

// GET - Fetch content by section
export async function GET(request: NextRequest) {
  try {
    await connectToDatabase()
    
    const { searchParams } = new URL(request.url)
    const section = searchParams.get('section')
    
    if (section) {
      const content = await Content.findOne({ section })
      return NextResponse.json(content || { section, data: {} })
    }
    
    // Return all content if no section specified
    const allContent = await Content.find({})
    return NextResponse.json(allContent)
  } catch (error) {
    console.error('Content fetch error:', error)
    return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 })
  }
}

// POST - Create or update content
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectToDatabase()
    
    const body = await request.json()
    const { section, data } = body
    
    if (!section || !data) {
      return NextResponse.json({ error: 'Section and data are required' }, { status: 400 })
    }
    
    const content = await Content.findOneAndUpdate(
      { section },
      { 
        section, 
        data, 
        updatedAt: new Date() 
      },
      { 
        new: true, 
        upsert: true,
        runValidators: true 
      }
    )
    
    return NextResponse.json(content)
  } catch (error) {
    console.error('Content update error:', error)
    return NextResponse.json({ error: 'Failed to update content' }, { status: 500 })
  }
}

// PUT - Update specific content
export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectToDatabase()
    
    const body = await request.json()
    const { id, section, data } = body
    
    const content = await Content.findByIdAndUpdate(
      id,
      { section, data, updatedAt: new Date() },
      { new: true, runValidators: true }
    )
    
    if (!content) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 })
    }
    
    return NextResponse.json(content)
  } catch (error) {
    console.error('Content update error:', error)
    return NextResponse.json({ error: 'Failed to update content' }, { status: 500 })
  }
}

// DELETE - Delete content
export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectToDatabase()
    
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'Content ID is required' }, { status: 400 })
    }
    
    const content = await Content.findByIdAndDelete(id)
    
    if (!content) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 })
    }
    
    return NextResponse.json({ message: 'Content deleted successfully' })
  } catch (error) {
    console.error('Content delete error:', error)
    return NextResponse.json({ error: 'Failed to delete content' }, { status: 500 })
  }
}
