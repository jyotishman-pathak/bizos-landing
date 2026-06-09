import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckIcon, XIcon } from "lucide-react"

type CellValue = boolean | "partial"

const rows: { feature: string; bizos: CellValue; vyapar: CellValue; tally: CellValue }[] = [
  { feature: "Works fully offline", bizos: true, vyapar: "partial", tally: false },
  { feature: "Restaurant KDS (kitchen display)", bizos: true, vyapar: false, tally: false },
  { feature: "Ecommerce storefront included", bizos: true, vyapar: false, tally: false },
  { feature: "Clinic appointment module", bizos: true, vyapar: false, tally: false },
  { feature: "WhatsApp receipt in one tap", bizos: true, vyapar: true, tally: false },
  { feature: "GST invoices + GSTR-1 export", bizos: true, vyapar: true, tally: true },
  { feature: "Double-entry accounting (Khata)", bizos: true, vyapar: "partial", tally: true },
  { feature: "Free onboarding + data migration", bizos: true, vyapar: false, tally: false },
  { feature: "Under ₹7,000/month for all modules", bizos: true, vyapar: false, tally: false },
  { feature: "Multi-device (tablet + phone + desktop)", bizos: true, vyapar: "partial", tally: false },
]

function Cell({ value }: { value: boolean | "partial" }) {
  if (value === true)
    return (
      <td className="py-3 px-4 text-center">
        <div className="inline-flex items-center justify-center size-5 rounded-full bg-brand/15">
          <CheckIcon className="size-3 text-brand" />
        </div>
      </td>
    )
  if (value === "partial")
    return (
      <td className="py-3 px-4 text-center">
        <div className="inline-flex items-center justify-center size-5 rounded-full bg-amber-500/15">
          <span className="text-amber-500 text-[10px] font-bold leading-none">~</span>
        </div>
      </td>
    )
  return (
    <td className="py-3 px-4 text-center">
      <div className="inline-flex items-center justify-center size-5 rounded-full bg-muted">
        <XIcon className="size-3 text-muted-foreground" />
      </div>
    </td>
  )
}

export function Comparison() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="text-center max-w-xl mx-auto mb-14">
        <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-4">
          Why teams switch to BizOS
        </p>
        <h2 className="text-[32px] md:text-[40px] font-extrabold text-foreground tracking-tight text-balance">
          Built for what others missed
        </h2>
        <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
          Tally is built for accountants. Vyapar is built for small traders.
          BizOS is built for Indian local businesses — buy only the module you need.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="overflow-hidden rounded-2xl border border-border shadow-sm"
      >
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="py-4 px-4 text-left text-sm font-semibold text-foreground">Feature</th>
              <th className="py-4 px-4 text-center">
                <div className="inline-flex flex-col items-center gap-0.5">
                  <span className="text-sm font-bold text-brand">BizOS</span>
                  <span className="text-[10px] text-brand/70">from ₹1,999/mo</span>
                </div>
              </th>
              <th className="py-4 px-4 text-center">
                <div className="inline-flex flex-col items-center gap-0.5">
                  <span className="text-sm font-medium text-muted-foreground">Vyapar</span>
                  <span className="text-[10px] text-muted-foreground">from ₹1,499/mo</span>
                </div>
              </th>
              <th className="py-4 px-4 text-center">
                <div className="inline-flex flex-col items-center gap-0.5">
                  <span className="text-sm font-medium text-muted-foreground">Tally</span>
                  <span className="text-[10px] text-muted-foreground">₹18,000/yr</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.feature}
                className={`border-b border-border/60 last:border-0 transition-colors hover:bg-muted/30 ${
                  i % 2 === 0 ? "bg-background" : "bg-muted/10"
                }`}
              >
                <td className="py-3 px-4 text-sm text-foreground">{row.feature}</td>
                <Cell value={row.bizos} />
                <Cell value={row.vyapar} />
                <Cell value={row.tally} />
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <div className="mt-3 flex items-center gap-4 justify-end text-[11px] text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="inline-flex size-4 rounded-full bg-amber-500/15 items-center justify-center">
            <span className="text-amber-500 text-[9px] font-bold">~</span>
          </span>
          Partial support
        </span>
        <span className="text-border">·</span>
        <span>Based on public feature listings, June 2025</span>
      </div>
    </section>
  )
}