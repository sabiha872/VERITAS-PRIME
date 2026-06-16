import "./CaseStudies.css";

function CaseStudies() {
  const studies = [
    {
      title: "SEO Growth Strategy",
      result: "250% Increase in Organic Traffic",
      description:
        "Improved search rankings and increased website visibility through advanced SEO techniques."
    },
    {
      title: "Social Media Campaign",
      result: "180% More Customer Engagement",
      description:
        "Created targeted campaigns that boosted brand awareness and audience interaction."
    },
    {
      title: "Financial Planning Solution",
      result: "40% Improvement in Cash Flow",
      description:
        "Optimized financial processes and provided strategic planning for business growth."
    }
  ];

  return (
    <section className="case-studies">
      <section className="case-studies" data-aos="zoom-in"></section>
      <h2>Our Success Stories</h2>

      <p className="case-subtitle">
        Real results delivered through smart digital marketing and financial strategies.
      </p>

      <div className="case-grid">
        {studies.map((study, index) => (
          <div className="case-card" key={index}>
            <h3>{study.title}</h3>
            <h4>{study.result}</h4>
            <p>{study.description}</p>
          </div>
        ))}
      </div>

      <button className="case-btn">
        View All Case Studies
      </button>
    </section>
  );
}

export default CaseStudies;