import { useId, useState, type ReactNode } from "react";
import { useSearchParams } from "react-router";
import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { useSeo } from "@/lib/seo";
import { SITE, mailto, whatsapp } from "@/lib/site";
import { PRODUCTS } from "@/lib/content";
import { COURSES } from "@/lib/training";
import { Reveal } from "@/components/Reveal";

const TOPIC_GROUPS: { label: string; topics: string[] }[] = [
  { label: "Services", topics: ["Data & Analytics", "Software Engineering", "AI & Automation"] },
  { label: "Products", topics: PRODUCTS.map((p) => p.name) },
  {
    label: "Training",
    topics: ["Training", ...COURSES.map((c) => `${c.title} course`), "Free trial class", "Corporate training"],
  },
  { label: "Other", topics: ["Partnership", "Something else"] },
];
const ALL_TOPICS = TOPIC_GROUPS.flatMap((g) => g.topics);

type Channel = "email" | "whatsapp";
type Fields = { name: string; company: string; email: string; phone: string; topic: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const FIELD_ORDER: (keyof Fields)[] = ["name", "company", "email", "phone", "topic", "message"];

function validate(f: Fields, channel: Channel): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Please tell us your name.";
  const email = f.email.trim();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "That email address doesn't look quite right.";
  else if (!email && channel === "email") e.email = "Please add an email address so we can reply.";
  if (!f.topic) e.topic = "Please choose what we can help with.";
  if (!f.message.trim()) e.message = "Please add a short message.";
  return e;
}

