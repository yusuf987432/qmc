
'use client'

import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Users, Award, MapPin, ExternalLink, Calendar, Heart } from 'lucide-react'
import Link from 'next/link'

export default function AlumniPage() {
  const featuredAlumni = [
    {
      name: 'Dr. Sarah Adebayo',
      class: '2018',
      position: 'Chief Medical Officer',
      organization: 'Lagos University Teaching Hospital',
      location: 'Lagos, Nigeria',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300',
      achievement: 'Leading COVID-19 response initiatives'
    },
    {
      name: 'Dr. Michael Chen',
      class: '2015',
      position: 'Research Director',
      organization: 'WHO Africa Regional Office',
      location: 'Brazzaville, Congo',
      image: 'https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=300',
      achievement: 'Malaria eradication program lead'
    },
    {
      name: 'Dr. Fatima Yusuf',
      class: '2020',
      position: 'Pediatric Surgeon',
      organization: 'Great Ormond Street Hospital',
      location: 'London, UK',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300',
      achievement: 'Youngest surgeon at GOSH'
    }
  ]

  const alumniStats = [
    { icon: Users, value: '2,500+', label: 'Alumni Worldwide' },
    { icon: MapPin, value: '45+', label: 'Countries' },
    { icon: Award, value: '150+', label: 'Healthcare Leaders' },
    { icon: Heart, value: '95%', label: 'Career Satisfaction' }
  ]

  const upcomingEvents = [
    {
      title: 'Annual Alumni Reunion',
      date: 'June 15, 2025',
      location: 'QMC Campus, Abuja',
      type: 'In-Person',
      description: 'Join us for networking, updates, and celebrating achievements.'
    },
    {
      title: 'Global Health Webinar Series',
      date: 'Monthly',
      location: 'Virtual',
      type: 'Online',
      description: 'Expert talks on current global health challenges and solutions.'
    },
    {
      title: 'Career Mentorship Program Launch',
      date: 'March 1, 2025',
      location: 'Hybrid',
      type: 'Program',
      description: 'Connect recent graduates with experienced alumni mentors.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Alumni Network</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connecting healthcare professionals worldwide and fostering lifelong relationships 
              within the QMC community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Alumni Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {alumniStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6">
                  <CardContent className="p-0">
                    <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Alumni */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Alumni</h2>
            <p className="text-xl text-gray-600">
              Celebrating the achievements of our distinguished graduates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAlumni.map((alumni, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <img 
                        src={alumni.image} 
                        alt={alumni.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl">{alumni.name}</CardTitle>
                    <Badge variant="outline">Class of {alumni.class}</Badge>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <div>
                      <p className="font-semibold text-gray-900">{alumni.position}</p>
                      <p className="text-gray-600">{alumni.organization}</p>
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      {alumni.location}
                    </div>
                    <p className="text-sm text-blue-600 font-medium">{alumni.achievement}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <p className="text-xl text-gray-600">
              Stay connected through our alumni events and networking opportunities
            </p>
          </motion.div>

          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                      <div className="flex-1 mb-4 md:mb-0">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                          <Badge variant="outline">{event.type}</Badge>
                        </div>
                        <p className="text-gray-600 mb-2">{event.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {event.date}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                      <Button variant="outline">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Alumni Network */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Join Our Alumni Network</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Stay connected with fellow graduates, access exclusive opportunities, 
              and contribute to the growth of future healthcare professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/alumni/register">
                  Update Your Profile
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/alumni/directory">
                  Alumni Directory
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
