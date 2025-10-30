import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiChartBar, HiBookOpen, HiCurrencyDollar } from 'react-icons/hi';
import { useSEO } from '../hooks/useSEO';
import './Services.css';

const Services = () => {
  useSEO({
    title: 'Our Services - School Audit, Bookkeeping & Funding Assistance | Sizakala',
    description: 'Professional accounting services for public schools, NPOs, and companies. School audits from R2,000, bookkeeping from R150/month, Section 18A registration and funding assistance. CBAP SA certified.',
    keywords: 'school audit pricing, bookkeeping services, funding assistance, Section 18A registration, NPO financial statements, school accounting services, Durban, South Africa',
    canonical: 'https://sizakalabsp.com/services'
  });

  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Comprehensive accounting solutions tailored for public schools
          </motion.p>
        </div>
      </section>

      {/* Audit Services */}
      <section className="service-section" id="audit">
        <div className="container">
          <motion.div
            className="service-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="service-icon-large">
              <HiChartBar />
            </div>
            <h2>Audit Services</h2>
            <p className="service-price">From R 2,000</p>
          </motion.div>

          <div className="service-details">
            <motion.div
              className="service-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                Need affordable audit services and tired of waiting long time for your
                financial statements, come to us we offer our services at reasonable
                rates to accommodate for the financial hardships at public schools
                and receive your financial statements within 5 days.
              </p>
            </motion.div>

            <motion.div
              className="audit-categories"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="category-title">Public Schools</h3>
              <p className="category-intro">
                Audits conducted in accordance with Section 43 of the South African
                Schools Act No. 84 of 1996.
              </p>
              <div className="pricing-grid">
                <motion.div
                  className="pricing-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h3>Small Schools</h3>
                  <p className="price">R 2,000</p>
                  <p className="school-size">Less than 200 learners</p>
                </motion.div>

                <motion.div
                  className="pricing-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h3>Medium Schools</h3>
                  <p className="price">R 2,500</p>
                  <p className="school-size">200-399 learners</p>
                </motion.div>

                <motion.div
                  className="pricing-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h3>Large Schools</h3>
                  <p className="price">R 3,000</p>
                  <p className="school-size">400-599 learners</p>
                </motion.div>

                <motion.div
                  className="pricing-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h3>Extra Large Schools</h3>
                  <p className="price">R 4,000</p>
                  <p className="school-size">600+ learners</p>
                </motion.div>
              </div>
            </motion.div>

            <div className="service-features-grid">
              <div className="feature-box">
                <h3>What's Included</h3>
                <ul>
                  <li>Complete financial statement audit</li>
                  <li>Audit completed within 5 days of collecting records</li>
                  <li>We collect accounting records from your school</li>
                  <li>All audit templates and checklists provided</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bookkeeping Services */}
      <section className="service-section alt" id="bookkeeping">
        <div className="container">
          <div className="service-header">
            <div className="service-icon-large">
              <HiBookOpen />
            </div>
            <h2>Bookkeeping Services</h2>
            <p className="service-price">From R 150/month</p>
          </div>

          <div className="service-details">
            <div className="service-description">
              <p>
                If you are missing submission deadlines due to handling other
                important tasks of running the school, Sizakala Accountants are here
                to take care of your monthly and quarterly bookkeeping.
              </p>
            </div>

            <h3 className="category-title">Public Schools - Monthly Bookkeeping</h3>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Small Schools</h3>
                <p className="price">R 150<span>/month</span></p>
                <p className="school-size">Less than 200 learners</p>
              </div>

              <div className="pricing-card">
                <h3>Medium Schools</h3>
                <p className="price">R 300<span>/month</span></p>
                <p className="school-size">200+ learners</p>
              </div>

              <div className="pricing-card">
                <h3>Large Schools</h3>
                <p className="price">R 400<span>/month</span></p>
                <p className="school-size">400+ learners</p>
              </div>

              <div className="pricing-card">
                <h3>Extra Large Schools</h3>
                <p className="price">R 500<span>/month</span></p>
                <p className="school-size">600+ learners</p>
              </div>
            </div>

            <h3 className="category-title">Non-Profit Organizations - Preparation of Annual Financial Statements</h3>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Small NPOs</h3>
                <p className="price">R 2,500</p>
              </div>

              <div className="pricing-card">
                <h3>Medium NPOs</h3>
                <p className="price">R 3,000</p>
              </div>

              <div className="pricing-card">
                <h3>Large NPOs</h3>
                <p className="price">R 5,000</p>
              </div>

              <div className="pricing-card">
                <h3>Very Large NPOs</h3>
                <p className="price">R 7,000</p>
              </div>
            </div>

            <h3 className="category-title">Private Companies - Preparation of Annual Financial Statements</h3>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Small Companies</h3>
                <p className="price">R 2,500</p>
              </div>

              <div className="pricing-card">
                <h3>Medium Companies</h3>
                <p className="price">R 3,000</p>
              </div>

              <div className="pricing-card">
                <h3>Large Companies</h3>
                <p className="price">R 5,000</p>
              </div>

              <div className="pricing-card">
                <h3>Very Large Companies</h3>
                <p className="price">R 7,000</p>
              </div>
            </div>

            <div className="service-features-grid">
              <div className="feature-box">
                <h3>Services Provided</h3>
                <ul>
                  <li>Monthly and quarterly cash receipts journal</li>
                  <li>Monthly and quarterly cash payment journal</li>
                  <li>Monthly and quarterly bank reconciliation</li>
                  <li>Payment advices</li>
                </ul>
              </div>

              <div className="feature-box">
                <h3>Requirements</h3>
                <ul>
                  <li>Bank statements for the month or quarter</li>
                  <li>Invoices for the month or quarter</li>
                </ul>
              </div>
            </div>

            <div className="benefits-info">
              <h3>Benefits</h3>
              <ul>
                <li>
                  Avoid delays which can cause the school not to receive funds on
                  time
                </li>
                <li>Affordable fees structured for each school based on its dynamics</li>
                <li>Meet all submission deadlines consistently</li>
                <li>Focus on running your school while we handle the books</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Assistance Services */}
      <section className="service-section" id="funding">
        <div className="container">
          <div className="service-header">
            <div className="service-icon-large">
              <HiCurrencyDollar />
            </div>
            <h2>Funding Assistance for Public Schools</h2>
            <p className="service-price">R 950 registration + 8% success fee</p>
          </div>

          <div className="service-details">
            <div className="service-description">
              <p>
                Public schools in KwaZulu-Natal are currently facing financial difficulties
                and are struggling to keep up with the financial needs of the school. The
                school allocation assists the running of the schools but for most schools it
                is still not enough to improve the learning conditions.
              </p>
              <p>
                We assist public schools in obtaining funding from more than 30 organizations
                that provide donations to schools. Our NPO specialist license from CIBA enables
                us to guide you through the entire funding application process.
              </p>
            </div>

            <h3 className="category-title">Two-Step Process</h3>

            <div className="service-features-grid">
              <div className="feature-box">
                <h3>Step 1: Section 18A Certificate Registration</h3>
                <p><strong>What it is:</strong> SARS certificate that allows donors to claim tax deductions when making donations to your school.</p>
                <p><strong>Requirements:</strong></p>
                <ul>
                  <li>EMIS certificate</li>
                  <li>Constitution</li>
                  <li>Select 3 office bearers (can be changed anytime)</li>
                  <li>Office bearer's particulars</li>
                </ul>
                <p><strong>Cost:</strong> R 950 administration fee (payable within 30 days)</p>
                <p><strong>Turnaround time:</strong> 2-3 months</p>
              </div>

              <div className="feature-box">
                <h3>Step 2: Funding Applications</h3>
                <p><strong>What we do:</strong> Once you obtain the Section 18A certificate, we make funding/donation applications to more than 30 organizations who provide donations to public schools.</p>
                <p><strong>Requirements:</strong></p>
                <ul>
                  <li>Budgeted items and amounts required</li>
                </ul>
                <p><strong>Finalization period:</strong> Approximately 1-4 months</p>
                <p><strong>Our fee:</strong> 8% fundraising fee once the school receives the funding upon finalization</p>
              </div>
            </div>

            <div className="benefits-info">
              <h3>Benefits</h3>
              <ul>
                <li>Access to 30+ donor organizations</li>
                <li>Assist schools to be financially stable</li>
                <li>Help schools have excellent learning conditions</li>
                <li>Meet financial needs of the school</li>
                <li>You only pay when you receive funding</li>
                <li>NPO specialist licensed accountants guiding the process</li>
              </ul>
            </div>

            <div className="training-info">
              <h3>Total Timeline</h3>
              <p>
                From start to receiving funding: approximately 3-6 months. This includes
                the Section 18A registration (2-3 months) and the funding application
                process (1-4 months).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>
            Contact us today to discuss which services best fit your school's needs
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
            <a href="tel:0670343472" className="btn btn-secondary">
              Call: 067 034 3472
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
