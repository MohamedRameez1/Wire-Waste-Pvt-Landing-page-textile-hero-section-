import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      </Routes>
    </BrowserRouter>
  );
}