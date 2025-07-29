'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { GraduationCap, Globe, Users, Award, ArrowRight, BookOpen, Star, Clock } from 'lucide-react'

export default function StudySection() {
  const programs = [
    {
      title: 'Undergraduate Programs',
      description: 'Foundation and degree programs in healthcare sciences with University of Nottingham partnership',
      icon: GraduationCap,
      color: 'blue',
      href: '/study/undergraduate',
      duration: '3-4 Years',
      level: 'Bachelor\'s Degree',
      features: ['Clinical Training', 'Research Projects', 'Industry Placement']
    },
    {
      title: 'Postgraduate Studies',
      description: 'Master\'s and doctoral programs for advanced healthcare professionals',
      icon: Award,
      color: 'green',
      href: '/study/postgraduate',
      duration: '1-3 Years',
      level: 'Master\'s & PhD',
      features: ['Advanced Research', 'Specialization', 'Thesis Support']
    },
    {
      title: 'International Students',
      description: 'Comprehensive support for international students pursuing healthcare education',
      icon: Globe,
      color: 'purple',
      href: '/study/international',
      duration: 'Flexible',
      level: 'All Levels',
      features: ['Visa Support', 'Cultural Integration', 'Language Support']
    },
    {
      title: 'Professional Development',
      description: 'Continuing education and certification programs for healthcare professionals',
      icon: Users,
      color: 'orange',
      href: '/study/professional',
      duration: '6 Months - 2 Years',
      level: 'Certificate & Diploma',
      features: ['Flexible Schedule', 'Online Options', 'CPD Credits']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Academic Programs
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Shape Your Future in
            <span className="block text-blue-600">Healthcare</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Discover world-class healthcare education programs designed to prepare the next generation 
            of healthcare professionals for global impact.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {programs.map((program, index) => {
            const Icon = program.icon
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600 bg-blue-50 text-blue-600 border-blue-200',
              green: 'from-green-500 to-green-600 bg-green-50 text-green-600 border-green-200',
              purple: 'from-purple-500 to-purple-600 bg-purple-50 text-purple-600 border-purple-200',
              orange: 'from-orange-500 to-orange-600 bg-orange-50 text-orange-600 border-orange-200'
            }[program.color]

            return (
              <motion.div
                key={program.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Link href={program.href}>
                  <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full border border-gray-100 group-hover:border-blue-200 relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`} />
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-16 h-16 ${colorClasses.split(' ')[2]} ${colorClasses.split(' ')[4]} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 border-2`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500 font-medium">{program.level}</div>
                          <div className="text-xs text-gray-400 flex items-center mt-1">
                            <Clock className="w-3 h-3 mr-1" />
                            {program.duration}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {program.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6 text-base">
                        {program.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {program.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                          Learn More
                        </span>
                        <ArrowRight className="w-5 h-5 text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Enhanced Partnership Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full" />
            </div>
            
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-blue-100 text-sm font-semibold mb-8"
              >
                <Globe className="w-4 h-4 mr-2" />
                International Partnership
              </motion.div>
              
              <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                University of Nottingham
                <span className="block text-blue-200">Partnership</span>
              </h3>
              
              <p className="text-blue-100 mb-10 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed">
                Our partnership with the University of Nottingham (UK) ensures our students receive 
                internationally recognized qualifications and access to world-class resources and research opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-semibold">
                    <Link href="/study">
                      Explore All Programs
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 px-8 py-4 text-lg font-semibold">
                    <Link href="/contact">Contact Admissions</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}