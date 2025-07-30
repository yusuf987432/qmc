
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

export default function ContactContentPage() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    heroTitle: 'Contact Us',
    heroSubtitle: 'Get in touch with us for admissions and inquiries',
    address: 'Queen\'s Medical Centre, Wuse District, Abuja',
    phone: '+234 (0) 123 456 7890',
    email: 'info@qmc.edu.ng',
    officeHours: 'Monday - Friday: 8:00 AM - 5:00 PM',
    admissionsEmail: 'admissions@qmc.edu.ng',
    researchEmail: 'research@qmc.edu.ng'
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSave = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          section: 'contact',
          data: formData
        })
      })

      if (response.ok) {
        toast.success('Contact content updated successfully!')
      } else {
        throw new Error('Failed to update content')
      }
    } catch (error) {
      toast.error('Failed to update contact content')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Contact Information</h1>
        <Button onClick={handleSave} disabled={loading}>
          {loading ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Hero Section</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="heroTitle">Page Title</Label>
              <Input
                id="heroTitle"
                value={formData.heroTitle}
                onChange={(e) => handleInputChange('heroTitle', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="heroSubtitle">Subtitle</Label>
              <Textarea
                id="heroSubtitle"
                value={formData.heroSubtitle}
                onChange={(e) => handleInputChange('heroSubtitle', e.target.value)}
                rows={2}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="address">Address</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                rows={3}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="email">General Email</Label>
                <Input
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="officeHours">Office Hours</Label>
              <Input
                id="officeHours"
                value={formData.officeHours}
                onChange={(e) => handleInputChange('officeHours', e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Department Emails</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="admissionsEmail">Admissions Email</Label>
              <Input
                id="admissionsEmail"
                value={formData.admissionsEmail}
                onChange={(e) => handleInputChange('admissionsEmail', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="researchEmail">Research Email</Label>
              <Input
                id="researchEmail"
                value={formData.researchEmail}
                onChange={(e) => handleInputChange('researchEmail', e.target.value)}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
