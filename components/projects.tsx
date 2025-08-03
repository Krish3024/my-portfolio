"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Star, GitBranch } from "lucide-react"
import bookhive from "@/public/images/Book-Hive.png"
import lisenceplate from "@/public/images/Lisence-Plate.png"
import fintel from "@/public/images/Fintel.png"
import hungerhelpers from "@/public/images/Hunger-Helpers.png"
import chatapp from "@/public/images/Chat-App.png"
import tomato from "@/public/images/Tomato.png"


const projects = [
  {
    id: 1,
    title: "BookHive",
    description:
      "A comprehensive digital library management system with features for book lending, returns, ebook access, and donation management. Built with modern web technologies.",
    image:
      bookhive.src,
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/Krish3024/libathon",
    live: "https://libathon.vercel.app/",
    stars: 15,
    forks: 8,
  },
  {
    id: 2,
    title: "License Plate Detection",
    description:
      "An AI-powered license plate detection system using computer vision and machine learning algorithms for automatic vehicle identification and tracking.",
    image: lisenceplate.src,
    technologies: ["Python", "OpenCV", "TensorFlow", "Flask"],
    github: "https://github.com/Krish3024/lisence-plate-app",
    live: "https://lisence-plate-app.vercel.app/",
    stars: 12,
    forks: 5,
  },
  {
    id: 3,
    title: "Fintel",
    description:
      "A financial intelligence platform providing market insights, portfolio tracking, and investment analytics with real-time data visualization.",
    image: fintel.src,
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    github: "https://github.com/Krish3024/fintel",
    live: "https://fintel-eight.vercel.app/",
    stars: 23,
    forks: 11,
  },
  {
    id: 4,
    title: "Hunger Helpers",
    description:
      "A food sharing platform connecting food donors with those in need, reducing food waste while helping communities through efficient food distribution.",
    image: hungerhelpers.src,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Krish3024/food-sharing-app",
    live: "https://food-sharing-app-three.vercel.app/",
    stars: 18,
    forks: 9,
  },
  {
    id: 5,
    title: "Chat App",
    description:
      "Real-time chat application with user authentication, message encryption, file sharing, and group chat functionality using Socket.io for instant messaging.",
    image: chatapp.src,
    technologies: ["React", "Socket.io", "JWT", "Node.js"],
    github: "https://github.com/Krish3024/ChatApp",
    live: "https://chat-app-smoky-mu.vercel.app/",
    stars: 31,
    forks: 14,
  },
  {
    id: 6,
    title: "Tomato",
    description:
      "A full-stack food delivery application with restaurant management, order tracking, payment integration, and real-time delivery updates.",
    image: tomato.src,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Krish3024/food-del",
    live: "https://food-del-frontend-i5u5.onrender.com/",
    stars: 27,
    forks: 12,
  },
]

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Simple intersection observer for fade effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Clean up any existing animations on mount
  useEffect(() => {
    const existingStyle = document.querySelector("#projects-animations")
    if (existingStyle) {
      existingStyle.remove()
    }
  }, [])

  const handleLiveClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault()
    e.stopPropagation()
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  const handleGithubClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault()
    e.stopPropagation()
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => (
    <div
      className={`flex-shrink-0 mx-4 group transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
      }}
    >
      <Card className="w-80 hover:shadow-xl border-2 hover:border-primary/30 h-full transition-all duration-300">
        <CardContent className="p-0 relative overflow-hidden h-full flex flex-col">
          {/* Image Section - Fixed size */}
          <div className="relative overflow-hidden rounded-t-lg h-48">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = `data:image/svg+xml;base64,${btoa(`
                  <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#f3f4f6"/>
                    <text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="#6b7280" fontFamily="Arial, sans-serif" fontSize="16">
                      ${project.title}
                    </text>
                  </svg>
                `)}`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Project Stats */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-1 bg-black/50 rounded-full px-2 py-1">
                <Star className="h-3 w-3 text-yellow-400" />
                <span className="text-xs text-white font-medium">{project.stars}</span>
              </div>
              <div className="flex items-center gap-1 bg-black/50 rounded-full px-2 py-1">
                <GitBranch className="h-3 w-3 text-blue-400" />
                <span className="text-xs text-white font-medium">{project.forks}</span>
              </div>
            </div>
          </div>

          {/* Content Section - Fixed layout */}
          <div className="p-6 flex-1 flex flex-col h-80">
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary-vibrant transition-colors duration-300 h-14 flex items-center">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed h-20 overflow-hidden line-clamp-4">
              {project.description}
            </p>

            {/* Technology Tags - Fixed height */}
            <div className="flex flex-wrap gap-2 mb-4 h-16 overflow-hidden">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-primary/10 text-primary-vibrant text-xs rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-200 h-fit"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons - Fixed functionality */}
            <div className="flex gap-3 mb-4">
              <Button
                size="sm"
                variant="outline"
                className="flex-1 gap-2 border-primary-vibrant text-primary-vibrant hover:bg-primary-vibrant hover:text-primary-foreground transition-all duration-300 bg-transparent"
                onClick={(e) => handleLiveClick(e, project.live)}
                type="button"
              >
                <ExternalLink className="h-4 w-4" />
                Live Site
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="flex-1 gap-2 hover:bg-foreground hover:text-background transition-all duration-300 bg-transparent"
                onClick={(e) => handleGithubClick(e, project.github)}
                type="button"
              >
                <Github className="h-4 w-4" />
                Code
              </Button>
            </div>

            {/* Spacer to push progress bar to bottom */}
            <div className="flex-1"></div>

            {/* Progress Bar */}
            <div className="h-1 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary-vibrant rounded-full w-0 group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`py-24 bg-gradient-to-br from-background to-muted/20 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-20 transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Latest Work</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Showcasing innovative projects that demonstrate my expertise in full-stack development and problem-solving
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
        </div>

        {/* Horizontal Scrollable Container */}
        <div className="relative">
          {/* Gradient overlays for visual effect */}
          <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-0 overflow-x-auto scrollbar-thin scrollbar-track-muted/20 scrollbar-thumb-primary/40 hover:scrollbar-thumb-primary/60 pb-4"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "hsl(var(--primary) / 0.4) hsl(var(--muted) / 0.2)",
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Projects count */}
        <div
          className={`text-center mt-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: isVisible ? "900ms" : "0ms" }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-2xl font-bold text-primary-vibrant">{projects.length}</span>
            <span className="text-muted-foreground">Featured Projects</span>
          </div>
        </div>

        {/* Simple scroll hint without glow */}
        <div
          className={`text-center mt-8 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: isVisible ? "1100ms" : "0ms" }}
        >
          <p className="text-sm text-muted-foreground">← Scroll horizontally to view all projects →</p>
        </div>
      </div>

      <style jsx>{`
        /* Custom scrollbar styles for better cross-browser support */
        .scrollbar-thin::-webkit-scrollbar {
          height: 8px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: hsl(var(--muted) / 0.2);
          border-radius: 4px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: hsl(var(--primary) / 0.4);
          border-radius: 4px;
          transition: background-color 0.2s ease;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: hsl(var(--primary) / 0.6);
        }
        
        /* Firefox scrollbar */
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: hsl(var(--primary) / 0.4) hsl(var(--muted) / 0.2);
        }
      `}</style>
    </section>
  )
}
