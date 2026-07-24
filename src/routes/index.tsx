import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Panel, StatCard } from "@/components/nexus/AppShell";
import globe from "@/assets/globe.jpg";
import aiOrb from "@/assets/ai-orb.jpg";
import { Wallet, FolderKanban, Heart, Users2, ShieldCheck, Droplet, Sun, Wheat, Activity, TrendingUp } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Humanity Nexus" },
      { name: "description", content: "AI-powered global humanitarian intelligence: live signals, risk maps, and impact analytics." },
      { property: "og:title", content: "Humanity Nexus" },
      { property: "og:description", content: "AI-powered global humanitarian intelligence: live signals, risk maps, and impact analytics." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Overview,
});

const impactData = [
  { name: "Health & Nutrition", value: 4200000, color: "var(--neon-violet)" },
  { name: "Water & Sanitation", value: 3600000, color: "var(--neon-cyan)" },
  { name: "Education", value: 2500000, color: "var(--neon-amber)" },
  { name: "Protection", value: 1400000, color: "var(--neon-emerald)" },
  { name: "Livelihoods", value: 1100000, color: "var(--neon-crimson)" },
];

const alerts = [
  { icon: Droplet, color: "cyan", title: "Flood Risk Increase", loc: "Turkana County, Kenya", note: "High probability in 7 days", level: "HIGH", levelColor: "crimson" },
  { icon: Sun, color: "amber", title: "Disease Outbreak Risk", loc: "Kono District, Sierra Leone", note: "Moderate probability", level: "MEDIUM", levelColor: "amber" },
  { icon: Wheat, color: "emerald", title: "Food Insecurity Rising", loc: "Mogadishu Region, Somalia", note: "High probability in 14 days", level: "HIGH", levelColor: "crimson" },
] as const;

const priorities = [
  { rank: 1, name: "Clean Water Access", cmt: "1,245 communities", pct: 88, color: "var(--neon-cyan)" },
  { rank: 2, name: "Food Security", cmt: "982 communities", pct: 72, color: "var(--neon-emerald)" },
  { rank: 3, name: "Quality Education", cmt: "873 communities", pct: 65, color: "var(--neon-amber)" },
  { rank: 4, name: "Maternal & Child Health", cmt: "754 communities", pct: 58, color: "var(--neon-violet)" },
  { rank: 5, name: "Livelihood Support", cmt: "612 communities", pct: 47, color: "var(--neon-crimson)" },
];

const feed = [
  { color: "cyan", title: "New community signal", note: "Water shortage reported", meta: "Baringo County, Kenya", ago: "2 min ago" },
  { color: "emerald", title: "Project update verified", note: "Solar Water Project", meta: "Marsabit County, Kenya", ago: "15 min ago" },
  { color: "amber", title: "Funds disbursed", note: "$250,000 to 12 projects", meta: "Across 5 regions", ago: "32 min ago" },
  { color: "violet", title: "New partnership", note: "Local NGO Alliance", meta: "Strengthening capacity", ago: "1 hour ago" },
] as const;

const featured = [
  { tag: "HEALTH", tagColor: "crimson", title: "Mobile Clinic Initiative", loc: "Gulu District, Uganda", impact: "32,540 people", pct: 78, funded: "$82,000 of $105,000", days: "12 days left" },
  { tag: "WASH", tagColor: "cyan", title: "Clean Water for All", loc: "Katsina State, Nigeria", impact: "18,230 people", pct: 64, funded: "$54,000 of $85,000", days: "8 days left" },
  { tag: "EDUCATION", tagColor: "amber", title: "Girls Education Support", loc: "Rasuwa, Nepal", impact: "9,850 girls", pct: 71, funded: "$36,000 of $50,000", days: "15 days left" },
  { tag: "LIVELIHOODS", tagColor: "emerald", title: "Farmers Resilience Program", loc: "Zomba District, Malawi", impact: "12,430 people", pct: 53, funded: "$41,000 of $78,000", days: "10 days left" },
];

