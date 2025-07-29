'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    {
      name: 'About Us',
      href: '/about',
      submenu: [
        { name: 'History', href: '/about/history' },
        { name: 'Academic Structure', href: '/about/structure' },
        { name: 'Global Impact', href: '/about/impact' },
      ]
    },
    {
      name: 'Study With Us',
      href: '/study',
      submenu: [
        { name: 'Undergraduate', href: '/study/undergraduate' },
        { name: 'Postgraduate', href: '/study/postgraduate' },
        { name: 'International Students', href: '/study/international' },
      ]
    },
    {
      name: 'Research',
      href: '/research'
    },
    {
      name: 'Jobs',
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

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+234 (0) 123 456 7890</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@qmc.edu.ng</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4 text-xs">
            <span>🇳🇬 Wuse, Abuja</span>
            <span>•</span>
            <span>🇬🇧 Partnership with University of Nottingham</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100' 
            : 'bg-white shadow-lg'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">QMC</span>
            </div>
            <div className="hidden sm:block">
              <motion.h1 
                className="text-xl font-bold text-gray-900 leading-tight"
                whileHover={{ scale: 1.02 }}
              >
                Queen's Medical Centre
              </motion.h1>
              <p className="text-sm text-blue-600 font-medium">Healthcare Excellence • Wuse, Abuja</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold flex items-center transition-all duration-200 hover:bg-blue-50 relative overflow-hidden group"
                >
                  <span className="relative z-10">{item.name}</span>
                  {item.name}
                  {item.submenu && <ChevronDown className="ml-1 w-4 h-4" />}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-200"
                    initial={false}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
                
                {item.submenu && (
                  <motion.div 
                    className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                  >
                    <div className="py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
            <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link href="/admin">Admin</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-blue-50"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t bg-white/95 backdrop-blur-md"
          >
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 font-semibold hover:bg-blue-50 rounded-lg mx-2 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg mx-2 transition-all duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Button asChild className="w-full mx-2 bg-gradient-to-r from-blue-600 to-blue-700">
                  <Link href="/admin" onClick={() => setIsOpen(false)}>Admin Panel</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      </motion.header>
    </>
  )
}