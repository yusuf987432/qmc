
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Globe, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    {
      name: 'About Us',
      href: '/about',
      submenu: [
        { name: 'Our Story', href: '/about/history', icon: '📖' },
        { name: 'Academic Excellence', href: '/about/structure', icon: '🎓' },
        { name: 'Global Partnership', href: '/about/impact', icon: '🌍' },
        { name: 'Leadership Team', href: '/about/team', icon: '👥' },
      ]
    },
    {
      name: 'Study With Us',
      href: '/study',
      submenu: [
        { name: 'Undergraduate Programs', href: '/study/undergraduate', icon: '🎯' },
        { name: 'Postgraduate Studies', href: '/study/postgraduate', icon: '🔬' },
        { name: 'International Students', href: '/study/international', icon: '✈️' },
        { name: 'Professional Development', href: '/study/professional', icon: '💼' },
      ]
    },
    {
      name: 'Research',
      href: '/research',
      highlight: true
    },
    {
      name: 'Careers',
      href: '/jobs'
    },
    {
      name: 'Alumni',
      href: '/alumni'
    },
    {
      name: 'Contact',
      href: '/contact'
    }
  ]

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name)
  }

  return (
    <>
      {/* Enhanced Top Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-3 px-4 text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 relative z-10">
          <div className="flex flex-wrap items-center justify-center md:justify-start space-x-6 text-xs md:text-sm">
            <motion.div 
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <Phone className="w-4 h-4 text-blue-300" />
              <span className="font-medium">+234 (0) 123 456 7890</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <Mail className="w-4 h-4 text-blue-300" />
              <span className="font-medium">info@qmc.edu.ng</span>
            </motion.div>
          </div>
          <div className="hidden lg:flex items-center space-x-4 text-xs">
            <div className="flex items-center space-x-2 bg-white/10 rounded-full px-3 py-1">
              <MapPin className="w-4 h-4 text-green-300" />
              <span>🇳🇬 Wuse, Abuja</span>
            </div>
            <div className="w-px h-4 bg-white/30"></div>
            <div className="flex items-center space-x-2 bg-white/10 rounded-full px-3 py-1">
              <Globe className="w-4 h-4 text-yellow-300" />
              <span>🇬🇧 University of Nottingham Partnership</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Header */}
      <motion.header 
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100/50' 
            : 'bg-white shadow-lg'
        }`}
        initial={false}
        animate={{ 
          backgroundColor: isScrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,1)',
          backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Enhanced Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div 
                className="relative w-14 h-14 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl flex items-center justify-center shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white font-bold text-xl">QMC</span>
                <motion.div
                  className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-2 h-2 text-white" />
                </motion.div>
              </motion.div>
              <div className="hidden sm:block">
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent leading-tight">
                    Queen's Medical Centre
                  </h1>
                  <p className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Healthcare Excellence • Innovation • Partnership
                  </p>
                </div>
              </div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`relative px-6 py-3 rounded-2xl text-sm font-semibold flex items-center transition-all duration-300 group overflow-hidden ${
                      item.highlight 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl hover:scale-105' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                    }`}
                  >
                    <span className="relative z-10 flex items-center">
                      {item.name}
                      {item.submenu && <ChevronDown className="ml-2 w-4 h-4 transition-transform group-hover:rotate-180" />}
                    </span>
                    {!item.highlight && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.02 }}
                      />
                    )}
                  </Link>
                  
                  {item.submenu && (
                    <motion.div 
                      className="absolute left-0 mt-3 w-80 bg-white rounded-3xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 border border-gray-100/50 backdrop-blur-xl"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      style={{ background: 'rgba(255, 255, 255, 0.95)' }}
                    >
                      <div className="p-6">
                        <div className="grid gap-3">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="group/item flex items-center p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 border border-transparent hover:border-blue-100"
                            >
                              <span className="text-2xl mr-4">{subitem.icon}</span>
                              <div>
                                <div className="font-semibold text-gray-800 group-hover/item:text-blue-600 transition-colors">
                                  {subitem.name}
                                </div>
                                <div className="text-xs text-gray-500 mt-1">
                                  Learn more about our {subitem.name.toLowerCase()}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="ml-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl px-6 py-3">
                  <Link href="/admin" className="flex items-center space-x-2">
                    <span>Admin Portal</span>
                    <Sparkles className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </nav>

            {/* Enhanced Mobile menu button */}
            <div className="lg:hidden">
              <motion.div
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(!isOpen)}
                  className="relative p-3 rounded-2xl hover:bg-blue-50 transition-all duration-300"
                >
                  <AnimatePresence mode="wait">
                    {isOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="w-6 h-6 text-gray-700" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="w-6 h-6 text-gray-700" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden border-t bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 backdrop-blur-xl"
              >
                <div className="py-6 px-2 space-y-3">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100/50 overflow-hidden">
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 ${
                              item.highlight
                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                                : 'text-gray-800 hover:text-blue-600'
                            }`}
                            onClick={() => !item.submenu && setIsOpen(false)}
                          >
                            <span className="flex items-center">
                              {item.name}
                              {item.highlight && <Sparkles className="ml-2 w-4 h-4" />}
                            </span>
                          </Link>
                          {item.submenu && (
                            <button
                              onClick={() => toggleSubmenu(item.name)}
                              className="px-4 py-4 text-gray-500 hover:text-blue-600 transition-colors"
                            >
                              <motion.div
                                animate={{ rotate: activeSubmenu === item.name ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown className="w-5 h-5" />
                              </motion.div>
                            </button>
                          )}
                        </div>
                        <AnimatePresence>
                          {item.submenu && activeSubmenu === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="border-t border-gray-100"
                            >
                              <div className="p-3 space-y-2 bg-gray-50/50">
                                {item.submenu.map((subitem, subIndex) => (
                                  <motion.div
                                    key={subitem.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: subIndex * 0.05, duration: 0.2 }}
                                  >
                                    <Link
                                      href={subitem.href}
                                      className="flex items-center p-3 rounded-xl bg-white/80 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md border border-transparent hover:border-blue-100"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      <span className="text-xl mr-3">{subitem.icon}</span>
                                      <div>
                                        <div className="font-medium text-gray-800 text-sm">
                                          {subitem.name}
                                        </div>
                                        <div className="text-xs text-gray-500 mt-0.5">
                                          Explore {subitem.name.toLowerCase()}
                                        </div>
                                      </div>
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navigation.length * 0.1, duration: 0.3 }}
                    className="pt-4"
                  >
                    <Button asChild className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 shadow-lg rounded-2xl py-4">
                      <Link href="/admin" onClick={() => setIsOpen(false)} className="flex items-center justify-center space-x-2">
                        <span className="font-semibold">Admin Portal</span>
                        <Sparkles className="w-4 h-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  )
}
