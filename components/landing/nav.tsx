import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import {
  ChevronDownIcon,
  MenuIcon,
  XIcon,
} from "lucide-react"
import { ModeToggle } from "../mode-toggle"

const navLinks = [
  {
    label: "Product",
    children: [
      { label: "Restaurant POS", description: "Offline billing, kitchen display, table management" },
      { label: "Retail & Ecommerce", description: "Online storefront, inventory, barcode POS" },
      { label: "Clinic Management", description: "Appointments, prescriptions, patient records" },
      { label: "Kirana & Steel", description: "Khata ledger, GST invoices, party management" },
    ],
  },
  {
    label: "Solutions",
    children: [
      { label: "For Restaurants", description: "Works offline, prints bills, tracks expenses" },
      { label: "For Retailers", description: "Sell online + in-store from one dashboard" },
      { label: "For Clinics", description: "ABDM-ready patient records and billing" },
      { label: "For Wholesalers", description: "Purchase orders, party ledgers, GSTR-1" },
    ],
  },
  { label: "Pricing" },
  { label: "Resources" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <div className="h-7 w-7 rounded-[6px] bg-brand flex items-center justify-center">
              <span className="text-brand-foreground text-xs font-bold tracking-tight">B</span>
            </div>
            <span className="font-semibold text-[15px] text-foreground tracking-tight">
              BizOS
            </span>
            <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4 font-medium">
              BETA
            </Badge>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDownIcon className={cn(
                      "size-3.5 transition-transform duration-200",
                      activeDropdown === link.label && "rotate-180"
                    )} />
                  )}
                </button>

                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-72 rounded-xl border border-border bg-popover shadow-xl overflow-hidden"
                    >
                      <div className="p-1.5">
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href="#"
                            className="flex flex-col gap-0.5 px-3 py-2.5 rounded-lg hover:bg-accent transition-colors"
                          >
                            <span className="text-sm font-medium text-foreground">
                              {child.label}
                            </span>
                            <span className="text-xs text-muted-foreground leading-relaxed">
                              {child.description}
                            </span>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-2">
           <ModeToggle />
          
            <Button variant="ghost" size="sm" className="text-sm font-medium">
              Sign in
            </Button>
            <Button
              size="sm"
              className="bg-brand hover:bg-brand/90 text-brand-foreground text-sm font-medium shadow-sm"
            >
              Start free trial
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href="#"
                  className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <Button variant="outline" className="w-full">Sign in</Button>
                <Button className="w-full bg-brand hover:bg-brand/90 text-brand-foreground">
                  Start free trial
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
