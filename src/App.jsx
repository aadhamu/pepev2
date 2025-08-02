import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import './App.css';

function App() {
  // 1. Smooth scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 2. Setup scroll animation triggers
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger on initial load
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div 
        className="progress-bar" 
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <About />
        <Tokenomics />
      </main>

      {/* Global animation styles */}
      <style jsx>{`
        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #00ff96, #9d4dff);
          transform-origin: 0%;
          z-index: 9999;
        }
      `}</style>
    </>
  );
}

export default App;