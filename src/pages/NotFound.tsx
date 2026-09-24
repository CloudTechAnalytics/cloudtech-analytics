import { useSeo } from "@/lib/seo";
import { ButtonLink } from "@/components/Button";
import { CloudTechMark } from "@/components/CloudTechLogo";

export default function NotFound() {
  useSeo({
    title: "Page not found | CloudTech Analytics",
    description: "The page you were looking for doesn't exist.",
    noindex: true,
  });

  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <CloudTechMark className="h-14 w-14" />
      <p className="mt-8 text-[0.9375rem] text-muted">Error 404</p>
      <h1 className="mt-3 font-serif text-[2.6rem] leading-tight sm:text-[3.4rem]">This page doesn't exist.</h1>
      <p className="mt-4 max-w-md text-muted">The link may be out of date, or the page may have moved.</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <ButtonLink to="/">Back to home</ButtonLink>
        <ButtonLink to="/contact" variant="secondary" arrow={false}>
          Contact us
        </ButtonLink>
      </div>
    </section>
  );
}
