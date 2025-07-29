'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BookOpen, Microscope, Heart, GraduationCap as Graduation } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Queen's Medical Centre
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are an independent training institution dedicated to advancing healthcare education 
              and professional development in Nigeria, in partnership with the prestigious University of Nottingham (UK).
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide world-class healthcare education and training that meets international standards 
                while addressing the unique healthcare needs of Nigeria and the West African region.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading healthcare training institution in West Africa, recognized for excellence 
                in education, research, and innovation in medical and healthcare sciences.
              </p>

              <Button asChild>
                <Link href="/about">Learn More About Our History</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Curriculum</h4>
              <p className="text-gray-600 text-sm">Internationally recognized programs designed for healthcare excellence</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Microscope className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Research Focus</h4>
              <p className="text-gray-600 text-sm">Cutting-edge research addressing regional healthcare challenges</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Community Impact</h4>
              <p className="text-gray-600 text-sm">Committed to improving healthcare outcomes across Nigeria</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Graduation className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Global Standards</h4>
              <p className="text-gray-600 text-sm">Partnership with University of Nottingham ensures world-class education</p>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Faculty</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Programs Offered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-gray-600">Graduate Success Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}