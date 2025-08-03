"use client"

import React from "react"

import { useEffect, useRef, useCallback } from "react"
import {
  Code,
  Database,
  Server,
  Globe,
  GitBranch,
  Terminal,
  Layers,
  Zap,
  Shield,
  Cloud,
  Settings,
  Wifi,
  Palette,
} from "lucide-react"

const skillsRow1 = [
  { name: "Next.js", icon: Code, color: "text-black dark:text-white", bgColor: "bg-black dark:bg-white" },
  { name: "React.js", icon: Code, color: "text-blue-500", bgColor: "bg-blue-500" },
  { name: "Tailwind CSS", icon: Palette, color: "text-cyan-500", bgColor: "bg-cyan-500" },
  { name: "Node.js", icon: Server, color: "text-green-600", bgColor: "bg-green-600" },
  { name: "Express.js", icon: Server, color: "text-gray-600", bgColor: "bg-gray-600" },
  { name: "MongoDB", icon: Database, color: "text-green-500", bgColor: "bg-green-500" },
  { name: "Mongoose", icon: Database, color: "text-red-600", bgColor: "bg-red-600" },
  { name: "Python", icon: Terminal, color: "text-yellow-500", bgColor: "bg-yellow-500" },
  { name: "Flask", icon: Server, color: "text-blue-600", bgColor: "bg-blue-600" },
]

const skillsRow2 = [
  { name: "FastAPI", icon: Zap, color: "text-emerald-500", bgColor: "bg-emerald-500" },
  { name: "JWT Auth", icon: Shield, color: "text-purple-600", bgColor: "bg-purple-600" },
  { name: "ShadCN UI", icon: Layers, color: "text-slate-700", bgColor: "bg-slate-700" },
  { name: "Git", icon: GitBranch, color: "text-orange-600", bgColor: "bg-orange-600" },
  { name: "GitHub", icon: GitBranch, color: "text-gray-800", bgColor: "bg-gray-800" },
  { name: "Postman", icon: Globe, color: "text-orange-500", bgColor: "bg-orange-500" },
  { name: "Thunder Client", icon: Wifi, color: "text-indigo-600", bgColor: "bg-indigo-600" },
  { name: "MongoDB Atlas", icon: Cloud, color: "text-green-400", bgColor: "bg-green-400" },
  { name: "REST APIs", icon: Settings, color: "text-blue-700", bgColor: "bg-blue-700" },
]

export default function Skills() {
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)
  const styleRef = useRef<HTMLStyleElement | null>(null)

  const setupInfiniteScroll = useCallback(() => {
    const row1 = row1Ref.current
    const row2 = row2Ref.current

    if (!row1 || !row2) return

    // Create multiple copies for smoother infinite scroll
    const row1Content = row1.innerHTML
    const row2Content = row2.innerHTML
    row1.innerHTML = row1Content + row1Content + row1Content
    row2.innerHTML = row2Content + row2Content + row2Content

    // Add CSS keyframes if not already added
    if (!styleRef.current && !document.querySelector("#skills-animations")) {
      const style = document.createElement("style")
      style.id = "skills-animations"
      style.textContent = `
        @keyframes infinite-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes infinite-scroll-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .animate-infinite-scroll-left {
          animation: infinite-scroll-left 40s linear infinite;
        }
        .animate-infinite-scroll-right {
          animation: infinite-scroll-right 35s linear infinite;
        }
        .animate-infinite-scroll-left:hover,
        .animate-infinite-scroll-right:hover {
          animation-play-state: paused;
        }
      `
      document.head.appendChild(style)
      styleRef.current = style
    }

    // Apply animations with will-change for better performance
    row1.classList.add("animate-infinite-scroll-left", "will-change-transform")
    row2.classList.add("animate-infinite-scroll-right", "will-change-transform")

    return () => {
      // Cleanup function
      if (styleRef.current && document.head.contains(styleRef.current)) {
        try {
          document.head.removeChild(styleRef.current)
          styleRef.current = null
        } catch (error) {
          // Silently handle the error if element is already removed
          console.warn("Style element already removed:", error)
        }
      }
    }
  }, [])

  useEffect(() => {
    const cleanup = setupInfiniteScroll()

    return () => {
      if (cleanup) {
        cleanup()
      }
    }
  }, [setupInfiniteScroll])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (styleRef.current && document.head.contains(styleRef.current)) {
        try {
          document.head.removeChild(styleRef.current)
        } catch (error) {
          // Silently handle the error
        }
      }
    }
  }, [])

  const SkillIcon = React.memo(({ skill }: { skill: (typeof skillsRow1)[0] }) => {
    const Icon = skill.icon
    return (
      <div className="flex-shrink-0 mx-6 group relative">
        <div className="relative">
          <div
            className={`w-20 h-20 rounded-2xl ${skill.bgColor} flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:rotate-3 cursor-pointer`}
          >
            <Icon className="w-10 h-10 text-white drop-shadow-lg" />
          </div>

          {/* Tooltip - Fixed positioning and z-index */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
            <div className="bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl border min-w-max">
              {skill.name}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-foreground rotate-45"></div>
            </div>
          </div>

          {/* Glow effect - optimized */}
          <div
            className={`absolute inset-0 rounded-2xl ${skill.bgColor} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
          ></div>
        </div>
      </div>
    )
  })

  SkillIcon.displayName = "SkillIcon"

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-muted/30 to-muted/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Mastering modern technologies to build scalable, efficient, and innovative solutions
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
        </div>

        <div className="space-y-12">
          {/* First row - Left to Right */}
          <div className="relative overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none"></div>

            <div ref={row1Ref} className="flex items-center py-4 pb-20 overflow-visible">
              {skillsRow1.map((skill, index) => (
                <SkillIcon key={`row1-original-${index}`} skill={skill} />
              ))}
            </div>
          </div>

          {/* Second row - Right to Left */}
          <div className="relative overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none"></div>

            <div ref={row2Ref} className="flex items-center py-4 pb-20 overflow-visible">
              {skillsRow2.map((skill, index) => (
                <SkillIcon key={`row2-original-${index}`} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Skills count */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-2xl font-bold text-primary">{skillsRow1.length + skillsRow2.length}</span>
            <span className="text-muted-foreground">Technologies Mastered</span>
          </div>
        </div>
      </div>
    </section>
  )
}
