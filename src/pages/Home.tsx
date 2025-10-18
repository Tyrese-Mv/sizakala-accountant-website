import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiChartBar, HiBookOpen, HiCheckCircle } from 'react-icons/hi';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Registered with CIBA since 2015
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Professional Accounting Services You Can Trust
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Specialized financial solutions for schools, non-profit organisations,
              and private companies across South Africa
            </motion.p>
            <motion.div
              className="hero-features"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.div
                className="hero-feature"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <span className="feature-icon">✓</span>
                <span>CIBA Certified</span>
              </motion.div>
              <motion.div
                className="hero-feature"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <span className="feature-icon">✓</span>
                <span>Affordable Pricing</span>
              </motion.div>
              <motion.div
                className="hero-feature"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.0 }}
              >
                <span className="feature-icon">✓</span>
                <span>Expert Team</span>
              </motion.div>
            </motion.div>
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <Link to="/services" className="btn btn-primary btn-large">
                Explore Our Services
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-large">
                Get a Free Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            What We Offer
          </motion.h2>
          <div className="services-grid">
            <motion.div
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="service-icon">
                <HiChartBar />
              </div>
              <h3>Audit Services</h3>
              <p>
                Comprehensive financial statement audits for schools, NPOs, and
                private companies with tiered pricing based on your organisation's
                size and complexity.
              </p>
              <ul className="service-features">
                <li>From R 2,500 (tiered pricing)</li>
                <li>Schools, NPOs & Companies</li>
                <li>Compliance & regulatory audits</li>
                <li>Professional & reliable service</li>
              </ul>
              <Link to="/services#audit" className="btn btn-outline">
                Learn More
              </Link>
            </motion.div>

            <motion.div
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="service-icon">
                <HiBookOpen />
              </div>
              <h3>Bookkeeping Services</h3>
              <p>
                Monthly and quarterly bookkeeping services to help you meet
                submission deadlines and maintain accurate financial records.
              </p>
              <ul className="service-features">
                <li>From R 150/month</li>
                <li>Tiered pricing by school size</li>
                <li>Cash receipts & payments journals</li>
                <li>Bank reconciliations</li>
              </ul>
              <Link to="/services#bookkeeping" className="btn btn-outline">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Sizakala?
          </motion.h2>
          <div className="benefits-grid">
            <motion.div
              className="benefit-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="benefit-icon">
                <HiCheckCircle />
              </div>
              <h3>Registered & Qualified</h3>
              <p>
                Registered with the Chartered Institute for Business Accountants
                (CIBA) with Business Accountants in Practice (BAP) designation
              </p>
            </motion.div>
            <motion.div
              className="benefit-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="benefit-icon">
                <HiCheckCircle />
              </div>
              <h3>Specialized Expertise</h3>
              <p>
                We focus exclusively on public schools, understanding your unique
                financial management requirements
              </p>
            </motion.div>
            <motion.div
              className="benefit-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="benefit-icon">
                <HiCheckCircle />
              </div>
              <h3>Affordable Pricing</h3>
              <p>
                Reasonable fees structured to fit your school's budget, with tiered
                pricing based on enrollment
              </p>
            </motion.div>
            <motion.div
              className="benefit-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="benefit-icon">
                <HiCheckCircle />
              </div>
              <h3>Free Training</h3>
              <p>
                Complimentary training on financial compliance and record-keeping
                with our audit services
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Improve Your School's Financial Management?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact us today to discuss how we can help your school maintain sound
            financial health
          </motion.p>
          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
            <a href="tel:0670343472" className="btn btn-secondary">
              Call: 067 034 3472
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
