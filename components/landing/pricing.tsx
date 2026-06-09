import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckIcon, ArrowRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export const modules = [
  {
    id: "restaurant-pos",
    name: "Restaurant POS",
    tagline: "Full billing, tables, kitchen display, offline mode",
    monthlyPrice: 1999,
    annualPrice: 1666,
    setupFee: 2000,
    color: "coral",
    icon: "tools-kitchen-2",
    staffAccounts: 5,
    features: [
      { label: "Offline billing (works without internet)", highlight: true },
      { label: "Table & floor management" },
      { label: "Kitchen display system (KDS)" },
      { label: "Menu with categories & variants" },
      { label: "WhatsApp receipt on every bill", highlight: true },
      { label: "Daily sales & expense report" },
      { label: "Thermal printer support" },
      { label: "Up to 5 staff accounts" },
    ],
    idealFor: ["Restaurants", "Dhabas", "Cafes", "Food stalls"],
  },
  {
    id: "retail-ecommerce",
    name: "Retail & Ecommerce",
    tagline: "POS + inventory + online storefront with templates",
    monthlyPrice: 2499,
    annualPrice: 2082,
    setupFee: 2000,
    color: "purple",
    icon: "hanger",
    staffAccounts: 5,
    features: [
      { label: "Barcode scanner POS billing" },
      { label: "Inventory with size & color variants" },
      { label: "Online store on your subdomain", highlight: true },
      { label: "8 storefront templates to choose from" },
      { label: "Online payment collection" },
      { label: "Low stock alerts" },
      { label: "Bulk product import via CSV" },
      { label: "Up to 5 staff accounts" },
    ],
    idealFor: ["Clothing shops", "Footwear", "Electronics", "General stores"],
  },
  {
    id: "clinic-management",
    name: "Clinic Management",
    tagline: "Appointments, patient records, prescriptions",
    monthlyPrice: 2499,
    annualPrice: 2082,
    setupFee: 2000,
    color: "green",
    icon: "stethoscope",
    staffAccounts: 5,
    features: [
      { label: "Appointment booking & calendar" },
      { label: "Patient records & full visit history" },
      { label: "WhatsApp appointment reminders", highlight: true },
      { label: "Prescription builder" },
      { label: "Dental & ayurvedic templates" },
      { label: "Fee collection & receipt" },
      { label: "Daily collections report" },
      { label: "Patient data encrypted at rest", highlight: true },
    ],
    idealFor: ["Dental clinics", "Ortho", "Ayurvedic", "General physicians"],
  },
  {
    id: "khata-accounting",
    name: "Khata & Accounting",
    tagline: "Party ledger, credit tracking, GST billing",
    monthlyPrice: 3499,
    annualPrice: 2916,
    setupFee: 2000,
    color: "amber",
    icon: "book-2",
    staffAccounts: 5,
    features: [
      { label: "Party master — vendors & customers" },
      { label: "Running Khata balance per party", highlight: true },
      { label: "Credit limit & overdue alerts" },
      { label: "GST invoice with GSTIN support", highlight: true },
      { label: "GSTR-1 export ready for CA" },
      { label: "Double-entry bookkeeping" },
      { label: "P&L statement & balance sheet" },
      { label: "Weight-based billing (kg / ton)" },
    ],
    idealFor: ["Steel shops", "Grocery wholesale", "Marwadi traders", "Hardware"],
  },
]

export const bundle = {
  id: "bizos-complete",
  name: "BizOS Complete",
  tagline: "All 4 modules. One subscription. One setup call.",
  monthlyPrice: 6999,
  annualPrice: 5832,
  annualBilledTotal: 69984,
  setupFee: 5000,
  setupSaving: 3000,
  color: "blue",
  icon: "layout-grid",
  staffAccounts: "unlimited",
  includedModules: ["restaurant-pos", "retail-ecommerce", "clinic-management", "khata-accounting"],
  features: [
    { label: "All 4 modules included" },
    { label: "Unlimited staff accounts", highlight: true },
    { label: "Custom domain for ecommerce store" },
    { label: "Priority support — same day response", highlight: true },
    { label: "Free onboarding call (1 hr)" },
    { label: "Single dashboard for everything" },
    { label: "Unified reports across all modules" },
    { label: "Early access to new features" },
  ],
}

export const addons = [
  {
    id: "whatsapp-automation",
    name: "WhatsApp Automation",
    description: "Auto invoices, appointment reminders, payment collection messages, overdue balance alerts",
    monthlyPrice: 299,
    annualPrice: 249,
    icon: "brand-whatsapp",
    color: "green",
    billingUnit: "mo",
  },
  {
    id: "custom-domain",
    name: "Custom Domain",
    description: "Point your own domain to your store — e.g. www.zaraboutique.com instead of a bizos subdomain",
    monthlyPrice: null,
    annualPrice: 499,
    icon: "world",
    color: "blue",
    billingUnit: "year",
  },
  {
    id: "extra-staff",
    name: "Extra Staff Seats",
    description: "Each module includes 5 staff accounts. Add more as your team grows — managers, cashiers, doctors",
    monthlyPrice: 99,
    annualPrice: 82,
    icon: "users",
    color: "purple",
    billingUnit: "user/mo",
  },
  {
    id: "human-accountant",
    name: "Human Accountant Review",
    description: "A real CA reviews your monthly books, fixes entries, and prepares your GST summary",
    monthlyPrice: 1999,
    annualPrice: 1666,
    icon: "calculator",
    color: "amber",
    billingUnit: "mo",
  },
  {
    id: "sms-pack",
    name: "SMS Pack",
    description: "500 SMS/month for OTP, order confirmations, reminders for customers without WhatsApp",
    monthlyPrice: 199,
    annualPrice: 166,
    icon: "message-2",
    color: "teal",
    billingUnit: "mo",
  },
  {
    id: "priority-support",
    name: "Priority Support",
    description: "Dedicated support agent, same-day response, onsite visit in Jorhat & nearby areas if needed",
    monthlyPrice: 499,
    annualPrice: 416,
    icon: "headset",
    color: "coral",
    billingUnit: "mo",
  },
]

