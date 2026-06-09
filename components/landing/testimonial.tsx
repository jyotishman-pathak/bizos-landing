import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { QuoteIcon } from "lucide-react"

const testimonials = [
  {
    quote:
      "We run three restaurants in Jorhat. Earlier, if the internet was down during dinner rush, we'd write bills on paper and lose track of everything. With BizOS, billing never stops — it syncs quietly in the background.",
    name: "Rajiv Borah",
    title: "Owner, Raj's Kitchen Group",
    location: "Jorhat, Assam",
    module: "Restaurant POS",
    initials: "RB",
  },
  {
    quote:
      "My accountant was the one who told me to switch. The GSTR-1 export saves us 4–5 hours every month. The party ledger is exactly how we used to track things in our old Khata book — just better.",
    name: "Mahesh Modi",
    title: "Proprietor, Modi Steel Traders",
    location: "Silchar, Assam",
    module: "Kirana & Wholesale",
    initials: "MM",
  },
  {
    quote:
      "I was skeptical about putting patient records online. BizOS showed me how the data is stored and protected. Now I can't imagine going back — my receptionist handles everything from one screen.",
    name: "Dr. Rekha Sharma",
    title: "Dentist, Sharma Dental Care",
    location: "Shillong, Meghalaya",
    module: "Clinic Management",
    initials: "RS",
  },
  {
    quote:
      "The online store took 20 minutes to set up. Within a week I had orders from customers in Guwahati who found me on Google. My walk-in inventory and online stock stay perfectly in sync.",
    name: "Priya Kalita",
    title: "Owner, Priya Boutique",
    location: "Guwahati, Assam",
    module: "Retail & Ecommerce",
    initials: "PK",
  },
  {
    quote:
      "The WhatsApp reminders for appointments are the single best feature for a small clinic. Patients actually show up on time now. No-shows dropped by 40% in the first month.",
    name: "Dr. Anil Nath",
    title: "Physician, Nath Family Clinic",
    location: "Dibrugarh, Assam",
    module: "Clinic Management",
    initials: "AN",
  },
  {
    quote:
      "Migrating from my old system was free and painless. The BizOS team called me twice to make sure everything was correct. That kind of support is rare from a software company.",
    name: "Suresh Agarwal",
    title: "Owner, Agarwal Medicos",
    location: "Nagaon, Assam",
    module: "Kirana & Wholesale",
    initials: "SA",
  },
]

const moduleColors: Record<string, string> = {
  "Restaurant POS": "bg-brand/10 text-brand",
  "Kirana & Wholesale": "bg-amber-500/10 text-amber-600",
  "Clinic Management": "bg-green-500/10 text-green-700",
  "Retail & Ecommerce": "bg-purple-500/10 text-purple-600",
}

export function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="bg-muted/20 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-4">
            From the field
          </p>
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-foreground tracking-tight text-balance">
            What business owners say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <QuoteIcon className="size-6 text-border" />
              <p className="text-sm text-foreground leading-relaxed flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-border/60">
                <div className="size-9 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-muted-foreground">{t.initials}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-foreground truncate">{t.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{t.title}</div>
                  <div className="text-[10px] text-muted-foreground">{t.location}</div>
                </div>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-medium shrink-0 ${moduleColors[t.module] || "bg-muted text-muted-foreground"}`}
                >
                  {t.module}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
