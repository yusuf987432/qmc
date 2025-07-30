
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Award, Globe, Heart } from 'lucide-react'

export default function AboutSection() {
  const stats = [
    { icon: Users, number: '2,500+', label: 'Alumni Worldwide' },
    { icon: Award, number: '25+', label: 'Years of Excellence' },
    { icon: Globe, number: '15+', label: 'Countries Represented' },
    { icon: Heart, number: '98%', label: 'Student Satisfaction' }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
            About Queen's Medical Centre
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 gradient-text">
            Excellence in Healthcare Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since 1999, QMC has been at the forefront of healthcare education in Nigeria, 
            partnering with the University of Nottingham to deliver world-class programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Transforming Healthcare Through Education
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to develop competent, ethical, and compassionate healthcare 
                professionals who will make a positive impact in their communities. We combine 
                international best practices with local expertise to address Africa's unique 
                healthcare challenges.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through our partnership with the University of Nottingham, we offer internationally 
                recognized programs that prepare our graduates for global healthcare careers while 
                staying rooted in African healthcare realities.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Award className="w-16 h-16 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold">University of Nottingham</h4>
                    <p className="text-blue-100">Partner Institution</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
