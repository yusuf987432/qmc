
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Queen's Medical Centre</h3>
            <p className="text-gray-300 mb-4">
              Excellence in healthcare education and professional development 
              in partnership with the University of Nottingham.
            </p>
            <p className="text-gray-400 text-sm">
              Wuse, Abuja, Nigeria
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Study With Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/undergraduate" className="hover:text-white transition-colors">Undergraduate</Link></li>
              <li><Link href="/postgraduate" className="hover:text-white transition-colors">Postgraduate</Link></li>
              <li><Link href="/international" className="hover:text-white transition-colors">International Students</Link></li>
              <li><Link href="/apprenticeships" className="hover:text-white transition-colors">Degree Apprenticeships</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Research</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/research/impact" className="hover:text-white transition-colors">Research Impact</Link></li>
              <li><Link href="/research/innovation" className="hover:text-white transition-colors">Innovation</Link></li>
              <li><Link href="/research/partnerships" className="hover:text-white transition-colors">Partnerships</Link></li>
              <li><Link href="/research/sdgs" className="hover:text-white transition-colors">SDGs</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/contact" className="hover:text-white transition-colors">Get in Touch</Link></li>
              <li><Link href="/jobs" className="hover:text-white transition-colors">Jobs</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/media" className="hover:text-white transition-colors">Media Inquiries</Link></li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Queen's Medical Centre, Wuse Abuja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
