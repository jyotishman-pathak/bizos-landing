import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"
import {
  SearchIcon,
  PlusIcon,
  ArrowUpRightIcon,
  ArrowDownLeftIcon,
  PhoneIcon,
  MoreVerticalIcon,
  BellIcon,
  SunIcon,
  MoonIcon,
  HomeIcon,
  UsersIcon,
  FileTextIcon,
  BarChart3Icon,
  SettingsIcon,
  DownloadIcon,
  FilterIcon,
  ChevronsUpDownIcon,
  CheckIcon,
  ArrowLeftIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Sample data
const parties = [
  { id: 1, name: "Sharma Hardware", phone: "9876543210", balance: 12400, type: "receive", overdue: true, lastTxn: "3 days ago" },
  { id: 2, name: "Gupta Traders", phone: "9876543211", balance: 8200, type: "receive", overdue: false, lastTxn: "1 day ago" },
  { id: 3, name: "Krishna Steel", phone: "9876543212", balance: 5600, type: "pay", overdue: false, lastTxn: "5 days ago" },
  { id: 4, name: "Assam Agencies", phone: "9876543213", balance: 15800, type: "receive", overdue: true, lastTxn: "7 days ago" },
  { id: 5, name: "Bora Suppliers", phone: "9876543214", balance: 3200, type: "pay", overdue: false, lastTxn: "2 days ago" },
  { id: 6, name: "Kalita Medical", phone: "9876543215", balance: 9500, type: "receive", overdue: false, lastTxn: "4 days ago" },
]

const transactions = [
  { id: 1, date: "8 Jan", party: "Sharma Hardware", type: "sale", ref: "INV-1247", amount: 4800, debit: true },
  { id: 2, date: "5 Jan", party: "Gupta Traders", type: "receipt", ref: "REC-089", amount: 2000, debit: false },
  { id: 3, date: "3 Jan", party: "Krishna Steel", type: "purchase", ref: "PO-0312", amount: 5600, debit: false },
  { id: 4, date: "2 Jan", party: "Assam Agencies", type: "sale", ref: "INV-1231", amount: 6600, debit: true },
  { id: 5, date: "28 Dec", party: "Bora Suppliers", type: "payment", ref: "PAY-045", amount: 5000, debit: true },
  { id: 6, date: "25 Dec", party: "Kalita Medical", type: "sale", ref: "INV-1218", amount: 3200, debit: true },
]

function Sidebar() {
  const navItems = [
    { icon: <HomeIcon className="size-4" />, label: "Dashboard", active: true, href: "/dashboard/khata" },
    { icon: <UsersIcon className="size-4" />, label: "Parties", active: false, href: "#" },
    { icon: <FileTextIcon className="size-4" />, label: "Transactions", active: false, href: "#" },
    { icon: <BarChart3Icon className="size-4" />, label: "Reports", active: false, href: "#" },
    { icon: <SettingsIcon className="size-4" />, label: "Settings", active: false, href: "#" },
  ]

  return (
    <aside className="hidden lg:flex w-56 flex-col border-r border-border bg-card">
      <div className="p-4 border-b border-border">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-[6px] bg-amber-500 flex items-center justify-center">
            <span className="text-white text-sm font-bold">K</span>
          </div>
          <div>
            <span className="font-semibold text-sm text-foreground">Khata</span>
            <div className="text-[10px] text-muted-foreground">by BizOS</div>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className={cn(
              "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors",
              item.active
                ? "bg-amber-500/10 text-amber-600 font-medium"
                : "text-muted-foreground hover:bg-accent hover:text-foreground"
            )}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-3 border-t border-border">
        <div className="rounded-lg bg-muted/50 p-3">
          <div className="text-xs font-medium text-foreground mb-1">Need help?</div>
          <div className="text-[11px] text-muted-foreground leading-relaxed">
            Call us at +91 94012 XXXXX
          </div>
        </div>
      </div>
    </aside>
  )
}

function TopBar() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="h-14 border-b border-border bg-card flex items-center justify-between px-4 lg:px-6">
      <div className="flex items-center gap-3">
        <Link to="/" className="lg:hidden p-1.5 rounded-md hover:bg-accent">
          <ArrowLeftIcon className="size-5 text-muted-foreground" />
        </Link>
        <div className="lg:hidden flex items-center gap-2">
          <div className="h-7 w-7 rounded-[5px] bg-amber-500 flex items-center justify-center">
            <span className="text-white text-xs font-bold">K</span>
          </div>
          <span className="font-semibold text-sm">Khata</span>
        </div>
        <h1 className="hidden lg:block text-base font-semibold text-foreground">Dashboard</h1>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-lg hover:bg-accent transition-colors"
        >
          {theme === "dark" ? (
            <SunIcon className="size-4 text-muted-foreground" />
          ) : (
            <MoonIcon className="size-4 text-muted-foreground" />
          )}
        </button>
        <button className="p-2 rounded-lg hover:bg-accent transition-colors relative">
          <BellIcon className="size-4 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
        </button>
        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center cursor-pointer hover:bg-accent transition-colors">
          <span className="text-xs font-semibold text-muted-foreground">MS</span>
        </div>
      </div>
    </header>
  )
}

