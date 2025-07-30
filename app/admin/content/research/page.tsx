
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import RichTextEditor from '@/components/admin/RichTextEditor'
import ImageUpload from '@/components/admin/ImageUpload'

export default function ResearchContentPage() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    heroTitle: 'Research Excellence',
    heroSubtitle: 'Advancing healthcare through cutting-edge research and innovation',
    researchAreas: '',
    recentPublications: '',
    featuredImage: ''
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
          section: 'research',
          data: formData
        })
      })

      if (response.ok) {
        toast.success('Research content updated successfully!')
      } else {
        throw new Error('Failed to update content')
      }
    } catch (error) {
      toast.error('Failed to update research content')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Research Content</h1>
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
                rows={3}
              />
            </div>
            <div>
              <Label>Featured Image</Label>
              <ImageUpload
                value={formData.featuredImage}
                onChange={(url) => handleInputChange('featuredImage', url)}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Research Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <RichTextEditor
              value={formData.researchAreas}
              onChange={(value) => handleInputChange('researchAreas', value)}
              placeholder="Describe the main research areas and focus..."
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Publications</CardTitle>
          </CardHeader>
          <CardContent>
            <RichTextEditor
              value={formData.recentPublications}
              onChange={(value) => handleInputChange('recentPublications', value)}
              placeholder="Add information about recent publications and achievements..."
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
