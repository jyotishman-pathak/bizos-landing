import { useRef } from "react"
import { motion, useInView, type Variants } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import {
  WifiOffIcon,
  ShoppingBagIcon,
  CalendarIcon,
  BookOpenIcon,
  ArrowRightIcon,
} from "lucide-react"

const features = [
  {
    tag: "Restaurant POS",
    icon: <WifiOffIcon className="size-4" />,
    headline: "Bill in 8 seconds. With or without the internet.",
    body: "Your billing never stops — not during power cuts, not during weak 4G, not ever. BizOS stores everything locally and syncs the moment you're back online. Kitchen display, table management, and thermal printing included.",
    bullets: [
      "Offline-first: bills sync automatically when internet returns",
      "Kitchen Display System: orders appear live on the kitchen screen",
      "One-click WhatsApp receipt to customer",
      "Daily sales report with expense tracking",
    ],
    visual: <RestaurantVisual />,
    reverse: false,
  },
  {
    tag: "Retail & Ecommerce",
    icon: <ShoppingBagIcon className="size-4" />,
    headline: "From a rack in Jorhat to a store on the internet.",
    body: "Give every shop an online storefront without hiring a developer. Pick a template, upload products, set delivery zones — your store is live in under 15 minutes. Same inventory, same dashboard, whether a customer walks in or orders online.",
    bullets: [
      "12 storefront templates tuned for Indian retail",
      "Your own subdomain: yourshop.bizos.in or custom domain",
      "Barcode POS synced in real-time with online store",
      "Bulk import products via CSV in one step",
    ],
    visual: <RetailVisual />,
    reverse: true,
  },
  {
    tag: "Clinic Management",
    icon: <CalendarIcon className="size-4" />,
    headline: "From scribbled prescriptions to structured patient records.",
    body: "Run your clinic the way a doctor should — focused on patients, not paperwork. Appointments auto-confirm via WhatsApp, prescriptions are typed once and saved forever, billing is one tap.",
    bullets: [
      "Appointment booking with automatic WhatsApp reminders",
      "Patient history, prescriptions, and documents in one place",
      "ABDM-ready structure for government scheme compliance",
      "One-tap billing with GST invoice",
    ],
    visual: <ClinicVisual />,
    reverse: false,
  },
  {
    tag: "Kirana & Steel (Khata)",
    icon: <BookOpenIcon className="size-4" />,
    headline: "The digital khata your accountant will actually trust.",
    body: "Double-entry accounting, party-wise ledgers, and GSTR-1-ready reports — designed for Marwadi traders, steel merchants, and kirana wholesalers. No accounting degree required.",
    bullets: [
      "Party ledger: who owes what, settled vs outstanding",
      "Purchase orders → GRN → payment, end to end",
      "GST invoice generation with GSTIN validation",
      "GSTR-1 export ready for your CA to file",
    ],
    visual: <KhataVisual />,
    reverse: true,
  },
]