function Overview() {
  return (
    <AppShell title="" subtitle="">
      {/* Hero */}
      <section className="grid grid-cols-12 gap-5">
        <div className="col-span-12 xl:col-span-9 glass-panel relative overflow-hidden p-8 min-h-[340px]">
          <div className="absolute inset-0 opacity-90 pointer-events-none">
            <img src={globe} alt="" className="absolute right-0 top-1/2 -translate-y-1/2 h-[120%] object-cover" width={1600} height={1024} />
            <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.14_0.03_262)] via-[oklch(0.14_0.03_262/0.6)] to-transparent" />
          </div>
          <div className="relative z-10 max-w-xl">
            <div className="text-[11px] font-semibold tracking-[0.28em] text-cyan text-glow-cyan mb-3">◆ LIVE GLOBAL INTELLIGENCE</div>
            <h2 className="text-5xl font-semibold leading-[1.05] tracking-tight">
              The Future of<br/>
              <span className="bg-gradient-to-r from-cyan via-violet to-emerald bg-clip-text text-transparent">Humanitarian Action</span>
            </h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              Turning real-time community intelligence into smarter decisions and lasting impact.
            </p>
          </div>

          <div className="absolute right-8 top-8 z-10 flex flex-col gap-3 w-[240px]">
            <div className="glass-panel-strong p-4">
              <div className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground">ACTIVE COMMUNITIES</div>
              <div className="text-3xl font-bold mt-1 text-glow-cyan text-cyan">24,560</div>
              <div className="text-[11px] text-emerald mt-1">▲ 12.5% this month</div>
            </div>
            <div className="glass-panel-strong p-4">
              <div className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground">PEOPLE IMPACTED</div>
              <div className="text-3xl font-bold mt-1 text-glow-emerald text-emerald">12.8M</div>
              <div className="text-[11px] text-emerald mt-1">▲ 18.7% this month</div>
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="col-span-12 xl:col-span-3 glass-panel p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">Early Warning Alerts</h3>
            <button className="text-[11px] text-cyan hover:underline">View all</button>
          </div>
          <div className="space-y-3">
            {alerts.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.title} className="rounded-xl p-3 bg-white/[0.03] border border-white/5 hover:border-white/10 transition">
                  <div className="flex items-start gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center bg-${a.color}/10 text-${a.color} text-glow-${a.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold truncate">{a.title}</span>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded bg-${a.levelColor}/15 text-${a.levelColor}`}>{a.level}</span>
                      </div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">{a.loc}</div>
                      <div className="text-[11px] text-muted-foreground/80">{a.note}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="mt-4 w-full text-[11px] text-cyan hover:underline">See all alerts →</button>
        </div>
      </section>

      {/* KPI row */}
      <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-5">
        <StatCard label="Funds Mobilized" value="$128.6M" delta="22.4% this month" accent="emerald" icon={Wallet} />
        <StatCard label="Active Projects" value="1,248" delta="15.3% this month" accent="cyan" icon={FolderKanban} />
        <StatCard label="Community Priorities" value="3,721" delta="8.7% this month" accent="violet" icon={Heart} />
        <StatCard label="Partners" value="342" delta="13.2% this month" accent="amber" icon={Users2} />
        <StatCard label="Verified Outcomes" value="98.6%" delta="Transparency Score" accent="emerald" icon={ShieldCheck} />
      </section>

      {/* Row 3 */}
      <section className="grid grid-cols-12 gap-5 mt-5">
        <Panel className="col-span-12 xl:col-span-5" title="Top Community Priorities" action={<button className="text-[11px] text-cyan hover:underline">View all</button>}>
          <ul className="space-y-3">
            {priorities.map((p) => (
              <li key={p.rank} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: `color-mix(in oklab, ${p.color} 15%, transparent)`, color: p.color }}>
                  {p.rank}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{p.name}</span>
                    <span className="tabular-nums">{p.pct}%</span>
                  </div>
                  <div className="text-[11px] text-muted-foreground mb-1.5">{p.cmt}</div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${p.pct}%`, background: `linear-gradient(90deg, ${p.color}, color-mix(in oklab, ${p.color} 30%, transparent))`, boxShadow: `0 0 12px ${p.color}` }} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel className="col-span-12 xl:col-span-4" title="Impact at a Glance" action={<span className="text-[11px] text-muted-foreground">This Month ▾</span>}>
          <div className="flex items-center gap-4">
            <div className="relative w-44 h-44 shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={impactData} innerRadius={58} outerRadius={82} paddingAngle={3} dataKey="value" stroke="none">
                    {impactData.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-2xl font-bold text-glow-cyan text-cyan">12.8M</div>
                <div className="text-[10px] text-muted-foreground">People impacted</div>
              </div>
            </div>
            <ul className="flex-1 space-y-2 text-sm">
              {impactData.map((d) => (
                <li key={d.name} className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: d.color, boxShadow: `0 0 8px ${d.color}` }} />
                    <span className="text-xs text-muted-foreground">{d.name}</span>
                  </span>
                  <span className="text-xs tabular-nums font-medium">{(d.value/1_000_000).toFixed(1)}M</span>
                </li>
              ))}
            </ul>
          </div>
        </Panel>

        <Panel className="col-span-12 xl:col-span-3" title="Real-Time Activity Feed" action={<button className="text-[11px] text-cyan hover:underline">View all</button>}>
          <div className="space-y-3">
            {feed.map((f) => (
              <div key={f.title} className="flex gap-3">
                <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center bg-${f.color}/10 border border-${f.color}/20`}>
                  <Activity className={`w-4 h-4 text-${f.color}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className={`text-xs font-semibold text-${f.color}`}>{f.title}</div>
                  <div className="text-xs text-foreground/90 truncate">{f.note}</div>
                  <div className="text-[11px] text-muted-foreground">{f.meta}</div>
                  <div className="text-[10px] text-muted-foreground/70 mt-0.5">{f.ago}</div>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </section>

      {/* AI Copilot */}
      <section className="grid grid-cols-12 gap-5 mt-5">
        <Panel className="col-span-12 xl:col-span-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img src={aiOrb} alt="" className="w-12 h-12 rounded-full object-cover ring-2 ring-violet/40" />
              <div>
                <div className="text-xs font-semibold tracking-[0.18em] text-violet text-glow-violet uppercase">AI Copilot</div>
                <div className="text-xs text-muted-foreground">Predictive intelligence · explainable · verified</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { tag: "Risk Insight", color: "crimson", text: "Flood risk in 3 regions likely to increase in the next 10 days.", cta: "View Details" },
              { tag: "Opportunity", color: "emerald", text: "High community capacity detected for agriculture projects in 7 areas.", cta: "Explore" },
              { tag: "Recommendation", color: "cyan", text: "Consider reallocating resources to prevent escalation in high-risk zones.", cta: "See Why" },
            ].map((c) => (
              <div key={c.tag} className="glass-panel-strong p-4">
                <div className={`text-[10px] font-bold tracking-[0.18em] text-${c.color}`}>{c.tag.toUpperCase()}</div>
                <p className="text-sm mt-2 leading-snug">{c.text}</p>
                <button className={`mt-4 text-xs px-3 py-1.5 rounded-lg border border-${c.color}/30 text-${c.color} hover:bg-${c.color}/10`}>{c.cta}</button>
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="col-span-12 xl:col-span-4" title="Funding Allocation Overview" action={<span className="text-[11px] text-muted-foreground">This Year ▾</span>}>
          <div className="space-y-2.5">
            {[
              { label: "Health & Nutrition", pct: 32, color: "var(--neon-violet)" },
              { label: "Water & Sanitation", pct: 24, color: "var(--neon-cyan)" },
              { label: "Education", pct: 18, color: "var(--neon-amber)" },
              { label: "Protection", pct: 14, color: "var(--neon-emerald)" },
              { label: "Livelihoods", pct: 12, color: "var(--neon-crimson)" },
            ].map((s) => (
              <div key={s.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{s.label}</span>
                  <span className="font-semibold tabular-nums">{s.pct}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full" style={{ width: `${s.pct * 2.6}%`, background: `linear-gradient(90deg, ${s.color}, transparent)`, boxShadow: `0 0 12px ${s.color}` }} />
                </div>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-white/10 flex items-baseline justify-between">
              <span className="text-xs text-muted-foreground">Total Funds</span>
              <span className="text-2xl font-bold text-glow-cyan text-cyan">$128.6M</span>
            </div>
          </div>
        </Panel>
      </section>

      {/* Featured projects */}
      <section className="mt-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">Featured Projects</h3>
          <button className="text-[11px] text-cyan hover:underline">View all projects</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {featured.map((p) => (
            <div key={p.title} className="glass-panel overflow-hidden">
              <div className="relative h-32 bg-gradient-to-br from-cyan/20 to-violet/20 flex items-end p-3">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.6_0.2_200/0.4),transparent_60%)]" />
                <span className={`relative text-[10px] font-bold tracking-[0.15em] px-2 py-1 rounded bg-${p.tagColor}/20 text-${p.tagColor} text-glow-${p.tagColor}`}>{p.tag}</span>
              </div>
              <div className="p-4">
                <div className="text-sm font-semibold">{p.title}</div>
                <div className="text-[11px] text-muted-foreground">{p.loc}</div>
                <div className="mt-3 flex justify-between text-[11px]">
                  <span className="text-muted-foreground">Impact</span>
                  <span className="font-semibold text-emerald">{p.pct}%</span>
                </div>
                <div className="text-xs">{p.impact}</div>
                <div className="mt-2 h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald to-cyan" style={{ width: `${p.pct}%` }} />
                </div>
                <div className="mt-3 flex justify-between text-[10px] text-muted-foreground">
                  <span>{p.funded}</span>
                  <span>{p.days}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
