import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogPage } from "./components/BlogPage";
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Traceability } from './components/Traceability';
import { WhereWeOperate } from './components/WhereWeOperate';
import { DesignSection } from './components/DesignSection';
import { ChaosToClarity } from './components/ChaosToClarity';
import { Metrics } from './components/Metrics';
import { Stakeholders } from './components/Stakeholders';
import { KeyFeatures } from './components/KeyFeatures';
import { Gallery } from './components/Gallery';
import { Blog } from './components/Blog';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MetricsPage } from './components/MetricsPage';
// ✅ correct import
import { GalleryPage } from './components/GalleryPage';
import { WomensDayBlogPage } from "./components/WomensDayBlogPage";
import { GlobalRecyclingDayBlogPage } from "./components/GlobalRecyclingDayBlogPage";
// @ts-ignore
import ICCEBlogPage from "./components/ICCEBlogPage";
// @ts-ignore
import TextileRecyclingExpoBlogPage from "./components/TextileRecyclingExpoBlogPage";
// @ts-ignore
import BharatTex2026BlogPage from "./components/BharatTex2026BlogPage";
import Intex2026BlogPage from "./components/Intex2026BlogPage";
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfUse } from './components/TermsOfUse';
import { CookiePolicy } from './components/CookiePolicy';
// @ts-ignore - IndustryAlignment is currently implemented as a JavaScript component.
import { IndustryAlignment } from "./components/IndustryAlignment";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Traceability />
      <WhereWeOperate />
      <DesignSection />
      <ChaosToClarity />
      <Metrics />
      <IndustryAlignment />
      <Stakeholders />
      <KeyFeatures />
      <Gallery />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");

      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [hash, pathname]);

  return null;
}
export function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/metrics" element={<MetricsPage />} />
        <Route path="/blog/world-environment-day-2026" element={<BlogPage />}/>
        <Route path="/blog/global-recycling-day-2026" element={<GlobalRecyclingDayBlogPage />}/>
        <Route path="/blog/womens-day-2026" element={<WomensDayBlogPage />}/>

        <Route path="/blog/scaling-up-post-industrial-pre-consumer-textile-waste" element={<ICCEBlogPage />}/>
        <Route
  path="/blog/textile-recycling-expo-brussels-2026"
  element={<TextileRecyclingExpoBlogPage />}
/>
<Route
  path="/blog/bharat-tex-2026"
  element={<BharatTex2026BlogPage />}
/>
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/terms-of-use" element={<TermsOfUse />} />
<Route path="/cookie-policy" element={<CookiePolicy />} />
<Route
  path="/blog/intex-2026"
  element={<Intex2026BlogPage />}
/>
      </Routes>
    </BrowserRouter>
  );
}