function RestaurantVisual() {
  return (
    <div className="rounded-xl border border-border bg-card p-4 space-y-3 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold text-foreground">Raj's Kitchen</div>
          <div className="text-[10px] text-muted-foreground">Jorhat, Assam</div>
        </div>
        <div className="flex items-center gap-1.5">
          <WifiOffIcon className="size-3 text-amber-500" />
          <span className="text-[10px] text-amber-600 font-medium">Offline mode</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Bills Today", value: "47", color: "bg-brand/10 text-brand" },
          { label: "Tables Active", value: "8/12", color: "bg-green-500/10 text-green-600" },
          { label: "KOTs Pending", value: "3", color: "bg-amber-500/10 text-amber-600" },
        ].map((s) => (
          <div key={s.label} className={`rounded-lg p-2.5 ${s.color} bg-opacity-10`}>
            <div className="text-lg font-bold">{s.value}</div>
            <div className="text-[9px] font-medium mt-0.5 opacity-80">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Last 5 bills</div>
        {[
          { id: "B-1047", table: "T2", amount: "₹493", status: "pending" },
          { id: "B-1046", table: "T7", amount: "₹1,240", status: "paid" },
          { id: "B-1045", table: "T3", amount: "₹380", status: "paid" },
        ].map((b) => (
          <div key={b.id} className="flex items-center justify-between py-1.5 border-b border-border/50 last:border-0">
            <div>
              <span className="text-xs font-medium text-foreground">{b.id}</span>
              <span className="text-[10px] text-muted-foreground ml-1.5">{b.table}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold">{b.amount}</span>
              <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium ${
                b.status === "paid"
                  ? "bg-green-500/10 text-green-600"
                  : "bg-amber-500/10 text-amber-600"
              }`}>
                {b.status}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-[10px] text-muted-foreground flex items-center gap-1.5 pt-1">
        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
        3 bills queued to sync when internet returns
      </div>
    </div>
  )
}

function RetailVisual() {
  return (
    <div className="rounded-xl border border-border bg-card p-4 space-y-3 shadow-sm">
      <div className="flex items-center justify-between mb-1">
        <div className="text-xs font-semibold text-foreground">Priya Boutique — Online Store</div>
        <span className="text-[9px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 font-medium">Live</span>
      </div>
      <div className="rounded-lg overflow-hidden border border-border/60">
        <div className="bg-[oklch(0.97_0.04_264)] px-3 py-2 flex items-center gap-2">
          <div className="size-4 rounded bg-brand/20 flex items-center justify-center">
            <span className="text-[8px] text-brand font-bold">P</span>
          </div>
          <div className="text-[10px] text-brand/80 font-medium">priya-boutique.bizos.in</div>
        </div>
        <div className="p-2.5 bg-background">
          <div className="grid grid-cols-3 gap-2">
            {["Sarees", "Kurtis", "Western"].map((cat) => (
              <div key={cat} className="rounded-md border border-border/60 p-2 text-center">
                <div className="w-full aspect-square rounded bg-muted mb-1.5 flex items-center justify-center">
                  <ShoppingBagIcon className="size-4 text-muted-foreground" />
                </div>
                <div className="text-[9px] font-medium text-foreground">{cat}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-1.5">
        {[
          { order: "#O-891", item: "Banarasi Silk Saree", amount: "₹2,400", status: "new" },
          { order: "#O-890", item: "Kurti Set (M)", amount: "₹850", status: "shipped" },
        ].map((o) => (
          <div key={o.order} className="flex items-center justify-between py-1.5 border-b border-border/40 last:border-0">
            <div>
              <div className="text-xs font-medium text-foreground">{o.order}</div>
              <div className="text-[9px] text-muted-foreground">{o.item}</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold">{o.amount}</span>
              <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium ${
                o.status === "new"
                  ? "bg-brand/10 text-brand"
                  : "bg-green-500/10 text-green-600"
              }`}>
                {o.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ClinicVisual() {
  return (
    <div className="rounded-xl border border-border bg-card p-4 space-y-3 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold text-foreground">Assam Dental Clinic</div>
        <div className="text-[10px] text-muted-foreground">Dr. R. Borah</div>
      </div>
      <div className="space-y-1.5">
        <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Today's Schedule</div>
        {[
          { time: "10:00 AM", patient: "Anjali Das", type: "Checkup", status: "In" },
          { time: "10:30 AM", patient: "Raju Sharma", type: "Filling", status: "Waiting" },
          { time: "11:00 AM", patient: "Meena Gogoi", type: "Extraction", status: "Upcoming" },
          { time: "11:30 AM", patient: "Priya Kalita", type: "Cleaning", status: "Upcoming" },
        ].map((a) => (
          <div key={a.time} className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
            a.status === "In" ? "bg-brand/8 border border-brand/20" : "hover:bg-accent"
          }`}>
            <div className="text-[10px] font-mono text-muted-foreground w-16 shrink-0">{a.time}</div>
            <div className="flex-1">
              <div className="text-xs font-medium text-foreground">{a.patient}</div>
              <div className="text-[9px] text-muted-foreground">{a.type}</div>
            </div>
            <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium ${
              a.status === "In"
                ? "bg-brand/10 text-brand"
                : a.status === "Waiting"
                ? "bg-amber-500/10 text-amber-600"
                : "text-muted-foreground"
            }`}>
              {a.status}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 pt-1">
        <button className="flex-1 text-[10px] py-1.5 rounded-lg bg-brand text-brand-foreground font-medium">
          Send Reminder via WhatsApp
        </button>
      </div>
    </div>
  )
}

function KhataVisual() {
  return (
    <div className="rounded-xl border border-border bg-card p-4 space-y-3 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold text-foreground">Modi Steel Traders</div>
        <div className="text-[10px] text-muted-foreground">Silchar, Assam</div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-destructive/8 border border-destructive/20 p-3">
          <div className="text-[10px] text-muted-foreground font-medium">You Receive</div>
          <div className="text-xl font-bold text-destructive mt-0.5">₹4,28,000</div>
          <div className="text-[9px] text-muted-foreground">from 12 parties</div>
        </div>
        <div className="rounded-lg bg-green-500/8 border border-green-500/20 p-3">
          <div className="text-[10px] text-muted-foreground font-medium">You Pay</div>
          <div className="text-xl font-bold text-green-600 mt-0.5">₹1,82,000</div>
          <div className="text-[9px] text-muted-foreground">to 4 vendors</div>
        </div>
      </div>
      <div className="space-y-1">
        <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Party Ledger</div>
        {[
          { name: "Gupta Hardware", outstanding: "₹85,000", days: 45, overdue: true },
          { name: "Rathi Traders", outstanding: "₹1,24,000", days: 22, overdue: false },
          { name: "Sharma Irons", outstanding: "₹67,500", days: 8, overdue: false },
        ].map((p) => (
          <div key={p.name} className="flex items-center justify-between py-1.5 border-b border-border/40 last:border-0">
            <div>
              <div className="text-xs font-medium text-foreground">{p.name}</div>
              <div className={`text-[9px] ${p.overdue ? "text-destructive" : "text-muted-foreground"}`}>
                {p.days} days {p.overdue ? "overdue" : "pending"}
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className={`text-xs font-bold ${p.overdue ? "text-destructive" : "text-foreground"}`}>
                {p.outstanding}
              </span>
              <button className="text-[9px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground hover:bg-accent">
                Remind
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

function FeatureRow({
  feature,
}: {
  feature: (typeof features)[0]
  index: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1 } },
      }}
      className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center py-16 md:py-24 border-b border-border/60 last:border-0 ${
        feature.reverse ? "md:[&>*:first-child]:order-last" : ""
      }`}
    >
      {/* Text */}
      <div className="space-y-6">
        <motion.div variants={fadeIn}>
          <Badge
            variant="secondary"
            className="text-xs font-medium gap-1.5 px-2.5 py-1"
          >
            <span className="text-brand">{feature.icon}</span>
            {feature.tag}
          </Badge>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="text-[28px] md:text-[34px] font-bold text-foreground tracking-tight text-balance leading-tight"
        >
          {feature.headline}
        </motion.h2>

        <motion.p variants={fadeIn} className="text-muted-foreground leading-relaxed text-base">
          {feature.body}
        </motion.p>

        <motion.ul variants={fadeIn} className="space-y-2.5">
          {feature.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm text-foreground">
              <span className="mt-1 size-1.5 rounded-full bg-brand shrink-0" />
              {b}
            </li>
          ))}
        </motion.ul>

        <motion.a
          variants={fadeIn}
          href="#"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand/80 transition-colors"
        >
          Learn more about {feature.tag}
          <ArrowRightIcon className="size-3.5" />
        </motion.a>
      </div>

      {/* Visual */}
      <motion.div
        variants={fadeIn}
        className="w-full max-w-[440px] mx-auto md:mx-0 md:ml-auto"
      >
        {feature.visual}
      </motion.div>
    </motion.div>
  )
}

export function Features() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section header */}
      <div className="text-center max-w-2xl mx-auto pt-20 pb-4">
        <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-4">
          Four modules. One platform.
        </p>
        <h2 className="text-[36px] md:text-[44px] font-extrabold text-foreground tracking-tight text-balance leading-tight">
          Built for how Indian businesses actually work
        </h2>
        <p className="mt-4 text-muted-foreground text-base leading-relaxed">
          Not a generic SaaS adapted for India. Each module is designed ground-up for the specific
          workflows, constraints, and regulatory requirements of local businesses.
        </p>
      </div>

      {features.map((feature, i) => (
        <FeatureRow key={feature.tag} feature={feature} index={i} />
      ))}
    </section>
  )
}
