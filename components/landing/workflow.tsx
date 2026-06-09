import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const steps = [
  {
    step: "01",
    label: "Sign up",
    detail: "Create your account in 2 minutes. No credit card required for the 14-day trial.",
  },
  {
    step: "02",
    label: "Pick your module",
    detail: "Tell us your business type — restaurant, retail, clinic, or wholesale. BizOS configures itself.",
  },
  {
    step: "03",
    label: "Add your inventory",
    detail: "Import via CSV or add items one by one. Our team can migrate your existing data free of charge.",
  },
  {
    step: "04",
    label: "Go live",
    detail: "Start billing. Your first customer can pay within 10 minutes of signup. Offline mode is on by default.",
  },
]

export function Workflow() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="bg-muted/30 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-4">
            Setup in minutes
          </p>
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-foreground tracking-tight text-balance">
            From signup to first invoice in 10 minutes
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-border" style={{ left: "calc(12.5% + 20px)", right: "calc(12.5% + 20px)" }} />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center md:items-start text-center md:text-left gap-4"
              >
                {/* Step number */}
                <div className="relative z-10 flex items-center justify-center size-16 rounded-2xl border-2 border-border bg-background shadow-sm">
                  <span className="text-lg font-extrabold text-foreground tracking-tight">{s.step}</span>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 w-8 h-px bg-border" />
                  )}
                </div>

                <div>
                  <div className="text-base font-semibold text-foreground mb-1.5">{s.label}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{s.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Supporting callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="mt-14 max-w-2xl mx-auto rounded-2xl border border-brand/20 bg-brand-muted p-6 text-center"
        >
          <div className="text-sm font-semibold text-brand mb-1">Free white-glove onboarding</div>
          <div className="text-sm text-muted-foreground">
            Every new business gets a dedicated onboarding call with our team. We'll migrate your
            existing Khata or spreadsheet data at no extra cost.
          </div>
        </motion.div>
      </div>
    </section>
  )
}
