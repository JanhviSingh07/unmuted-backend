import React from 'react';
import { Logo } from './components/Logo';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { WhyItMatters } from './components/WhyItMatters';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-900 font-sans selection:bg-brand-100 selection:text-brand-900 bg-transparent">
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-28 flex items-center justify-center">
          <Logo />
        </div>
      </nav>

      <main>
        <Hero />
        <Mission />
        <Features />
        <Testimonials />
        <WhyItMatters />
      </main>

      <Footer />
    </div>
  );
};

export default App;