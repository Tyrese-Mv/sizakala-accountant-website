import { motion } from 'framer-motion';
import { HiAcademicCap, HiClipboardList, HiUserGroup } from 'react-icons/hi';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Providing excellence in accounting services for public schools since 2015
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="container">
          <motion.div
            className="about-intro"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Who We Are</h2>
            <p>
              Sizakala Business Services Provider (Pty) Ltd, trading as Sizakala
              Accountants, is an accounting firm established in 2015. We are
              registered Accountants with the Chartered Institute for Business
              Accountants (CIBA) with the designation Business Accountants in
              Practice (BAPS).
            </p>
            <p>
              What motivates us is the need to provide excellent accounting and
              financial management services to our diverse range of clients,
              including public schools, non-profit organisations, private companies,
              and individuals.
            </p>
          </motion.div>

          <div className="about-details">
            <motion.div
              className="detail-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="detail-icon">
                <HiAcademicCap />
              </div>
              <h3>Diverse Client Base</h3>
              <p>
                We serve a wide range of clients including public schools,
                non-profit organisations, private companies, and individuals. We
                understand the unique financial management requirements and
                regulations that govern each sector we work with.
              </p>
            </motion.div>

            <motion.div
              className="detail-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="detail-icon">
                <HiClipboardList />
              </div>
              <h3>Compliance & Standards</h3>
              <p>
                We ensure all our clients meet their regulatory and compliance
                requirements, whether it's school audits per the SA Schools Act,
                NPO financial reporting, company tax compliance, or individual tax
                returns.
              </p>
            </motion.div>

            <motion.div
              className="detail-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="detail-icon">
                <HiUserGroup />
              </div>
              <h3>Professional Team</h3>
              <p>
                We have a segregated division of bookkeepers who perform the
                capturing of accounting records. Our team is trained to assist
                schools in meeting the requirements of Section 42 of the South
                African Schools Act.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="credentials-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Credentials</h2>
            <div className="credentials-grid">
              <motion.div
                className="credential-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h4>Professional Body</h4>
                <p>
                  Chartered Institute for Business Accountants NPC (CIBA)
                </p>
              </motion.div>
              <motion.div
                className="credential-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <h4>Designation</h4>
                <p>Business Accountants in Practice (BAPS)</p>
              </motion.div>
              <motion.div
                className="credential-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <h4>Registration Number</h4>
                <p>2022/863368/07</p>
              </motion.div>
              <motion.div
                className="credential-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <h4>Recognition</h4>
                <p>
                  CIBA is recognized by SAQA and acknowledged as a Recognised
                  Controlling Body (RCB) under Section 240A(2) of the Tax
                  Administration Act by SARS
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="client-categories-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Who We Serve</h2>
            <p className="section-intro">
              We provide tailored accounting and financial management services to
              meet the unique needs of each client category.
            </p>

            <div className="categories-grid">
              <motion.div
                className="category-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="category-icon">
                  <HiAcademicCap />
                </div>
                <h3>Public Schools</h3>
                <p className="category-description">
                  Specialized financial services for public schools to ensure
                  compliance with the South African Schools Act and Department of
                  Education requirements.
                </p>
                <ul className="category-services">
                  <li>Financial statement audits (Section 43 compliance)</li>
                  <li>Monthly and quarterly bookkeeping</li>
                  <li>Budget preparation and monitoring</li>
                  <li>Financial training for school staff</li>
                  <li>Section 21 procurement assistance</li>
                  <li>Asset register management</li>
                </ul>
              </motion.div>

              <motion.div
                className="category-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="category-icon">
                  <HiUserGroup />
                </div>
                <h3>Non-Profit organisations</h3>
                <p className="category-description">
                  Comprehensive accounting solutions for NPOs to maintain
                  transparency, accountability, and compliance with regulatory
                  requirements.
                </p>
                <ul className="category-services">
                  <li>Financial statement preparation and audits</li>
                  <li>NPO registration and compliance</li>
                  <li>Grant management and reporting</li>
                  <li>Donor financial reports</li>
                  <li>Annual returns and submissions</li>
                  <li>Bookkeeping and financial management</li>
                </ul>
              </motion.div>

              <motion.div
                className="category-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="category-icon">
                  <HiClipboardList />
                </div>
                <h3>Private Companies</h3>
                <p className="category-description">
                  Professional accounting services to help private companies
                  maintain accurate financial records and meet tax obligations.
                </p>
                <ul className="category-services">
                  <li>Financial statement preparation</li>
                  <li>Tax planning and compliance</li>
                  <li>VAT registration and submissions</li>
                  <li>PAYE and payroll management</li>
                  <li>Annual financial statements</li>
                  <li>Management accounts and reporting</li>
                </ul>
              </motion.div>

              <motion.div
                className="category-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="category-icon">
                  <HiUserGroup />
                </div>
                <h3>Individuals</h3>
                <p className="category-description">
                  Personal accounting and tax services to help individuals manage
                  their finances and stay compliant with SARS requirements.
                </p>
                <ul className="category-services">
                  <li>Personal tax returns (IRP5/IT3a)</li>
                  <li>Tax planning and optimization</li>
                  <li>SARS dispute resolution</li>
                  <li>Investment income tax filing</li>
                  <li>Rental income declarations</li>
                  <li>Tax refund assistance</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="mission-section"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Mission</h2>
            <p>
              To provide excellent accounting and financial management services
              that empower our clients to achieve their goals. Whether it's
              helping schools maintain sound financial health, ensuring NPOs meet
              their compliance obligations, supporting companies with tax
              efficiency, or assisting individuals with their personal finances,
              we are committed to delivering professional, reliable, and
              affordable services.
            </p>
            <p>
              We believe in building lasting relationships with our clients through
              quality service delivery, professional integrity, and continuous
              support. Our training and advisory services help clients understand
              their financial obligations and best practices, removing doubt and
              confusion while ensuring compliance with all relevant regulations.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
