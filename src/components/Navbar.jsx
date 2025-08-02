import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import PepeLogo from '../assets/pepe.jpg';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const buyLink = "https://app.uniswap.org/swap?inputCurrency=eth&outputCurrency=0x3332E8a06a8Dd63C476FD3dB32aB69b6f97B8B54";

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      zIndex: 1000,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(15, 23, 42, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0, 255, 150, 0.2)' : 'none'
    }}>
      <header
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#fff',
        }}
      >
        {/* Logo */}
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            cursor: 'pointer'
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src={PepeLogo}
            alt="pepev2 logo"
            style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%',
              border: '2px solid rgba(0, 255, 150, 0.3)'
            }}
          />
          <span style={{ 
            fontWeight: 'bold', 
            fontSize: '1.3rem',
            background: 'linear-gradient(90deg, #00ff96, #9d4dff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            PEPEv2
          </span>
        </div>

        {/* Desktop Nav */}
        {!isMobile && (
          <nav style={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: '2rem' 
          }}>
            {['home', 'about', 'tokenomics'].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  padding: '0.5rem 0',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => (e.target.style.color = '#00ff96')}
                onMouseOut={(e) => (e.target.style.color = '#fff')}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '0%',
                  height: '2px',
                  background: 'linear-gradient(90deg, #00ff96, #9d4dff)',
                  transition: 'width 0.3s ease'
                }} className="nav-underline" />
              </button>
            ))}
            
            <a
              href={buyLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#00ff96',
                border: 'none',
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                color: '#000',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#9d4dff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#00ff96';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Buy Now
            </a>
          </nav>
        )}

        {/* Mobile Toggle */}
        {isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href={buyLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#00ff96',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                fontWeight: 'bold',
                cursor: 'pointer',
                color: '#000',
                textDecoration: 'none'
              }}
            >
              Buy
            </a>
            
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                fontSize: '1.5rem',
                background: 'transparent',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        )}
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && isMobile && (
        <div
          style={{
            position: 'fixed',
            top: '80px',
            left: 0,
            right: 0,
            background: 'rgba(15, 23, 42, 0.95)',
            padding: '1rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            zIndex: 999,
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(0, 255, 150, 0.2)',
            borderBottom: '1px solid rgba(0, 255, 150, 0.2)',
            animation: 'slideDown 0.3s ease-out'
          }}
        >
          {['home', 'about', 'tokenomics'].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: '1.1rem',
                textAlign: 'left',
                cursor: 'pointer',
                color: '#fff',
                padding: '0.8rem 1rem',
                borderRadius: '6px',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(0, 255, 150, 0.2)';
                e.currentTarget.style.color = '#00ff96';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#fff';
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
          
          <a
            href={buyLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#00ff96',
              border: 'none',
              padding: '0.8rem 1rem',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer',
              color: '#000',
              textDecoration: 'none',
              textAlign: 'center',
              marginTop: '0.5rem'
            }}
          >
            Buy Now
          </a>
        </div>
      )}

      <style>
        {`
          @keyframes slideDown {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          button:hover .nav-underline {
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}

export default Navbar;