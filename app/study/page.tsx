
'use client'

import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Award, Globe, Users, Clock, BookOpen, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function StudyPage() {
  const programs = [
    {
      id: 'undergraduate',
      title: 'Undergraduate Programs',
      description: 'Foundation and degree programs in healthcare sciences',
      icon: GraduationCap,
      duration: '3-4 Years',
      level: 'Bachelor\'s Degree',
      features: ['Clinical Training', 'Research Projects', 'Industry Placement'],
      courses: [
        'Medicine & Surgery',
        'Nursing Science',
        'Medical Laboratory Science',
        'Physiotherapy',
        'Pharmacy'
      ]
    },
    {
      id: 'postgraduate',
      title: 'Postgraduate Studies',
      description: 'Master\'s and doctoral programs for advanced healthcare professionals',
      icon: Award,
      duration: '1-3 Years',
      level: 'Master\'s & PhD',
      features: ['Advanced Research', 'Specialization', 'Thesis Support'],
      courses: [
        'Public Health',
        'Medical Education',
        'Healthcare Management',
        'Clinical Research',
        'Biomedical Sciences'
      ]
    },
    {
      id: 'professional',
      title: 'Professional Development',
      description: 'Continuing education and certification programs',
      icon: Users,
      duration: '6 Months - 2 Years',
      level: 'Certificate & Diploma',
      features: ['Flexible Schedule', 'Online Learning', 'Expert Faculty'],
      courses: [
        'Healthcare Leadership',
        'Medical Informatics',
        'Quality Improvement',
        'Patient Safety',
        'Healthcare Ethics'
      ]
    },
    {
      id: 'distance',
      title: 'Distance Learning',
      description: 'Online programs for working professionals',
      icon: Globe,
      duration: 'Flexible',
      level: 'All Levels',
      features: ['24/7 Access', 'Interactive Content', 'Virtual Labs'],
      courses: [
        'Health Informatics',
        'Telemedicine',
        'Healthcare Analytics',
        'Digital Health',
        'Medical Coding'
      ]
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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Study With Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover world-class healthcare education programs designed to prepare you 
              for a successful career in the medical field.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <program.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{program.title}</CardTitle>
                          <p className="text-sm text-gray-500">{program.level}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{program.duration}</span>
                      </Badge>
                    </div>
                    <p className="text-gray-600">{program.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.features.map((feature) => (
                          <Badge key={feature} variant="secondary">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Courses */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Available Courses</h4>
                      <ul className="space-y-2">
                        {program.courses.slice(0, 3).map((course) => (
                          <li key={course} className="flex items-center text-sm text-gray-600">
                            <ChevronRight className="w-4 h-4 text-blue-500 mr-2" />
                            {course}
                          </li>
                        ))}
                        {program.courses.length > 3 && (
                          <li className="text-sm text-blue-600 font-medium">
                            +{program.courses.length - 3} more courses
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <Button asChild className="w-full">
                        <Link href={`/study/${program.id}`}>
                          Learn More
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How to Apply</h2>
            <p className="text-xl text-gray-600">
              Your journey to excellence in healthcare education starts here
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Choose Your Program',
                description: 'Browse our programs and select the one that aligns with your career goals.'
              },
              {
                step: '02',
                title: 'Submit Application',
                description: 'Complete the online application form with all required documents.'
              },
              {
                step: '03',
                title: 'Start Your Journey',
                description: 'Upon acceptance, begin your world-class healthcare education experience.'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg">
              <Link href="/contact">
                Start Your Application
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
