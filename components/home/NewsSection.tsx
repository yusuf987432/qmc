'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowRight, Clock, Eye, Heart, Share2, Bookmark } from 'lucide-react'
import { useState } from 'react'

export default function NewsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  // Mock data - this would come from your database
  const news = [
    {
      id: 1,
      title: 'QMC Partners with Leading UK Hospital for Clinical Training',
      excerpt: 'New partnership agreement expands clinical training opportunities for our medical students.',
      image: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2025-01-15',
      author: 'Dr. Sarah Johnson',
      category: 'Partnerships',
      readTime: '5 min read',
      views: '2.1k',
      featured: true
    },
    {
      id: 2,
      title: 'Research Breakthrough in Malaria Treatment Shows Promise',
      excerpt: 'QMC researchers make significant advancement in developing more effective malaria treatments.',
      image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2025-01-12',
      author: 'Prof. Michael Chen',
      category: 'Research',
      readTime: '8 min read',
      views: '3.5k',
      featured: false
    },
    {
      id: 3,
      title: 'New State-of-the-Art Laboratory Facility Opens',
      excerpt: 'QMC unveils cutting-edge laboratory facilities to enhance student learning and research capabilities.',
      image: 'https://images.pexels.com/photos/8513563/pexels-photo-8513563.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2025-01-08',
      author: 'Admin',
      category: 'Facilities',
      readTime: '4 min read',
      views: '1.8k',
      featured: false
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

  const getCategoryColor = (category: string) => {
    const colors = {
      'Partnerships': 'bg-blue-100 text-blue-800 border-blue-200',
      'Research': 'bg-green-100 text-green-800 border-green-200',
      'Facilities': 'bg-purple-100 text-purple-800 border-purple-200'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200'
  }

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50/50 relative overflow-hidden">
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
            <Calendar className="w-4 h-4 mr-2" />
            Latest News
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Stay Informed with
            <span className="block text-blue-600">QMC Updates</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Stay informed about the latest developments, research breakthroughs, 
            and achievements at Queen's Medical Centre.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {news.map((article, index) => (
            <motion.article
              key={article.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredCard(article.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100 ${
                article.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <div className={`relative ${article.featured ? 'h-80' : 'h-64'} overflow-hidden`}>
                  <motion.img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                  </div>
                  
                  {/* Featured Badge */}
                  {article.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-yellow-500 text-yellow-900 rounded-full text-xs font-bold">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {!article.featured && (
                      <>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        >
                          <Heart className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        >
                          <Bookmark className="w-4 h-4" />
                        </motion.button>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              <div className={`p-6 ${article.featured ? 'p-8' : ''}`}>
                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{article.views}</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                  </motion.button>
                </div>
                
                <h3 className={`font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 ${
                  article.featured ? 'text-2xl md:text-3xl' : 'text-xl'
                }`}>
                  <Link href={`/blog/${article.id}`}>
                    {article.title}
                  </Link>
                </h3>
                
                <p className={`text-gray-600 leading-relaxed mb-6 line-clamp-3 ${
                  article.featured ? 'text-lg' : 'text-sm'
                }`}>
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{article.author}</p>
                      <p className="text-xs text-gray-500">Author</p>
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    <Link href={`/blog/${article.id}`} className="text-sm font-semibold mr-2">
                      Read More
                    </Link>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Don't Miss Any Updates
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Stay connected with the latest news, research breakthroughs, and important announcements from QMC
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg">
                <Link href="/blog">
                  View All News & Updates <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" size="lg" className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 transition-all duration-300 px-8 py-4 text-lg">
                <Link href="/newsletter">
                  Subscribe to Newsletter
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}