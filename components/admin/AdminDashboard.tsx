'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Briefcase, Calendar, Users, TrendingUp, Eye } from 'lucide-react'

export default function AdminDashboard() {
  // Mock data - this would come from your database
  const stats = [
    {
      title: 'Total Blog Posts',
      value: '24',
      change: '+2 this week',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      title: 'Active Jobs',
      value: '8',
      change: '+1 this week',
      icon: Briefcase,
      color: 'text-green-600'
    },
    {
      title: 'Upcoming Events',
      value: '5',
      change: '+3 this month',
      icon: Calendar,
      color: 'text-purple-600'
    },
    {
      title: 'Admin Users',
      value: '3',
      change: 'No change',
      icon: Users,
      color: 'text-orange-600'
    }
  ]

  const recentActivity = [
    {
      action: 'New blog post published',
      title: 'Research Breakthrough in Malaria Treatment',
      time: '2 hours ago'
    },
    {
      action: 'Job posting updated',
      title: 'Senior Lecturer Position',
      time: '4 hours ago'
    },
    {
      action: 'Event created',
      title: 'Medical Conference 2025',
      time: '1 day ago'
    },
    {
      action: 'Content updated',
      title: 'About Us - History section',
      time: '2 days ago'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-gray-500">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest changes and updates to your content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.action}
                    </p>
                    <p className="text-sm text-gray-600">
                      {activity.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <FileText className="h-6 w-6 text-blue-600 mb-2" />
                <p className="text-sm font-medium">New Blog Post</p>
                <p className="text-xs text-gray-600">Create a new article</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <Briefcase className="h-6 w-6 text-green-600 mb-2" />
                <p className="text-sm font-medium">Post Job</p>
                <p className="text-xs text-gray-600">Add new job listing</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <Calendar className="h-6 w-6 text-purple-600 mb-2" />
                <p className="text-sm font-medium">Add Event</p>
                <p className="text-xs text-gray-600">Schedule new event</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <Eye className="h-6 w-6 text-orange-600 mb-2" />
                <p className="text-sm font-medium">View Site</p>
                <p className="text-xs text-gray-600">Preview public site</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Content Overview</CardTitle>
          <CardDescription>
            Summary of your website content status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">85%</div>
              <div className="text-sm text-gray-600">Content Complete</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">12</div>
              <div className="text-sm text-gray-600">Published Posts</div>
              <div className="text-xs text-gray-500 mt-1">8 drafts pending</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">6</div>
              <div className="text-sm text-gray-600">Active Sections</div>
              <div className="text-xs text-gray-500 mt-1">All sections updated</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}