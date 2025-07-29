"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Globe, Play, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-blue-300/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute bottom-32 left-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Institution Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-blue-800/30 backdrop-blur-sm border border-blue-400/20 rounded-full text-blue-200 text-sm font-medium mb-6"
          >
            <Award className="w-4 h-4 mr-2" />
            In Partnership with University of Nottingham (UK)
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block"
            >
              Queen&apos;s Medical
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block bg-gradient-to-r from-blue-200 to-blue-100 bg-clip-text text-transparent"
            >
              Centre
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Advancing healthcare education and professional development in Nigeria through 
            world-class training programs and international partnerships
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/study">
                Explore Programs <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <div className="flex items-center gap-4">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 px-8 py-4 text-lg font-semibold"
              >
                <Link href="/about">Learn More</Link>
              </Button>
              
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 group"
                onClick={() => setIsVideoPlaying(true)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Play className="w-5 h-5 ml-1" />
                  </div>
                  <span className="text-lg">Watch Video</span>
                </div>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="text-center group cursor-pointer"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400/20 to-blue-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-400/30 group-hover:to-blue-600/30 transition-all duration-300 border border-blue-400/20">
                <Award className="w-10 h-10 text-blue-200 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                World-Class Education
              </h3>
              <p className="text-blue-200 text-base leading-relaxed group-hover:text-blue-100 transition-colors">
                Internationally recognized programs in partnership with
                University of Nottingham
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="text-center group cursor-pointer"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-400/20 to-green-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-green-400/30 group-hover:to-green-600/30 transition-all duration-300 border border-green-400/20">
                <Users className="w-10 h-10 text-green-200 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                Expert Faculty
              </h3>
              <p className="text-blue-200 text-base leading-relaxed group-hover:text-blue-100 transition-colors">
                Learn from leading healthcare professionals and academic experts
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="text-center group cursor-pointer"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400/20 to-purple-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-purple-400/30 group-hover:to-purple-600/30 transition-all duration-300 border border-purple-400/20">
                <Globe className="w-10 h-10 text-purple-200 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                Global Impact
              </h3>
              <p className="text-blue-200 text-base leading-relaxed group-hover:text-blue-100 transition-colors">
                Contributing to healthcare excellence across Nigeria and beyond
              </p>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-blue-200"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white z-10 transition-colors"
            >
              ×
            </button>
            <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Video content would be embedded here</p>
                <p className="text-sm opacity-75 mt-2">Integration with YouTube, Vimeo, or custom video player</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
