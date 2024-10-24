import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Classes from './components/Classes';
import Trainers from './components/Trainers';
import Memberships from './components/Memberships';
import Testimonials from './components/Testimonials';
import Facilities from './components/Facilities';
import Blog from './components/Blog';
import Shop from './components/Shop';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Classes />
        <Trainers />
        <Memberships />
        <Testimonials />
        <Facilities />
        <Blog />
        <Shop />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;