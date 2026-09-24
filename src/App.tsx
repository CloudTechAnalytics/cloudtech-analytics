import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";

const Products = lazy(() => import("@/pages/Products"));
const Services = lazy(() => import("@/pages/Services"));
const Training = lazy(() => import("@/pages/Training"));
const Course = lazy(() => import("@/pages/Course"));
const Partner = lazy(() => import("@/pages/Partner"));
const About = lazy(() => import("@/pages/About"));
const Insights = lazy(() => import("@/pages/Insights"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-ivory" />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="services" element={<Services />} />
            <Route path="training" element={<Training />} />
            <Route path="training/:slug" element={<Course />} />
            <Route path="partner" element={<Partner />} />
            <Route path="about" element={<About />} />
            <Route path="insights" element={<Insights />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
