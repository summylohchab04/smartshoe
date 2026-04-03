import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, Volume2, Activity, CheckCircle, Shield, Layers, 
  ChevronRight, Wifi, Cpu, Zap, Footprints, Play, ArrowRight,
  EyeOff, EarOff, UserX, Target, Microchip, Battery, Navigation, Scan
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
        staggerChildren: 0.15
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
        <div className="nav-links">
          <a href="#problem">Problem</a>
          <a href="#solution">Solution</a>
          <a href="#tech">Tech</a>
          <a href="#future">Future</a>
        </div>
        <div className="btn-group mobile-hide">
          <button className="btn btn-primary" style={{padding: '0.4rem 1.2rem', fontSize: '0.9rem'}}>Support Vision</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <motion.div 
          className="hero-content"
          initial="hidden" animate="visible" variants={staggerContainer}
        >
          <motion.h1 className="hero-title" variants={fadeInUp}>
            Redefining <br/><span style={{background: 'linear-gradient(135deg, var(--text-primary), var(--text-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Independent Mobility.</span>
          </motion.h1>
          <motion.p className="hero-desc" variants={fadeInUp}>
            Smart wearable footwear that detects obstacles in real-time and guides movement through intelligent haptic feedback.
          </motion.p>
          <motion.div className="hero-stats" variants={fadeInUp}>
             <div className="stat-item"><Zap size={18}/><span>Millisecond Response</span></div>
             <div className="stat-item"><Scan size={18}/><span>Multi-Directional</span></div>
             <div className="stat-item"><Battery size={18}/><span>Rechargeable</span></div>
          </motion.div>
          <motion.div className="btn-group" variants={fadeInUp}>
            <a href="#tech" className="btn btn-primary">
              Explore Technology <ArrowRight size={18} />
            </a>
            <a href="#how-it-works" className="btn btn-secondary">
              See Live Working <Play size={18} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
        >
          <div className="hero-glow"></div>
          <img src="/smart_shoe_model.gif" alt="Smart Shoe Animated Model" className="hero-image" />
        </motion.div>
      </section>

      {/* Problem Section */}
      <section id="problem">
        <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
          <h2 className="section-subtitle">The Challenge</h2>
          <h1 className="section-title">Independence Shouldn't Be Limited.</h1>
        </motion.div>
        <motion.div className="problem-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
          <motion.div className="problem-card" variants={fadeInUp}>
            <div className="icon-wrap"><EyeOff size={28} /></div>
            <h3>Invisible Barriers</h3>
            <p>Low-hanging branches, uneven paths, and knee-level obstacles often remain undetected by traditional canes.</p>
          </motion.div>
          <motion.div className="problem-card" variants={fadeInUp}>
            <div className="icon-wrap"><EarOff size={28} /></div>
            <h3>Sensory Overload</h3>
            <p>Constant reliance on audio cues increases cognitive strain and blocks out environmental sounds.</p>
          </motion.div>
          <motion.div className="problem-card" variants={fadeInUp}>
            <div className="icon-wrap"><UserX size={28} /></div>
            <h3>Reduced Confidence</h3>
            <p>Fear of collision reduces true independence and heavily limits daily exploration.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="solution-section">
        <div className="solution-container">
           <motion.div className="solution-content" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h1 className="section-title" variants={fadeInUp}>Intelligent Footwear That Guides You.</motion.h1>
              <motion.ul className="solution-list" variants={fadeInUp}>
                 <li><CheckCircle className="check-icon" /> <strong>Multi-Directional Detection:</strong> Front, side, and elevated obstacle scanning.</li>
                 <li><CheckCircle className="check-icon" /> <strong>Haptic Feedback:</strong> Vibration motors guide you without blocking hearing.</li>
                 <li><CheckCircle className="check-icon" /> <strong>Emergency Alerts:</strong> Instant buzzer for immediate close-range danger.</li>
              </motion.ul>
           </motion.div>
           <motion.div className="solution-visual" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              {/* Radar pulse visual */}
              <div className="radar-pulse-container">
                 <div className="radar-circle"></div>
                 <div className="radar-circle delay-1"></div>
                 <div className="radar-circle delay-2"></div>
                 <Footprints size={48} className="radar-icon" />
              </div>
           </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works">
        <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
          <h2 className="section-subtitle">Process</h2>
          <h1 className="section-title">How It Works</h1>
        </motion.div>
        <motion.div className="steps-container" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
          {[
            { title: "Multi-Directional Scanning", desc: "Three specialized ultrasonic sensors continuously map the environment." },
            { title: "Real-Time Processing", desc: "ESP32 calculates distance and applies alert logic in milliseconds." },
            { title: "Intelligent Priority", desc: "Overhead obstacles are prioritized to prevent head-level collisions." },
            { title: "Haptic Feedback", desc: "Vibration motors activate in specific patterns—guiding you intuitively." }
          ].map((step, index) => (
            <motion.div className="step-card" key={index} variants={fadeInUp}>
              <div className="step-number">0{index + 1}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Smart Alert Logic & System Flow */}
      <section>
        <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="section-subtitle">System Intelligence</h2>
          <h1 className="section-title">Architecture & Alert Logic</h1>
        </motion.div>
        
        <motion.div className="flow-container" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{marginBottom: '4rem'}}>
          <motion.div className="flow-item" variants={fadeInUp}>Sensors</motion.div>
          <motion.div className="flow-arrow" variants={fadeInUp}><ChevronRight size={32}/></motion.div>
          <motion.div className="flow-item highlight" variants={fadeInUp}>ESP32 Processing</motion.div>
          <motion.div className="flow-arrow" variants={fadeInUp}><ChevronRight size={32}/></motion.div>
          <motion.div className="flow-item" variants={fadeInUp}>Motor Driver</motion.div>
          <motion.div className="flow-arrow" variants={fadeInUp}><ChevronRight size={32}/></motion.div>
          <motion.div className="flow-item" variants={fadeInUp}>Haptic / Audio</motion.div>
        </motion.div>

        <motion.div className="alert-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          {[
            { title: "Immediate Danger", range: "≤ 10 cm", action: "Continuous buzzer", color: "var(--color-red)", icon: AlertTriangle },
            { title: "Critical Range", range: "10 – 20 cm", action: "Beeping buzzer", color: "var(--color-orange)", icon: Volume2 },
            { title: "Near Range", range: "20 – 40 cm", action: "Vibration feedback", color: "var(--color-yellow)", icon: Activity },
            { title: "Safe Zone", range: "> 40 cm", action: "No alert", color: "var(--color-green)", icon: CheckCircle },
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

        {/* Overhead Protection — Highlighted Safety Card */}
        <motion.div
          className="overhead-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="overhead-pulse"></div>
          <div className="overhead-inner">
            <div className="overhead-header">
              <div className="overhead-icon-wrap">
                <Shield size={28} />
              </div>
              <div>
                <h3>Overhead Protection</h3>
                <p className="overhead-subtitle">High-Priority Safety Feature</p>
              </div>
            </div>
            <div className="overhead-ranges">
              <div className="overhead-range-item critical">
                <div className="overhead-range-badge">≤ 60 cm</div>
                <div>
                  <p className="overhead-range-label">Critical Alert</p>
                  <p className="overhead-range-desc">Continuous vibration + buzzer</p>
                </div>
              </div>
              <div className="overhead-range-item warning">
                <div className="overhead-range-badge">60 – 100 cm</div>
                <div>
                  <p className="overhead-range-label">Pulsed Alert</p>
                  <p className="overhead-range-desc">Pulsed alerts based on distance</p>
                </div>
              </div>
            </div>
            <p className="overhead-desc">Detects obstacles at head level and provides immediate alerts to prevent injury.</p>
          </div>
        </motion.div>
      </section>

      {/* Technology / Hardware */}
      <section id="tech">
         <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="section-subtitle">Powered by Engineering</h2>
          <h1 className="section-title">Hardware Stack</h1>
        </motion.div>
        <motion.div className="tech-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
           
           {/* Card 1: Ultrasonic Sensing */}
           <motion.div className="tech-card" variants={fadeInUp}>
              <div className="tech-image-container"><img src="/ultrasonic_sensor.png" alt="Ultrasonic Sensor" /></div>
              <div className="tech-info">
                 <h3>Multi-Directional Sensing</h3>
                 <p>Provides multi-directional mapping with precise echo timing &lt;10ms.</p>
                 <div className="tech-tags">
                    <span className="tech-tag">Range: 0 – 4m</span>
                    <span className="tech-tag">Fast Response</span>
                 </div>
                 <hr className="tech-divider" />
                 <div className="tech-detail">
                    <div className="tech-detail-item">
                       <span className="tech-detail-label">Why</span>
                       <span>Traditional tools cannot detect elevated or distant obstacles effectively.</span>
                    </div>
                    <div className="tech-detail-item">
                       <span className="tech-detail-label">Role</span>
                       <span>Primary sensing layer for obstacle detection.</span>
                    </div>
                 </div>
              </div>
           </motion.div>

           {/* Card 2: ESP32 Intelligence Core */}
           <motion.div className="tech-card" variants={fadeInUp}>
              <div className="tech-image-container"><img src="/esp32_38pin.png" alt="ESP32" /></div>
              <div className="tech-info">
                 <h3>ESP32 Intelligence Core</h3>
                 <p>Dual-core processing handles priority logic instantly and efficiently.</p>
                 <div className="tech-tags">
                    <span className="tech-tag">Dual-core 240MHz</span>
                    <span className="tech-tag">WiFi / Bluetooth</span>
                 </div>
                 <hr className="tech-divider" />
                 <div className="tech-detail">
                    <div className="tech-detail-item">
                       <span className="tech-detail-label">Why</span>
                       <span>Ensures fast processing and real-time decision making.</span>
                    </div>
                    <div className="tech-detail-item">
                       <span className="tech-detail-label">Role</span>
                       <span>Central control unit (brain of the system).</span>
                    </div>
                 </div>
              </div>
           </motion.div>

           {/* Card 3: Motor Driver Circuit */}
           <motion.div className="tech-card" variants={fadeInUp}>
              <div className="tech-image-container"><img src="/2n2222a.png" alt="2N2222A Transistor" /></div>
              <div className="tech-info">
                 <h3>Motor Driver Circuit</h3>
                 <p>Amplifies micro-signals safely to power tactile vibration motors.</p>
                 <div className="tech-tags">
                    <span className="tech-tag">2N2222A NPN Transistor</span>
                    <span className="tech-tag">1kΩ Resistor</span>
                    <span className="tech-tag">100uF Capacitor</span>
                 </div>
                 <hr className="tech-divider" />
                 <div className="tech-detail">
                    <div className="tech-detail-item">
                       <span className="tech-detail-label">Why</span>
                       <span>Microcontrollers cannot directly drive motors safely.</span>
                    </div>
                    <div className="tech-detail-item">
                       <span className="tech-detail-label">Role</span>
                       <span>Acts as power interface between ESP32 and motors.</span>
                    </div>
                 </div>
              </div>
           </motion.div>

           {/* Card 4: Haptic Feedback System */}
           <motion.div className="tech-card" variants={fadeInUp}>
              <div className="tech-image-container"><img src="/haptic_motor.png" alt="Haptic Motor" /></div>
              <div className="tech-info">
                 <h3>Haptic Feedback System</h3>
                 <p>Vibration motors and piezo buzzer formulate directional cues.</p>
                 <div className="tech-tags">
                    <span className="tech-tag">Vibration Feedback</span>
                    <span className="tech-tag">Audio Alert</span>
                 </div>
                 <hr className="tech-divider" />
                 <div className="tech-detail">
                    <div className="tech-detail-item">
                       <span className="tech-detail-label">Why</span>
                       <span>Provides intuitive feedback for navigation.</span>
                    </div>
                    <div className="tech-detail-item">
                       <span className="tech-detail-label">Role</span>
                       <span>User interaction and communication layer.</span>
                    </div>
                 </div>
              </div>
           </motion.div>

           {/* Card 5: Smart Power Management */}
           <motion.div className="tech-card" variants={fadeInUp}>
              <div className="tech-image-container">
                 <div className="power-visual" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--accent-color)'}}>
                    <Battery size={64} />
                 </div>
              </div>
              <div className="tech-info">
                 <h3>Smart Power Management</h3>
                 <p>Regulated power supply with safe charging and voltage boosting.</p>
                 <div className="tech-tags">
                    <span className="tech-tag">3.7V Li-ion</span>
                    <span className="tech-tag">TP4056 Charging</span>
                    <span className="tech-tag">XL6009 Boost Module</span>
                 </div>
                 <hr className="tech-divider" />
                 <div className="tech-detail">
                    <div className="tech-detail-item">
                       <span className="tech-detail-label">Why</span>
                       <span>Ensures stable and rechargeable power supply.</span>
                    </div>
                    <div className="tech-detail-item">
                       <span className="tech-detail-label">Role</span>
                       <span>Maintains system power efficiency and reliability.</span>
                    </div>
                 </div>
              </div>
           </motion.div>

        </motion.div>
      </section>

      {/* Prototype Section */}
      <section className="prototype-section">
        <motion.div className="prototype-container" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div className="prototype-media-grid" variants={fadeInUp}>
            <div className="proto-main">
               <img src="/prototype_full_setup.png" alt="Prototype Full Setup" />
            </div>
            <div className="proto-sub">
               <img src="/prototype_close_up.png" alt="Prototype Close Up" />
            </div>
          </motion.div>
          <motion.div className="prototype-content" variants={fadeInUp}>
            <h2>Prototype Design</h2>
            <p className="prototype-subheading">Tested for real-world reliability.</p>
            <ul className="prototype-list">
              <li><CheckCircle className="prototype-icon" size={20} /> Front, side, top ultrasonic placement</li>
              <li><CheckCircle className="prototype-icon" size={20} /> Low profile ESP32 mount</li>
              <li><CheckCircle className="prototype-icon" size={20} /> Independent haptic zones</li>
              <li><CheckCircle className="prototype-icon" size={20} /> Rechargeable battery hub</li>
            </ul>
            <div className="prototype-note">
               <CheckCircle size={16} /> Successfully tested within 50cm range
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Future Vision Section */}
      <section id="future" className="future-section">
         <motion.div className="future-content text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="section-subtitle">Roadmap</h2>
            <h1 className="section-title">Future Vision</h1>
            <p className="future-desc">Evolving from reactive detection to predictive mobility intelligence.</p>
            <div className="roadmap-grid">
               <div className="roadmap-item">
                  <Navigation size={24} className="accent-icon" />
                  <h4>GPS Navigation</h4>
               </div>
               <div className="roadmap-item">
                  <Target size={24} className="accent-icon" />
                  <h4>AI Recognition</h4>
               </div>
               <div className="roadmap-item">
                  <Wifi size={24} className="accent-icon" />
                  <h4>Smartphone Sync</h4>
               </div>
            </div>
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
