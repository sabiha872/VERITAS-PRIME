import "./WhyChooseUs.css";
import {
  FaUsers,
  FaChartLine,
  FaMoneyBillWave,
  FaHeadset
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaUsers />,
      title: "Experienced Team",
      description: "Our professionals bring years of industry knowledge and expertise."
    },
    {
      icon: <FaChartLine />,
      title: "Data-Driven Strategies",
      description: "We use analytics and insights to create effective growth strategies."
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Cost-Effective Solutions",
      description: "High-quality services designed to maximize your return on investment."
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description: "Dedicated assistance whenever your business needs help."
    }
  ];

  return (
    <section className="why-us">
      <h2>Why Choose Us</h2>
      <section className="why-us" data-aos="fade-up"></section>

      <p className="why-subtitle">
        We provide reliable digital marketing and financial solutions
        focused on measurable business growth.
      </p>

      <div className="why-grid">
        {features.map((feature, index) => (
          <div className="why-card" key={index}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;