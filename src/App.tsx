import React from 'react';
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
export function App() {
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
    </>);

}