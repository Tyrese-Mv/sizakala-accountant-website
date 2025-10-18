import { HiAcademicCap, HiClipboardList, HiUserGroup } from 'react-icons/hi';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <p className="lead">
            Providing excellence in accounting services for public schools since 2015
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="container">
          <div className="about-intro">
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
              including public schools, non-profit organizations, private companies,
              and individuals.
            </p>
          </div>

          <div className="about-details">
            <div className="detail-card">
              <div className="detail-icon">
                <HiAcademicCap />
              </div>
              <h3>Diverse Client Base</h3>
              <p>
                We serve a wide range of clients including public schools,
                non-profit organizations, private companies, and individuals. We
                understand the unique financial management requirements and
                regulations that govern each sector we work with.
              </p>
            </div>

            <div className="detail-card">
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
            </div>

            <div className="detail-card">
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
            </div>
          </div>

          <div className="credentials-section">
            <h2>Our Credentials</h2>
            <div className="credentials-grid">
              <div className="credential-item">
                <h4>Professional Body</h4>
                <p>
                  Chartered Institute for Business Accountants NPC (CIBA)
                </p>
              </div>
              <div className="credential-item">
                <h4>Designation</h4>
                <p>Business Accountants in Practice (BAPS)</p>
              </div>
              <div className="credential-item">
                <h4>Registration Number</h4>
                <p>2022/863368/07</p>
              </div>
              <div className="credential-item">
                <h4>Recognition</h4>
                <p>
                  CIBA is recognized by SAQA and acknowledged as a Recognised
                  Controlling Body (RCB) under Section 240A(2) of the Tax
                  Administration Act by SARS
                </p>
              </div>
            </div>
          </div>

          <div className="client-categories-section">
            <h2>Who We Serve</h2>
            <p className="section-intro">
              We provide tailored accounting and financial management services to
              meet the unique needs of each client category.
            </p>

            <div className="categories-grid">
              <div className="category-card">
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
              </div>

              <div className="category-card">
                <div className="category-icon">
                  <HiUserGroup />
                </div>
                <h3>Non-Profit Organizations</h3>
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
              </div>

              <div className="category-card">
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
              </div>

              <div className="category-card">
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
              </div>
            </div>
          </div>

          <div className="mission-section">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
