
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { 
  Menu, 
  X, 
  ChevronDown, 
  User, 
  LogOut, 
  Settings,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession()

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '/about',
      dropdown: [
        { name: 'Our History', href: '/about#history' },
        { name: 'Mission & Vision', href: '/about#mission' },
        { name: 'Leadership', href: '/about#leadership' },
        { name: 'Partnerships', href: '/about#partnerships' }
      ]
    },
    { 
      name: 'Study', 
      href: '/study',
      dropdown: [
        { name: 'Undergraduate', href: '/study/undergraduate' },
        { name: 'Postgraduate', href: '/study/postgraduate' },
        { name: 'Professional Development', href: '/study/professional' },
        { name: 'Distance Learning', href: '/study/distance' }
      ]
    },
    { name: 'Research', href: '/research' },
    { name: 'Alumni', href: '/alumni' },
    { name: 'Contact', href: '/contact' }
  ]

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' })
  }

  return (
    <>
      {/* Enhanced Top Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-3 px-4 text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 relative z-10">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+234 (0) 123 456 7890</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@qmc.edu.ng</span>
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Wuse, Abuja</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Mon-Fri: 8AM-6PM</span>
            </div>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-1 text-xs">Accredited</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="text-white font-bold text-lg">QMC</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">•</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">Queen's Medical Centre</h1>
                <p className="text-sm text-gray-600">University of Nottingham Partner</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="ghost" 
                          className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        {item.dropdown.map((subItem) => (
                          <DropdownMenuItem key={subItem.name} asChild>
                            <Link href={subItem.href} className="w-full">
                              {subItem.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* User Menu & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {session ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-2">
                      <User className="w-5 h-5" />
                      <span className="hidden sm:inline">{session.user?.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem asChild>
                      <Link href="/admin" className="flex items-center space-x-2">
                        <Settings className="w-4 h-4" />
                        <span>Admin Dashboard</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut} className="flex items-center space-x-2">
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button asChild variant="outline" className="hidden sm:inline-flex">
                  <Link href="/admin/login">Admin Login</Link>
                </Button>
              )}

              {/* Mobile Menu Toggle */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-6 mt-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">QMC</span>
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-gray-900">QMC</h2>
                        <p className="text-sm text-gray-600">Excellence in Healthcare</p>
                      </div>
                    </div>
                    
                    <nav className="flex flex-col space-y-4">
                      {navItems.map((item) => (
                        <div key={item.name}>
                          <Link
                            href={item.href}
                            className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                          {item.dropdown && (
                            <div className="ml-4 mt-2 space-y-2">
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </nav>

                    {!session && (
                      <Button asChild className="w-full">
                        <Link href="/admin/login" onClick={() => setIsOpen(false)}>
                          Admin Login
                        </Link>
                      </Button>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
