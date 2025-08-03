"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Code, Trophy, Zap, Star, Calendar, TrendingUp, Award, Users } from "lucide-react"

const stats = [
  {
    icon: Code,
    label: "LeetCode Problems",
    value: 450,
    max: 500,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    description: "Solved across Easy, Medium & Hard",
  },
  {
    icon: Trophy,
    label: "Next.js Proficiency",
    value: 92,
    max: 100,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    description: "Advanced level with SSR & SSG",
  },
  {
    icon: Zap,
    label: "React.js Skills",
    value: 95,
    max: 100,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    description: "Expert in hooks, context & performance",
  },
]

const achievements = [
  { icon: Star, label: "GitHub Stars", value: "1.2K+", color: "text-yellow-500" },
  { icon: Code, label: "Contributions", value: "500+", color: "text-green-500" },
  { icon: Calendar, label: "Experience", value: "3+ Years", color: "text-blue-500" },
  { icon: Award, label: "Projects", value: "25+", color: "text-purple-500" },
  { icon: Users, label: "Collaborations", value: "15+", color: "text-pink-500" },
  { icon: TrendingUp, label: "Success Rate", value: "98%", color: "text-emerald-500" },
]

export default function About() {
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0))
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

  useEffect(() => {
    if (!isVisible) return

    const timers = stats.map((stat, index) => {
      return setTimeout(() => {
        let current = 0
        const increment = stat.value / 60
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.value) {
            current = stat.value
            clearInterval(timer)
          }
          setAnimatedValues((prev) => {
            const newValues = [...prev]
            newValues[index] = Math.floor(current)
            return newValues
          })
        }, 25)
      }, index * 300)
    })

    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [isVisible])

  return (
    <section
  ref={sectionRef}
  id="about"
  className={`py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-muted/30 to-muted/10 transition-all duration-1000 ease-out ${
    isVisible ? "opacity-100" : "opacity-0"
  }`}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div
      className={`text-center mb-16 sm:mb-20 transition-all duration-800 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
        About Me
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
        I&apos;m a passionate full-stack developer with expertise in modern web technologies...
      </p>
      <div className="mt-6 w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
      {/* Left Column */}
      <div
        className={`transition-all duration-800 ease-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}
      >
        <h3 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-foreground">
          My Journey
        </h3>
        <p className="text-muted-foreground mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed hover:text-foreground">
          With over 3 years of experience...
        </p>
        <p className="text-muted-foreground mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed hover:text-foreground">
          I&apos;m constantly learning...
        </p>
        <p className="text-muted-foreground mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed hover:text-foreground">
          When I&apos;m not coding...
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div
                key={index}
                className={`flex items-center gap-4 p-4 rounded-xl bg-card border hover:shadow-lg transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isVisible ? `${500 + index * 100}ms` : "0ms",
                }}
              >
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon className={`h-6 w-6 ${achievement.color}`} />
                </div>
                <div>
                  <p className="font-bold text-base sm:text-lg text-foreground">{achievement.value}</p>
                  <p className="text-sm text-muted-foreground">{achievement.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Right Column */}
      <div className={`space-y-6 sm:space-y-8 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
        {stats.map((stat, index) => {
          const Icon = stat.icon
          const percentage = (animatedValues[index] / stat.max) * 100

          return (
            <Card
              key={index}
              className={`border-2 border-border transition-all duration-700 ease-in-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className={`p-4 ${stat.bgColor} rounded-2xl self-start`}>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2 sm:mb-3 gap-2">
                      <span className="font-semibold text-base sm:text-lg text-foreground">{stat.label}</span>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-xl sm:text-2xl font-bold text-foreground">
                          {animatedValues[index]}
                          {stat.max === 100 ? "%" : `/${stat.max}`}
                        </span>
                        <Badge variant="secondary" className="text-xs sm:text-sm font-medium">
                          {stat.max === 100 ? "Expert" : "Active"}
                        </Badge>
                      </div>
                    </div>
                    <Progress value={percentage} className="h-3 sm:h-4 mb-2 sm:mb-3" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  </div>
</section>

  )
}
