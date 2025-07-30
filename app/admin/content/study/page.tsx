
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toast } from 'sonner'
import { Save, Plus, Trash2 } from 'lucide-react'

interface StudyContent {
  undergraduate: {
    title: string
    content: string
    programs: { name: string; duration: string; description: string; requirements: string[] }[]
  }
  postgraduate: {
    title: string
    content: string
    programs: { name: string; duration: string; description: string; requirements: string[] }[]
  }
  professional: {
    title: string
    content: string
    courses: { name: string; duration: string; description: string; certification: string }[]
  }
  distance: {
    title: string
    content: string
    features: { title: string; description: string }[]
    programs: { name: string; mode: string; description: string }[]
  }
}

export default function StudyContentPage() {
  const [content, setContent] = useState<StudyContent>({
    undergraduate: { title: '', content: '', programs: [] },
    postgraduate: { title: '', content: '', programs: [] },
    professional: { title: '', content: '', courses: [] },
    distance: { title: '', content: '', features: [], programs: [] }
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchContent()
  }, [])

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/content?section=study-with-us')
      if (response.ok) {
        const data = await response.json()
        if (data.data) {
          setContent(data.data)
        }
      }
    } catch (error) {
      console.error('Error fetching content:', error)
      toast.error('Failed to load content')
    } finally {
      setLoading(false)
    }
  }

  const saveContent = async () => {
    setSaving(true)
    try {
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          section: 'study-with-us',
          data: content
        }),
      })

      if (response.ok) {
        toast.success('Content saved successfully')
      } else {
        throw new Error('Failed to save content')
      }
    } catch (error) {
      console.error('Error saving content:', error)
      toast.error('Failed to save content')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Study With Us Content</h1>
          <p className="text-gray-600">Manage all Study With Us section content</p>
        </div>
        <Button onClick={saveContent} disabled={saving} className="flex items-center space-x-2">
          <Save className="w-4 h-4" />
          <span>{saving ? 'Saving...' : 'Save Changes'}</span>
        </Button>
      </div>

      <Tabs defaultValue="undergraduate" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
          <TabsTrigger value="postgraduate">Postgraduate</TabsTrigger>
          <TabsTrigger value="professional">Professional</TabsTrigger>
          <TabsTrigger value="distance">Distance Learning</TabsTrigger>
        </TabsList>

        <TabsContent value="undergraduate">
          <Card>
            <CardHeader>
              <CardTitle>Undergraduate Programs</CardTitle>
              <CardDescription>Manage undergraduate program information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Section Title</Label>
                <Input
                  value={content.undergraduate.title}
                  onChange={(e) => setContent(prev => ({
                    ...prev,
                    undergraduate: { ...prev.undergraduate, title: e.target.value }
                  }))}
                  placeholder="Undergraduate Programs"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Content</Label>
                <Textarea
                  value={content.undergraduate.content}
                  onChange={(e) => setContent(prev => ({
                    ...prev,
                    undergraduate: { ...prev.undergraduate, content: e.target.value }
                  }))}
                  placeholder="Describe undergraduate programs..."
                  rows={5}
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label>Programs</Label>
                  <Button 
                    type="button" 
                    onClick={() => setContent(prev => ({
                      ...prev,
                      undergraduate: {
                        ...prev.undergraduate,
                        programs: [...prev.undergraduate.programs, { name: '', duration: '', description: '', requirements: [] }]
                      }
                    }))}
                    size="sm"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Program
                  </Button>
                </div>
                
                {content.undergraduate.programs.map((program, index) => (
                  <Card key={index} className="p-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <Label>Program {index + 1}</Label>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => setContent(prev => ({
                            ...prev,
                            undergraduate: {
                              ...prev.undergraduate,
                              programs: prev.undergraduate.programs.filter((_, i) => i !== index)
                            }
                          }))}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <Label>Program Name</Label>
                          <Input
                            value={program.name}
                            onChange={(e) => {
                              const newPrograms = [...content.undergraduate.programs]
                              newPrograms[index].name = e.target.value
                              setContent(prev => ({
                                ...prev,
                                undergraduate: { ...prev.undergraduate, programs: newPrograms }
                              }))
                            }}
                            placeholder="Bachelor of Medicine"
                          />
                        </div>
                        <div>
                          <Label>Duration</Label>
                          <Input
                            value={program.duration}
                            onChange={(e) => {
                              const newPrograms = [...content.undergraduate.programs]
                              newPrograms[index].duration = e.target.value
                              setContent(prev => ({
                                ...prev,
                                undergraduate: { ...prev.undergraduate, programs: newPrograms }
                              }))
                            }}
                            placeholder="6 years"
                          />
                        </div>
                      </div>
                      <div>
                        <Label>Description</Label>
                        <Textarea
                          value={program.description}
                          onChange={(e) => {
                            const newPrograms = [...content.undergraduate.programs]
                            newPrograms[index].description = e.target.value
                            setContent(prev => ({
                              ...prev,
                              undergraduate: { ...prev.undergraduate, programs: newPrograms }
                            }))
                          }}
                          placeholder="Program description..."
                          rows={3}
                        />
                      </div>
                      <div>
                        <Label>Requirements (comma-separated)</Label>
                        <Input
                          value={program.requirements.join(', ')}
                          onChange={(e) => {
                            const newPrograms = [...content.undergraduate.programs]
                            newPrograms[index].requirements = e.target.value.split(', ').filter(req => req.trim())
                            setContent(prev => ({
                              ...prev,
                              undergraduate: { ...prev.undergraduate, programs: newPrograms }
                            }))
                          }}
                          placeholder="High School Diploma, Science Background, English Proficiency"
                        />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Similar structure for other tabs... */}
        <TabsContent value="postgraduate">
          <Card>
            <CardHeader>
              <CardTitle>Postgraduate Programs</CardTitle>
              <CardDescription>Manage postgraduate program information</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Postgraduate programs content management - similar structure to undergraduate</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="professional">
          <Card>
            <CardHeader>
              <CardTitle>Professional Development</CardTitle>
              <CardDescription>Manage professional development courses</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Professional development content management</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="distance">
          <Card>
            <CardHeader>
              <CardTitle>Distance Learning</CardTitle>
              <CardDescription>Manage distance learning programs and features</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Distance learning content management</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
