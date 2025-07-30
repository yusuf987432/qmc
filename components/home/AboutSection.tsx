'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { GraduationCap, Users, Award, Globe } from 'lucide-react'

export default function AboutSection() {
  const stats = [
    {
      icon: GraduationCap,
      value: '500+',
      label: 'Students Graduated',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      value: '50+',
      label: 'Expert Faculty',
      color: 'text-green-600'
    },
    {
      icon: Award,
      value: '25+',
      label: 'Years of Excellence',
      color: 'text-purple-600'
    },
    {
      icon: Globe,
      value: '10+',
      label: 'International Partnerships',
      color: 'text-orange-600'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About Queen's Medical Centre
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Excellence in healthcare education and professional development, 
            partnering with the University of Nottingham to deliver world-class training.
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
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
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
          className="text-center"
        >
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Located in Wuse, Abuja, Queen's Medical Centre stands as a beacon of excellence 
            in healthcare education. Our partnership with the University of Nottingham ensures 
            that our students receive internationally recognized qualifications while being 
            immersed in cutting-edge medical knowledge and practices.
          </p>
        </motion.div>
      </div>
    </section>
  )
}