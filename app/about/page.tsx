
'use client'

import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Users, Award, Globe, Target, Heart, BookOpen } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We instill empathy and caring in all our healthcare professionals'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for the highest standards in education and healthcare'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'International partnerships ensuring world-class education'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Embracing cutting-edge technology and modern teaching methods'
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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About QMC</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Excellence in healthcare education since 1999, partnering with the University of Nottingham 
              to shape the future of healthcare in Nigeria and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <Target className="w-12 h-12 text-blue-600 mb-4" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                  <p className="text-gray-600 leading-relaxed">
                    To provide world-class healthcare education and training that meets international 
                    standards while addressing the specific healthcare needs of Nigeria and Africa. 
                    We are committed to developing competent, ethical, and compassionate healthcare 
                    professionals who will make a positive impact in their communities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <Globe className="w-12 h-12 text-green-600 mb-4" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading healthcare education institution in West Africa, recognized 
                    globally for excellence in medical education, research, and community service. 
                    We envision a future where our graduates are at the forefront of healthcare 
                    innovation and service delivery worldwide.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do at Queen's Medical Centre
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                University of Nottingham Partnership
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
                Our strategic partnership with the University of Nottingham ensures that our students 
                receive internationally recognized qualifications and access to world-class resources, 
                research opportunities, and global healthcare networks.
              </p>
              
              <div className="bg-blue-50 rounded-2xl p-8">
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <span className="text-white font-bold text-2xl">QMC</span>
                    </div>
                    <p className="font-semibold">Queen's Medical Centre</p>
                  </div>
                  
                  <div className="text-4xl text-blue-600">+</div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <BookOpen className="w-10 h-10 text-white" />
                    </div>
                    <p className="font-semibold">University of Nottingham</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
