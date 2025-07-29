import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import dbConnect from '@/lib/mongoose'
import Content from '@/models/Content'

export async function GET(request: NextRequest) {
  try {
    await dbConnect()
    
    const { searchParams } = new URL(request.url)
    const section = searchParams.get('section')
    const key = searchParams.get('key')
    
    let query = {}
    if (section) query = { ...query, section }
    if (key) query = { ...query, key }
    
    const content = await Content.find(query).sort({ createdAt: -1 })
    
    return NextResponse.json(content)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch content' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await dbConnect()
    
    const body = await request.json()
    const content = new Content(body)
    await content.save()
    
    return NextResponse.json(content, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create content' },
      { status: 500 }
    )
  }
}