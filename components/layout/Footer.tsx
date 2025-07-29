'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Award } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Stay Connected with QMC
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Get the latest updates on programs, research breakthroughs, and healthcare innovations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
                >
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          {/* About */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">QMC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Queen's Medical Centre</h3>
                <p className="text-sm text-blue-300 font-medium">Wuse, Abuja</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Independent training institution in healthcare, medical, and professional development. 
              Partnered with University of Nottingham (UK).
            </p>
            
            {/* Partnership Badge */}
            <div className="inline-flex items-center px-3 py-2 bg-blue-900/30 border border-blue-700/30 rounded-lg text-blue-200 text-sm">
              <Award className="w-4 h-4 mr-2" />
              UK Partnership
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/study", label: "Study With Us" },
                { href: "/research", label: "Research" },
                { href: "/jobs", label: "Careers" },
                { href: "/alumni", label: "Alumni" }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Academic */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-6 text-white">Academic</h4>
            <ul className="space-y-3">
              {[
                { href: "/study/undergraduate", label: "Undergraduate" },
                { href: "/study/postgraduate", label: "Postgraduate" },
                { href: "/study/international", label: "International Students" },
                { href: "/blog", label: "News & Blog" },
                { href: "/events", label: "Events" }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-6 text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Wuse District</p>
                  <p className="text-gray-400 text-sm">Abuja, Nigeria</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-gray-300">+234 (0) 123 456 7890</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <p className="text-gray-300">info@qmc.edu.ng</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-orange-400" />
                </div>
                <p className="text-gray-300">www.qmc.edu.ng</p>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-8">
              <h5 className="text-lg font-semibold mb-4 text-white">Follow Us</h5>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: "#", color: "hover:bg-blue-600" },
                  { icon: Twitter, href: "#", color: "hover:bg-sky-500" },
                  { icon: Instagram, href: "#", color: "hover:bg-pink-600" },
                  { icon: Linkedin, href: "#", color: "hover:bg-blue-700" }
                ].map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 ${social.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            >
              <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Queen's Medical Centre. All rights reserved.
            </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
                <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
                <div className="flex items-center text-gray-400">
                  <Award className="w-4 h-4 mr-2" />
                  <span>In partnership with University of Nottingham (UK)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}