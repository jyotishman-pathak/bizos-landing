import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "Do I have to buy all modules together?",
    a: "No. Each module works perfectly on its own. A restaurant can buy just Restaurant POS. A clinic can buy just Clinic Management. You only pay for what you need. If you later want to add another module, you can do it anytime from your dashboard.",
  },
  {
    q: "What happens to my billing if the internet goes down?",
    a: "BizOS works completely offline. Bills are created and stored locally on your device the moment you generate them. The moment internet returns, everything syncs automatically to the cloud. You'll never lose a bill or have to apologize to a customer because of connectivity.",
  },
  {
    q: "Can I use BizOS for more than one type of business?",
    a: "Yes. If you run a restaurant and also have a retail store, you can buy both modules under one account. Each module has its own dashboard and data. With the All Modules Bundle, you get everything at a 40%+ discount.",
  },
  {
    q: "How is patient data protected in the clinic module?",
    a: "Patient records are encrypted at rest using AES-256 and in transit using TLS 1.3. Access is controlled by role — only staff you explicitly authorize can view patient history. We maintain a full audit log of every access. We comply with India's DPDP Act 2023.",
  },
  {
    q: "Can I migrate my existing Tally or Vyapar data?",
    a: "Yes. Our team does this for free for all new customers. We support CSV import from most billing software, and for Tally specifically, we have a direct export/import tool. The process typically takes under 2 hours for most business sizes.",
  },
  {
    q: "Is there a setup fee or long-term contract?",
    a: "No setup fee, ever. No annual lock-in on monthly plans. On annual plans, you save 17% but we'll refund the unused months if you decide to leave. We don't believe in trapping customers.",
  },
  {
    q: "What does the ecommerce storefront include?",
    a: "Your store includes a mobile-responsive design, product catalog with variants (size, color), integrated payments (UPI, cards, COD), delivery zone management, and order tracking. You get a free subdomain at yourshop.bizos.in, or you can point your own .com domain.",
  },
  {
    q: "Does BizOS support GST filing?",
    a: "BizOS generates GST-compliant invoices with GSTIN validation and exports a GSTR-1-ready spreadsheet each month. You don't file directly from BizOS — you give the export to your CA or upload it to the GST portal yourself. This is by design, so you maintain full control.",
  },
]

export function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="text-center mb-12">
        <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-4">FAQ</p>
        <h2 className="text-[32px] md:text-[40px] font-extrabold text-foreground tracking-tight text-balance">
          Questions we hear often
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-xl px-5 data-[state=open]:bg-muted/30 transition-colors"
            >
              <AccordionTrigger className="text-sm font-medium text-foreground text-left py-4 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      <div className="mt-10 text-center text-sm text-muted-foreground">
        Still have questions?{" "}
        <a href="#" className="text-brand hover:underline font-medium">
          Chat with our team
        </a>{" "}
        — average response time is under 4 hours on weekdays.
      </div>
    </section>
  )
}
