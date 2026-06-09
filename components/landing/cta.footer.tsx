import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowRightIcon } from "lucide-react"

export function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="bg-foreground">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="space-y-7"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-background/20 text-background/70 text-xs font-medium">
            <span className="flex h-1.5 w-1.5 rounded-full bg-green-400" />
            14-day free trial · No credit card required
          </div>

          <h2 className="text-[36px] md:text-[52px] font-extrabold text-background tracking-[-0.03em] leading-[0.95] text-balance">
            Your first invoice
            <br />
            in 10 minutes.
          </h2>

          <p className="text-background/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Join 1,200+ businesses in Northeast India who run their entire
            operation from one screen — online or offline.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="lg"
              className="bg-brand hover:bg-brand/90 text-brand-foreground font-semibold h-12 px-8 shadow-xl shadow-brand/30"
            >
              Start free trial
              <ArrowRightIcon className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="h-12 px-8 text-background/80 hover:text-background hover:bg-background/10 font-medium"
            >
              Book a demo call
            </Button>
          </div>

          <p className="text-background/40 text-xs">
            Questions? Call us: <span className="text-background/60 font-medium">+91 94012 XXXXX</span>
            {" "}· We speak Assamese, Bengali, and Hindi.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

const footerLinks = {
  Product: ["Restaurant POS", "Retail & Ecommerce", "Clinic Management", "Kirana & Wholesale", "Pricing"],
  Company: ["About", "Careers", "Blog", "Press kit"],
  Resources: ["Documentation", "API Reference", "Status page", "Changelog"],
  Legal: ["Privacy policy", "Terms of service", "DPDP compliance", "Refund policy"],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-7 w-7 rounded-[6px] bg-brand flex items-center justify-center">
                <span className="text-brand-foreground text-xs font-bold">B</span>
              </div>
              <span className="font-semibold text-[15px] text-foreground tracking-tight">BizOS</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[180px]">
              The operating system for India's 63 million local businesses.
            </p>
            <div className="mt-4 text-[10px] text-muted-foreground">
              Built in Jorhat, Assam.
              <br />
              Scaling across India.
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                {group}
              </div>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator />

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-muted-foreground">
            © 2025 BizOS Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>CIN: U72900AS2025PTC000000</span>
            <span className="text-border">·</span>
            <span>GST: 18AAAAA0000A1Z5</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