function StatCard({ label, value, subValue, trend, icon, color }: {
  label: string
  value: string
  subValue?: string
  trend?: { value: string; positive: boolean }
  icon: React.ReactNode
  color: "green" | "red" | "amber" | "blue"
}) {
  const colorClasses = {
    green: "bg-green-500/10 text-green-600",
    red: "bg-red-500/10 text-red-600",
    amber: "bg-amber-500/10 text-amber-600",
    blue: "bg-blue-500/10 text-blue-600",
  }

  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="text-xs text-muted-foreground mb-1">{label}</div>
          <div className="text-2xl font-bold text-foreground">{value}</div>
          {subValue && (
            <div className="text-[11px] text-muted-foreground mt-0.5">{subValue}</div>
          )}
          {trend && (
            <div className={cn(
              "text-[11px] font-medium mt-1",
              trend.positive ? "text-green-600" : "text-red-600"
            )}>
              {trend.value}
            </div>
          )}
        </div>
        <div className={cn("p-2 rounded-lg", colorClasses[color])}>
          {icon}
        </div>
      </div>
    </div>
  )
}

function PartyRow({ party, onClick }: { party: typeof parties[0]; onClick: () => void }) {
  return (
    <motion.button
      whileHover={{ backgroundColor: "var(--accent)" }}
      onClick={onClick}
      className="w-full flex items-center justify-between p-3 rounded-lg transition-colors text-left"
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center shrink-0">
          <span className="text-sm font-semibold text-muted-foreground">
            {party.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
          </span>
        </div>
        <div>
          <div className="text-sm font-medium text-foreground">{party.name}</div>
          <div className="flex items-center gap-2 mt-0.5">
            <PhoneIcon className="size-3 text-muted-foreground" />
            <span className="text-[11px] text-muted-foreground">{party.phone}</span>
            {party.overdue && (
              <Badge variant="outline" className="text-[9px] px-1.5 py-0 h-4 border-red-500/30 text-red-600">
                Overdue
              </Badge>
            )}
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className={cn(
          "text-sm font-bold",
          party.type === "receive" ? "text-green-600" : "text-amber-600"
        )}>
          {party.type === "receive" ? "+" : "-"}₹{party.balance.toLocaleString("en-IN")}
        </div>
        <div className="text-[10px] text-muted-foreground">
          {party.type === "receive" ? "To receive" : "To pay"} · {party.lastTxn}
        </div>
      </div>
    </motion.button>
  )
}

function TransactionRow({ txn }: { txn: typeof transactions[0] }) {
  const typeLabels: Record<string, string> = {
    sale: "Sale",
    receipt: "Receipt",
    purchase: "Purchase",
    payment: "Payment",
  }

  const typeIcons: Record<string, React.ReactNode> = {
    sale: <ArrowUpRightIcon className="size-3" />,
    receipt: <ArrowDownLeftIcon className="size-3" />,
    purchase: <ArrowDownLeftIcon className="size-3" />,
    payment: <ArrowUpRightIcon className="size-3" />,
  }

  return (
    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors">
      <div className="flex items-center gap-3">
        <div className={cn(
          "h-8 w-8 rounded-full flex items-center justify-center",
          txn.debit ? "bg-green-500/10 text-green-600" : "bg-red-500/10 text-red-600"
        )}>
          {typeIcons[txn.type]}
        </div>
        <div>
          <div className="text-sm font-medium text-foreground">{txn.party}</div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-[10px] text-muted-foreground">{txn.date}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-medium">
              {txn.ref}
            </span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className={cn(
          "text-sm font-bold",
          txn.debit ? "text-green-600" : "text-red-600"
        )}>
          {txn.debit ? "+" : "-"}₹{txn.amount.toLocaleString("en-IN")}
        </div>
        <div className="text-[10px] text-muted-foreground">{typeLabels[txn.type]}</div>
      </div>
    </div>
  )
}

function PartyDetailModal({ party, onClose }: { party: typeof parties[0]; onClose: () => void }) {
  const partyTransactions = transactions.filter(t => t.party === party.name)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        onClick={e => e.stopPropagation()}
        className="w-full max-w-md bg-card rounded-2xl border border-border shadow-2xl overflow-hidden"
      >
        <div className="p-4 border-b border-border bg-muted/30">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                <span className="text-lg font-bold text-muted-foreground">
                  {party.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                </span>
              </div>
              <div>
                <div className="font-semibold text-foreground">{party.name}</div>
                <div className="text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5">
                  <PhoneIcon className="size-3" />
                  {party.phone}
                </div>
              </div>
            </div>
            <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-accent">
              <MoreVerticalIcon className="size-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="p-4 border-b border-border">
          <div className={cn(
            "rounded-xl p-4",
            party.type === "receive" ? "bg-green-500/10" : "bg-amber-500/10"
          )}>
            <div className="text-xs text-muted-foreground mb-1">
              {party.type === "receive" ? "You will receive" : "You will pay"}
            </div>
            <div className={cn(
              "text-3xl font-bold",
              party.type === "receive" ? "text-green-600" : "text-amber-600"
            )}>
              ₹{party.balance.toLocaleString("en-IN")}
            </div>
            <div className="text-[11px] text-muted-foreground mt-1">
              Last transaction: {party.lastTxn}
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Recent Transactions
          </div>
          <div className="space-y-1">
            {partyTransactions.length > 0 ? partyTransactions.map(txn => (
              <div key={txn.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-accent transition-colors">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-muted-foreground w-12">{txn.date}</span>
                  <span className="text-xs text-foreground">{txn.ref}</span>
                </div>
                <span className={cn(
                  "text-xs font-semibold",
                  txn.debit ? "text-green-600" : "text-red-600"
                )}>
                  {txn.debit ? "+" : "-"}₹{txn.amount.toLocaleString("en-IN")}
                </span>
              </div>
            )) : (
              <div className="text-center text-sm text-muted-foreground py-4">
                No transactions yet
              </div>
            )}
          </div>
        </div>

        <div className="p-4 border-t border-border flex gap-2">
          <Button variant="outline" className="flex-1">
            Record Payment
          </Button>
          <Button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white">
            New Sale
          </Button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function KhataDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterOpen, setFilterOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState<"all" | "receive" | "pay">("all")
  const [selectedParty, setSelectedParty] = useState<typeof parties[0] | null>(null)

  const filteredParties = parties.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = activeFilter === "all" || p.type === activeFilter
    return matchesSearch && matchesFilter
  })

  const totalReceive = parties.filter(p => p.type === "receive").reduce((sum, p) => sum + p.balance, 0)
  const totalPay = parties.filter(p => p.type === "pay").reduce((sum, p) => sum + p.balance, 0)
  const overdue = parties.filter(p => p.overdue).reduce((sum, p) => sum + p.balance, 0)

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />

        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard
              label="To Receive"
              value={`₹${totalReceive.toLocaleString("en-IN")}`}
              subValue="from 4 parties"
              icon={<ArrowDownLeftIcon className="size-4" />}
              color="green"
            />
            <StatCard
              label="To Pay"
              value={`₹${totalPay.toLocaleString("en-IN")}`}
              subValue="to 2 vendors"
              icon={<ArrowUpRightIcon className="size-4" />}
              color="red"
            />
            <StatCard
              label="Overdue"
              value={`₹${overdue.toLocaleString("en-IN")}`}
              subValue="from 2 parties"
              trend={{ value: "+₹2,400 this week", positive: false }}
              icon={<BellIcon className="size-4" />}
              color="amber"
            />
            <StatCard
              label="This Month"
              value="₹3.8L"
              subValue="Credit sales"
              trend={{ value: "+12% vs last month", positive: true }}
              icon={<BarChart3Icon className="size-4" />}
              color="blue"
            />
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Parties List */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-border bg-card overflow-hidden">
                <div className="p-4 border-b border-border">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                      <Input
                        placeholder="Search parties..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="pl-9"
                      />
                    </div>
                    <div className="flex gap-2">
                      <div className="relative">
                        <Button
                          variant="outline"
                          onClick={() => setFilterOpen(!filterOpen)}
                          className="gap-1.5"
                        >
                          <FilterIcon className="size-3.5" />
                          Filter
                          <ChevronsUpDownIcon className="size-3" />
                        </Button>
                        <AnimatePresence>
                          {filterOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                              className="absolute top-full right-0 mt-1 w-36 bg-card border border-border rounded-lg shadow-lg z-10 overflow-hidden"
                            >
                              {["all", "receive", "pay"].map(filter => (
                                <button
                                  key={filter}
                                  onClick={() => {
                                    setActiveFilter(filter as typeof activeFilter)
                                    setFilterOpen(false)
                                  }}
                                  className={cn(
                                    "w-full flex items-center justify-between px-3 py-2 text-sm hover:bg-accent transition-colors",
                                    activeFilter === filter ? "bg-accent" : ""
                                  )}
                                >
                                  <span className="capitalize">{filter === "all" ? "All Parties" : filter === "receive" ? "To Receive" : "To Pay"}</span>
                                  {activeFilter === filter && <CheckIcon className="size-3.5 text-amber-600" />}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <Button className="gap-1.5 bg-amber-500 hover:bg-amber-600 text-white">
                        <PlusIcon className="size-4" />
                        Add Party
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="divide-y divide-border">
                  {filteredParties.map(party => (
                    <PartyRow
                      key={party.id}
                      party={party}
                      onClick={() => setSelectedParty(party)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="lg:col-span-1">
              <div className="rounded-xl border border-border bg-card overflow-hidden">
                <div className="p-4 border-b border-border flex items-center justify-between">
                  <h2 className="font-semibold text-foreground">Recent Transactions</h2>
                  <Button variant="ghost" size="sm" className="text-xs gap-1">
                    <DownloadIcon className="size-3" />
                    Export
                  </Button>
                </div>
                <div className="divide-y divide-border">
                  {transactions.slice(0, 5).map(txn => (
                    <TransactionRow key={txn.id} txn={txn} />
                  ))}
                </div>
                <div className="p-3 border-t border-border">
                  <Button variant="outline" className="w-full text-sm">
                    View All Transactions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <AnimatePresence>
        {selectedParty && (
          <PartyDetailModal party={selectedParty} onClose={() => setSelectedParty(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}