const inputCls =
  "mt-2 block w-full rounded-lg border bg-paper px-4 py-3.5 text-[1rem] text-ink placeholder:text-subtle/70 transition-colors focus:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass-dark";

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="flex items-baseline justify-between text-[0.875rem] font-medium text-ink">
        {label}
        {optional && <span className="text-[0.75rem] font-normal text-subtle">Optional</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-[0.8125rem] text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  useSeo({
    title: "Contact | CloudTech Analytics",
    description:
      "Talk to CloudTech Analytics about data, software and AI, our products, training courses or partnerships. Email or WhatsApp, Lagos, Nigeria.",
  });

  const uid = useId();
  const [params] = useSearchParams();
  const requested = params.get("topic") ?? "";
  const [fields, setFields] = useState<Fields>({
    name: "",
    company: "",
    email: "",
    phone: "",
    topic: ALL_TOPICS.includes(requested) ? requested : "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<Channel | null>(null);

  const set = (k: keyof Fields) => (e: { target: { value: string } }) => {
    setFields((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const send = (channel: Channel) => {
    const found = validate(fields, channel);
    setErrors(found);
    const firstInvalid = FIELD_ORDER.find((k) => found[k]);
    if (firstInvalid) {
      document.getElementById(`${uid}-${firstInvalid}`)?.focus();
      return;
    }
    const t = (k: keyof Fields) => fields[k].trim();
    const details = [
      `Name: ${t("name")}`,
      t("company") && `Company: ${t("company")}`,
      t("email") && `Email: ${t("email")}`,
      t("phone") && `Phone: ${t("phone")}`,
      `Topic: ${fields.topic}`,
    ].filter(Boolean);
    const body = `${t("message")}\n\n${details.join("\n")}`;

    if (channel === "whatsapp") {
      window.open(whatsapp(body), "_blank", "noopener,noreferrer");
    } else {
      const subject = `${fields.topic}: enquiry from ${t("name")}${t("company") ? `, ${t("company")}` : ""}`;
      window.location.href = mailto(subject, body);
    }
    setSent(channel);
  };

  const aria = (k: keyof Fields) => ({
    id: `${uid}-${k}`,
    name: k,
    value: fields[k],
    onChange: set(k),
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${uid}-${k}-error` : undefined,
    className: `${inputCls} ${errors[k] ? "border-danger" : "border-line-strong"}`,
  });

  return (
    <section>
      <div className="container-page grid gap-16 pb-24 pt-14 sm:pt-20 lg:grid-cols-12 lg:gap-12 lg:pb-32 lg:pt-28">
        <div className="lg:col-span-5">
          <Reveal>
            <h1 className="font-serif text-[2.6rem] leading-[1.04] tracking-[-0.02em] sm:text-[3.4rem] lg:text-[4rem]">
              Let's talk about what you're building.
            </h1>
            <p className="mt-7 max-w-md text-[1.0625rem] leading-relaxed text-muted">
              Tell us what you're trying to improve, which course you're interested in, or how you'd like to partner
              with us.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-12 divide-y divide-line border-y border-ink/80">
              <li>
                <a href={mailto()} className="group flex items-center gap-4 py-5">
                  <Mail aria-hidden className="h-5 w-5 shrink-0 text-brass-dark" strokeWidth={1.6} />
                  <span>
                    <span className="block text-[0.8125rem] text-muted">Email</span>
                    <span className="link-underline break-all text-[1.0625rem] font-medium">{SITE.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={whatsapp()} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 py-5">
                  <MessageCircle aria-hidden className="h-5 w-5 shrink-0 text-brass-dark" strokeWidth={1.6} />
                  <span>
                    <span className="block text-[0.8125rem] text-muted">Phone and WhatsApp</span>
                    <span className="link-underline text-[1.0625rem] font-medium">{SITE.phone}</span>
                    <span className="sr-only">(opens WhatsApp in a new tab)</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 py-5">
                <MapPin aria-hidden className="h-5 w-5 shrink-0 text-brass-dark" strokeWidth={1.6} />
                <span>
                  <span className="block text-[0.8125rem] text-muted">Location</span>
                  <span className="text-[1.0625rem] font-medium">{SITE.location}</span>
                </span>
              </li>
            </ul>
            <div className="mt-10">
              <h2 className="text-[0.9375rem] font-medium text-muted">Looking for a product?</h2>
              <ul className="mt-4 space-y-3">
                {PRODUCTS.map((p) => (
                  <li key={p.slug}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between border-b border-line pb-3 text-[0.975rem] hover:text-brass-dark"
                    >
                      <span>
                        <span className="font-serif text-[1.15rem]">{p.name}</span>
                        <span className="ml-2 text-[0.8125rem] text-subtle">{p.label}</span>
                      </span>
                      <ArrowRight aria-hidden className="h-4 w-4 -rotate-45 transition-transform group-hover:rotate-0" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={100}>
            <form
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                send("email");
              }}
              aria-labelledby={`${uid}-form-title`}
              className="rounded-2xl border border-line bg-ivory p-6 shadow-[0_30px_60px_-45px_rgba(23,23,23,0.35)] sm:p-10"
            >
              <h2 id={`${uid}-form-title`} className="font-serif text-[1.6rem]">
                Send us a message
              </h2>
              <p className="mt-2 text-[0.875rem] leading-relaxed text-muted">
                Choose how to send it: WhatsApp opens a chat with your message ready, and email opens a draft in your
                mail app. Nothing is sent until you press send there.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <Field id={`${uid}-name`} label="Name" error={errors.name}>
                  <input type="text" autoComplete="name" {...aria("name")} />
                </Field>
                <Field id={`${uid}-company`} label="Company" optional>
                  <input type="text" autoComplete="organization" {...aria("company")} />
                </Field>
                <Field id={`${uid}-email`} label="Email" error={errors.email}>
                  <input type="email" autoComplete="email" inputMode="email" {...aria("email")} />
                </Field>
                <Field id={`${uid}-phone`} label="Phone" optional>
                  <input type="tel" autoComplete="tel" inputMode="tel" {...aria("phone")} />
                </Field>
                <div className="sm:col-span-2">
                  <Field id={`${uid}-topic`} label="What can we help with?" error={errors.topic}>
                    <div className="relative">
                      <select {...aria("topic")} className={`${aria("topic").className} appearance-none pr-10`}>
                        <option value="" disabled>
                          Choose a topic
                        </option>
                        {TOPIC_GROUPS.map((g) => (
                          <optgroup key={g.label} label={g.label}>
                            {g.topics.map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                      <span
                        aria-hidden
                        className="pointer-events-none absolute right-4 top-1/2 mt-1 h-2 w-2 -translate-y-1/2 rotate-45 border-b border-r border-ink"
                      />
                    </div>
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Field id={`${uid}-message`} label="Message" error={errors.message}>
                    <textarea
                      rows={6}
                      placeholder="What are you trying to improve, or which course are you interested in?"
                      {...aria("message")}
                      className={`${aria("message").className} resize-y`}
                    />
                  </Field>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => send("whatsapp")}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brass-button px-6 py-3 text-[0.9375rem] font-semibold text-on-brass transition-colors hover:bg-brass-button-hover"
                >
                  <MessageCircle aria-hidden className="h-4 w-4" />
                  Send via WhatsApp
                </button>
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-line-strong bg-paper px-6 py-3 text-[0.9375rem] font-semibold text-ink transition-colors hover:border-ink/40"
                >
                  <Mail aria-hidden className="h-4 w-4" />
                  Send via email
                </button>
              </div>
              <p className="mt-3 text-[0.8125rem] text-subtle">An email address is only needed if you send by email.</p>

              <div role="status" aria-live="polite">
                {sent && (
                  <div className="mt-6 rounded-lg border border-brass/40 bg-brass-pale/40 p-4 text-[0.875rem] leading-relaxed text-ink">
                    <p className="font-medium">
                      {sent === "whatsapp" ? "WhatsApp should now be open with your message." : "Your email draft should now be open."}
                    </p>
                    <p className="mt-1 text-muted">
                      Please review it and press send. We won't receive anything until you do. If nothing opened, email{" "}
                      <a href={mailto()} className="underline decoration-brass underline-offset-2">
                        {SITE.email}
                      </a>{" "}
                      or message us on WhatsApp at {SITE.phone}.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
