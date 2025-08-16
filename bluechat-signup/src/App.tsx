import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MessageCircle, 
  Users, 
  Shield, 
  Zap, 
  MapPin, 
  Smartphone,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <div className="logo-icon">
              <MessageCircle size={40} />
            </div>
            <h1 className="logo-text">BlueChat</h1>
          </motion.div>

          <motion.h2 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Chat with people nearby
          </motion.h2>

          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Discover and connect with people around you through proximity-based ephemeral messaging
          </motion.p>

          {!isSubmitted ? (
            <motion.form 
              className="signup-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter your email for early access"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="email-input"
                />
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="loading-spinner"></div>
                  ) : (
                    <>
                      Get Early Access
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div 
              className="success-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle size={24} />
              <span>You're on the list! We'll notify you when BlueChat launches.</span>
            </motion.div>
          )}

          <motion.div 
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="scroll-text">Scroll to learn more</div>
            <div className="scroll-arrow"></div>
          </motion.div>
        </motion.div>

        {/* Desktop Visual Section */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="hero-visual-content">
            <h3>Revolutionary Social Experience</h3>
            <p>Connect with people physically near you through innovative proximity technology</p>
            
            <div className="feature-preview">
              <motion.div 
                className="feature-preview-item"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="feature-preview-icon">
                  <MapPin size={24} />
                </div>
                <div className="feature-preview-text">
                  <h4>Proximity Detection</h4>
                  <p>Find people within 50 meters using Bluetooth</p>
                </div>
              </motion.div>

              <motion.div 
                className="feature-preview-item"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                <div className="feature-preview-icon">
                  <Shield size={24} />
                </div>
                <div className="feature-preview-text">
                  <h4>Ephemeral Privacy</h4>
                  <p>Messages disappear when you leave - no data retention</p>
                </div>
              </motion.div>

              <motion.div 
                className="feature-preview-item"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div className="feature-preview-icon">
                  <Users size={24} />
                </div>
                <div className="feature-preview-text">
                  <h4>Intimate Groups</h4>
                  <p>Join rooms with up to 25 people for meaningful conversations</p>
                </div>
              </motion.div>

              <motion.div 
                className="feature-preview-item"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <div className="feature-preview-icon">
                  <Zap size={24} />
                </div>
                <div className="feature-preview-text">
                  <h4>Real-time Chat</h4>
                  <p>Instant messaging with live updates and notifications</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why BlueChat is Revolutionary
          </motion.h2>

          <div className="features-grid">
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <MapPin size={32} />
              </div>
              <h3>Proximity-Based</h3>
              <p>Find and connect with people physically near you using Bluetooth technology</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <Shield size={32} />
              </div>
              <h3>Ephemeral & Private</h3>
              <p>No permanent accounts. Your messages disappear when you leave - complete privacy</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <Users size={32} />
              </div>
              <h3>Room Management</h3>
              <p>Join chat rooms with up to 25 people. Rooms auto-lock when full for intimate conversations</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <Zap size={32} />
              </div>
              <h3>Real-time Chat</h3>
              <p>Instant messaging with live updates. No delays, no waiting - just pure connection</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <Smartphone size={32} />
              </div>
              <h3>Cross-Platform</h3>
              <p>Works seamlessly on iOS, Android, and Web. Connect regardless of your device</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <Star size={32} />
              </div>
              <h3>Modern Tech</h3>
              <p>Built with React Native, Firebase, and cutting-edge technologies for the best experience</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to revolutionize how you connect?</h2>
            <p>Join thousands of early adopters who are excited about proximity-based social networking</p>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="cta-form">
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="email-input"
                  />
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="loading-spinner"></div>
                    ) : (
                      <>
                        Get Early Access
                        <ArrowRight size={20} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="success-message">
                <CheckCircle size={24} />
                <span>You're all set! We'll be in touch soon.</span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 BlueChat. Built with ❤️ for meaningful connections.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
