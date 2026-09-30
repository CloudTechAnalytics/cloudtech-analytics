import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Check, Sparkles } from "lucide-react";
import { CloudTechMark } from "./CloudTechLogo";

/**
 * Hero illustration: an operations dashboard of the kind CloudTech builds (data), with an
 * automation that has just run (software) and an assistant's suggestion (AI) floating over it.
 * The figures are illustrative. Drawn on a fixed stage and scaled to fit the column.
 */
const STAGE = { w: 560, h: 470 };

export function HeroVisual({ className = "" }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className={`relative w-full ${className}`} style={{ aspectRatio: `${STAGE.w} / ${STAGE.h}` }} aria-hidden>
      {width > 0 && (
        <div
          className="absolute left-0 top-0 origin-top-left"
          style={{ width: STAGE.w, height: STAGE.h, transform: `scale(${width / STAGE.w})` }}
        >
          <Dashboard />
          <Floating className="right-0 top-2 w-[236px]" delay={900}>
            <AssistantCard />
          </Floating>
          <Floating className="bottom-0 left-0 w-[250px]" delay={1200} bob="float-slow">
            <AutomationCard />
          </Floating>
        </div>
      )}
    </div>
  );
}

function Floating({
  className,
  delay,
  bob = "float",
  children,
}: {
  className: string;
  delay: number;
  bob?: "float" | "float-slow";
  children: ReactNode;
}) {
  return (
    <div className={`hero-pop absolute ${className}`} style={{ "--delay": `${delay}ms` } as CSSProperties}>
      <div className={`hero-${bob} rounded-2xl border border-line-strong bg-paper p-4 shadow-[0_24px_50px_-24px_rgba(23,23,23,0.45)]`}>
        {children}
      </div>
    </div>
  );
}

const KPIS = [
  { label: "Shipments in transit", value: "128", change: "+12%" },
  { label: "Active matters", value: "36", change: "+4" },
  { label: "Invoices due", value: "14", change: "−3" },
];

// Twelve weeks of an illustrative series, 0–100.
const SERIES = [38, 42, 40, 51, 48, 56, 61, 58, 67, 72, 70, 81];

function Dashboard() {
  const chart = { w: 392, h: 116 };
  const step = chart.w / (SERIES.length - 1);
  const pts = SERIES.map((v, i) => [i * step, chart.h - (v / 100) * chart.h] as const);
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const area = `${line} L${chart.w} ${chart.h} L0 ${chart.h} Z`;
  const [lx, ly] = pts[pts.length - 1];

  return (
    <div className="absolute left-[34px] top-[48px] w-[440px] overflow-hidden rounded-2xl border border-line-strong bg-paper shadow-[0_40px_80px_-40px_rgba(23,23,23,0.5)]">
      {/* Window bar */}
      <div className="flex items-center gap-3 border-b border-line bg-sand/60 px-4 py-2.5">
        <span className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-2 w-2 rounded-full bg-line-strong" />
          ))}
        </span>
        <span className="flex flex-1 items-center gap-1.5 rounded-md border border-line bg-paper px-2.5 py-1 text-[10px] text-subtle">
          <CloudTechMark className="h-2.5 w-2.5" />
          operations.dashboard
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-baseline justify-between">
          <p className="font-serif text-[17px] font-bold text-ink">Operations overview</p>
          <span className="flex items-center gap-1.5 text-[10px] font-medium text-subtle">
            <span className="hero-pulse h-1.5 w-1.5 rounded-full bg-[#3E8E5A]" />
            Live
          </span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2.5">
          {KPIS.map((k) => (
            <div key={k.label} className="rounded-xl border border-line bg-ivory px-3 py-2.5">
              <p className="text-[9.5px] leading-tight text-subtle">{k.label}</p>
              <p className="mt-1.5 flex items-baseline gap-1.5">
                <span className="font-serif text-[20px] font-bold leading-none text-ink">{k.value}</span>
                <span className="text-[9.5px] font-semibold text-brass-dark">{k.change}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-line bg-ivory px-3 pb-3 pt-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-subtle">On-time delivery</p>
            <p className="text-[10px] text-subtle">Last 12 weeks</p>
          </div>
          <svg viewBox={`-4 -8 ${chart.w + 8} ${chart.h + 12}`} className="mt-2 block w-full">
            {[0.25, 0.5, 0.75].map((f) => (
              <line key={f} x1="0" x2={chart.w} y1={chart.h * f} y2={chart.h * f} stroke="var(--color-line)" strokeDasharray="2 4" />
            ))}
            <path d={area} fill="var(--color-brass-pale)" opacity="0.55" className="hero-fade" style={{ "--delay": "900ms" } as CSSProperties} />
            <path
              d={line}
              fill="none"
              stroke="var(--color-brass)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="draw-line"
              style={{ "--len": 520, "--delay": "400ms" } as CSSProperties}
            />
            <circle cx={lx} cy={ly} r="4.5" fill="var(--color-paper)" stroke="var(--color-brass)" strokeWidth="2.5" className="hero-fade" style={{ "--delay": "1500ms" } as CSSProperties} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AssistantCard() {
  return (
    <>
      <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brass-dark">
        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-brass text-white">
          <Sparkles className="h-3 w-3" strokeWidth={2.2} />
        </span>
        Assistant
      </p>
      <p className="mt-2.5 text-[12px] leading-snug text-ink">
        3 shipments may miss Friday's cut-off. Draft follow-ups to the agents?
      </p>
      <div className="mt-3 flex gap-2">
        <span className="rounded-md bg-brass-button px-2.5 py-1 text-[10.5px] font-semibold text-on-brass">Draft emails</span>
        <span className="rounded-md border border-line-strong px-2.5 py-1 text-[10.5px] font-medium text-muted">Later</span>
      </div>
    </>
  );
}

const STEPS = ["Invoice received", "Matched to shipment", "Ledger updated"];

function AutomationCard() {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brass-dark">Automation</p>
        <p className="text-[9.5px] text-subtle">Ran 2 min ago</p>
      </div>
      <ol className="mt-3 space-y-2">
        {STEPS.map((s, i) => (
          <li
            key={s}
            className="hero-fade flex items-center gap-2.5 text-[11.5px] text-ink"
            style={{ "--delay": `${1500 + i * 250}ms` } as CSSProperties}
          >
            <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border border-brass/50 bg-brass-pale text-brass-dark">
              <Check className="h-2.5 w-2.5" strokeWidth={3} />
            </span>
            {s}
          </li>
        ))}
      </ol>
    </>
  );
}
