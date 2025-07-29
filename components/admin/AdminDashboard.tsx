'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Briefcase, Calendar, Users, TrendingUp, Eye, Plus, BarChart3, Activity, Globe } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AdminDashboard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  // Mock data - this would come from your database
  const stats = [
    {
      title: 'Total Blog Posts',
      value: '24',
      change: '+2 this week',
      changeType: 'positive',
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      href: '/admin/blog'
    },
    {
      title: 'Active Jobs',
      value: '8',
      change: '+1 this week',
      changeType: 'positive',
      icon: Briefcase,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      href: '/admin/jobs'
    },
    {
      title: 'Upcoming Events',
      value: '5',
      change: '+3 this month',
      changeType: 'positive',
      icon: Calendar,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      href: '/admin/events'
    },
    {
      title: 'Admin Users',
      value: '3',
      change: 'No change',
      changeType: 'neutral',
      icon: Users,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      href: '/admin/users'
    }
  ]

  const recentActivity = [
    {
      action: 'New blog post published',
      title: 'Research Breakthrough in Malaria Treatment',
      time: '2 hours ago',
      type: 'blog',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      action: 'Job posting updated',
      title: 'Senior Lecturer Position',
      time: '4 hours ago',
      type: 'job',
      icon: Briefcase,
      color: 'text-green-600'
    },
    {
      action: 'Event created',
      title: 'Medical Conference 2025',
      time: '1 day ago',
      type: 'event',
      icon: Calendar,
      color: 'text-purple-600'
    },
    {
      action: 'Content updated',
      title: 'About Us - History section',
      time: '2 days ago',
      type: 'content',
      icon: Globe,
      color: 'text-orange-600'
    }
  ]

  const quickActions = [
    {
      title: 'New Blog Post',
      description: 'Create a new article',
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      href: '/admin/blog/new'
    },
    {
      title: 'Post Job',
      description: 'Add new job listing',
      icon: Briefcase,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      href: '/admin/jobs/new'
    },
    {
      title: 'Add Event',
      description: 'Schedule new event',
      icon: Calendar,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      href: '/admin/events/new'
    },
    {
      title: 'View Site',
      description: 'Preview public site',
      icon: Eye,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      href: '/'
    }
  ]

  return (
    <motion.div 
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Welcome Section */}
      <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back! 👋</h1>
            <p className="text-blue-100 text-lg">Here's what's happening with your QMC website today.</p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
              <Activity className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.title}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link href={stat.href}>
                <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-semibold text-gray-600">
                  {stat.title}
                </CardTitle>
                    <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                      <Icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
              </CardHeader>
              <CardContent>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <p className={`text-sm font-medium ${
                      stat.changeType === 'positive' ? 'text-green-600' : 
                      stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-500'
                    }`}>
                      {stat.change}
                </p>
              </CardContent>
                </Card>
              </Link>
            </motion.div>
          )
        })}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card className="h-full shadow-lg border-0">
          <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Recent Activity</CardTitle>
            <CardDescription>
              Latest changes and updates to your content
            </CardDescription>
                </div>
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-blue-600" />
                </div>
              </div>
          </CardHeader>
          <CardContent>
              <div className="space-y-6">
              {recentActivity.map((activity, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`w-10 h-10 ${activity.color.replace('text-', 'bg-').replace('-600', '-50')} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <activity.icon className={`w-5 h-5 ${activity.color}`} />
                    </div>
                  <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-1">
                      {activity.action}
                    </p>
                      <p className="text-gray-600 mb-2">
                      {activity.title}
                    </p>
                      <p className="text-sm text-gray-500">
                      {activity.time}
                    </p>
                  </div>
                  </motion.div>
              ))}
            </div>
          </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div variants={itemVariants}>
          <Card className="h-full shadow-lg border-0">
          <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Quick Actions</CardTitle>
            <CardDescription>
              Common tasks and shortcuts
            </CardDescription>
                </div>
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                  <Plus className="w-5 h-5 text-green-600" />
                </div>
              </div>
          </CardHeader>
          <CardContent>
              <div className="grid grid-cols-1 gap-4">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={action.title}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link href={action.href}>
                      <div className="p-4 border border-gray-200 rounded-xl hover:shadow-md cursor-pointer transition-all duration-300 group">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 ${action.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <action.icon className={`h-5 w-5 ${action.color}`} />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{action.title}</p>
                            <p className="text-sm text-gray-600">{action.description}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Content Overview */}
      <motion.div variants={itemVariants}>
        <Card className="shadow-lg border-0">
        <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Content Overview</CardTitle>
          <CardDescription>
            Summary of your website content status
          </CardDescription>
              </div>
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-purple-600" />
              </div>
            </div>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                <div className="font-semibold text-gray-700 mb-3">Content Complete</div>
                <div className="w-full bg-blue-200 rounded-full h-3">
                  <motion.div 
                    className="bg-blue-600 h-3 rounded-full" 
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
              </div>
              </motion.div>
            
              <motion.div 
                className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-green-600 mb-2">12</div>
                <div className="font-semibold text-gray-700 mb-1">Published Posts</div>
                <div className="text-sm text-gray-500">8 drafts pending</div>
              </motion.div>
            
              <motion.div 
                className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
                <div className="font-semibold text-gray-700 mb-1">Active Sections</div>
                <div className="text-sm text-gray-500">All sections updated</div>
              </motion.div>
          </div>
        </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}