import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiChartBar, HiBookOpen, HiCheckCircle, HiCurrencyDollar } from 'react-icons/hi';
import { useSEO } from '../hooks/useSEO';
import './Home.css';

const Home = () => {
  useSEO({
    title: 'Sizakala Accountants - School Audit, Bookkeeping & Funding Assistance | Durban',
    description: 'CBAP SA registered accountants specializing in public school audits (from R2,000), bookkeeping (R150/month), and funding assistance. Certified by CIBA & SAIT. Based in Durban, serving all SA schools.',
    keywords: 'school audit Durban, school bookkeeping, school funding assistance, Section 18A registration, CBAP accountant, CIBA registered, SAIT practitioner, public school accounting',
    canonical: 'https://sizakalabsp.com/'
  });

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
              Established in 2015
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
              We specialize on audit services, Bookkeeping services and funding application for
              public schools
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
                Affordable audit services for public schools with fast turnaround.
                Receive your financial statements within 5 days at reasonable rates.
              </p>
              <ul className="service-features">
                <li>From R 2,000 (tiered pricing)</li>
                <li>Public schools only</li>
                <li>5 working day turnaround</li>
                <li>Section 43 compliance</li>
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
                <li>From R 150/month (Schools)</li>
                <li>Annual financial statements (NPOs/Companies)</li>
                <li>Cash receipts & payments journals</li>
                <li>Bank reconciliations</li>
              </ul>
              <Link to="/services#bookkeeping" className="btn btn-outline">
                Learn More
              </Link>
            </motion.div>

            <motion.div
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="service-icon">
                <HiCurrencyDollar />
              </div>
              <h3>Funding Assistance</h3>
              <p>
                Help your school obtain funding from 30+ donor organizations.
                Section 18A registration and funding application services.
              </p>
              <ul className="service-features">
                <li>R 950 registration fee</li>
                <li>8% fee on successful funding</li>
                <li>Access to 30+ donors</li>
                <li>Only pay when you receive funding</li>
              </ul>
              <Link to="/services#funding" className="btn btn-outline">
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
                Registered with the Chartered Institute of Business Accountant in
                Practice (CIBA) with the Chartered Business Accountant in Practice (CBAP) SA Designation
                and Registered with the South African Institute of Tax Practitioners (SAIT) as an Tax
                Practitioner.
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
                We focus Primarily on public schools as we specialize on the unique
                financial management requirements.
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
