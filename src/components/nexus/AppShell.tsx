import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  LayoutGrid, Activity, Map, Sparkles, BarChart3, Users, MapPin, Boxes,
  Store, FolderKanban, Wallet, Handshake, Radio, Gauge, Target,
  FileText, Bot, Settings, Search, Bell, Globe2, ChevronDown, Hexagon,
} from "lucide-react";
import avatar from "@/assets/avatar.jpg";

type NavItem = { label: string; to?: string; icon: React.ComponentType<{ className?: string }>; disabled?: boolean };
type NavGroup = { title: string; items: NavItem[] };

const NAV: NavGroup[] = [
  { title: "", items: [{ label: "Overview", to: "/", icon: LayoutGrid }] },
  { title: "Intelligence", items: [
    { label: "Signals & Early Warnings", to: "/signals", icon: Activity },
    { label: "Risk & Fragility Map", to: "/risk-map", icon: Map },
    { label: "Predictions", icon: Sparkles, disabled: true },
    { label: "Impact Intelligence", icon: BarChart3, disabled: true },
  ]},
  { title: "Communities", items: [
    { label: "Community Network", icon: Users, disabled: true },
    { label: "Local Priorities", icon: MapPin, disabled: true },
    { label: "Community Assets", icon: Boxes, disabled: true },
    { label: "Capacity Marketplace", icon: Store, disabled: true },
  ]},
  { title: "Action & Projects", items: [
    { label: "Projects", icon: FolderKanban, disabled: true },
    { label: "Funding & Allocation", icon: Wallet, disabled: true },
    { label: "Partners & Stakeholders", icon: Handshake, disabled: true },
    { label: "Field Operations", icon: Radio, disabled: true },
  ]},
  { title: "Monitoring & Impact", items: [
    { label: "Impact Dashboard", icon: Gauge, disabled: true },
    { label: "Results & Outcomes", icon: Target, disabled: true },
    { label: "Stories & Evidence", icon: FileText, disabled: true },
  ]},
  { title: "System", items: [
    { label: "AI Copilot", icon: Bot, disabled: true },
    { label: "Reports", icon: FileText, disabled: true },
    { label: "Settings", icon: Settings, disabled: true },
  ]},
];

