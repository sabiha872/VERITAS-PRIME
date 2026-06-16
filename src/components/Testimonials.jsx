import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  const clients = [
    {
      name: "John Smith",
      company: "ABC Technologies",
      review:
        "The digital marketing strategies significantly increased our online presence and customer engagement.",
    },
    {
      name: "Sarah Johnson",
      company: "Global Finance Ltd.",
      review:
        "Their financial advisory and planning services helped us optimize our business operations.",
    },
    {
      name: "Michael Brown",
      company: "NextGen Solutions",
      review:
        "Professional team with excellent support and measurable business growth results.",
    },
  ];

  return (
    <section className="testimonials">
      <section className="testimonials" data-aos="fade-up"></section>
      <h2>What Our Clients Say</h2>

      <p className="testimonial-subtitle">
        Trusted by businesses for delivering effective digital and financial solutions.
      </p>

      <div className="testimonial-grid">
        {clients.map((client, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="review">
              "{client.review}"
            </p>

            <h3>{client.name}</h3>
            <h4>{client.company}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;