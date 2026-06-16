import "./Services.css";

function Services() {
  const digitalMarketing = [
    "Search Engine Optimization (SEO)",
    "Pay-Per-Click Advertising (PPC)",
    "Social Media Management",
    "Email Marketing",
    "PR Services",
    "Conversion Rate Optimization",
    "Web Design"
  ];

  const financeServices = [
    "Business Advisory",
    "Company Formation",
    "Legal & Regulatory Compliance",
    "Tax Advisory",
    "Corporate Finance",
    "Cash Flow Monitoring",
    "Fund Accounting",
    "Working Capital Management",
    "Financial Analysis & Planning",
    "Finance & Accounting"
  ];

  return (
    <section className="services">
      <section className="services" data-aos="fade-up"></section>
      <h2>Our Professional Services</h2>
      <p className="subtitle">
        Complete digital marketing and financial solutions for your business growth.
      </p>

      <div className="service-category">
        <h3>Digital Marketing</h3>

        <div className="service-grid">
          {digitalMarketing.map((service, index) => (
            <div className="card" key={index}>
              <h4>{service}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="service-category">
        <h3>Finance Services</h3>

        <div className="service-grid">
          {financeServices.map((service, index) => (
            <div className="card" key={index}>
              <h4>{service}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;