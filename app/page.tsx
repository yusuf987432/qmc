'use client'

import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import StudySection from '@/components/home/StudySection'
import ResearchSection from '@/components/home/ResearchSection'
import NewsSection from '@/components/home/NewsSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <StudySection />
        <ResearchSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  )
}