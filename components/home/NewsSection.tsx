'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowRight } from 'lucide-react'

export default function NewsSection() {
  // Mock data - this would come from your database
  const news = [
    {
      id: 1,
      title: 'QMC Partners with Leading UK Hospital for Clinical Training',
      excerpt: 'New partnership agreement expands clinical training opportunities for our medical students.',
      image: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2025-01-15',
      author: 'Dr. Sarah Johnson',
      category: 'Partnerships'
    },
    {
      id: 2,
      title: 'Research Breakthrough in Malaria Treatment Shows Promise',
      excerpt: 'QMC researchers make significant advancement in developing more effective malaria treatments.',
      image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2025-01-12',
      author: 'Prof. Michael Chen',
      category: 'Research'
    },
    {
      id: 3,
      title: 'New State-of-the-Art Laboratory Facility Opens',
      excerpt: 'QMC unveils cutting-edge laboratory facilities to enhance student learning and research capabilities.',
      image: 'https://images.pexels.com/photos/8513563/pexels-photo-8513563.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2025-01-08',
      author: 'Admin',
      category: 'Facilities'
    }
  ]

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
              Latest News & Updates
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay informed about the latest developments, research breakthroughs, 
              and achievements at Queen's Medical Centre.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {news.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${article.id}`}>
                    {article.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  <Link 
                    href={`/blog/${article.id}`}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button asChild size="lg">
            <Link href="/blog">
              View All News & Updates <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}