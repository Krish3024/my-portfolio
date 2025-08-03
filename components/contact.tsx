// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Navigation } from "lucide-react"

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [showSuccess, setShowSuccess] = useState(false)

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 1000))

//     setShowSuccess(true)
//     setFormData({ name: "", email: "", subject: "", message: "" })
//     setIsSubmitting(false)

//     // Hide success message after 3 seconds
//     setTimeout(() => setShowSuccess(false), 3000)
//   }

//   const socialLinks = [
//     {
//       icon: Github,
//       href: "https://github.com/Krish3024",
//       label: "GitHub",
//     },
//     {
//       icon: Linkedin,
//       href: "https://www.linkedin.com/in/krish-sahu-513189278/",
//       label: "LinkedIn",
//     },
//     {
//       icon: Instagram,
//       href: "https://www.instagram.com/krishsahu.024/",
//       label: "Instagram",
//     },
//     {
//       icon: Mail,
//       href: "mailto:krishsah5216@gmail.com",
//       label: "Email",
//     },
//   ]

//   return (
//     <section id="contact" className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             I'm always open to discussing new opportunities, interesting projects, or just having a chat about
//             technology.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <div className="space-y-8">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Send me a message</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 {showSuccess && (
//                   <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
//                     <div className="flex items-center">
//                       <div className="flex-shrink-0">
//                         <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
//                           <path
//                             fillRule="evenodd"
//                             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </div>
//                       <div className="ml-3">
//                         <p className="text-sm font-medium text-green-800 dark:text-green-200">
//                           Message sent successfully! I'll get back to you soon.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid sm:grid-cols-2 gap-4">
//                     <div>
//                       <Input
//                         name="name"
//                         placeholder="Your Name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>
//                     <div>
//                       <Input
//                         name="email"
//                         type="email"
//                         placeholder="Your Email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <Input
//                       name="subject"
//                       placeholder="Subject"
//                       value={formData.subject}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>

//                   <div>
//                     <Textarea
//                       name="message"
//                       placeholder="Your Message"
//                       rows={6}
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>

//                   <Button type="submit" className="w-full" disabled={isSubmitting}>
//                     {isSubmitting ? "Sending..." : "Send Message"}
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>

//             {/* Google Maps Location - Clickable Area */}
//             <Card className="overflow-hidden h-fit">
//               <CardHeader className="pb-4">
//                 <CardTitle className="flex items-center gap-2">
//                   <Navigation className="h-5 w-5 text-primary" />
//                   My Location
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <a
//                   href="https://maps.app.goo.gl/oTAzfRKqCsmRD3JR9"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block mx-6 mb-6 group cursor-pointer"
//                 >
//                   <div className="relative h-64 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg overflow-hidden hover:from-primary/15 hover:to-primary/10 transition-all duration-300 hover:shadow-lg">
//                     {/* Styled Map Placeholder */}
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div className="text-center">
//                         <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300">
//                           <MapPin className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
//                         </div>
//                         <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
//                           VIT Chennai, Chennai, Tamil Nadu, India
//                         </h3>
//                         <p className="text-sm text-muted-foreground mb-4">
//                           Open to connect and collaborate on exciting projects.
//                         </p>
//                         <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg border border-primary/20 hover:border-primary transition-all duration-300 text-sm font-medium">
//                           <Navigation className="h-4 w-4" />
//                           Click to View on Maps
//                         </div>
//                       </div>
//                     </div>

//                     {/* Decorative Elements */}
//                     <div className="absolute top-4 left-4 w-3 h-3 bg-primary/30 rounded-full animate-pulse"></div>
//                     <div
//                       className="absolute top-8 right-6 w-2 h-2 bg-primary/40 rounded-full animate-pulse"
//                       style={{ animationDelay: "0.5s" }}
//                     ></div>
//                     <div
//                       className="absolute bottom-6 left-8 w-4 h-4 bg-primary/20 rounded-full animate-pulse"
//                       style={{ animationDelay: "1s" }}
//                     ></div>
//                     <div
//                       className="absolute bottom-4 right-4 w-2 h-2 bg-primary/50 rounded-full animate-pulse"
//                       style={{ animationDelay: "1.5s" }}
//                     ></div>

//                     {/* Grid Pattern */}
//                     <div className="absolute inset-0 opacity-10">
//                       <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
//                         {Array.from({ length: 48 }).map((_, i) => (
//                           <div key={i} className="border border-primary/20"></div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Hover Overlay */}
//                     <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   </div>
//                 </a>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-8">
//             <Card className="h-fit">
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-semibold mb-6 text-foreground">Contact Information</h3>

//                 <div className="space-y-4">
//                   <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
//                     <div className="p-2 bg-primary/10 rounded-lg">
//                       <Mail className="h-5 w-5 text-primary" />
//                     </div>
//                     <div>
//                       <p className="font-medium text-foreground">Email</p>
//                       <p className="text-muted-foreground">krishsah5216@gmail.com</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
//                     <div className="p-2 bg-primary/10 rounded-lg">
//                       <Phone className="h-5 w-5 text-primary" />
//                     </div>
//                     <div>
//                       <p className="font-medium text-foreground">Phone</p>
//                       <p className="text-muted-foreground">+91 (XXX) XXX-XXXX</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
//                     <div className="p-2 bg-primary/10 rounded-lg">
//                       <MapPin className="h-5 w-5 text-primary" />
//                     </div>
//                     <div>
//                       <p className="font-medium text-foreground">Location</p>
//                       <p className="text-muted-foreground">Chennai, Tamil Nadu, India</p>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="h-fit">
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-semibold mb-6 text-foreground">Follow Me</h3>

//                 <div className="flex gap-4 mb-6">
//                   {socialLinks.map((link, index) => {
//                     const Icon = link.icon
//                     return (
//                       <Button
//                         key={index}
//                         variant="outline"
//                         size="lg"
//                         asChild
//                         className="hover:bg-primary hover:text-primary-foreground transition-all duration-200 bg-transparent hover:scale-110"
//                       >
//                         <a href={link.href} target="_blank" rel="noopener noreferrer">
//                           <Icon className="h-5 w-5" />
//                         </a>
//                       </Button>
//                     )
//                   })}
//                 </div>

//                 <p className="text-muted-foreground text-sm leading-relaxed">
//                   Feel free to connect with me on social media or check out my latest projects on GitHub. I'm always
//                   open to networking and collaboration opportunities.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Navigation,
} from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error("Failed to send")

      setShowSuccess(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Submission error:", error)
      alert("Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setShowSuccess(false), 3000)
    }
  }

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Krish3024",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/krish-sahu-513189278/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/krishsahu.024/",
      label: "Instagram",
    },
    {
      icon: Mail,
      href: "mailto:krishsah5216@gmail.com",
      label: "Email",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects,
            or just having a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                {showSuccess && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-green-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-green-800 dark:text-green-200">
                          Message sent successfully! I&apos;ll get back to you soon.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />

                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Location Card remains unchanged */}
            {/* ... keep your Location Card and other info blocks the same */}
          </div>

          {/* Right section with Contact Info and Socials (unchanged) */}
          {/* ... keep your Contact Info and Social blocks here */}
        </div>
      </div>
    </section>
  )
}