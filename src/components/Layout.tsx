import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

/** Scrolls to the top on route change, or to the #hash target when one is given. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ block: "start" }));
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
