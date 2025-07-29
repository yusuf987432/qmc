'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BookOpen, Microscope, Heart, GraduationCap as Graduation, TrendingUp, Users, Award, Globe2 } from 'lucide-react'

export default function AboutSection() {
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
    hidden: { opacity: 0, y: 20 },
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
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl" />
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
            <Award className="w-4 h-4 mr-2" />
            About Our Institution
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Transforming Healthcare
            <span className="block text-blue-600">Education in Nigeria</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            We are an independent training institution dedicated to advancing healthcare education 
            and professional development in Nigeria, in partnership with the prestigious University of Nottingham (UK).
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To provide world-class healthcare education and training that meets international standards 
                    while addressing the unique healthcare needs of Nigeria and the West African region.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To be the leading healthcare training institution in West Africa, recognized for excellence 
                    in education, research, and innovation in medical and healthcare sciences.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg">
                <Link href="/about">
                  Discover Our Story
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              {
                icon: BookOpen,
                title: "Expert Curriculum",
                description: "Internationally recognized programs designed for healthcare excellence",
                color: "blue",
                delay: 0
              },
              {
                icon: Microscope,
                title: "Research Focus",
                description: "Cutting-edge research addressing regional healthcare challenges",
                color: "green",
                delay: 0.1
              },
              {
                icon: Heart,
                title: "Community Impact",
                description: "Committed to improving healthcare outcomes across Nigeria",
                color: "red",
                delay: 0.2
              },
              {
                icon: Graduation,
                title: "Global Standards",
                description: "Partnership with University of Nottingham ensures world-class education",
                color: "purple",
                delay: 0.3
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-${item.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 text-${item.color}-600`} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent" />
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full" />
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h3>
                <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                  Building a legacy of excellence in healthcare education across Nigeria and beyond
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "500+", label: "Students Enrolled", icon: Users, color: "blue" },
                  { number: "50+", label: "Expert Faculty", icon: Graduation, color: "green" },
                  { number: "15+", label: "Programs Offered", icon: BookOpen, color: "purple" },
                  { number: "98%", label: "Graduate Success Rate", icon: TrendingUp, color: "orange" }
                ].map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="text-center group cursor-pointer"
                    >
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-blue-100 font-medium text-sm md:text-base">
                        {stat.label}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
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