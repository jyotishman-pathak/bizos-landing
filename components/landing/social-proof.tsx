import { useRef } from "react"
import { motion, useInView, type Variants } from "framer-motion"
import { Separator } from "@/components/ui/separator"

const companies = [
  { name: "Raj's Kitchen", city: "Jorhat" },
  { name: "Sharma Medical", city: "Dibrugarh" },
  { name: "Priya Boutique", city: "Guwahati" },
  { name: "Modi Steel Traders", city: "Silchar" },
  { name: "Agarwal Medicos", city: "Shillong" },
  { name: "Nayak Kirana", city: "Tezpur" },
  { name: "Assam Dental Clinic", city: "Nagaon" },
  { name: "Saikia Superstore", city: "Sivasagar" },
]

const metrics = [
  { value: "₹420 Cr+", label: "Billed through BizOS", sub: "in the last 12 months" },
  { value: "2.1M+", label: "Invoices generated", sub: "across all modules" },
  { value: "1,200+", label: "Active businesses", sub: "in Northeast India" },
  { value: "99.96%", label: "Platform uptime", sub: "over the last 365 days" },
]

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
}

export function SocialProof() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="border-y border-border/60 bg-muted/20">
      {/* Logo strip */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-medium text-muted-foreground uppercase tracking-widest mb-8"
        >
          Trusted by businesses across Assam, Meghalaya & the Northeast
        </motion.p>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-wrap justify-center gap-x-10 gap-y-4"
        >
          {companies.map((co) => (
            <motion.div key={co.name} variants={fadeUp} className="text-center">
              <div className="text-sm font-semibold text-foreground/60">{co.name}</div>
              <div className="text-[10px] text-muted-foreground">{co.city}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Separator />

      {/* Metrics */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 rounded-2xl overflow-hidden"
        >
          {metrics.map((m) => (
            <motion.div
              key={m.value}
              variants={fadeUp}
              className="bg-background px-8 py-8 flex flex-col gap-1"
            >
              <div className="text-[36px] font-extrabold text-foreground tracking-tight leading-none">
                {m.value}
              </div>
              <div className="text-sm font-medium text-foreground mt-2">{m.label}</div>
              <div className="text-xs text-muted-foreground">{m.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