export function Pricing() {
  const [annual, setAnnual] = useState(true)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} id="pricing" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="text-center max-w-xl mx-auto mb-12">
        <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-4">Pricing</p>
        <h2 className="text-[32px] md:text-[40px] font-extrabold text-foreground tracking-tight text-balance">
          Pay for what you need. Nothing more.
        </h2>
        <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
          Each module works perfectly standalone. Buy one, two, or all four.
          No per-transaction fees. No setup charges. Cancel anytime.
        </p>

        {/* Toggle */}
        <div className="mt-8 inline-flex items-center gap-2 p-1 rounded-lg bg-muted border border-border">
          <button
            onClick={() => setAnnual(false)}
            className={cn(
              "px-4 py-1.5 text-sm font-medium rounded-md transition-all",
              !annual ? "bg-background shadow-sm text-foreground" : "text-muted-foreground"
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={cn(
              "px-4 py-1.5 text-sm font-medium rounded-md transition-all flex items-center gap-2",
              annual ? "bg-background shadow-sm text-foreground" : "text-muted-foreground"
            )}
          >
            Annual
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-green-500/15 text-green-600 font-semibold">
              Save 17%
            </span>
          </button>
        </div>
      </div>

      {/* Individual modules */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mb-10"
      >
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider text-center mb-6">
          Individual Modules
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map((mod) => {
            const displayPrice = annual ? mod.annualPrice : mod.monthlyPrice
            const colorClasses: Record<string, string> = {
              coral: "border-red-500/30 hover:border-red-500/60",
              purple: "border-purple-500/30 hover:border-purple-500/60",
              green: "border-green-500/30 hover:border-green-500/60",
              amber: "border-amber-500/30 hover:border-amber-500/60",
            }
            const badgeClasses: Record<string, string> = {
              coral: "bg-red-500 text-white",
              purple: "bg-purple-500 text-white",
              green: "bg-green-600 text-white",
              amber: "bg-amber-500 text-white",
            }
            return (
              <div
                key={mod.id}
                className={cn(
                  "flex flex-col rounded-xl border bg-card p-5 transition-colors",
                  colorClasses[mod.color]
                )}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-sm font-bold text-foreground">{mod.name}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{mod.tagline}</div>
                  </div>
                  <Badge className={cn("text-[9px] px-1.5", badgeClasses[mod.color])}>
                    Standalone
                  </Badge>
                </div>

                <div className="mb-4">
                  <div className="flex items-end gap-1">
                    <span className="text-[28px] font-extrabold text-foreground tracking-tight leading-none">
                      ₹{displayPrice}
                    </span>
                    <span className="text-muted-foreground text-xs mb-1">/mo</span>
                  </div>
                </div>

                <div className="space-y-1.5 flex-1">
                  {mod.features.map((f) => (
                    <div key={f.label} className="flex items-start gap-1.5 text-[11px] text-muted-foreground">
                      <CheckIcon className="size-3 text-brand shrink-0 mt-0.5" />
                      {f.label}
                    </div>
                  ))}
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  className="w-full mt-4 text-xs font-medium"
                >
                  Start trial
                </Button>
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* Bundle */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
      >
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider text-center mb-6">
          Or Get Everything
        </h3>
        <div className="relative max-w-2xl mx-auto rounded-2xl border-2 border-brand bg-gradient-to-b from-brand/5 to-transparent p-8 shadow-xl shadow-brand/10">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Badge className="bg-brand text-brand-foreground text-xs font-semibold px-3 shadow-sm">
              Best value — Save 40%+
            </Badge>
          </div>

          <div className="text-center mb-6">
            <div className="text-lg font-bold text-foreground mb-1">All Modules Bundle</div>
            <div className="text-xs text-muted-foreground">
              Restaurant POS + Retail + Clinic + Khata — one price
            </div>
          </div>

          <div className="flex items-end justify-center gap-1.5 mb-2">
            <span className="text-[48px] font-extrabold text-foreground tracking-tight leading-none">
              ₹{annual ? bundle.annualPrice : bundle.monthlyPrice}
            </span>
            <span className="text-muted-foreground text-sm mb-2">/month</span>
          </div>
          {annual && (
            <div className="text-center text-[11px] text-muted-foreground mb-6">
              Billed annually — ₹{(bundle.annualPrice * 12).toLocaleString("en-IN")}/year
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 max-w-md mx-auto mb-6">
            {bundle.features.map((f) => (
              <div key={f.label} className="flex items-center gap-2 text-sm text-foreground">
                <CheckIcon className="size-4 text-brand shrink-0" />
                {f.label}
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-brand hover:bg-brand/90 text-brand-foreground font-semibold shadow-lg shadow-brand/20"
            >
              Start free trial
              <ArrowRightIcon className="size-4" />
            </Button>
          </div>
        </div>
      </motion.div>

      <p className="text-center text-xs text-muted-foreground mt-8">
        All plans include a 14-day free trial. No credit card required.
        Questions?{" "}
        <a href="#" className="text-brand hover:underline font-medium">
          Talk to our team
        </a>
      </p>
    </section>
  )
}