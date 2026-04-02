import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  Volume2, 
  Activity, 
  CheckCircle, 
  Shield, 
  Layers, 
  ChevronRight, 
  Wifi, 
  Cpu, 
  Zap,
  Footprints,
  Play,
  ArrowRight
} from 'lucide-react';
import './App.css';

const App = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <Footprints size={28} color="var(--accent-color)" />
          Smart<span>Step</span>
        </div>
        <div className="btn-group" style={{gap: '1rem'}}>
          <button className="btn btn-primary" style={{padding: '0.5rem 1rem'}}>Pre-Order</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 className="hero-title" variants={fadeInUp}>
            Redefining <br/>Independent Mobility
          </motion.h1>
          <motion.p className="hero-desc" variants={fadeInUp}>
            Smart wearable footwear that detects obstacles in real-time and guides movement through intelligent haptic feedback.
          </motion.p>
          <motion.div className="btn-group" variants={fadeInUp}>
            <button className="btn btn-primary">
              Explore Technology <ArrowRight size={20} />
            </button>
            <button className="btn btn-secondary">
              See Live Working <Play size={20} />
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-glow"></div>
          <div className="hero-image-placeholder">
            <div style={{textAlign: 'center', zIndex: 1}}>
              <Footprints size={64} color="var(--accent-color)" style={{marginBottom: '1rem', opacity: 0.8}} />
              <p>Smart Footwear Model<br/>(3D Render / Image)</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section>
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="section-subtitle">Process</h2>
          <h1 className="section-title">How It Works</h1>
        </motion.div>

        <motion.div 
          className="steps-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {[
            { title: "Multi-Directional Scanning", desc: "Ultrasonic sensors detect obstacles in front, side, and overhead." },
            { title: "Real-Time Processing", desc: "ESP32 calculates distance and applies alert logic." },
            { title: "Intelligent Priority", desc: "Overhead obstacles are prioritized to prevent head-level collisions." },
            { title: "Haptic Feedback", desc: "Vibration motors guide direction based on obstacle position." },
            { title: "Emergency Alert", desc: "Buzzer activates instantly for critical distances." }
          ].map((step, index) => (
            <motion.div className="step-card" key={index} variants={fadeInUp}>
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Smart Alert Logic */}
      <section>
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="section-subtitle">System Intelligence</h2>
          <h1 className="section-title">Smart Alert Logic</h1>
        </motion.div>

        <motion.div 
          className="alert-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {[
            { title: "Immediate Danger", range: "≤ 10 cm", action: "Continuous buzzer", color: "var(--color-red)", icon: AlertTriangle },
            { title: "Critical Range", range: "10 – 20 cm", action: "Beeping buzzer (faster as distance decreases)", color: "var(--color-orange)", icon: Volume2 },
            { title: "Near Range", range: "20 – 40 cm", action: "Vibration feedback (speed increases as object gets closer)", color: "var(--color-yellow)", icon: Activity },
            { title: "Safe Zone", range: "> 40 cm", action: "No alert", color: "var(--color-green)", icon: CheckCircle },
            { title: "Overhead Protection", range: "≤ 60cm / 60-100cm", action: "Continuous alert / Pulsed alerts", color: "var(--color-purple)", icon: Shield },
            { title: "Priority System", range: "Logic Based", action: "Overhead obstacles get highest priority", color: "var(--color-cyan)", icon: Layers }
          ].map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div className="alert-card" key={index} variants={fadeInUp}>
                <div className="alert-icon-wrap" style={{ color: card.color }}>
                  <Icon size={24} />
                </div>
                <h3>{card.title}</h3>
                <div className="alert-range" style={{ color: card.color }}>{card.range}</div>
                <p className="alert-action">{card.action}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* System Flow */}
      <section>
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="section-subtitle">Architecture</h2>
          <h1 className="section-title">System Flow</h1>
        </motion.div>

        <motion.div 
          className="flow-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div className="flow-item" variants={fadeInUp}>Sensors</motion.div>
          <motion.div className="flow-arrow" variants={fadeInUp}><ChevronRight size={32}/></motion.div>
          
          <motion.div className="flow-item highlight" variants={fadeInUp}>ESP32 Processing</motion.div>
          <motion.div className="flow-arrow" variants={fadeInUp}><ChevronRight size={32}/></motion.div>
          
          <motion.div className="flow-item" variants={fadeInUp}>Motor Driver</motion.div>
          <motion.div className="flow-arrow" variants={fadeInUp}><ChevronRight size={32}/></motion.div>
          
          <motion.div className="flow-item" variants={fadeInUp}>Haptic + Audio Output</motion.div>
        </motion.div>
      </section>

      {/* Prototype Section */}
      <section className="prototype-section">
        <motion.div 
          className="prototype-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div className="prototype-media" variants={fadeInUp}>
            <div>
               <Wifi size={48} color="var(--accent-color)" style={{marginBottom: '1rem', display: 'block', margin: '0 auto'}} />
               <p>Prototype Media / Video Demo</p>
            </div>
          </motion.div>
          <motion.div className="prototype-content" variants={fadeInUp}>
            <h2>Prototype Design</h2>
            <ul className="prototype-list">
              <li><CheckCircle className="prototype-icon" size={24} /> Ultrasonic sensors (front, side, top)</li>
              <li><Cpu className="prototype-icon" size={24} /> ESP32 microcontroller</li>
              <li><Activity className="prototype-icon" size={24} /> Vibration motors</li>
              <li><Volume2 className="prototype-icon" size={24} /> Buzzer alert system</li>
              <li><Zap className="prototype-icon" size={24} /> Rechargeable battery</li>
            </ul>
            <div className="prototype-note">
              <strong>Note:</strong> Tested for obstacle detection within 50 cm range.
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features List */}
      <section>
         <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="section-subtitle">Capabilities</h2>
          <h1 className="section-title">Core Features</h1>
        </motion.div>

        <motion.div 
          className="features-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {[
            "Real-time obstacle detection",
            "Multi-directional sensing",
            "Haptic feedback system",
            "Audio alerts",
            "Rechargeable power system"
          ].map((feature, i) => (
            <motion.div className="feature-pill" key={i} variants={fadeInUp}>
              <CheckCircle size={18} color="var(--accent-color)" />
              {feature}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">
          <Footprints size={24} color="var(--accent-color)" /> Smart<span>Step</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Smart Assistive Footwear. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
