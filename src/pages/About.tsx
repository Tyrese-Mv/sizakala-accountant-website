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
              What motivates us is the need to provide excellent services to the
              schools which results in effective and efficient financial management
              of the schools.
            </p>
          </div>

          <div className="about-details">
            <div className="detail-card">
              <div className="detail-icon">
                <HiAcademicCap />
              </div>
              <h3>Our Specialization</h3>
              <p>
                We focus exclusively on public schools, understanding the unique
                financial management requirements and regulations that govern school
                finances in South Africa.
              </p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">
                <HiClipboardList />
              </div>
              <h3>Compliance & Standards</h3>
              <p>
                Financial statements of schools are audited in terms of Section 43
                of the South African Schools Act No. 84 of 1996 as required by the
                Head of Department for Education.
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

          <div className="mission-section">
            <h2>Our Mission</h2>
            <p>
              To help schools provide high quality services to learners by ensuring
              the financial health of public schools is maintained in a sound state.
              Under self-management, schools are the primary unit of improvement and
              development.
            </p>
            <p>
              Training on the financial framework of the school helps everyone at
              the school to get financial management right, first time and every
              time. It removes doubt, confusion, and ignorance on financial matters
              of the school and stipulates minimum requirements to be met to comply
              with preferred best practice.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
