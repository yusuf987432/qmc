
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Plus, Pencil, Trash2, Eye, Calendar, MapPin, Clock } from 'lucide-react'
import { toast } from 'sonner'
import Link from 'next/link'
import { format } from 'date-fns'

interface Job {
  _id: string
  title: string
  department: string
  location: string
  jobType: string
  applicationDeadline: string
  status: string
  featured: boolean
  createdAt: string
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      const response = await fetch('/api/jobs')
      if (response.ok) {
        const data = await response.json()
        setJobs(data)
      } else {
        toast.error('Failed to fetch jobs')
      }
    } catch (error) {
      console.error('Error fetching jobs:', error)
      toast.error('Failed to fetch jobs')
    } finally {
      setLoading(false)
    }
  }

  const deleteJob = async (id: string) => {
    if (!confirm('Are you sure you want to delete this job?')) return

    try {
      const response = await fetch(`/api/jobs/${id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        toast.success('Job deleted successfully')
        setJobs(jobs.filter(job => job._id !== id))
      } else {
        toast.error('Failed to delete job')
      }
    } catch (error) {
      console.error('Error deleting job:', error)
      toast.error('Failed to delete job')
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-green-500'
      case 'closed': return 'bg-red-500'
      case 'filled': return 'bg-blue-500'
      case 'draft': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  const getJobTypeColor = (type: string) => {
    switch (type) {
      case 'full-time': return 'bg-blue-100 text-blue-800'
      case 'part-time': return 'bg-green-100 text-green-800'
      case 'contract': return 'bg-yellow-100 text-yellow-800'
      case 'internship': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Job Management</h1>
          <p className="text-gray-600">Create and manage job postings</p>
        </div>
        <Button asChild>
          <Link href="/admin/jobs/new">
            <Plus className="w-4 h-4 mr-2" />
            New Job
          </Link>
        </Button>
      </div>

      <div className="grid gap-6">
        {jobs.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600 mb-4">Get started by creating your first job posting.</p>
              <Button asChild>
                <Link href="/admin/jobs/new">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Job
                </Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          jobs.map((job) => (
            <Card key={job._id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                      {job.featured && (
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Deadline: {format(new Date(job.applicationDeadline), 'MMM dd, yyyy')}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getJobTypeColor(job.jobType)}>
                        {job.jobType.replace('-', ' ').toUpperCase()}
                      </Badge>
                      <Badge className={`text-white ${getStatusColor(job.status)}`}>
                        {job.status.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/admin/jobs/${job._id}`}>
                        <Eye className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/admin/jobs/${job._id}/edit`}>
                        <Pencil className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => deleteJob(job._id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Created on {format(new Date(job.createdAt), 'MMM dd, yyyy')}
                </p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
