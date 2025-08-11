// import Navbar from "@/components/navbar"
// import Hero from "@/components/hero"
// import About from "@/components/about"
// import Projects from "@/components/projects"
// import Skills from "@/components/skills"
// import Contact from "@/components/contact"
// import Footer from "@/components/footer"

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
//       <main>
//         <Hero />
//         <About />
//         <Projects />
//         <Skills />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   )
// }
"use client"; 

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import SectionWrapper from "@/components/SectionWrapper";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <SectionWrapper>
          <Hero />
        </SectionWrapper>
        <SectionWrapper>
          <About />
        </SectionWrapper>
        <SectionWrapper>
          <Projects />
        </SectionWrapper>
        <SectionWrapper>
          <Skills />
        </SectionWrapper>
        <SectionWrapper>
          <Contact />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
