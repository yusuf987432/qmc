
'use client'

import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Microscope, Users, Award, ExternalLink, BookOpen, Target } from 'lucide-react'
import Link from 'next/link'

export default function ResearchPage() {
  const researchAreas = [
    {
      title: 'Tropical Medicine',
      description: 'Advanced research in malaria, tuberculosis, and other tropical diseases affecting West Africa.',
      icon: Microscope,
      projects: 12,
      publications: 45
    },
    {
      title: 'Public Health',
      description: 'Community health initiatives and epidemiological studies to improve healthcare delivery.',
      icon: Users,
      projects: 8,
      publications: 32
    },
    {
      title: 'Medical Education',
      description: 'Innovative teaching methodologies and curriculum development in healthcare education.',
      icon: BookOpen,
      projects: 6,
      publications: 28
    },
    {
      title: 'Healthcare Technology',
      description: 'Digital health solutions and telemedicine applications for rural healthcare.',
      icon: Target,
      projects: 10,
      publications: 38
    }
  ]

  const recentPublications = [
    {
      title: 'Malaria Prevention Strategies in Rural Nigerian Communities',
      authors: 'Dr. A. Johnson, Prof. B. Smith, Dr. C. Okafor',
      journal: 'Journal of Tropical Medicine',
      year: '2024',
      type: 'Peer-reviewed'
    },
    {
      title: 'Telemedicine Implementation in Sub-Saharan Africa',
      authors: 'Dr. M. Chen, Dr. K. Adebayo, Prof. L. Williams',
      journal: 'Digital Health International',
      year: '2024',
      type: 'Research Article'
    },
    {
      title: 'Medical Education Innovation During Pandemic',
      authors: 'Prof. S. Anderson, Dr. O. Ibrahim, Dr. R. Jones',
      journal: 'Medical Education Review',
      year: '2023',
      type: 'Case Study'
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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Research Excellence</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advancing healthcare through cutting-edge research and innovation, 
              addressing the unique health challenges of Africa and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Research Areas</h2>
            <p className="text-xl text-gray-600">
              Our multidisciplinary research focuses on solving real-world healthcare challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <area.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                    </div>
                    <p className="text-gray-600">{area.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{area.projects}</div>
                          <div className="text-sm text-gray-500">Active Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{area.publications}</div>
                          <div className="text-sm text-gray-500">Publications</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
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

      {/* Recent Publications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Recent Publications</h2>
            <p className="text-xl text-gray-600">
              Our latest research contributions to the global healthcare community
            </p>
          </motion.div>

          <div className="space-y-6">
            {recentPublications.map((publication, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {publication.title}
                          </h3>
                          <Badge variant="outline">{publication.type}</Badge>
                        </div>
                        <p className="text-gray-600 mb-2">{publication.authors}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{publication.journal}</span>
                          <span>•</span>
                          <span>{publication.year}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
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
            <Button asChild>
              <Link href="/research/publications">
                View All Publications
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Research Collaboration */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Join Our Research Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Collaborate with leading researchers and contribute to advancing healthcare 
              knowledge and improving patient outcomes across Africa and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Collaborate With Us
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/research/opportunities">
                  Research Opportunities
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
