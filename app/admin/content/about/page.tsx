
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

interface AboutContent {
  history: {
    title: string
    content: string
    foundingYear: string
    milestones: { year: string; event: string }[]
  }
  structure: {
    title: string
    content: string
    departments: { name: string; description: string; head: string }[]
  }
  impact: {
    title: string
    content: string
    stats: { label: string; value: string; description: string }[]
  }
  facts: {
    title: string
    content: string
    figures: { category: string; value: string; description: string }[]
  }
}

export default function AboutContentPage() {
  const [content, setContent] = useState<AboutContent>({
    history: {
      title: '',
      content: '',
      foundingYear: '',
      milestones: []
    },
    structure: {
      title: '',
      content: '',
      departments: []
    },
    impact: {
      title: '',
      content: '',
      stats: []
    },
    facts: {
      title: '',
      content: '',
      figures: []
    }
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchContent()
  }, [])

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/content?section=about-us')
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
          section: 'about-us',
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

  const addMilestone = () => {
    setContent(prev => ({
      ...prev,
      history: {
        ...prev.history,
        milestones: [...prev.history.milestones, { year: '', event: '' }]
      }
    }))
  }

  const removeMilestone = (index: number) => {
    setContent(prev => ({
      ...prev,
      history: {
        ...prev.history,
        milestones: prev.history.milestones.filter((_, i) => i !== index)
      }
    }))
  }

  const addDepartment = () => {
    setContent(prev => ({
      ...prev,
      structure: {
        ...prev.structure,
        departments: [...prev.structure.departments, { name: '', description: '', head: '' }]
      }
    }))
  }

  const removeDepartment = (index: number) => {
    setContent(prev => ({
      ...prev,
      structure: {
        ...prev.structure,
        departments: prev.structure.departments.filter((_, i) => i !== index)
      }
    }))
  }

  const addStat = () => {
    setContent(prev => ({
      ...prev,
      impact: {
        ...prev.impact,
        stats: [...prev.impact.stats, { label: '', value: '', description: '' }]
      }
    }))
  }

  const removeStat = (index: number) => {
    setContent(prev => ({
      ...prev,
      impact: {
        ...prev.impact,
        stats: prev.impact.stats.filter((_, i) => i !== index)
      }
    }))
  }

  const addFigure = () => {
    setContent(prev => ({
      ...prev,
      facts: {
        ...prev.facts,
        figures: [...prev.facts.figures, { category: '', value: '', description: '' }]
      }
    }))
  }

  const removeFigure = (index: number) => {
    setContent(prev => ({
      ...prev,
      facts: {
        ...prev.facts,
        figures: prev.facts.figures.filter((_, i) => i !== index)
      }
    }))
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
          <h1 className="text-3xl font-bold text-gray-900">About Us Content</h1>
          <p className="text-gray-600">Manage all About Us section content</p>
        </div>
        <Button onClick={saveContent} disabled={saving} className="flex items-center space-x-2">
          <Save className="w-4 h-4" />
          <span>{saving ? 'Saving...' : 'Save Changes'}</span>
        </Button>
      </div>

      <Tabs defaultValue="history" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="structure">Structure</TabsTrigger>
          <TabsTrigger value="impact">Global Impact</TabsTrigger>
          <TabsTrigger value="facts">Facts & Figures</TabsTrigger>
        </TabsList>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>History Section</CardTitle>
              <CardDescription>Manage the history and milestones content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="history-title">Section Title</Label>
                <Input
                  id="history-title"
                  value={content.history.title}
                  onChange={(e) => setContent(prev => ({
                    ...prev,
                    history: { ...prev.history, title: e.target.value }
                  }))}
                  placeholder="Our History"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="history-content">Content</Label>
                <Textarea
                  id="history-content"
                  value={content.history.content}
                  onChange={(e) => setContent(prev => ({
                    ...prev,
                    history: { ...prev.history, content: e.target.value }
                  }))}
                  placeholder="Write about the history..."
                  rows={5}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="founding-year">Founding Year</Label>
                <Input
                  id="founding-year"
                  value={content.history.foundingYear}
                  onChange={(e) => setContent(prev => ({
                    ...prev,
                    history: { ...prev.history, foundingYear: e.target.value }
                  }))}
                  placeholder="1999"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label>Milestones</Label>
                  <Button type="button" onClick={addMilestone} size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Milestone
                  </Button>
                </div>
                
                {content.history.milestones.map((milestone, index) => (
                  <div key={index} className="flex space-x-2 items-end">
                    <div className="flex-1">
                      <Label>Year</Label>
                      <Input
                        value={milestone.year}
                        onChange={(e) => {
                          const newMilestones = [...content.history.milestones]
                          newMilestones[index].year = e.target.value
                          setContent(prev => ({
                            ...prev,
                            history: { ...prev.history, milestones: newMilestones }
                          }))
                        }}
                        placeholder="2020"
                      />
                    </div>
                    <div className="flex-2">
                      <Label>Event</Label>
                      <Input
                        value={milestone.event}
                        onChange={(e) => {
                          const newMilestones = [...content.history.milestones]
                          newMilestones[index].event = e.target.value
                          setContent(prev => ({
                            ...prev,
                            history: { ...prev.history, milestones: newMilestones }
                          }))
                        }}
                        placeholder="Major achievement"
                      />
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeMilestone(index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="structure">
          <Card>
            <CardHeader>
              <CardTitle>Academic Structure</CardTitle>
              <CardDescription>Manage departments and organizational structure</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="structure-title">Section Title</Label>
                <Input
                  id="structure-title"
                  value={content.structure.title}
                  onChange={(e) => setContent(prev => ({
                    ...prev,
                    structure: { ...prev.structure, title: e.target.value }
                  }))}
                  placeholder="Academic Structure"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="structure-content">Content</Label>
                <Textarea
                  id="structure-content"
                  value={content.structure.content}
                  onChange={(e) => setContent(prev => ({
                    ...prev,
                    structure: { ...prev.structure, content: e.target.value }
                  }))}
                  placeholder="Describe the academic structure..."
                  rows={5}
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label>Departments</Label>
                  <Button type="button" onClick={addDepartment} size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Department
                  </Button>
                </div>
                
                {content.structure.departments.map((dept, index) => (
                  <Card key={index} className="p-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <Label>Department {index + 1}</Label>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeDepartment(index)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                          <Label>Name</Label>
                          <Input
                            value={dept.name}
                            onChange={(e) => {
                              const newDepts = [...content.structure.departments]
                              newDepts[index].name = e.target.value
                              setContent(prev => ({
                                ...prev,
                                structure: { ...prev.structure, departments: newDepts }
                              }))
                            }}
                            placeholder="Department name"
                          />
                        </div>
                        <div>
                          <Label>Head</Label>
                          <Input
                            value={dept.head}
                            onChange={(e) => {
                              const newDepts = [...content.structure.departments]
                              newDepts[index].head = e.target.value
                              setContent(prev => ({
                                ...prev,
                                structure: { ...prev.structure, departments: newDepts }
                              }))
                            }}
                            placeholder="Department head"
                          />
                        </div>
                        <div>
                          <Label>Description</Label>
                          <Input
                            value={dept.description}
                            onChange={(e) => {
                              const newDepts = [...content.structure.departments]
                              newDepts[index].description = e.target.value
                              setContent(prev => ({
                                ...prev,
                                structure: { ...prev.structure, departments: newDepts }
                              }))
                            }}
                            placeholder="Brief description"
                          />
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="impact">
          <Card>
            <CardHeader>
              <CardTitle>Global Impact</CardTitle>
              <CardDescription>Manage global impact statistics and achievements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="impact-title">Section Title</Label>
                <Input
                  id="impact-title"
                  value={content.impact.title}
                  onChange={(e) => setContent(prev => ({
                    ...prev,
                    impact: { ...prev.impact, title: e.target.value }
                  }))}
                  placeholder="Global Impact"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="impact-content">Content</Label>
                <Textarea
                  id="impact-content"
                  value={content.impact.content}
                  onChange={(e) => setContent(prev => ({
                    ...prev,
                    impact: { ...prev.impact, content: e.target.value }
                  }))}
                  placeholder="Describe the global impact..."
                  rows={5}
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label>Impact Statistics</Label>
                  <Button type="button" onClick={addStat} size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Statistic
                  </Button>
                </div>
                
                {content.impact.stats.map((stat, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
                    <div>
                      <Label>Label</Label>
                      <Input
                        value={stat.label}
                        onChange={(e) => {
                          const newStats = [...content.impact.stats]
                          newStats[index].label = e.target.value
                          setContent(prev => ({
                            ...prev,
                            impact: { ...prev.impact, stats: newStats }
                          }))
                        }}
                        placeholder="Students Graduated"
                      />
                    </div>
                    <div>
                      <Label>Value</Label>
                      <Input
                        value={stat.value}
                        onChange={(e) => {
                          const newStats = [...content.impact.stats]
                          newStats[index].value = e.target.value
                          setContent(prev => ({
                            ...prev,
                            impact: { ...prev.impact, stats: newStats }
                          }))
                        }}
                        placeholder="1000+"
                      />
                    </div>
                    <div>
                      <Label>Description</Label>
                      <Input
                        value={stat.description}
                        onChange={(e) => {
                          const newStats = [...content.impact.stats]
                          newStats[index].description = e.target.value
                          setContent(prev => ({
                            ...prev,
                            impact: { ...prev.impact, stats: newStats }
                          }))
                        }}
                        placeholder="Brief description"
                      />
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeStat(index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="facts">
          <Card>
            <CardHeader>
              <CardTitle>Facts & Figures</CardTitle>
              <CardDescription>Manage key facts and statistical figures</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="facts-title">Section Title</Label>
                <Input
                  id="facts-title"
                  value={content.facts.title}
                  onChange={(e) => setContent(prev => ({
                    ...prev,
                    facts: { ...prev.facts, title: e.target.value }
                  }))}
                  placeholder="Facts & Figures"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="facts-content">Content</Label>
                <Textarea
                  id="facts-content"
                  value={content.facts.content}
                  onChange={(e) => setContent(prev => ({
                    ...prev,
                    facts: { ...prev.facts, content: e.target.value }
                  }))}
                  placeholder="Introduce the facts and figures..."
                  rows={5}
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label>Key Figures</Label>
                  <Button type="button" onClick={addFigure} size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Figure
                  </Button>
                </div>
                
                {content.facts.figures.map((figure, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
                    <div>
                      <Label>Category</Label>
                      <Input
                        value={figure.category}
                        onChange={(e) => {
                          const newFigures = [...content.facts.figures]
                          newFigures[index].category = e.target.value
                          setContent(prev => ({
                            ...prev,
                            facts: { ...prev.facts, figures: newFigures }
                          }))
                        }}
                        placeholder="Research Projects"
                      />
                    </div>
                    <div>
                      <Label>Value</Label>
                      <Input
                        value={figure.value}
                        onChange={(e) => {
                          const newFigures = [...content.facts.figures]
                          newFigures[index].value = e.target.value
                          setContent(prev => ({
                            ...prev,
                            facts: { ...prev.facts, figures: newFigures }
                          }))
                        }}
                        placeholder="150+"
                      />
                    </div>
                    <div>
                      <Label>Description</Label>
                      <Input
                        value={figure.description}
                        onChange={(e) => {
                          const newFigures = [...content.facts.figures]
                          newFigures[index].description = e.target.value
                          setContent(prev => ({
                            ...prev,
                            facts: { ...prev.facts, figures: newFigures }
                          }))
                        }}
                        placeholder="Active research projects"
                      />
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeFigure(index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
