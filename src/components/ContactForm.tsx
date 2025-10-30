import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ContactForm.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  organisationType: string;
  organisationName: string;
  enrollment: string;
  revenue: string;
  service: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    organisationType: '',
    organisationName: '',
    enrollment: '',
    revenue: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // FormSubmit endpoint - replace with your actual email
      const formSubmitUrl = 'https://formsubmit.co/sizakalabsp@gmail.com';

      // Prepare form data with all fields
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('organisationType', formData.organisationType);
      submitData.append('organisationName', formData.organisationName);
      submitData.append('enrollment', formData.enrollment);
      submitData.append('revenue', formData.revenue);
      submitData.append('service', formData.service);
      submitData.append('message', formData.message);
      submitData.append('estimatedPrice', estimatedPrice || 'Not calculated');

      // FormSubmit configuration
      submitData.append('_subject', `New Enquiry from ${formData.name} - ${formData.organisationType}`);
      submitData.append('_captcha', 'false'); // Set to 'true' if you want captcha
      submitData.append('_template', 'table'); // Nice table format in email

      const response = await fetch(formSubmitUrl, {
        method: 'POST',
        body: submitData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          organisationType: '',
          organisationName: '',
          enrollment: '',
          revenue: '',
          service: '',
          message: '',
        });

        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  // Get available services based on organisation type
  const getAvailableServices = () => {
    const orgType = formData.organisationType;

    if (orgType === 'school') {
      return [
        { value: 'audit', label: 'Audit Services (From R 2,000)', available: true },
        { value: 'bookkeeping', label: 'Bookkeeping Services (From R 150/month)', available: true },
        { value: 'funding', label: 'Funding Assistance (R 950 + 8% success fee)', available: true },
        { value: 'audit-bookkeeping', label: 'Audit + Bookkeeping', available: true },
        { value: 'audit-funding', label: 'Audit + Funding Assistance', available: true },
        { value: 'all-services', label: 'All Services', available: true },
        { value: 'consultation', label: 'Just Consultation', available: true },
      ];
    }

    if (orgType === 'npo') {
      return [
        { value: 'bookkeeping', label: 'Annual Financial Statements (From R 2,500)', available: true },
        { value: 'consultation', label: 'Just Consultation', available: true },
      ];
    }

    if (orgType === 'company') {
      return [
        { value: 'bookkeeping', label: 'Annual Financial Statements (From R 2,500)', available: true },
        { value: 'consultation', label: 'Just Consultation', available: true },
      ];
    }

    if (orgType === 'individual') {
      return [
        { value: 'consultation', label: 'Consultation', available: true },
      ];
    }

    // Default - show all with availability warnings
    return [
      { value: 'audit', label: 'Audit Services (Schools Only)', available: false },
      { value: 'bookkeeping', label: 'Bookkeeping / Financial Statements', available: true },
      { value: 'funding', label: 'Funding Assistance (Schools Only)', available: false },
      { value: 'consultation', label: 'Consultation', available: true },
    ];
  };

  const getEstimatedPrice = () => {
    const orgType = formData.organisationType;

    // Helper function to calculate audit price based on organisation type
    const getAuditPrice = () => {
      if (orgType === 'school') {
        if (!formData.enrollment) return 'incomplete';
        const enrollment = parseInt(formData.enrollment);
        if (enrollment < 200) return 'R 2,000';
        if (enrollment < 400) return 'R 2,500';
        if (enrollment < 600) return 'R 3,000';
        return 'R 4,000';
      }

      // NPO and Company audit services have been removed per client requirements
      // Only schools are eligible for audit services now
      return 'unavailable';
    };

    // Helper function to calculate bookkeeping price
    const getBookkeepingPrice = () => {
      if (orgType === 'school') {
        if (!formData.enrollment) return 'incomplete';
        const enrollment = parseInt(formData.enrollment);
        if (enrollment < 200) return 'R 150/month';
        if (enrollment < 400) return 'R 300/month';
        if (enrollment < 600) return 'R 400/month';
        return 'R 700/month';
      }

      if (orgType === 'npo') {
        if (!formData.revenue) return 'incomplete';
        const revenue = parseInt(formData.revenue);
        if (revenue < 500000) return 'R 2,500 (Annual Financial Statements)';
        if (revenue < 2000000) return 'R 3,000 (Annual Financial Statements)';
        if (revenue < 5000000) return 'R 5,000 (Annual Financial Statements)';
        return 'R 7,000 (Annual Financial Statements)';
      }

      if (orgType === 'company') {
        if (!formData.revenue) return 'incomplete';
        const turnover = parseInt(formData.revenue);
        if (turnover < 1000000) return 'R 2,500 (Annual Financial Statements)';
        if (turnover < 5000000) return 'R 3,000 (Annual Financial Statements)';
        if (turnover < 10000000) return 'R 5,000 (Annual Financial Statements)';
        return 'R 7,000 (Annual Financial Statements)';
      }

      return 'unavailable';
    };

    // Funding assistance price
    const getFundingPrice = () => {
      if (orgType === 'school') {
        return 'R 950 registration + 8% of funding secured';
      }
      return 'unavailable';
    };

    // Helper to format price results with user-friendly messages
    const formatPriceResult = (prices: { service: string; price: string }[]) => {
      const incomplete = prices.filter(p => p.price === 'incomplete');
      const unavailable = prices.filter(p => p.price === 'unavailable');
      const valid = prices.filter(p => p.price !== 'incomplete' && p.price !== 'unavailable');

      if (incomplete.length > 0) {
        const fields = orgType === 'school' ? 'enrollment' : 'annual revenue';
        return `Enter ${fields} above to see estimated price`;
      }

      if (unavailable.length > 0 && valid.length === 0) {
        return `This service is not available for ${formData.organisationType === 'npo' ? 'NPOs' : formData.organisationType === 'company' ? 'companies' : 'this organisation type'}`;
      }

      if (valid.length > 0) {
        return valid.map(p => `${p.service}: ${p.price}`).join(' + ');
      }

      return null;
    };

    if (formData.service === 'audit') {
      const price = getAuditPrice();
      return formatPriceResult([{ service: 'Audit', price }]);
    }

    if (formData.service === 'bookkeeping') {
      const price = getBookkeepingPrice();
      return formatPriceResult([{ service: 'Bookkeeping', price }]);
    }

    if (formData.service === 'funding') {
      const price = getFundingPrice();
      return formatPriceResult([{ service: 'Funding', price }]);
    }

    if (formData.service === 'audit-bookkeeping') {
      const auditPrice = getAuditPrice();
      const bookkeepingPrice = getBookkeepingPrice();
      return formatPriceResult([
        { service: 'Audit', price: auditPrice },
        { service: 'Bookkeeping', price: bookkeepingPrice }
      ]);
    }

    if (formData.service === 'audit-funding') {
      const auditPrice = getAuditPrice();
      const fundingPrice = getFundingPrice();
      return formatPriceResult([
        { service: 'Audit', price: auditPrice },
        { service: 'Funding', price: fundingPrice }
      ]);
    }

    if (formData.service === 'all-services') {
      const auditPrice = getAuditPrice();
      const bookkeepingPrice = getBookkeepingPrice();
      const fundingPrice = getFundingPrice();
      return formatPriceResult([
        { service: 'Audit', price: auditPrice },
        { service: 'Bookkeeping', price: bookkeepingPrice },
        { service: 'Funding', price: fundingPrice }
      ]);
    }

    return null;
  };

  const estimatedPrice = getEstimatedPrice();

  return (
    <div className="contact-form-wrapper">
      <h2>Send Us a Message</h2>
      <p>Fill out the form below and we'll get back to you within 24 hours.</p>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            className="alert alert-success"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            Thank you! Your message has been sent successfully. We'll be in touch soon.
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            className="alert alert-error"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            Oops! Something went wrong. Please try again or contact us directly.
          </motion.div>
        )}
      </AnimatePresence>

      <motion.form
        onSubmit={handleSubmit}
        className="contact-form"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="067 034 3472"
            />
          </div>

          <div className="form-group">
            <label htmlFor="organisationType">Organisation Type *</label>
            <select
              id="organisationType"
              name="organisationType"
              value={formData.organisationType}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Type --</option>
              <option value="school">Public School</option>
              <option value="npo">Non-Profit Organisation</option>
              <option value="company">Private Company</option>
              <option value="individual">Individual</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="organisationName">
              {formData.organisationType === 'school' ? 'School Name' :
               formData.organisationType === 'npo' ? 'NPO Name' :
               formData.organisationType === 'company' ? 'Company Name' :
               formData.organisationType === 'individual' ? 'Full Name' :
               'Organisation/Name'} *
            </label>
            <input
              type="text"
              id="organisationName"
              name="organisationName"
              value={formData.organisationName}
              onChange={handleChange}
              required
              placeholder={
                formData.organisationType === 'school' ? 'ABC Primary School' :
                formData.organisationType === 'npo' ? 'Community Development NPO' :
                formData.organisationType === 'company' ? 'ABC (Pty) Ltd' :
                'Your name or organisation'
              }
            />
          </div>

          {formData.organisationType === 'school' && (
            <div className="form-group">
              <label htmlFor="enrollment">
                School Enrolment (Number of Learners)
                {(formData.service === 'audit' || formData.service === 'bookkeeping' ||
                  formData.service === 'audit-bookkeeping' || formData.service === 'all-services') && ' *'}
              </label>
              <input
                type="number"
                id="enrollment"
                name="enrollment"
                value={formData.enrollment}
                onChange={handleChange}
                placeholder="e.g., 350"
                min="1"
                required={
                  formData.service === 'audit' ||
                  formData.service === 'bookkeeping' ||
                  formData.service === 'audit-bookkeeping' ||
                  formData.service === 'all-services'
                }
              />
              {(formData.service === 'audit' || formData.service === 'bookkeeping' ||
                formData.service === 'audit-bookkeeping' || formData.service === 'all-services') && (
                <small style={{ display: 'block', marginTop: '0.25rem', color: '#7cbd1e' }}>
                  Required for accurate pricing estimate
                </small>
              )}
            </div>
          )}

          {(formData.organisationType === 'npo' || formData.organisationType === 'company') && (
            <div className="form-group">
              <label htmlFor="revenue">
                Annual {formData.organisationType === 'npo' ? 'Revenue' : 'Turnover'} (R)
                {formData.service === 'bookkeeping' && ' *'}
              </label>
              <input
                type="number"
                id="revenue"
                name="revenue"
                value={formData.revenue}
                onChange={handleChange}
                placeholder={
                  formData.organisationType === 'npo' ? 'e.g., 750000' : 'e.g., 2500000'
                }
                min="1"
                required={formData.service === 'bookkeeping'}
              />
              {formData.service === 'bookkeeping' && (
                <small style={{ display: 'block', marginTop: '0.25rem', color: '#7cbd1e' }}>
                  Required for accurate pricing estimate
                </small>
              )}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="service">Service Needed *</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">-- Select a Service --</option>
            {getAvailableServices().map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
          {formData.organisationType && (
            <small style={{ display: 'block', marginTop: '0.5rem', color: '#666' }}>
              {formData.organisationType === 'school' && 'All services available for public schools'}
              {formData.organisationType === 'npo' && 'Annual financial statements and consultation available for NPOs'}
              {formData.organisationType === 'company' && 'Annual financial statements and consultation available for companies'}
              {formData.organisationType === 'individual' && 'Consultation services available'}
            </small>
          )}
        </div>

        {estimatedPrice && (
          <div className="price-estimate">
            <strong>Estimated Price:</strong> {estimatedPrice}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us more about your needs..."
          ></textarea>
        </div>

        <motion.button
          type="submit"
          className="btn btn-primary btn-submit"
          disabled={status === 'submitting'}
          whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
          whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </motion.button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
