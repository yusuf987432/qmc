'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { GraduationCap, Globe, Users, Award } from 'lucide-react'

export default function StudySection() {
  const programs = [
    {
      title: 'Undergraduate Programs',
      description: 'Foundation and degree programs in healthcare sciences with University of Nottingham partnership',
      icon: GraduationCap,
      color: 'blue',
      href: '/study/undergraduate'
    },
    {
      title: 'Postgraduate Studies',
      description: 'Master\'s and doctoral programs for advanced healthcare professionals',
      icon: Award,
      color: 'green',
      href: '/study/postgraduate'
    },
    {
      title: 'International Students',
      description: 'Comprehensive support for international students pursuing healthcare education',
      icon: Globe,
      color: 'purple',
      href: '/study/international'
    },
    {
      title: 'Professional Development',
      description: 'Continuing education and certification programs for healthcare professionals',
      icon: Users,
      color: 'orange',
      href: '/study/professional'
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600 text-blue-600',
      green: 'from-green-500 to-green-600 text-green-600',
      purple: 'from-purple-500 to-purple-600 text-purple-600',
      orange: 'from-orange-500 to-orange-600 text-orange-600'
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Study With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover world-class healthcare education programs designed to prepare the next generation 
              of healthcare professionals for global impact.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={program.href}>
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 h-full border border-gray-100 hover:border-gray-200">
                    <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(program.color).split(' ')[0]} ${getColorClasses(program.color).split(' ')[1]} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Partnership Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            University of Nottingham Partnership
          </h3>
          <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
            Our partnership with the University of Nottingham (UK) ensures our students receive 
            internationally recognized qualifications and access to world-class resources and research opportunities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="secondary" size="lg">
              <Link href="/study">Explore All Programs</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Link href="/contact">Contact Admissions</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}