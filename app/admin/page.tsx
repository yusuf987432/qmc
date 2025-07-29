'use client'

import { useSession } from 'next-auth/react'
import AdminDashboard from '@/components/admin/AdminDashboard'

export default function AdminPage() {
  const { data: session } = useSession()

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome back, {session?.user?.name || 'Admin'}</p>
      </div>
      <AdminDashboard />
    </div>
  )
}