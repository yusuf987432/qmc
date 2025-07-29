'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { 
  LayoutDashboard, 
  FileText, 
  Briefcase, 
  Calendar, 
  Settings, 
  LogOut,
  Users,
  BookOpen,
  Globe,
  ChevronDown
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function AdminSidebar() {
  const pathname = usePathname()
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const navigation = [
    {
      name: 'Dashboard',
      href: '/admin',
      icon: LayoutDashboard,
    },
    {
      name: 'Content Management',
      icon: FileText,
      children: [
        { name: 'About Us', href: '/admin/content/about' },
        { name: 'Study With Us', href: '/admin/content/study' },
        { name: 'Research', href: '/admin/content/research' },
        { name: 'Alumni', href: '/admin/content/alumni' },
        { name: 'Contact', href: '/admin/content/contact' },
        { name: 'Facilities', href: '/admin/content/facilities' },
      ]
    },
    {
      name: 'Blog Posts',
      href: '/admin/blog',
      icon: BookOpen,
    },
    {
      name: 'Jobs',
      href: '/admin/jobs',
      icon: Briefcase,
    },
    {
      name: 'Events',
      href: '/admin/events',
      icon: Calendar,
    },
    {
      name: 'Users',
      href: '/admin/users',
      icon: Users,
    },
    {
      name: 'Settings',
      href: '/admin/settings',
      icon: Settings,
    },
  ]

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg">
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-center h-16 px-4 border-b">
          <Link href="/admin" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">QMC</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">Admin Panel</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            const isExpanded = expandedSections.includes(item.name)
            
            if (item.children) {
              return (
                <div key={item.name}>
                  <button
                    onClick={() => toggleSection(item.name)}
                    className={cn(
                      'w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors',
                      'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    )}
                  >
                    <div className="flex items-center">
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </div>
                    <ChevronDown className={cn(
                      'h-4 w-4 transition-transform',
                      isExpanded && 'transform rotate-180'
                    )} />
                  </button>
                  
                  {isExpanded && (
                    <div className="ml-8 mt-2 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={cn(
                            'block px-3 py-2 text-sm rounded-md transition-colors',
                            pathname === child.href
                              ? 'text-blue-600 bg-blue-50'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                          )}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                  isActive
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => signOut({ callbackUrl: '/' })}
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <LogOut className="mr-3 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  )
}