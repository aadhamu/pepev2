import { useState } from 'react';
import { FaCopy, FaCheck, FaTwitter, FaTelegram, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';
import PepeLogo from '../assets/pepe.jpg';

function Tokenomics() {
  const [copied, setCopied] = useState(false);
  const address = '0x3332E8a06a8Dd63C476FD3dB32aB69b6f97B8B54';

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const exchanges = [
    { name: "CMC", color: "linear-gradient(135deg, #00ff96, #9d4dff)" },
    { name: "Pinksale", color: "linear-gradient(135deg, #ff00cc, #ff9900)" },
    { name: "Coingecko", color: "linear-gradient(135deg, #8a2be2, #1e90ff)" },
    { name: "DexView", color: "linear-gradient(135deg, #00bfff, #00ff7f)" },
    { name: "DexTools", color: "linear-gradient(135deg, #ff4500, #ff8c00)" },
    { name: "Uniswap", color: "linear-gradient(135deg, #ff007f, #9400d3)" }
  ];

  return (
    <section
      id="tokenomics"
      style={{
        minHeight: '100vh',
        padding: '120px 1rem 3rem',
        color: '#fff',
        background: 'linear-gradient(135deg, #0a0e17 0%, #1a2a3a 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background elements */}
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          width: '100%',
          maxWidth: '800px',
          position: 'relative',
          zIndex: 1
        }}
      >
        <motion.h2 
          style={{ 
            fontSize: '3rem', 
            marginBottom: '1.5rem',
            background: 'linear-gradient(90deg, #00ff96, #9d4dff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 20px rgba(0, 255, 150, 0.3)'
          }}
          whileHover={{ scale: 1.05 }}
        >
          Tokenomics
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            background: 'rgba(15, 23, 42, 0.7)',
            borderRadius: '20px',
            padding: '2rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 255, 150, 0.2)',
            marginBottom: '2rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}
        >
          <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#a0aec0' }}>Total Supply</p>
          <motion.h3 
            style={{ 
              fontSize: '2.5rem', 
              marginBottom: '2rem',
              background: 'linear-gradient(90deg, #00ff96, #9d4dff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            whileHover={{ scale: 1.03 }}
          >
            69,000,000,000,000
          </motion.h3>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            marginBottom: '2rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #00ff96, #9d4dff)',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem'
              }}>
                🔷
              </div>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>92%</p>
              <p style={{ fontSize: '1rem', color: '#a0aec0' }}>Community</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #9d4dff, #00ff96)',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem'
              }}>
                🔶
              </div>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>8%</p>
              <p style={{ fontSize: '1rem', color: '#a0aec0' }}>CEX Listing</p>
            </div>
          </div>
        </motion.div>

        {/* Contract Address */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            background: 'rgba(15, 23, 42, 0.7)',
            borderRadius: '12px',
            padding: '1.5rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 255, 150, 0.2)',
            marginBottom: '3rem',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
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
            <motion.button
              onClick={handleCopy}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: copied ? 'rgba(0, 255, 150, 0.3)' : 'rgba(0, 255, 150, 0.1)',
                border: 'none',
                color: copied ? '#00ff96' : '#a0aec0',
                padding: '0.3rem 0.8rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.85rem',
                fontWeight: 'bold'
              }}
            >
              {copied ? <FaCheck /> : <FaCopy />} {copied ? 'Copied!' : 'Copy'}
            </motion.button>
          </div>
          <div style={{
            background: 'rgba(0, 0, 0, 0.3)',
            padding: '1rem',
            borderRadius: '10px',
            fontFamily: 'monospace',
            wordBreak: 'break-all',
            fontSize: '0.9rem',
            color: '#fff',
            textAlign: 'left'
          }}>
            {address}
          </div>
        </motion.div>

        {/* Exchange Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            marginBottom: '3rem'
          }}
        >
          <h3 style={{
            fontSize: '1.5rem',
            marginBottom: '1.5rem',
            color: '#fff'
          }}>
            Our Partners
          </h3>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem'
          }}>
            {exchanges.map((exchange, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.05 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '1rem',
                  borderRadius: '15px',
                  backdropFilter: 'blur(6px)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '120px',
                  height: '120px',
                  textDecoration: 'none',
                  color: '#fff'
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: exchange.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.5rem',
                  fontSize: '1.2rem',
                  fontWeight: 'bold'
                }}>
                  {exchange.name.charAt(0)}
                </div>
                <span style={{ fontSize: '0.9rem' }}>{exchange.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            marginTop: '3rem',
            padding: '2rem 1rem',
            background: 'rgba(15, 23, 42, 0.7)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 255, 150, 0.2)',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <motion.img 
            src={PepeLogo} 
            alt="Logo" 
            style={{ 
              width: '70px', 
              height: '70px', 
              borderRadius: '50%', 
              marginBottom: '1rem',
              border: '2px solid rgba(0, 255, 150, 0.3)'
            }}
            whileHover={{ rotate: 10 }}
          />
          <p style={{ 
            fontWeight: 'bold', 
            fontSize: '1.3rem',
            marginBottom: '0.5rem',
            background: 'linear-gradient(90deg, #00ff96, #9d4dff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            PEPEv2 - Built for the Meme Revolution
          </p>

          <nav style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            marginTop: '1.5rem', 
            flexWrap: 'wrap', 
            justifyContent: 'center' 
          }}>
            {['Home', 'About', 'Tokenomics'].map((item, idx) => (
              <motion.a
                key={idx}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  transition: 'all 0.3s'
                }}
                whileHover={{ 
                  background: 'rgba(0, 255, 150, 0.2)',
                  scale: 1.1
                }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <div style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            marginTop: '1.5rem', 
            fontSize: '1.5rem' 
          }}>
            {[
              { icon: <FaTwitter />, url: "https://x.com/PEPEv2_CTO?t=hiWDQrvTVxOGr8fkZyg6fg&s=09" },
              { icon: <FaTelegram />, url: "https://t.me/pepev2og" },
              { icon: <FaGlobe />, url: "#" }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: '#fff',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s'
                }}
                whileHover={{ 
                  background: 'rgba(0, 255, 150, 0.3)',
                  scale: 1.2
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <p style={{ 
            marginTop: '1.5rem', 
            fontSize: '0.9rem', 
            color: '#a0aec0' 
          }}>
            © {new Date().getFullYear()} PEPEv2. All rights reserved.
          </p>
        </motion.footer>
      </motion.div>
    </section>
  );
}

export default Tokenomics;