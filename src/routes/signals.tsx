import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Panel, StatCard } from "@/components/nexus/AppShell";
import signalMap from "@/assets/signalmap.jpg";
import { Activity, AlertTriangle, Users2, Radar, ShieldCheck, Droplet, Sun, Wheat, TrendingUp, ArrowUpRight, Baby, User, Accessibility, Users } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export const Route = createFileRoute("/signals")({
  head: () => ({
    meta: [
      { title: "Signals & Early Warnings — Humanity Nexus" },
      { name: "description", content: "Real-time signals, weak-signal detection and predictive early-warning intelligence." },
      { property: "og:title", content: "Signals & Early Warnings — Humanity Nexus" },
      { property: "og:description", content: "Real-time signals. Smarter foresight. Stronger communities." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/signals" }],
  }),
  component: Signals,
});

const timeSeries = Array.from({ length: 30 }).map((_, i) => ({
  d: i,
  all: 3000 + Math.round(Math.sin(i / 3) * 800 + Math.random() * 400 + i * 40),
  high: 400 + Math.round(Math.cos(i / 4) * 150 + Math.random() * 100 + i * 8),
  health: 800 + Math.round(Math.sin(i / 5) * 200 + Math.random() * 150),
  climate: 600 + Math.round(Math.cos(i / 3) * 180 + Math.random() * 120),
  food: 500 + Math.round(Math.sin(i / 6) * 160 + Math.random() * 100),
}));

const flowData = [
  { name: "Social Media", value: 38, color: "var(--neon-violet)" },
  { name: "Community Reports", value: 24, color: "var(--neon-cyan)" },
  { name: "IoT & Sensors", value: 16, color: "var(--neon-amber)" },
  { name: "News & Media", value: 12, color: "var(--neon-emerald)" },
  { name: "Satellite Data", value: 10, color: "var(--neon-crimson)" },
];

const confDist = [
  { name: "Very High (80-100%)", value: 58, color: "var(--neon-emerald)" },
  { name: "High (60-80%)", value: 25, color: "var(--neon-cyan)" },
  { name: "Medium (40-60%)", value: 12, color: "var(--neon-amber)" },
  { name: "Low (<40%)", value: 5, color: "var(--neon-crimson)" },
];

const risks = [
  { rank: 1, name: "Flood Risk Increase", loc: "Turkana County, Kenya", level: "High", color: "crimson" },
  { rank: 2, name: "Cholera Outbreak Risk", loc: "Zambezia Province, Mozambique", level: "High", color: "crimson" },
  { rank: 3, name: "Food Insecurity Rising", loc: "Somalia (Bay Region)", level: "High", color: "crimson" },
  { rank: 4, name: "Drought Conditions", loc: "Southern Madagascar", level: "Medium", color: "amber" },
  { rank: 5, name: "Conflict Escalation Risk", loc: "Eastern DRC", level: "Medium", color: "amber" },
  { rank: 6, name: "Population Displacement", loc: "Northern Syria", level: "Low", color: "emerald" },
];

const alerts = [
  { icon: Droplet, color: "cyan", title: "Flood Risk Increase", loc: "Turkana County, Kenya", note: "High probability in next 7 days", level: "HIGH", ago: "2h ago" },
  { icon: Sun, color: "amber", title: "Disease Outbreak Risk", loc: "Zambezia Province, Mozambique", note: "Moderate probability in next 14 days", level: "MEDIUM", ago: "5h ago" },
  { icon: Wheat, color: "emerald", title: "Food Insecurity Rising", loc: "Somalia (Bay Region)", note: "High probability in next 14 days", level: "HIGH", ago: "8h ago" },
  { icon: Sun, color: "crimson", title: "Heatwave Conditions", loc: "West Africa (Sahel)", note: "Moderate probability in next 7 days", level: "MEDIUM", ago: "12h ago" },
  { icon: Droplet, color: "violet", title: "Rainfall Deficit", loc: "Southern Madagascar", note: "Low probability in next 7 days", level: "LOW", ago: "1d ago" },
] as const;

const outlook = [
  { label: "Flooding likely to increase", note: "in 8 regions", color: "crimson", icon: Droplet },
  { label: "Disease outbreaks likely", note: "to increase in 5 regions", color: "amber", icon: Sun },
  { label: "Food insecurity likely", note: "to worsen in 7 regions", color: "amber", icon: Wheat },
  { label: "Displacement likely", note: "to increase in 6 regions", color: "violet", icon: Users2 },
];

function Signals() {
  return (
    <AppShell title="Good Morning, Amina" subtitle="Real-time signals. Smarter foresight. Stronger communities.">
      {/* KPIs */}
      <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        <StatCard label="Total Signals (30D)" value="134,892" delta="18.6% vs previous 30D" accent="cyan" icon={Activity} />
        <StatCard label="High Priority Signals" value="1,248" delta="24.3% vs previous 30D" accent="crimson" icon={AlertTriangle} />
        <StatCard label="Regions at Risk" value="24" delta="3 new vs previous 30D" accent="amber" icon={Radar} />
        <StatCard label="People Potentially Impacted" value="23.7M" delta="15.9% vs previous 30D" accent="violet" icon={Users2} />
        <StatCard label="Confidence Score" value="93%" delta="High reliability" accent="emerald" icon={ShieldCheck} />
      </section>

      {/* Map + Emerging risks */}
      <section className="grid grid-cols-12 gap-5 mt-5">
        <Panel className="col-span-12 xl:col-span-8"
          title="Live Risk & Signal Map"
          action={<div className="flex items-center gap-1 text-[11px]"><span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse-dot" /> <span className="text-emerald">Real-time</span></div>}>
          <div className="flex flex-wrap gap-2 mb-3">
            {["All Signals","Health","Climate","Food","Conflict","Displacement","Infrastructure"].map((t, i) => (
              <button key={t} className={`text-[11px] px-3 py-1.5 rounded-lg border ${i===0 ? "bg-cyan/15 border-cyan/40 text-cyan" : "border-white/10 text-muted-foreground hover:text-foreground"}`}>{t}</button>
            ))}
          </div>
          <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[16/8]">
            <img src={signalMap} alt="Live risk and signal map" className="w-full h-full object-cover" loading="lazy" width={1600} height={900} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {["Layers","Filter","Zoom","Fullscreen"].map((_, i) => (
                <button key={i} className="w-9 h-9 rounded-lg bg-black/50 border border-white/10 backdrop-blur flex items-center justify-center text-xs text-cyan">◆</button>
              ))}
            </div>
            <div className="absolute bottom-4 right-4 glass-panel-strong p-4 w-56">
              <div className="text-xs text-muted-foreground">Turkana County, Kenya</div>
              <div className="text-sm font-semibold mt-1">Flood Risk Increase</div>
              <span className="inline-block text-[10px] font-bold px-1.5 py-0.5 rounded bg-crimson/20 text-crimson mt-2">HIGH RISK</span>
              <div className="text-[11px] text-muted-foreground mt-2">Confidence: <span className="text-emerald font-semibold">89%</span></div>
              <div className="text-[11px] text-muted-foreground">First detected: 6 hours ago</div>
              <button className="w-full mt-3 text-[11px] py-1.5 rounded-lg bg-cyan/10 border border-cyan/30 text-cyan flex items-center justify-center gap-1">View Details <ArrowUpRight className="w-3 h-3" /></button>
            </div>
            <div className="absolute bottom-4 left-4 flex gap-3 text-[11px]">
              {[{c:"emerald",l:"Low"},{c:"amber",l:"Moderate"},{c:"crimson",l:"High"},{c:"violet",l:"Critical"}].map(x => (
                <span key={x.l} className="flex items-center gap-1.5"><span className={`w-2 h-2 rounded-full bg-${x.c}`} style={{ boxShadow: `0 0 8px var(--neon-${x.c})` }} />{x.l}</span>
              ))}
            </div>
          </div>
        </Panel>

        <Panel className="col-span-12 xl:col-span-4" title="Top Emerging Risks" action={<button className="text-[11px] text-cyan hover:underline">View all</button>}>
          <ul className="space-y-3">
            {risks.map(r => (
              <li key={r.rank} className="flex items-center gap-3">
                <div className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-xs font-bold bg-${r.color}/15 text-${r.color}`}>{r.rank}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{r.name}</div>
                  <div className="text-[11px] text-muted-foreground truncate">{r.loc}</div>
                </div>
                <MiniSpark color={`var(--neon-${r.color})`} />
                <span className={`text-[11px] font-semibold text-${r.color} w-16 text-right`}>{r.level}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </section>

      {/* Charts row */}
      <section className="grid grid-cols-12 gap-5 mt-5">
        <Panel className="col-span-12 md:col-span-6 xl:col-span-3" title="Signal Flow (30D)">
          <div className="flex items-center gap-3">
            <div className="relative w-36 h-36 shrink-0">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={flowData} innerRadius={46} outerRadius={68} paddingAngle={3} dataKey="value" stroke="none">
                    {flowData.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-lg font-bold text-cyan text-glow-cyan">134,892</div>
                <div className="text-[9px] text-muted-foreground">Total Signals</div>
              </div>
            </div>
            <ul className="text-[11px] space-y-1.5 flex-1">
              {flowData.map(d => (
                <li key={d.name} className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ background: d.color }} />{d.name}</span>
                  <span className="tabular-nums font-medium">{d.value}%</span>
                </li>
              ))}
            </ul>
          </div>
        </Panel>

        <Panel className="col-span-12 xl:col-span-6" title="Signals Over Time (30D)">
          <div className="h-52">
            <ResponsiveContainer>
              <LineChart data={timeSeries} margin={{ left: -20, right: 8, top: 8, bottom: 0 }}>
                <CartesianGrid stroke="oklch(0.5 0.05 265 / 0.1)" strokeDasharray="3 3" />
                <XAxis dataKey="d" tick={{ fontSize: 10, fill: "oklch(0.65 0.03 250)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "oklch(0.65 0.03 250)" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "oklch(0.18 0.03 262)", border: "1px solid oklch(0.4 0.05 265 / 0.4)", borderRadius: 12, fontSize: 12 }} />
                <Line type="monotone" dataKey="all" stroke="var(--neon-cyan)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="high" stroke="var(--neon-crimson)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="health" stroke="var(--neon-violet)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="climate" stroke="var(--neon-emerald)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="food" stroke="var(--neon-amber)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-3 text-[11px] mt-1">
            {[
              ["All Signals","cyan"],["High Priority","crimson"],["Health","violet"],["Climate","emerald"],["Food","amber"],
            ].map(([l,c]) => (
              <span key={l} className="flex items-center gap-1.5 text-muted-foreground">
                <span className={`w-2 h-2 rounded-full bg-${c}`} /> {l}
              </span>
            ))}
          </div>
        </Panel>

        <Panel className="col-span-12 md:col-span-6 xl:col-span-3" title="Confidence Distribution">
          <div className="flex items-center gap-3">
            <div className="relative w-36 h-36 shrink-0">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={confDist} innerRadius={46} outerRadius={68} paddingAngle={3} dataKey="value" stroke="none">
                    {confDist.map((d,i)=><Cell key={i} fill={d.color} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-lg font-bold text-emerald text-glow-emerald">93%</div>
                <div className="text-[9px] text-muted-foreground">Avg. Confidence</div>
              </div>
            </div>
            <ul className="text-[11px] space-y-1.5 flex-1">
              {confDist.map(d => (
                <li key={d.name} className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ background: d.color }} />{d.name}</span>
                  <span className="tabular-nums font-medium">{d.value}%</span>
                </li>
              ))}
            </ul>
          </div>
        </Panel>
      </section>

      {/* Alerts and outlook */}
      <section className="grid grid-cols-12 gap-5 mt-5">
        <Panel className="col-span-12 xl:col-span-4" title="Early Warning Alerts" action={<button className="text-[11px] text-cyan hover:underline">View all</button>}>
          <div className="space-y-3">
            {alerts.map(a => {
              const Icon = a.icon;
              return (
                <div key={a.title} className="rounded-xl p-3 bg-white/[0.03] border border-white/5">
                  <div className="flex items-start gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center bg-${a.color}/10 text-${a.color}`}><Icon className="w-4 h-4" /></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold truncate">{a.title}</span>
                        <span className="text-[10px] text-muted-foreground">{a.ago}</span>
                      </div>
                      <div className="text-[11px] text-muted-foreground">{a.loc}</div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-[11px] text-muted-foreground/80">{a.note}</span>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded bg-${a.level==="HIGH"?"crimson":a.level==="MEDIUM"?"amber":"emerald"}/15 text-${a.level==="HIGH"?"crimson":a.level==="MEDIUM"?"amber":"emerald"}`}>{a.level}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Panel>

        <Panel className="col-span-12 xl:col-span-4" title="Predictive Outlook" action={<span className="text-[11px] text-muted-foreground">Next 30 Days ▾</span>}>
          <ul className="space-y-3">
            {outlook.map(o => {
              const Icon = o.icon;
              return (
                <li key={o.label} className="flex items-center gap-3 rounded-xl p-3 bg-white/[0.03] border border-white/5">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center bg-${o.color}/10 text-${o.color}`}><Icon className="w-4 h-4" /></div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium">{o.label}</div>
                    <div className="text-[11px] text-muted-foreground">{o.note}</div>
                  </div>
                  <TrendingUp className={`w-4 h-4 text-${o.color}`} />
                </li>
              );
            })}
          </ul>
          <button className="mt-4 w-full text-xs py-2 rounded-xl bg-cyan/10 border border-cyan/30 text-cyan hover:bg-cyan/20">View Full Outlook →</button>
        </Panel>

        <Panel className="col-span-12 xl:col-span-4" title="Recommended Actions">
          <ul className="space-y-3">
            {[
              { text: "Pre-position emergency supplies in Turkana County", tag: "High Impact", color: "crimson" },
              { text: "Strengthen disease surveillance in Zambezia Province", tag: "High Impact", color: "crimson" },
              { text: "Scale up food assistance in Bay Region", tag: "High Impact", color: "crimson" },
              { text: "Activate early action protocols in 8 regions", tag: "Medium Impact", color: "amber" },
            ].map(a => (
              <li key={a.text} className="flex items-start gap-3 rounded-xl p-3 bg-white/[0.03] border border-white/5">
                <ShieldCheck className="w-4 h-4 text-cyan mt-0.5" />
                <div className="flex-1 min-w-0 text-sm">{a.text}</div>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded bg-${a.color}/15 text-${a.color} whitespace-nowrap`}>{a.tag}</span>
              </li>
            ))}
          </ul>
          <button className="mt-4 w-full text-xs py-2 rounded-xl bg-cyan/10 border border-cyan/30 text-cyan hover:bg-cyan/20">View All Recommendations →</button>
        </Panel>
      </section>

      {/* Affected populations */}
      <section className="grid grid-cols-12 gap-5 mt-5">
        <Panel className="col-span-12" title="Most Affected Populations" action={<button className="text-[11px] text-cyan hover:underline">View all</button>}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: Baby, label: "Children", value: "9.4M", color: "cyan" },
              { icon: User, label: "Women", value: "6.8M", color: "violet" },
              { icon: Users, label: "Elderly", value: "2.1M", color: "amber" },
              { icon: Users2, label: "Displaced", value: "5.4M", color: "crimson" },
              { icon: Accessibility, label: "People with Disabilities", value: "1.2M", color: "emerald" },
            ].map(p => {
              const Icon = p.icon;
              return (
                <div key={p.label} className="glass-panel-strong p-4 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${p.color}/10 text-${p.color}`}><Icon className="w-5 h-5" /></div>
                  <div>
                    <div className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">{p.label}</div>
                    <div className={`text-xl font-bold text-${p.color}`}>{p.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </Panel>
      </section>
    </AppShell>
  );
}

function MiniSpark({ color }: { color: string }) {
  const pts = Array.from({ length: 12 }).map((_, i) => {
    const y = 10 + Math.sin(i / 1.5 + Math.random()) * 6 + Math.random() * 3;
    return `${i * 6},${y}`;
  }).join(" ");
  return (
    <svg width="72" height="20" viewBox="0 0 72 20" className="shrink-0">
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" style={{ filter: `drop-shadow(0 0 4px ${color})` }} />
    </svg>
  );
}
