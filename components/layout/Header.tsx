
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Search,
  User,
  Globe,
  BookOpen,
  Users,
  Briefcase,
  Calendar,
  GraduationCap
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

const navigation = [
  {
    name: 'About Us',
    href: '/about',
    icon: Users,
    submenu: [
      { name: 'History', href: '/about/history' },
      { name: 'Academic Structure', href: '/about/structure' },
      { name: 'Global Impact', href: '/about/impact' },
      { name: 'Facts & Figures', href: '/about/facts' },
    ]
  },
  {
    name: 'Study With Us',
    href: '/study',
    icon: GraduationCap,
    submenu: [
      { name: 'Undergraduate', href: '/study/undergraduate' },
      { name: 'Postgraduate', href: '/study/postgraduate' },
      { name: 'International Students', href: '/study/international' },
      { name: 'Degree Apprenticeships', href: '/study/apprenticeships' },
      { name: 'Fees & Funding', href: '/study/fees' },
    ]
  },
  {
    name: 'Research',
    href: '/research',
    icon: BookOpen,
    submenu: [
      { name: 'Research Impact', href: '/research/impact' },
      { name: 'Innovation', href: '/research/innovation' },
      { name: 'Partnerships', href: '/research/partnerships' },
      { name: 'SDGs', href: '/research/sdgs' },
    ]
  },
  {
    name: 'Jobs',
    href: '/jobs',
    icon: Briefcase,
  },
  {
    name: 'Events',
    href: '/events',
    icon: Calendar,
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: Phone,
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      {/* Enhanced Top Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-3 px-4 text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 relative z-10">
          <div className="flex flex-wrap items-center justify-center md:justify-start space-x-6 text-xs md:text-sm">
            <motion.div 
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-4 h-4" />
              <span>+234 (0) 123 456 7890</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-4 h-4" />
              <span>info@qmc.edu.ng</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-4 h-4" />
              <span>Wuse, Abuja, Nigeria</span>
            </motion.div>
          </div>
          <div className="flex items-center space-x-4">
            <motion.div 
              className="flex items-center space-x-2 text-xs md:text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Clock className="w-4 h-4" />
              <span>Mon-Fri: 8:00 AM - 5:00 PM</span>
            </motion.div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-white hover:text-blue-200 hover:bg-white/10 p-2">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-blue-200 hover:bg-white/10 p-2">
                <User className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
            : 'bg-white shadow-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/" className="flex items-center space-x-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Globe className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Queen's Medical Centre
                  </h1>
                  <p className="text-sm text-gray-600 font-medium">Excellence in Healthcare Education</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.submenu ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="ghost" 
                          className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                          <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent 
                        className="w-56 bg-white/95 backdrop-blur-md border border-gray-200/50 shadow-xl rounded-xl p-2"
                        align="start"
                      >
                        {item.submenu.map((subItem, index) => (
                          <DropdownMenuItem key={subItem.name} asChild>
                            <Link 
                              href={subItem.href}
                              className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 cursor-pointer"
                            >
                              {subItem.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link href={item.href}>
                      <Button 
                        variant="ghost" 
                        className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </Button>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block"
              >
                <Button 
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                >
                  <Link href="/apply">Apply Now</Link>
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                onClick={toggleMenu}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                onClick={toggleMenu}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 lg:hidden shadow-2xl"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Menu Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h2 className="font-bold text-gray-900">QMC</h2>
                        <p className="text-xs text-gray-600">Menu</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleMenu}
                      className="p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Mobile Menu Items */}
                  <div className="flex-1 overflow-y-auto py-6">
                    <nav className="px-6 space-y-2">
                      {navigation.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {item.submenu ? (
                            <div className="space-y-2">
                              <button
                                onClick={() => setActiveDropdown(
                                  activeDropdown === item.name ? null : item.name
                                )}
                                className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 font-medium"
                              >
                                <div className="flex items-center space-x-3">
                                  <item.icon className="w-5 h-5" />
                                  <span>{item.name}</span>
                                </div>
                                <motion.div
                                  animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <ChevronDown className="w-4 h-4" />
                                </motion.div>
                              </button>
                              <AnimatePresence>
                                {activeDropdown === item.name && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="ml-8 space-y-1 overflow-hidden"
                                  >
                                    {item.submenu.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        onClick={toggleMenu}
                                        className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={toggleMenu}
                              className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 font-medium"
                            >
                              <item.icon className="w-5 h-5" />
                              <span>{item.name}</span>
                            </Link>
                          )}
                        </motion.div>
                      ))}
                    </nav>
                  </div>

                  {/* Mobile Menu Footer */}
                  <div className="p-6 border-t border-gray-200 space-y-4">
                    <Button 
                      asChild
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl shadow-lg font-semibold"
                      onClick={toggleMenu}
                    >
                      <Link href="/apply">Apply Now</Link>
                    </Button>
                    <div className="text-center text-sm text-gray-600">
                      <p>Need help? Call us at</p>
                      <p className="font-semibold text-blue-600">+234 (0) 123 456 7890</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
