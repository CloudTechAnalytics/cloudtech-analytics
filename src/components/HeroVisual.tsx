import { useEffect, useRef, useState, type CSSProperties } from "react";
import { BrainCircuit, BriefcaseBusiness, CodeXml, Database, type LucideIcon } from "lucide-react";
import { CloudTechMark, ProductMark } from "./CloudTechLogo";

/**
 * Hero illustration in the same orbit language as The Counsel's hero:
 * CloudTech at the centre, with what it connects (data, software, AI, business)
 * and the products it has built (The Counsel, The Manifest) on the ring.
 * Drawn on a fixed stage and scaled to fit; narrow containers get a tighter stage.
 */
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

  const compact = width > 0 && width < 440;
  const geo = compact
    ? { stage: 380, orbit: 140, halo: 78, disk: 104, tile: 46, outer: 170 }
    : { stage: 520, orbit: 190, halo: 108, disk: 136, tile: 54, outer: 232 };
  const scale = width ? width / geo.stage : 1;

  return (
    <div ref={wrapRef} className={`relative aspect-square w-full ${className}`} aria-hidden>
      {width > 0 && (
        <div
          className="absolute left-0 top-0 origin-top-left"
          style={{ width: geo.stage, height: geo.stage, transform: `scale(${scale})` }}
        >
          <Orbit {...geo} />
        </div>
      )}
    </div>
  );
}

type Node =
  | { kind: "capability"; label: string; icon: LucideIcon; angle: number }
  | { kind: "product"; label: string; product: "counsel" | "manifest"; angle: number };

const NODES: Node[] = [
  { kind: "capability", label: "Data", icon: Database, angle: -90 },
  { kind: "product", label: "The Counsel", product: "counsel", angle: -30 },
  { kind: "capability", label: "Software", icon: CodeXml, angle: 30 },
  { kind: "capability", label: "AI", icon: BrainCircuit, angle: 90 },
  { kind: "product", label: "The Manifest", product: "manifest", angle: 150 },
  { kind: "capability", label: "Business", icon: BriefcaseBusiness, angle: 210 },
];

function Orbit({
  stage,
  orbit,
  halo,
  disk,
  tile,
  outer,
}: {
  stage: number;
  orbit: number;
  halo: number;
  disk: number;
  tile: number;
  outer: number;
}) {
  const c = stage / 2;
  const pos = (angle: number, r: number) => {
    const a = (angle * Math.PI) / 180;
    return { x: c + Math.cos(a) * r, y: c + Math.sin(a) * r };
  };

  return (
    <>
      <svg className="absolute inset-0" width={stage} height={stage} viewBox={`0 0 ${stage} ${stage}`}>
        <circle cx={c} cy={c} r={outer} fill="none" stroke="var(--color-line-strong)" strokeDasharray="3 6" />
        <circle
          cx={c}
          cy={c}
          r={orbit}
          fill="none"
          stroke="var(--color-line-strong)"
          className="draw-line"
          style={{ "--len": Math.ceil(2 * Math.PI * orbit), "--delay": "100ms" } as CSSProperties}
        />
        <circle cx={c} cy={c} r={halo} fill="var(--color-sand)" stroke="var(--color-line)" />
        {/* Links from CloudTech to the products it builds */}
        {NODES.filter((n) => n.kind === "product").map((n, i) => {
          const from = pos(n.angle, disk / 2 + 4);
          const to = pos(n.angle, orbit - tile / 2 - 6);
          const len = Math.hypot(to.x - from.x, to.y - from.y);
          return (
            <line
              key={n.label}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="var(--color-brass)"
              strokeWidth="1.5"
              className="draw-line"
              style={{ "--len": Math.ceil(len), "--delay": `${700 + i * 200}ms` } as CSSProperties}
            />
          );
        })}
      </svg>

      {/* CloudTech at the centre */}
      <div
        className="absolute flex flex-col items-center justify-center rounded-full text-white shadow-[0_24px_48px_-20px_rgba(140,106,44,0.65)]"
        style={{
          width: disk,
          height: disk,
          left: c - disk / 2,
          top: c - disk / 2,
          background: "radial-gradient(circle at 35% 30%, #C39A4E, #9A7532 70%)",
        }}
      >
        <CloudTechMark tone="mono" className="h-[30%] w-[30%] text-white" />
        <span className="mt-1.5 font-serif text-[15px] font-bold leading-none">CloudTech</span>
        <span className="mt-1 text-[7px] font-semibold uppercase tracking-[0.3em] text-white/80">Analytics</span>
      </div>

      {NODES.map((n) => {
        const p = pos(n.angle, orbit);
        const product = n.kind === "product";
        return (
          <div
            key={n.label}
            className="absolute flex flex-col items-center"
            style={{ left: p.x - 60, top: p.y - tile / 2, width: 120 }}
          >
            {product ? (
              <span
                className="block rounded-xl shadow-[0_14px_28px_-14px_rgba(140,106,44,0.7)]"
                style={{ width: tile, height: tile }}
              >
                <ProductMark product={n.product} className="h-full w-full" />
              </span>
            ) : (
              <span
                className="flex items-center justify-center rounded-[14px] border border-line-strong bg-paper shadow-[0_10px_24px_-16px_rgba(23,23,23,0.35)]"
                style={{ width: tile, height: tile }}
              >
                <n.icon className="h-[40%] w-[40%] text-brass-dark" strokeWidth={1.6} />
              </span>
            )}
            <span
              className={`mt-2 whitespace-nowrap ${
                product
                  ? "font-serif text-[13px] font-bold text-ink"
                  : "text-[10px] font-semibold uppercase tracking-[0.2em] text-subtle"
              }`}
            >
              {n.label}
            </span>
          </div>
        );
      })}
    </>
  );
}
