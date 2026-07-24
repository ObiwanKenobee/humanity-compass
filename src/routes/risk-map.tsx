import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Panel, StatCard } from "@/components/nexus/AppShell";
import riskMap from "@/assets/riskmap.jpg";
import { Gauge, Globe2, Users2, TrendingUp, ShieldAlert, ShieldCheck, ArrowUpRight, ArrowRight } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export const Route = createFileRoute("/risk-map")({
  head: () => ({
    meta: [
      { title: "Global Risk & Fragility Map — Humanity Nexus" },
      { name: "description", content: "Understand where systems are most fragile. Act early. Build resilience." },
      { property: "og:title", content: "Global Risk & Fragility Map — Humanity Nexus" },
      { property: "og:description", content: "Multi-layer geospatial risk intelligence and systemic dependency analysis." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/risk-map" }],
  }),
  component: RiskMap,
});

const riskSummary = [
  { name: "Extreme", value: 14, color: "var(--neon-crimson)" },
  { name: "Very High", value: 12, color: "oklch(0.7 0.22 40)" },
  { name: "High", value: 26, color: "var(--neon-amber)" },
  { name: "Moderate", value: 55, color: "oklch(0.78 0.18 100)" },
  { name: "Low", value: 59, color: "var(--neon-emerald)" },
  { name: "Very Low", value: 30, color: "var(--neon-cyan)" },
];

const highRisk = [
  { rank: 1, name: "Somalia", score: 87 },
  { rank: 2, name: "South Sudan", score: 84 },
  { rank: 3, name: "Yemen", score: 82 },
  { rank: 4, name: "Syria", score: 79 },
  { rank: 5, name: "DRC", score: 76 },
];

const drivers = [
  { name: "Violence & Conflict", value: 8.7, color: "var(--neon-crimson)" },
  { name: "Governance Failure", value: 7.9, color: "oklch(0.7 0.22 40)" },
  { name: "Economic Instability", value: 7.4, color: "var(--neon-amber)" },
  { name: "Climate Vulnerability", value: 7.1, color: "oklch(0.78 0.18 90)" },
  { name: "Social Inequality", value: 6.6, color: "var(--neon-emerald)" },
  { name: "Food Insecurity", value: 6.3, color: "var(--neon-cyan)" },
  { name: "Infrastructure Deficit", value: 5.8, color: "var(--neon-violet)" },
];

const regionFrag = [
  { name: "Sub-Saharan Africa", score: 72 },
  { name: "Middle East & North Africa", score: 68 },
  { name: "South Asia", score: 61 },
  { name: "Latin America & Caribbean", score: 48 },
  { name: "Eastern Europe & Central Asia", score: 45 },
  { name: "East Asia & Pacific", score: 38 },
  { name: "North America", score: 22 },
  { name: "Western Europe", score: 18 },
];

const trend = Array.from({ length: 12 }).map((_, i) => ({
  m: ["Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun"][i],
  overall: 60 + Math.round(Math.sin(i/2)*4 + i),
  conflict: 70 + Math.round(Math.cos(i/3)*5 + i*0.6),
  economic: 55 + Math.round(Math.sin(i/2.5)*6),
  climate: 50 + Math.round(Math.cos(i/2)*5 + i*0.5),
  social: 40 + Math.round(Math.sin(i/3)*4),
  governance: 65 + Math.round(Math.cos(i/2.5)*4),
}));

function scoreColor(s: number) {
  if (s >= 70) return "var(--neon-crimson)";
  if (s >= 60) return "oklch(0.7 0.22 40)";
  if (s >= 45) return "var(--neon-amber)";
  if (s >= 30) return "oklch(0.78 0.18 100)";
  return "var(--neon-emerald)";
}

function RiskMap() {
  return (
    <AppShell title="Global Risk & Fragility Map" subtitle="Understand where systems are most fragile. Act early. Build resilience.">
      {/* KPI cards */}
      <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatCard label="Overall Fragility Score" value="62/100" delta="High Fragility" accent="crimson" icon={Gauge} />
        <StatCard label="Countries at High Risk" value="26" delta="+4 vs last month" accent="amber" icon={Globe2} />
        <StatCard label="People at Risk" value="1.78B" delta="22% of global population" accent="violet" icon={Users2} />
        <StatCard label="Systemic Risk Trend" value="Increasing" delta="Upward trend detected" accent="crimson" icon={TrendingUp} />
        <StatCard label="Resilience Gap" value="37%" delta="Needs attention" accent="amber" icon={ShieldAlert} />
        <StatCard label="Confidence Level" value="89%" delta="High" accent="emerald" icon={ShieldCheck} />
      </section>

      {/* Map + summary */}
      <section className="grid grid-cols-12 gap-5 mt-5">
        <Panel className="col-span-12 xl:col-span-8" title="Fragility Heatmap"
          action={<div className="flex items-center gap-1 text-[11px]"><span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse-dot" /> <span className="text-emerald">Real-time</span></div>}>
          <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[16/8]">
            <img src={riskMap} alt="Global fragility heatmap" className="w-full h-full object-cover" loading="lazy" width={1600} height={900} />
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {["◆","◇","+","−"].map((s, i) => (
                <button key={i} className="w-9 h-9 rounded-lg bg-black/50 border border-white/10 backdrop-blur flex items-center justify-center text-xs text-cyan">{s}</button>
              ))}
            </div>
            <div className="absolute top-1/2 left-[58%] -translate-y-1/2">
              <div className="w-16 h-16 rounded-full border-2 border-crimson animate-pulse-dot" style={{ boxShadow: "0 0 30px var(--neon-crimson)" }} />
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 glass-panel-strong p-4 w-56">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Somalia</span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-crimson/20 text-crimson">VERY HIGH RISK</span>
              </div>
              <div className="mt-2 flex justify-between text-[11px]"><span className="text-muted-foreground">Fragility Score</span><span className="font-semibold">87/100</span></div>
              <div className="flex justify-between text-[11px]"><span className="text-muted-foreground">Trend</span><span className="text-crimson">↗ Increasing</span></div>
              <div className="flex justify-between text-[11px]"><span className="text-muted-foreground">People at Risk</span><span className="font-semibold">12.4M</span></div>
              <button className="mt-3 w-full text-[11px] py-1.5 rounded-lg bg-cyan/10 border border-cyan/30 text-cyan flex items-center justify-center gap-1">View Country Profile <ArrowUpRight className="w-3 h-3" /></button>
            </div>
            <div className="absolute bottom-4 left-4 flex gap-3 text-[11px]">
              {[
                ["emerald","Very Low"],["cyan","Low"],["amber","Moderate"],["crimson","High"],["violet","Very High"],
              ].map(([c,l]) => (
                <span key={l} className="flex items-center gap-1.5"><span className={`w-2 h-2 rounded-full bg-${c}`} style={{ boxShadow: `0 0 8px var(--neon-${c})` }} />{l}</span>
              ))}
            </div>
          </div>
        </Panel>

        <div className="col-span-12 xl:col-span-4 space-y-5">
          <Panel title="Risk Summary" action={<button className="text-[11px] text-cyan hover:underline">Full report</button>}>
            <div className="flex items-center gap-4">
              <div className="relative w-40 h-40 shrink-0">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie data={riskSummary} innerRadius={52} outerRadius={76} paddingAngle={3} dataKey="value" stroke="none">
                      {riskSummary.map((d, i) => <Cell key={i} fill={d.color} />)}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-xl font-bold text-cyan text-glow-cyan">196</div>
                  <div className="text-[9px] text-muted-foreground">Countries Assessed</div>
                </div>
              </div>
              <ul className="text-[11px] flex-1 space-y-1.5">
                {riskSummary.map(d => (
                  <li key={d.name} className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ background: d.color }} />{d.name}</span>
                    <span className="tabular-nums">{d.value} ({Math.round(d.value/196*100)}%)</span>
                  </li>
                ))}
              </ul>
            </div>
          </Panel>

          <Panel title="Top 5 Highest Risk Countries" action={<button className="text-[11px] text-cyan hover:underline">View all</button>}>
            <ul className="space-y-2.5">
              {highRisk.map(c => (
                <li key={c.rank} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold bg-crimson/15 text-crimson">{c.rank}</div>
                  <span className="flex-1 text-sm">{c.name}</span>
                  <span className="text-sm font-semibold tabular-nums">{c.score}</span>
                  <ArrowUpRight className="w-4 h-4 text-crimson" />
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </section>

      {/* Drivers + trend + regions */}
      <section className="grid grid-cols-12 gap-5 mt-5">
        <Panel className="col-span-12 xl:col-span-4" title="Key Fragility Drivers">
          <ul className="space-y-3">
            {drivers.map(d => (
              <li key={d.name}>
                <div className="flex justify-between text-xs mb-1">
                  <span>{d.name}</span>
                  <span className="tabular-nums font-semibold">{d.value.toFixed(1)}</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${d.value*10}%`, background: `linear-gradient(90deg, ${d.color}, transparent)`, boxShadow: `0 0 10px ${d.color}` }} />
                </div>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel className="col-span-12 xl:col-span-5" title="Fragility Trend (Global)">
          <div className="h-64">
            <ResponsiveContainer>
              <LineChart data={trend} margin={{ left: -20, right: 8, top: 8, bottom: 0 }}>
                <CartesianGrid stroke="oklch(0.5 0.05 265 / 0.1)" strokeDasharray="3 3" />
                <XAxis dataKey="m" tick={{ fontSize: 10, fill: "oklch(0.65 0.03 250)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "oklch(0.65 0.03 250)" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "oklch(0.18 0.03 262)", border: "1px solid oklch(0.4 0.05 265 / 0.4)", borderRadius: 12, fontSize: 12 }} />
                <Line type="monotone" dataKey="overall" stroke="var(--neon-crimson)" strokeWidth={2} dot={{ r: 2 }} />
                <Line type="monotone" dataKey="conflict" stroke="var(--neon-amber)" strokeWidth={2} dot={{ r: 2 }} />
                <Line type="monotone" dataKey="economic" stroke="oklch(0.7 0.22 40)" strokeWidth={2} dot={{ r: 2 }} />
                <Line type="monotone" dataKey="climate" stroke="var(--neon-emerald)" strokeWidth={2} dot={{ r: 2 }} />
                <Line type="monotone" dataKey="social" stroke="var(--neon-cyan)" strokeWidth={2} dot={{ r: 2 }} />
                <Line type="monotone" dataKey="governance" stroke="var(--neon-violet)" strokeWidth={2} dot={{ r: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel className="col-span-12 xl:col-span-3" title="Fragility by Region" action={<button className="text-[11px] text-cyan hover:underline">View all</button>}>
          <ul className="space-y-2.5">
            {regionFrag.map(r => (
              <li key={r.name} className="flex items-center gap-2">
                <span className="flex-1 text-xs truncate">{r.name}</span>
                <span className="text-xs font-semibold tabular-nums" style={{ color: scoreColor(r.score) }}>{r.score}</span>
                <ArrowRight className="w-3.5 h-3.5" style={{ color: scoreColor(r.score) }} />
              </li>
            ))}
          </ul>
        </Panel>
      </section>

      {/* Priority areas */}
      <section className="grid grid-cols-12 gap-5 mt-5">
        <Panel className="col-span-12" title="Early Action Priority Areas" action={<button className="text-[11px] text-cyan hover:underline">View all priority areas</button>}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Lake Chad Basin", level: "High Priority", color: "crimson" },
              { name: "Sahel Region", level: "High Priority", color: "crimson" },
              { name: "Horn of Africa", level: "High Priority", color: "amber" },
              { name: "Northern Syria", level: "Medium Priority", color: "amber" },
            ].map(a => (
              <div key={a.name} className="glass-panel-strong p-4 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${a.color}/10 text-${a.color}`}>
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{a.name}</div>
                  <div className={`text-[11px] text-${a.color}`}>{a.level}</div>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </section>
    </AppShell>
  );
}
