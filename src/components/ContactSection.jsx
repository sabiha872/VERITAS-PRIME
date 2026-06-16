import "./ContactSection.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function ContactSection() {
  return (
    <section className="contact">
      <section className="contact" data-aos="fade-up"></section>
      <div className="contact-left">
        <h2>Let's Discuss Your Business Goals</h2>

        <p>
          Get in touch with our team for digital marketing,
          finance, and business consulting solutions.
        </p>

        <div className="contact-info">

          <div className="info-box">
            <FaPhoneAlt />
            <span>+91 98765 43210</span>
          </div>

          <div className="info-box">
            <FaEnvelope />
            <span>
              info@yourcompany.com
            </span>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt />
            <span>
              New Delhi, India
            </span>
          </div>

        </div>
      </div>


      <div className="contact-right">
        <form>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>
      </div>

    </section>
  );
}

export default ContactSection;