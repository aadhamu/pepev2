import { useEffect, useState, useRef } from 'react';
import { FaTelegram, FaTwitter, FaCopy } from 'react-icons/fa';
import { motion, useAnimation, useInView } from 'framer-motion';

function About() {
  const [isMobile, setIsMobile] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  const controls = useAnimation();

  const contractAddress = "0x3332E8a06a8Dd63C476FD3dB32aB69b6f97B8B54";

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { rotate: -5, opacity: 0, y: 30 },
    visible: {
      rotate: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const circleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        bounce: 0.4
      }
    }
  };

  const floatVariants = {
    hidden: { y: 0 },
    visible: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      id="about"
      ref={ref}
      style={{
        minHeight: '100vh',
        padding: isMobile ? '100px 1rem 2rem' : '100px 4rem 4rem',
        color: '#fff',
        background: 'linear-gradient(135deg, #0a0e17 0%, #1a2a3a 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Crypto-themed background elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(0, 255, 150, 0.1) 0%, transparent 30%)',
        zIndex: 0
      }} />
      
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 255, 150, 0.15) 0%, transparent 70%)',
        filter: 'blur(20px)',
        zIndex: 0
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '10%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(100, 0, 255, 0.1) 0%, transparent 70%)',
        filter: 'blur(30px)',
        zIndex: 0
      }} />

      {/* Blockchain node connections */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
          linear-gradient(90deg, rgba(0, 255, 150, 0.05) 1px, transparent 1px),
          linear-gradient(rgba(0, 255, 150, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        zIndex: 0
      }} />

      {/* Floating crypto coins */}
      <motion.div 
        variants={floatVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: 'absolute',
          top: '15%',
          left: '15%',
          width: '50px',
          height: '50px',
          background: 'radial-gradient(circle, #00ff96, #00b36b)',
          borderRadius: '50%',
          filter: 'blur(1px)',
          zIndex: 0
        }}
      />
      
      <motion.div 
        variants={floatVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
        style={{
          position: 'absolute',
          bottom: '25%',
          right: '15%',
          width: '70px',
          height: '70px',
          background: 'radial-gradient(circle, #9d4dff, #5a00b3)',
          borderRadius: '50%',
          filter: 'blur(1px)',
          zIndex: 0
        }}
      />

      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        style={{
          width: '100%',
          maxWidth: '1200px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Top Section */}
        <motion.div
          variants={containerVariants}
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            gap: isMobile ? '2rem' : '4rem'
          }}
        >
          {/* Animated Text */}
          <motion.div
            variants={itemVariants}
            style={{
              flex: 1,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <h2 style={{
              fontSize: isMobile ? '2.5rem' : '4rem',
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #00ff96, #9d4dff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(0, 255, 150, 0.3)',
              marginBottom: '1rem'
            }}>
              PEPEv2
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#a0aec0',
              maxWidth: '500px'
            }}>
              The next evolution of meme magic on the blockchain
            </p>
          </motion.div>

          {/* Tilting Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02, boxShadow: '0 15px 30px rgba(0,255,150,0.2)' }}
            style={{
              flex: 1,
              background: 'rgba(15, 23, 42, 0.7)',
              color: '#fff',
              padding: '2.5rem',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 255, 150, 0.2)',
              textAlign: 'left'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #00ff96, #9d4dff)',
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: '1rem'
              }}>
                <span style={{ fontSize: '1.5rem' }}>🐸</span>
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                background: 'linear-gradient(90deg, #00ff96, #9d4dff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                The PEPE Revolution
              </h3>
            </div>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#e2e8f0'
            }}>
              <strong style={{ color: '#00ff96' }}>PEPEv2</strong> is not just another meme token - it's a cultural phenomenon with real utility. 
              Built on the legacy of the original PEPE, we're bringing decentralized finance, 
              NFT integration, and community governance to the meme economy. 
              Join the movement that's redefining what a meme coin can be.
            </p>
          </motion.div>
        </motion.div>

        {/* Middle Section */}
        <motion.div
          variants={containerVariants}
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            gap: isMobile ? '3rem' : '4rem'
          }}
        >
          {/* Left Text */}
          <motion.div 
            variants={itemVariants}
            style={{ 
              flex: 1,
              textAlign: isMobile ? 'center' : 'left',
              padding: '1rem'
            }}
          >
            <h3 style={{
              fontSize: '2rem',
              marginBottom: '1.5rem',
              background: 'linear-gradient(90deg, #00ff96, #9d4dff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Why PEPEv2?
            </h3>
            
            <div style={{
              height: '4px',
              width: '100px',
              background: 'linear-gradient(90deg, #00ff96, #9d4dff)',
              margin: isMobile ? '0.5rem auto' : '0.5rem 0',
              borderRadius: '2px'
            }} />
            
            <ul style={{ 
              listStyleType: 'none',
              padding: 0,
              marginTop: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{
                  minWidth: '30px',
                  height: '30px',
                  background: 'rgba(0, 255, 150, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: '1rem'
                }}>
                  <span style={{ color: '#00ff96', fontSize: '1rem' }}>✓</span>
                </div>
                <span style={{ color: '#e2e8f0', fontSize: '1.1rem', textAlign: 'left' }}>
                  <strong style={{ color: '#fff' }}>Enhanced Utility</strong> - More than just a meme, with real DeFi applications
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{
                  minWidth: '30px',
                  height: '30px',
                  background: 'rgba(0, 255, 150, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: '1rem'
                }}>
                  <span style={{ color: '#00ff96', fontSize: '1rem' }}>✓</span>
                </div>
                <span style={{ color: '#e2e8f0', fontSize: '1.1rem', textAlign: 'left' }}>
                  <strong style={{ color: '#fff' }}>Community Powered</strong> - Decentralized governance and voting
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{
                  minWidth: '30px',
                  height: '30px',
                  background: 'rgba(0, 255, 150, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: '1rem'
                }}>
                  <span style={{ color: '#00ff96', fontSize: '1rem' }}>✓</span>
                </div>
                <span style={{ color: '#e2e8f0', fontSize: '1.1rem', textAlign: 'left' }}>
                  <strong style={{ color: '#fff' }}>Secure & Audited</strong> - Fully vetted smart contracts
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Right Circle/Card */}
          <motion.div
            variants={containerVariants}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem'
            }}
          >
            <motion.div
              variants={circleVariants}
              whileHover={{ scale: 1.03 }}
              style={{
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                background: 'rgba(15, 23, 42, 0.7)',
                color: '#fff',
                padding: '2.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 8px 25px rgba(0,0,0,0.5)',
                border: '2px solid rgba(0, 255, 150, 0.3)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'conic-gradient(transparent, rgba(0, 255, 150, 0.1), transparent)',
                animation: 'rotate 10s linear infinite',
                zIndex: -1
              }} />
              <div style={{
                position: 'relative',
                zIndex: 1
              }}>
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  color: '#e2e8f0',
                  marginBottom: '1.5rem'
                }}>
                  PEPEv2 is your gateway to the meme revolution. Join the most vibrant community in crypto.
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '1rem'
                }}>
                  <a 
                    href="https://x.com/PEPEv2_CTO?t=hiWDQrvTVxOGr8fkZyg6fg&s=09" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(29, 161, 242, 0.2)',
                      color: '#1DA1F2',
                      fontSize: '1.2rem',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(29, 161, 242, 0.4)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(29, 161, 242, 0.2)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <FaTwitter />
                  </a>
                  
                  <a 
                    href="https://t.me/pepev2og" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(0, 136, 204, 0.2)',
                      color: '#0088CC',
                      fontSize: '1.2rem',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(0, 136, 204, 0.4)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(0, 136, 204, 0.2)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <FaTelegram />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contract Address with Copy */}
            <motion.div
              variants={itemVariants}
              style={{
                background: 'rgba(15, 23, 42, 0.7)',
                borderRadius: '12px',
                padding: '1rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 255, 150, 0.2)',
                width: '1110%',
                maxWidth: '400px'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.5rem'
              }}>
                <span style={{
                  fontSize: '0.9rem',
                  color: '#a0aec0'
                }}>
                  Contract Address:
                </span>
                <button
                  onClick={copyToClipboard}
                  style={{
                    background: 'rgba(0, 255, 150, 0.1)',
                    border: 'none',
                    color: '#00ff96',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(0, 255, 150, 0.2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(0, 255, 150, 0.1)';
                  }}
                >
                  <FaCopy />
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '0.75rem',
                borderRadius: '8px',
                fontFamily: 'monospace',
                wordBreak: 'break-all',
                fontSize: '0.85rem',
                color: '#fff',
                textAlign: 'left'
              }}>
                {contractAddress}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* CSS animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </section>
  );
}

export default About;