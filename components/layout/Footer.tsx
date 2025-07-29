'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">QMC</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Queen's Medical Centre</h3>
                <p className="text-sm text-gray-400">Wuse, Abuja</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Independent training institution in healthcare, medical, and professional development. 
              Partnered with University of Nottingham (UK).
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/study" className="text-gray-400 hover:text-white transition-colors">Study With Us</Link></li>
              <li><Link href="/research" className="text-gray-400 hover:text-white transition-colors">Research</Link></li>
              <li><Link href="/jobs" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/alumni" className="text-gray-400 hover:text-white transition-colors">Alumni</Link></li>
            </ul>
          </div>

          {/* Academic */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Academic</h4>
            <ul className="space-y-2">
              <li><Link href="/study/undergraduate" className="text-gray-400 hover:text-white transition-colors">Undergraduate</Link></li>
              <li><Link href="/study/postgraduate" className="text-gray-400 hover:text-white transition-colors">Postgraduate</Link></li>
              <li><Link href="/study/international" className="text-gray-400 hover:text-white transition-colors">International Students</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">News & Blog</Link></li>
              <li><Link href="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Wuse District</p>
                  <p className="text-gray-400 text-sm">Abuja, Nigeria</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-400" />
                <p className="text-gray-400 text-sm">+234 (0) 123 456 7890</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <p className="text-gray-400 text-sm">info@qmc.edu.ng</p>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-blue-400" />
                <p className="text-gray-400 text-sm">www.qmc.edu.ng</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Queen's Medical Centre. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <p className="text-gray-400 text-sm">
                In partnership with University of Nottingham (UK)
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}