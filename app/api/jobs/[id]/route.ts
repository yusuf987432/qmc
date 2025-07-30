
import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongoose'
import Job from '@/models/Job'
import { getServerSession } from 'next-auth'

interface RouteParams {
  params: { id: string }
}

// GET - Fetch single job
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    await connectToDatabase()
    
    const job = await Job.findById(params.id)
    
    if (!job) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 })
    }
    
    return NextResponse.json(job)
  } catch (error) {
    console.error('Job fetch error:', error)
    return NextResponse.json({ error: 'Failed to fetch job' }, { status: 500 })
  }
}

// PUT - Update job
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectToDatabase()
    
    const body = await request.json()
    const job = await Job.findByIdAndUpdate(
      params.id,
      { ...body, updatedAt: new Date() },
      { new: true, runValidators: true }
    )
    
    if (!job) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 })
    }
    
    return NextResponse.json(job)
  } catch (error) {
    console.error('Job update error:', error)
    return NextResponse.json({ error: 'Failed to update job' }, { status: 500 })
  }
}

// DELETE - Delete job
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectToDatabase()
    
    const job = await Job.findByIdAndDelete(params.id)
    
    if (!job) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 })
    }
    
    return NextResponse.json({ message: 'Job deleted successfully' })
  } catch (error) {
    console.error('Job delete error:', error)
    return NextResponse.json({ error: 'Failed to delete job' }, { status: 500 })
  }
}
