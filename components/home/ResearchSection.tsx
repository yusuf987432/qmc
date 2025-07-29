'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Microscope, Heart, Brain, Dna } from 'lucide-react'

export default function ResearchSection() {
  const researchAreas = [
    {
      title: 'Infectious Disease Research',
      description: 'Advancing understanding and treatment of infectious diseases prevalent in West Africa',
      icon: Microscope,
      color: 'bg-blue-500'
    },
    {
      title: 'Cardiovascular Health',
      description: 'Investigating cardiovascular disease prevention and treatment in African populations',
      icon: Heart,
      color: 'bg-red-500'
    },
    {
      title: 'Neurological Studies',
      description: 'Research into neurological conditions and their impact on quality of life',
      icon: Brain,
      color: 'bg-purple-500'
    },
    {
      title: 'Genetic Medicine',
      description: 'Exploring genetic factors in disease susceptibility and treatment responses',
      icon: Dna,
      color: 'bg-green-500'
    }
  ]

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
              Research & Innovation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our research initiatives address critical healthcare challenges in Nigeria and West Africa, 
              contributing to global medical knowledge and improving patient outcomes.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {researchAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 ${area.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {area.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Research Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Research Impact & Partnerships
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-600">
                  Collaborative research projects with University of Nottingham and international partners
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-600">
                  Publications in high-impact international medical journals
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-600">
                  Research findings informing healthcare policy and practice in Nigeria
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-600">
                  Training the next generation of healthcare researchers
                </p>
              </div>
            </div>
            <Button asChild className="mt-6">
              <Link href="/research">Explore Our Research</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8"
          >
            <h4 className="text-xl font-semibold text-gray-900 mb-6">
              Research Achievements
            </h4>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">25+</div>
                <div className="text-sm text-gray-600">Active Research Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">100+</div>
                <div className="text-sm text-gray-600">Published Papers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">International Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">5M+</div>
                <div className="text-sm text-gray-600">Research Funding (₦)</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}