export function AppShell({
  children,
  title,
  subtitle,
  actions,
}: {
  children: ReactNode;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen grid-bg text-foreground">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-72 shrink-0 border-r border-white/5 bg-[oklch(0.13_0.03_262/0.6)] backdrop-blur-xl">
          <div className="px-6 pt-6 pb-8">
            <Link to="/" className="flex items-start gap-3 group">
              <div className="relative shrink-0">
                <Hexagon className="w-9 h-9 text-cyan animate-drift" strokeWidth={1.25} />
                <div className="absolute inset-0 blur-lg opacity-60 bg-cyan/40 rounded-full" />
              </div>
              <div className="leading-tight">
                <div className="text-[13px] font-bold tracking-[0.25em] text-glow-cyan text-cyan">HUMANITY</div>
                <div className="text-[13px] font-bold tracking-[0.25em] text-glow-cyan text-cyan -mt-0.5">NEXUS</div>
                <div className="text-[10px] text-muted-foreground mt-1 leading-tight max-w-[180px]">
                  Community-Powered.<br/>Data-Intelligent. Impact-Driven.
                </div>
              </div>
            </Link>
          </div>

          <nav className="px-3 pb-8 space-y-6">
            {NAV.map((group) => (
              <div key={group.title || "top"}>
                {group.title && (
                  <div className="px-3 mb-2 text-[10px] font-semibold tracking-[0.22em] text-muted-foreground/70">
                    {group.title.toUpperCase()}
                  </div>
                )}
                <ul className="space-y-0.5">
                  {group.items.map((item) => {
                    const active = item.to && pathname === item.to;
                    const Icon = item.icon;
                    const inner = (
                      <div
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                          active
                            ? "bg-gradient-to-r from-cyan/15 to-violet/10 text-foreground border border-cyan/25 shadow-[0_0_20px_-8px_var(--neon-cyan)]"
                            : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                        } ${item.disabled ? "opacity-60 cursor-not-allowed" : ""}`}
                      >
                        <Icon className={`w-4 h-4 ${active ? "text-cyan" : ""}`} />
                        <span className="truncate">{item.label}</span>
                      </div>
                    );
                    return (
                      <li key={item.label}>
                        {item.to && !item.disabled ? <Link to={item.to}>{inner}</Link> : inner}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>

          <div className="mx-4 mb-4 glass-panel p-4">
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-widest text-cyan">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-emerald animate-pulse-dot" />
                <span className="relative rounded-full bg-emerald w-2 h-2" />
              </span>
              SYSTEM STATUS
            </div>
            <div className="mt-2 text-xs text-emerald text-glow-emerald font-medium">◆ OPERATIONAL</div>
            <div className="mt-1 text-[11px] text-muted-foreground">All systems running smoothly</div>
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1 min-w-0 flex flex-col">
          {/* Topbar */}
          <header className="sticky top-0 z-20 flex items-center gap-4 px-8 py-4 border-b border-white/5 bg-[oklch(0.14_0.03_262/0.65)] backdrop-blur-xl">
            <div className="flex-1 max-w-xl">
              <div className="flex items-center gap-2 px-4 h-10 rounded-xl bg-white/5 border border-white/10 text-sm text-muted-foreground">
                <Search className="w-4 h-4" />
                <span className="flex-1">Search communities, insights, projects...</span>
                <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 border border-white/10">⌘K</kbd>
              </div>
            </div>
            {actions}
            <button className="relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 text-[10px] w-4 h-4 rounded-full bg-crimson text-white flex items-center justify-center font-semibold">3</span>
            </button>
            <button className="flex items-center gap-2 px-3 h-10 rounded-xl bg-white/5 border border-white/10 text-sm hover:bg-white/10">
              <Globe2 className="w-4 h-4" /> EN <ChevronDown className="w-3 h-3" />
            </button>
            <div className="flex items-center gap-3 pl-3 border-l border-white/10">
              <img src={avatar} alt="Amina Okello" className="w-10 h-10 rounded-full object-cover ring-2 ring-cyan/40" />
              <div className="text-right">
                <div className="text-sm font-semibold">Amina Okello</div>
                <div className="text-[11px] text-muted-foreground">Global Coordinator</div>
              </div>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
          </header>

          {/* Page title */}
          <div className="px-8 pt-6 pb-2">
            <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
            {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
          </div>

          <main className="px-8 pb-8 flex-1">{children}</main>

          <footer className="px-8 py-5 border-t border-white/5 flex flex-wrap items-center gap-x-8 gap-y-2 text-[11px] text-muted-foreground">
            {["Community Powered","Data Intelligent","Predictive","Transparent","Ethical AI","Privacy by Design","Open Standards","Climate Resilient","Human-Centered","Local Ownership"].map(p => (
              <span key={p} className="inline-flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-cyan/60" /> {p}
              </span>
            ))}
            <span className="ml-auto">© 2026 Humanity Nexus Platform</span>
          </footer>
        </div>
      </div>
    </div>
  );
}

export function Panel({ children, className = "", title, action }: { children: ReactNode; className?: string; title?: string; action?: ReactNode }) {
  return (
    <div className={`glass-panel p-5 ${className}`}>
      {(title || action) && (
        <div className="flex items-center justify-between mb-4">
          {title && <h3 className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">{title}</h3>}
          {action}
        </div>
      )}
      {children}
    </div>
  );
}

export function StatCard({
  label, value, delta, accent = "cyan", icon: Icon,
}: {
  label: string; value: string; delta?: string;
  accent?: "cyan" | "emerald" | "violet" | "amber" | "crimson";
  icon?: React.ComponentType<{ className?: string }>;
}) {
  const accentMap = {
    cyan: "text-cyan text-glow-cyan",
    emerald: "text-emerald text-glow-emerald",
    violet: "text-violet text-glow-violet",
    amber: "text-amber text-glow-amber",
    crimson: "text-crimson text-glow-crimson",
  } as const;
  const bgMap = {
    cyan: "from-cyan/20 to-cyan/0",
    emerald: "from-emerald/20 to-emerald/0",
    violet: "from-violet/20 to-violet/0",
    amber: "from-amber/20 to-amber/0",
    crimson: "from-crimson/20 to-crimson/0",
  } as const;
  return (
    <div className="glass-panel p-4 relative overflow-hidden">
      <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${bgMap[accent]} blur-2xl`} />
      <div className="flex items-start gap-3 relative">
        {Icon && (
          <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${accentMap[accent]}`}>
            <Icon className="w-5 h-5" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">{label}</div>
          <div className={`text-2xl font-bold mt-1 ${accentMap[accent]}`}>{value}</div>
          {delta && <div className="text-[11px] text-emerald mt-0.5">▲ {delta}</div>}
        </div>
      </div>
    </div>
  );
}
