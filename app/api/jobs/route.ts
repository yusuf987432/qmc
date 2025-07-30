
import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongoose'
import Job from '@/models/Job'
import { getServerSession } from 'next-auth'

// GET - Fetch all jobs
export async function GET(request: NextRequest) {
  try {
    await connectToDatabase()
    
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const limit = searchParams.get('limit')
    
    let query = {}
    if (status) {
      query = { status }
    }
    
    let jobsQuery = Job.find(query).sort({ createdAt: -1 })
    
    if (limit) {
      jobsQuery = jobsQuery.limit(parseInt(limit))
    }
    
    const jobs = await jobsQuery
    return NextResponse.json(jobs)
  } catch (error) {
    console.error('Jobs fetch error:', error)
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 })
  }
}

// POST - Create new job
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectToDatabase()
    
    const body = await request.json()
    const job = new Job(body)
    await job.save()
    
    return NextResponse.json(job, { status: 201 })
  } catch (error) {
    console.error('Job creation error:', error)
    return NextResponse.json({ error: 'Failed to create job' }, { status: 500 })
  }
}
