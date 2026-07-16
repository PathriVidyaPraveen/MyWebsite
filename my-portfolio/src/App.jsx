// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import data from './data.jsx';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ThreeBackground from './components/ThreeBackground.jsx';

import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import News from './components/News.jsx';
import Contact from './components/Contact.jsx';
import TypewriterEffect from './components/TypewriterEffect.jsx';

import ExperiencePage from './pages/ExperiencePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import EducationPage from './pages/EducationPage.jsx';
import AwardsPage from './pages/AwardsPage.jsx';
import CertificationsPage from './pages/CertificationsPage.jsx';

function Layout({ children }) {
  return (
    <>
      <div className="full-screen-background-container">
        <ThreeBackground />
      </div>
      <div className="relative min-h-screen" style={{ zIndex: 1 }}>
        <Navbar />
        {children}
        <Footer data={data} />
      </div>
    </>
  );
}

function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section id="home" className="py-16 md:py-24">
        <Hero data={data} />
      </section>

      <div className="py-16 md:py-24 flex justify-center items-center">
        <TypewriterEffect
          text="It is not knowledge, but the act of learning that grants the greatest enjoyment."
          attribution="— Gauss"
          delay={60}
          loop={true}
          loopDelay={3000}
        />
      </div>

      <section id="about" className="py-16 md:py-24">
        <About data={data} />
      </section>

      <section id="news" className="py-16 md:py-24">
        <News data={data} />
      </section>

      <section id="contact" className="py-16 md:py-24">
        <Contact data={data} />
      </section>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<Navigate to="/experience/research" replace />} />
          <Route path="/experience/:category" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
