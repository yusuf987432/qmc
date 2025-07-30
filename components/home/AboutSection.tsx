'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Users, Award, Globe, BookOpen } from 'lucide-react'

export default function AboutSection() {
  const stats = [
    {
      icon: Users,
      number: "5000+",
      label: "Students Trained",
      description: "Healthcare professionals certified"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      description: "In medical education"
    },
    {
      icon: Globe,
      number: "50+",
      label: "Partner Institutions",
      description: "Worldwide collaborations"
    },
    {
      icon: BookOpen,
      number: "100+",
      label: "Courses Offered",
      description: "Comprehensive programs"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Queen's Medical Centre
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An independent training institution specializing in healthcare, medical, and professional development, 
            collaborating with the University of Nottingham (UK) to provide world-class certification programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</h3>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h4>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission & Vision
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">Mission</h4>
                  <p className="text-gray-600">
                    To provide exceptional healthcare education and professional development opportunities 
                    that meet international standards and contribute to improved healthcare outcomes in Nigeria and beyond.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">Vision</h4>
                  <p className="text-gray-600">
                    To be the leading medical education institution in West Africa, known for excellence, 
                    innovation, and producing healthcare professionals who make a difference.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Why Choose QMC?</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>University of Nottingham (UK) collaboration</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>International certification programs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Distance learning opportunities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Continuing professional development</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Modern facilities and resources</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}