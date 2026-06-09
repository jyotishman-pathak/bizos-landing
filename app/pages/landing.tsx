"use client"
import { Nav } from "@/components/landing/nav"
import { Hero } from "@/components/landing/hero"
import { SocialProof } from "@/components/landing/social-proof"

import { Pricing } from "@/components/landing/pricing"
import { FAQ } from "@/components/landing/faq"
import { FinalCTA, Footer } from "@/components/landing/cta.footer"
import { Features } from "@/components/landing/feature"
import { Comparison } from "@/components/landing/comparision"
import { Workflow } from "@/components/landing/workflow"
import { Testimonials } from "@/components/landing/testimonial"


export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Workflow />
        <Comparison />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
