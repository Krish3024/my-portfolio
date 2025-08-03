"use client"

import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import profile from "@/public/images/profile.jpg"

export default function Hero() {
  const handleDownloadResume = () => {
    // Open Google Drive resume link
    window.open("https://drive.google.com/file/d/1K4MzLHMuEmgN_c8qcFnGun2KJoxuVZ_N/view?usp=drive_link", "_blank")
  }

  const handleGithubClick = () => {
    window.open("https://github.com/Krish3024", "_blank")
  }

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/krish-sahu-513189278/", "_blank")
  }

  const handleMailClick = () => {
    window.open("mailto:krishsah5216@gmail.com", "_blank")
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="relative inline-block">
              <img
                src={profile.src}
                alt="Profile"
                className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-primary/20 shadow-2xl object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = `data:image/svg+xml;base64,${btoa(`
                    <svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="80" cy="80" r="80" fill="#e5e7eb"/>
                      <circle cx="80" cy="65" r="25" fill="#9ca3af"/>
                      <path d="M30 130 Q80 100 130 130" fill="#9ca3af"/>
                    </svg>
                  `)}`
                }}
              />
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Hi, I&apos;m <span className="text-primary-vibrant">Krish Sahu</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Full Stack Developer passionate about creating innovative web solutions and solving complex problems with
            clean, efficient code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" onClick={handleDownloadResume} className="gap-2 btn-primary-enhanced">
              <Download className="h-5 w-5" />
              Download Resume
            </Button>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={handleGithubClick}
                className="border-primary-vibrant text-primary-vibrant hover:bg-primary-vibrant hover:text-primary-foreground bg-transparent transition-all duration-200"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleLinkedinClick}
                className="border-primary-vibrant text-primary-vibrant hover:bg-primary-vibrant hover:text-primary-foreground bg-transparent transition-all duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleMailClick}
                className="border-primary-vibrant text-primary-vibrant hover:bg-primary-vibrant hover:text-primary-foreground bg-transparent transition-all duration-200"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
