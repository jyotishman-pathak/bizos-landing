

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, WifiOffIcon, ZapIcon, ShieldCheckIcon } from "lucide-react"

const modules = [
  {
    id: "restaurant",
    name: "Restaurant POS",
    color: "brand",
    url: "app.bizos.in/pos",
  },
  {
    id: "retail",
    name: "Retail & Ecommerce",
    color: "purple",
    url: "app.bizos.in/store",
  },
  {
    id: "clinic",
    name: "Clinic Management",
    color: "green",
    url: "app.bizos.in/clinic",
  },
  {
    id: "khata",
    name: "Kirana & Khata",
    color: "amber",
    url: "app.bizos.in/khata",
  },
]

function RestaurantMockup() {
  return (
    <div className="flex h-[400px]">
      {/* Left sidebar - app nav */}
      <div className="w-12 bg-[oklch(0.13_0_0)] flex flex-col items-center py-3 gap-3">
        {[
          { icon: "⊞", active: true },
          { icon: "⊙", active: false },
          { icon: "≡", active: false },
          { icon: "⊕", active: false },
        ].map((item, i) => (
          <div
            key={i}
            className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono cursor-pointer transition-colors ${
              item.active
                ? "bg-brand text-brand-foreground"
                : "text-white/30 hover:text-white/60"
            }`}
          >
            {item.icon}
          </div>
        ))}
      </div>

      {/* Menu items */}
      <div className="w-[220px] border-r border-border/60 bg-card flex flex-col">
        <div className="px-3 pt-3 pb-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Menu</span>
            <span className="text-[10px] text-brand font-medium">14 items</span>
          </div>
          <div className="flex gap-1.5 overflow-x-hidden">
            {["All", "Starters", "Mains", "Drinks"].map((cat, i) => (
              <span
                key={cat}
                className={`text-[10px] px-2 py-0.5 rounded-full font-medium shrink-0 ${
                  i === 0
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-hidden px-2 space-y-0.5">
          {[
            { name: "Butter Chicken", price: "₹180", popular: true },
            { name: "Dal Makhani", price: "₹120", popular: false },
            { name: "Garlic Naan", price: "₹40", popular: false },
            { name: "Chicken Biryani", price: "₹220", popular: true },
            { name: "Masala Chai", price: "₹30", popular: false },
            { name: "Paneer Tikka", price: "₹160", popular: false },
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between px-2 py-2 rounded-lg hover:bg-accent cursor-pointer transition-colors group"
            >
              <div>
                <div className="text-xs font-medium text-foreground leading-none">{item.name}</div>
                {item.popular && (
                  <div className="text-[9px] text-brand font-medium mt-0.5">Popular</div>
                )}
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-foreground">{item.price}</span>
                <div className="w-5 h-5 rounded-full border border-border group-hover:border-brand group-hover:bg-brand/10 flex items-center justify-center transition-colors">
                  <span className="text-[10px] text-muted-foreground group-hover:text-brand">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current bill */}
      <div className="flex-1 flex flex-col bg-background">
        <div className="px-4 pt-3 pb-2 border-b border-border/60">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Bill</span>
              <span className="text-[11px] text-muted-foreground ml-1">#B-1047</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] text-muted-foreground">Online</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-1.5">
            <div className="text-xs text-muted-foreground">Table</div>
            {["T1","T2","T3","T4","T5"].map((t, i) => (
              <div
                key={t}
                className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                  i === 1
                    ? "bg-brand text-brand-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-hidden px-4 py-2 space-y-1.5">
          {[
            { name: "Butter Chicken", qty: 1, price: 180 },
            { name: "Garlic Naan", qty: 2, price: 80 },
            { name: "Dal Makhani", qty: 1, price: 120 },
            { name: "Masala Chai", qty: 3, price: 90 },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-1.5">
              <div className="flex-1">
                <div className="text-xs font-medium text-foreground">{item.name}</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 bg-muted rounded-md px-1.5 py-0.5">
                  <button className="text-muted-foreground hover:text-foreground text-xs w-4 text-center">−</button>
                  <span className="text-xs font-semibold text-foreground w-4 text-center">{item.qty}</span>
                  <button className="text-muted-foreground hover:text-foreground text-xs w-4 text-center">+</button>
                </div>
                <span className="text-xs font-semibold text-foreground w-12 text-right">₹{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="px-4 pb-3 border-t border-border/60 pt-3 space-y-1.5">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Subtotal</span>
            <span>₹470</span>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>GST (5%)</span>
            <span>₹23.50</span>
          </div>
          <div className="flex justify-between text-sm font-bold text-foreground pt-1.5 border-t border-border/60">
            <span>Total</span>
            <span>₹493.50</span>
          </div>
          <div className="flex gap-2 pt-1">
            <button className="flex-1 text-[11px] py-2 rounded-lg bg-muted text-muted-foreground font-medium hover:bg-accent transition-colors">
              Print
            </button>
            <button className="flex-1 text-[11px] py-2 rounded-lg bg-brand text-brand-foreground font-semibold hover:bg-brand/90 transition-colors">
              Collect ₹493.50
            </button>
          </div>
        </div>
      </div>

      {/* Right stats panel */}
      <div className="w-[140px] border-l border-border/60 bg-muted/30 p-3 space-y-3">
        <div>
          <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mb-1.5">Today</div>
          <div className="text-lg font-bold text-foreground">₹24,830</div>
          <div className="text-[10px] text-green-600 font-medium">+12% vs yesterday</div>
        </div>

        <div className="space-y-1.5">
          <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Recent</div>
          {[
            { table: "T3", amount: "₹620", time: "2m" },
            { table: "T7", amount: "₹385", time: "8m" },
            { table: "T1", amount: "₹1,240", time: "14m" },
          ].map((r) => (
            <div key={r.table} className="flex items-center justify-between">
              <div>
                <div className="text-[11px] font-medium text-foreground">{r.amount}</div>
                <div className="text-[9px] text-muted-foreground">{r.table} · {r.time} ago</div>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/70" />
            </div>
          ))}
        </div>

        <div className="pt-1 border-t border-border/60">
          <div className="text-[10px] text-muted-foreground font-medium mb-1">Bills today</div>
          <div className="text-2xl font-bold text-foreground">47</div>
        </div>
      </div>
    </div>
  )
}

function RetailMockup() {
  return (
    <div className="flex h-[400px]">
      {/* Left sidebar */}
      <div className="w-12 bg-[oklch(0.13_0_0)] flex flex-col items-center py-3 gap-3">
        {[
          { icon: "⊞", active: false },
          { icon: "⊙", active: true },
          { icon: "≡", active: false },
          { icon: "⊕", active: false },
        ].map((item, i) => (
          <div
            key={i}
            className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono cursor-pointer transition-colors ${
              item.active
                ? "bg-purple-500 text-white"
                : "text-white/30 hover:text-white/60"
            }`}
          >
            {item.icon}
          </div>
        ))}
      </div>

      {/* Product catalog */}
      <div className="w-[280px] border-r border-border/60 bg-card flex flex-col">
        <div className="px-3 pt-3 pb-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Products</span>
            <span className="text-[10px] text-purple-600 font-medium">248 items</span>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full text-[11px] px-3 py-1.5 rounded-md bg-muted border border-border/60 text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div className="flex gap-1.5 px-3 pb-2">
          {["All", "Men", "Women", "Kids"].map((cat, i) => (
            <span
              key={cat}
              className={`text-[10px] px-2 py-0.5 rounded-full font-medium shrink-0 ${
                i === 0
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="flex-1 overflow-hidden px-2 space-y-1">
          {[
            { name: "Cotton Kurta (M)", sku: "KT-001", stock: 23, price: "₹890" },
            { name: "Silk Saree - Red", sku: "SR-042", stock: 8, price: "₹2,450" },
            { name: "Kids Sherwani", sku: "KSH-018", stock: 15, price: "₹1,200" },
            { name: "Designer Blouse", sku: "BL-089", stock: 42, price: "₹650" },
            { name: "Linen Shirt (L)", sku: "LS-055", stock: 31, price: "₹780" },
          ].map((item) => (
            <div
              key={item.sku}
              className="flex items-center justify-between px-2 py-2 rounded-lg hover:bg-accent cursor-pointer transition-colors group"
            >
              <div className="flex-1">
                <div className="text-xs font-medium text-foreground">{item.name}</div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[9px] text-muted-foreground">{item.sku}</span>
                  <span className="text-[9px] text-green-600">{item.stock} in stock</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-foreground">{item.price}</span>
                <div className="w-5 h-5 rounded-full border border-border group-hover:border-purple-500 group-hover:bg-purple-500/10 flex items-center justify-center transition-colors">
                  <span className="text-[10px] text-muted-foreground group-hover:text-purple-600">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart */}
      <div className="flex-1 flex flex-col bg-background">
        <div className="px-4 pt-3 pb-2 border-b border-border/60">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Cart</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-600 font-medium">3 items</span>
            </div>
            <button className="text-[10px] text-muted-foreground hover:text-foreground">Clear</button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden px-4 py-2 space-y-2">
          {[
            { name: "Cotton Kurta (M)", qty: 2, price: 1780 },
            { name: "Silk Saree - Red", qty: 1, price: 2450 },
            { name: "Kids Sherwani", qty: 1, price: 1200 },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-border/40">
              <div className="flex-1">
                <div className="text-xs font-medium text-foreground">{item.name}</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-muted rounded px-1.5 py-0.5">
                  <button className="text-muted-foreground text-xs w-4">−</button>
                  <span className="text-xs font-semibold text-foreground w-4 text-center">{item.qty}</span>
                  <button className="text-muted-foreground text-xs w-4">+</button>
                </div>
                <span className="text-xs font-semibold text-foreground w-16 text-right">₹{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="px-4 pb-3 border-t border-border/60 pt-3 space-y-1.5">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Subtotal</span>
            <span>₹5,430</span>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Discount (5%)</span>
            <span className="text-green-600">-₹271.50</span>
          </div>
          <div className="flex justify-between text-sm font-bold text-foreground pt-1.5 border-t border-border/60">
            <span>Total</span>
            <span>₹5,158.50</span>
          </div>
          <div className="flex gap-2 pt-1">
            <button className="flex-1 text-[11px] py-2 rounded-lg bg-muted text-muted-foreground font-medium hover:bg-accent transition-colors">
              Hold
            </button>
            <button className="flex-1 text-[11px] py-2 rounded-lg bg-purple-500 text-white font-semibold hover:bg-purple-600 transition-colors">
              Pay ₹5,158.50
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="w-[140px] border-l border-border/60 bg-muted/30 p-3 space-y-3">
        <div>
          <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mb-1.5">Today</div>
          <div className="text-lg font-bold text-foreground">₹18,450</div>
          <div className="text-[10px] text-green-600 font-medium">+8% vs yesterday</div>
        </div>

        <div className="space-y-1.5">
          <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Orders</div>
          {[
            { id: "#127", amount: "₹3,200", status: "Paid" },
            { id: "#126", amount: "₹1,890", status: "Pending" },
            { id: "#125", amount: "₹4,100", status: "Paid" },
          ].map((o) => (
            <div key={o.id} className="flex items-center justify-between">
              <div>
                <div className="text-[11px] font-medium text-foreground">{o.amount}</div>
                <div className="text-[9px] text-muted-foreground">{o.id}</div>
              </div>
              <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                o.status === "Paid" ? "bg-green-500/10 text-green-600" : "bg-amber-500/10 text-amber-600"
              }`}>
                {o.status}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-1 border-t border-border/60">
          <div className="text-[10px] text-muted-foreground font-medium mb-1">Online orders</div>
          <div className="text-2xl font-bold text-foreground">12</div>
        </div>
      </div>
    </div>
  )
}

function ClinicMockup() {
  return (
    <div className="flex h-[400px]">
      {/* Left sidebar */}
      <div className="w-12 bg-[oklch(0.13_0_0)] flex flex-col items-center py-3 gap-3">
        {[
          { icon: "⊞", active: false },
          { icon: "⊙", active: false },
          { icon: "≡", active: true },
          { icon: "⊕", active: false },
        ].map((item, i) => (
          <div
            key={i}
            className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono cursor-pointer transition-colors ${
              item.active
                ? "bg-green-600 text-white"
                : "text-white/30 hover:text-white/60"
            }`}
          >
            {item.icon}
          </div>
        ))}
      </div>

      {/* Appointments */}
      <div className="w-[240px] border-r border-border/60 bg-card flex flex-col">
        <div className="px-3 pt-3 pb-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Today</span>
            <span className="text-[10px] text-green-600 font-medium">8 appointments</span>
          </div>
          <div className="text-xs text-muted-foreground">Monday, 8 Jan 2025</div>
        </div>

        <div className="flex-1 overflow-hidden px-2 space-y-1">
          {[
            { time: "9:00", name: "Rahul Das", type: "Checkup", status: "completed" },
            { time: "9:30", name: "Anita Sharma", type: "Follow-up", status: "completed" },
            { time: "10:00", name: "Vikram Borah", type: "Cleaning", status: "in-progress" },
            { time: "10:30", name: "Meera Kalita", type: "Consultation", status: "upcoming" },
            { time: "11:00", name: "Deepak Agarwal", type: "Root Canal", status: "upcoming" },
          ].map((apt, i) => (
            <div
              key={i}
              className={`px-2 py-2 rounded-lg cursor-pointer transition-colors ${
                apt.status === "in-progress"
                  ? "bg-green-500/10 border border-green-500/30"
                  : apt.status === "completed"
                    ? "bg-muted/50"
                    : "hover:bg-accent"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold text-foreground">{apt.time}</span>
                {apt.status === "in-progress" && (
                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-green-500 text-white font-medium">NOW</span>
                )}
              </div>
              <div className="text-xs font-medium text-foreground mt-0.5">{apt.name}</div>
              <div className="text-[10px] text-muted-foreground">{apt.type}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Patient details */}
      <div className="flex-1 flex flex-col bg-background">
        <div className="px-4 pt-3 pb-2 border-b border-border/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
              <span className="text-sm font-bold text-muted-foreground">VB</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">Vikram Borah</div>
              <div className="text-[10px] text-muted-foreground">Male, 34 yrs · Patient ID: P-1032</div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-hidden px-4 py-3 space-y-3">
          <div>
            <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Current Visit</div>
            <div className="bg-muted/50 rounded-lg p-3 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Treatment</span>
                <span className="font-medium text-foreground">Teeth Cleaning</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Duration</span>
                <span className="font-medium text-foreground">30 min</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Notes</span>
                <span className="font-medium text-foreground text-right max-w-[140px]">Routine cleaning, no cavities found</span>
              </div>
            </div>
          </div>

          <div>
            <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Last 3 Visits</div>
            <div className="space-y-1">
              {[
                { date: "15 Dec 2024", treatment: "Filling", amount: "₹800" },
                { date: "2 Nov 2024", treatment: "Checkup", amount: "₹300" },
                { date: "18 Sep 2024", treatment: "Scaling", amount: "₹600" },
              ].map((v, i) => (
                <div key={i} className="flex items-center justify-between text-[11px] py-1">
                  <span className="text-muted-foreground">{v.date}</span>
                  <span className="text-foreground">{v.treatment}</span>
                  <span className="font-medium text-foreground">{v.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-4 pb-3 border-t border-border/60 pt-3 space-y-2">
          <div className="flex justify-between text-sm font-bold text-foreground">
            <span>Today's Fee</span>
            <span>₹500</span>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 text-[11px] py-2 rounded-lg bg-muted text-muted-foreground font-medium hover:bg-accent transition-colors">
              Reschedule
            </button>
            <button className="flex-1 text-[11px] py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors">
              Complete Visit
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="w-[140px] border-l border-border/60 bg-muted/30 p-3 space-y-3">
        <div>
          <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mb-1.5">This Week</div>
          <div className="text-lg font-bold text-foreground">42 patients</div>
          <div className="text-[10px] text-green-600 font-medium">+15% vs last week</div>
        </div>

        <div className="space-y-1.5">
          <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Revenue</div>
          <div className="text-lg font-bold text-foreground">₹38,200</div>
          <div className="text-[10px] text-muted-foreground">This week</div>
        </div>

        <div className="pt-1 border-t border-border/60 space-y-1">
          <div className="text-[10px] text-muted-foreground font-medium">No-show rate</div>
          <div className="flex items-center gap-2">
            <div className="text-lg font-bold text-foreground">4%</div>
            <span className="text-[9px] text-green-600">Down from 12%</span>
          </div>
        </div>

        <div className="pt-1 border-t border-border/60">
          <div className="text-[10px] text-muted-foreground font-medium mb-1">WhatsApp sent</div>
          <div className="text-lg font-bold text-foreground">156</div>
        </div>
      </div>
    </div>
  )
}

function KhataMockup() {
  return (
    <div className="flex h-[400px]">
      {/* Left sidebar */}
      <div className="w-12 bg-[oklch(0.13_0_0)] flex flex-col items-center py-3 gap-3">
        {[
          { icon: "⊞", active: false },
          { icon: "⊙", active: false },
          { icon: "≡", active: false },
          { icon: "⊕", active: true },
        ].map((item, i) => (
          <div
            key={i}
            className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono cursor-pointer transition-colors ${
              item.active
                ? "bg-amber-500 text-white"
                : "text-white/30 hover:text-white/60"
            }`}
          >
            {item.icon}
          </div>
        ))}
      </div>

      {/* Party ledger */}
      <div className="w-[240px] border-r border-border/60 bg-card flex flex-col">
        <div className="px-3 pt-3 pb-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Parties</span>
            <span className="text-[10px] text-amber-600 font-medium">47 accounts</span>
          </div>
          <div className="flex gap-1.5">
            {["All", "To Receive", "To Pay"].map((cat, i) => (
              <span
                key={cat}
                className={`text-[9px] px-2 py-0.5 rounded-full font-medium shrink-0 ${
                  i === 0
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-hidden px-2 space-y-0.5">
          {[
            { name: "Sharma Hardware", balance: "₹12,400", type: "receive", overdue: true },
            { name: "Gupta Traders", balance: "₹8,200", type: "receive", overdue: false },
            { name: "Krishna Steel", balance: "₹5,600", type: "pay", overdue: false },
            { name: "Assam Agencies", balance: "₹15,800", type: "receive", overdue: true },
            { name: "Bora Suppliers", balance: "₹3,200", type: "pay", overdue: false },
          ].map((party) => (
            <div
              key={party.name}
              className="flex items-center justify-between px-2 py-2 rounded-lg hover:bg-accent cursor-pointer transition-colors"
            >
              <div>
                <div className="text-xs font-medium text-foreground">{party.name}</div>
                {party.overdue && (
                  <div className="text-[9px] text-red-600 font-medium">Overdue</div>
                )}
              </div>
              <div className="text-right">
                <div className={`text-xs font-semibold ${party.type === "receive" ? "text-green-600" : "text-amber-600"}`}>
                  {party.balance}
                </div>
                <div className="text-[9px] text-muted-foreground">
                  {party.type === "receive" ? "To receive" : "To pay"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction details */}
      <div className="flex-1 flex flex-col bg-background">
        <div className="px-4 pt-3 pb-2 border-b border-border/60">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-foreground">Sharma Hardware</div>
              <div className="text-[10px] text-muted-foreground">Last transaction: 3 days ago</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-green-600">₹12,400</div>
              <div className="text-[10px] text-muted-foreground">To receive</div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-hidden px-4 py-2 space-y-1">
          <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Recent Transactions</div>
          {[
            { date: "5 Jan", type: "Sale", ref: "INV-1247", amount: "₹4,800", debit: true },
            { date: "2 Jan", type: "Receipt", ref: "REC-089", amount: "₹2,000", debit: false },
            { date: "28 Dec", type: "Sale", ref: "INV-1231", amount: "₹6,600", debit: true },
            { date: "20 Dec", type: "Receipt", ref: "REC-082", amount: "₹5,000", debit: false },
          ].map((tx, i) => (
            <div key={i} className="flex items-center justify-between py-1.5 border-b border-border/40">
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-muted-foreground w-12">{tx.date}</span>
                <div>
                  <div className="text-xs font-medium text-foreground">{tx.type}</div>
                  <div className="text-[9px] text-muted-foreground">{tx.ref}</div>
                </div>
              </div>
              <span className={`text-xs font-semibold ${tx.debit ? "text-green-600" : "text-amber-600"}`}>
                {tx.debit ? "+" : "-"}{tx.amount}
              </span>
            </div>
          ))}
        </div>

        <div className="px-4 pb-3 border-t border-border/60 pt-3 space-y-2">
          <div className="flex gap-2">
            <button className="flex-1 text-[11px] py-2 rounded-lg bg-muted text-muted-foreground font-medium hover:bg-accent transition-colors">
              Record Payment
            </button>
            <button className="flex-1 text-[11px] py-2 rounded-lg bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors">
              New Sale
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="w-[140px] border-l border-border/60 bg-muted/30 p-3 space-y-3">
        <div>
          <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mb-1.5">Overview</div>
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-muted-foreground">To receive</span>
              <span className="text-xs font-bold text-green-600">₹1.24L</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-muted-foreground">To pay</span>
              <span className="text-xs font-bold text-amber-600">₹48,600</span>
            </div>
          </div>
        </div>

        <div className="pt-1 border-t border-border/60 space-y-1">
          <div className="text-[10px] text-muted-foreground font-medium">Overdue</div>
          <div className="text-lg font-bold text-red-600">₹28,200</div>
          <div className="text-[9px] text-muted-foreground">From 3 parties</div>
        </div>

        <div className="pt-1 border-t border-border/60 space-y-1">
          <div className="text-[10px] text-muted-foreground font-medium mb-1">This month</div>
          <div className="text-lg font-bold text-foreground">₹3.8L</div>
          <div className="text-[10px] text-muted-foreground">Credit sales</div>
        </div>

        <div className="pt-1 border-t border-border/60">
          <div className="text-[10px] text-muted-foreground font-medium mb-1">Collections</div>
          <div className="text-lg font-bold text-foreground">₹2.1L</div>
        </div>
      </div>
    </div>
  )
}

const mockups = [RestaurantMockup, RetailMockup, ClinicMockup, KhataMockup]

function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % modules.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const ActiveMockup = mockups[activeIndex]
  const activeModule = modules[activeIndex]

  return (
    <div className="relative w-full max-w-[800px] mx-auto select-none">
      {/* Glow behind */}
      <div className="absolute inset-0 -z-10 rounded-3xl bg-brand/8 blur-3xl scale-90 translate-y-4" />

      {/* Module tabs */}
      <div className="flex justify-center gap-2 mb-4">
        {modules.map((mod, i) => (
          <button
            key={mod.id}
            onClick={() => {
              setActiveIndex(i)
              setIsAutoPlaying(false)
            }}
            className={`text-[11px] px-3 py-1.5 rounded-full font-medium transition-all ${
              i === activeIndex
                ? mod.color === "brand"
                  ? "bg-brand text-brand-foreground"
                  : mod.color === "purple"
                    ? "bg-purple-500 text-white"
                    : mod.color === "green"
                      ? "bg-green-600 text-white"
                      : "bg-amber-500 text-white"
                : "bg-muted text-muted-foreground hover:bg-accent"
            }`}
          >
            {mod.name}
          </button>
        ))}
      </div>

      {/* Browser chrome */}
      <motion.div
        layout
        className="rounded-2xl border border-border/80 bg-card shadow-2xl overflow-hidden"
      >
        {/* Browser bar */}
        <div className="flex items-center gap-3 px-4 h-10 bg-muted/50 border-b border-border/60">
          <div className="flex gap-1.5">
            <div className="size-3 rounded-full bg-destructive/70" />
            <div className="size-3 rounded-full bg-yellow-400/70" />
            <div className="size-3 rounded-full bg-green-500/70" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-1.5 bg-background rounded-md px-3 py-1 text-xs text-muted-foreground border border-border/60 w-56">
              <ShieldCheckIcon className="size-2.5 text-green-500" />
              {activeModule.url}
            </div>
          </div>
        </div>

        {/* Mockup content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ActiveMockup />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Progress indicators */}
      <div className="flex justify-center gap-1.5 mt-4">
        {modules.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveIndex(i)
              setIsAutoPlaying(false)
            }}
            className="group relative h-1.5 w-8 rounded-full bg-muted overflow-hidden"
          >
            <motion.div
              className="absolute inset-y-0 left-0 bg-brand rounded-full"
              initial={{ width: "0%" }}
              animate={{
                width: i === activeIndex && isAutoPlaying ? "100%" : "0%",
              }}
              transition={{
                duration: isAutoPlaying && i === activeIndex ? 5 : 0,
                ease: "linear",
              }}
            />
            <div
              className={`absolute inset-0 rounded-full transition-colors ${
                i === activeIndex ? "bg-brand/20" : "group-hover:bg-accent"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

function FadeUp({ delay = 0, children, className }: { delay?: number; children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Top gradient fade */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Announcement pill */}
        <FadeUp delay={0} className="flex justify-center mb-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand/30 bg-brand-muted text-brand text-xs font-medium hover:border-brand/60 transition-colors"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-brand" />
            Now serving 1,200+ businesses across Northeast India
            <ArrowRightIcon className="size-3" />
          </a>
        </FadeUp>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.5, ease: "easeOut" }}
            className="text-[44px] sm:text-[56px] md:text-[68px] font-extrabold text-foreground tracking-[-0.03em] leading-[0.95] text-balance"
          >
            One platform.
            <br />
            <span className="text-brand">Every counter</span> in India.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.5, ease: "easeOut" }}
            className="mt-6 text-[17px] md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-balance"
          >
            Four powerful modules — Restaurant POS, Retail, Clinic, and Khata.{" "}
            <span className="text-foreground font-medium">Buy only what you need.</span>
            {" "}Each one works standalone or together. Works offline.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.5, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button
              size="lg"
              className="bg-brand hover:bg-brand/90 text-brand-foreground font-semibold h-11 px-6 shadow-lg shadow-brand/20"
            >
              Start free — 14 days
              <ArrowRightIcon className="size-4" />
            </Button>
            <Button variant="outline" size="lg" className="h-11 px-6 font-medium">
              See how it works
            </Button>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.5, ease: "easeOut" }}
            className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <WifiOffIcon className="size-3.5" />
              Works 100% offline
            </span>
            <span className="text-border">·</span>
            <span className="flex items-center gap-1.5">
              <ZapIcon className="size-3.5" />
              Live in under 10 minutes
            </span>
            <span className="text-border">·</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheckIcon className="size-3.5" />
              No annual contract
            </span>
          </motion.div>
        </div>

        {/* Product gallery */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
          className="mt-16 md:mt-20"
        >
          <ProductGallery />
        </motion.div>
      </div>
    </section>
  )
}
