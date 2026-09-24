import { ClipboardCheck, CircleCheck, FileText, ShieldCheck, Ship } from "lucide-react";

/** Illustrative interface fragments echoing each product's own UI. Decorative only. */

export function CounselPreview({ className = "" }: { className?: string }) {
  const rows = [
    { k: "Practice area", v: "Commercial litigation" },
    { k: "Next hearing", v: "Scheduled", pill: true },
    { k: "Responsible", v: "Partner, Associate" },
    { k: "Billing", v: "₦ Invoice drafted" },
  ];
  return (
    <div
      aria-hidden
      className={`rounded-xl border border-line bg-paper p-5 shadow-[0_24px_48px_-32px_rgba(23,23,23,0.3)] ${className}`}
    >
      <div className="flex items-center justify-between">
        <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-brass-dark">Matter · Active</p>
        <span className="rounded-md bg-sand px-2 py-0.5 text-[0.625rem] font-medium text-muted">Litigation</span>
      </div>
      <p className="mt-2 font-serif text-[1.2rem] font-bold leading-snug text-ink">Contract dispute</p>
      <dl className="mt-4 divide-y divide-line border-y border-line">
        {rows.map((r) => (
          <div key={r.k} className="flex items-center justify-between py-2.5 text-[0.75rem]">
            <dt className="text-subtle">{r.k}</dt>
            <dd
              className={
                r.pill
                  ? "rounded-full border border-brass/50 bg-brass-pale/40 px-2 py-0.5 font-medium text-brass-dark"
                  : "font-medium text-ink"
              }
            >
              {r.v}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function ManifestPreview({ className = "" }: { className?: string }) {
  const stages = [
    { name: "Quoted", icon: FileText, state: "done" },
    { name: "Booked", icon: ClipboardCheck, state: "done" },
    { name: "Customs", icon: ShieldCheck, state: "current" },
    { name: "Transit", icon: Ship, state: "todo" },
    { name: "Delivered", icon: CircleCheck, state: "todo" },
  ] as const;
  return (
    <div
      aria-hidden
      className={`rounded-xl bg-paper p-5 text-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] ${className}`}
    >
      <div className="flex items-center justify-between text-[0.6875rem]">
        <p className="font-semibold uppercase tracking-[0.16em] text-brass-dark">Ref-2049 · Live</p>
        <p className="text-muted">Lagos → Rotterdam</p>
      </div>
      <ol className="relative mt-5 flex justify-between">
        <span className="absolute left-4 right-4 top-4 h-px bg-line-strong" />
        <span className="absolute left-4 top-4 h-px w-1/2 bg-brass" />
        {stages.map((s) => (
          <li key={s.name} className="relative flex w-12 flex-col items-center gap-1.5">
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                s.state === "current"
                  ? "border-brass bg-brass-pale text-brass-dark"
                  : s.state === "done"
                    ? "border-brass/60 bg-paper text-brass-dark"
                    : "border-line-strong bg-paper text-subtle"
              }`}
            >
              <s.icon className="h-3.5 w-3.5" strokeWidth={1.8} />
            </span>
            <span className={`text-[0.625rem] ${s.state === "todo" ? "text-subtle" : "text-ink"}`}>{s.name}</span>
          </li>
        ))}
      </ol>
      <div className="mt-5 grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-sand px-3 py-2.5">
          <p className="text-[0.625rem] text-subtle">Current stage</p>
          <p className="mt-0.5 font-serif text-[0.95rem] font-bold">Customs clearance</p>
        </div>
        <div className="rounded-lg bg-sand px-3 py-2.5">
          <p className="text-[0.625rem] text-subtle">ETA</p>
          <p className="mt-0.5 font-serif text-[0.95rem] font-bold">4 days</p>
        </div>
      </div>
    </div>
  );
}
