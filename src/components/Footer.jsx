import "./Footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-box">
          <h2>Company Logo</h2>
          <p>
            Helping businesses grow with powerful digital marketing,
            financial planning, and business advisory solutions.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>


        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Case Studies</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
        </div>


        {/* Digital Marketing */}
        <div className="footer-box">
          <h3>Digital Marketing</h3>
          <ul>
            <li>SEO</li>
            <li>PPC Advertising</li>
            <li>Social Media</li>
            <li>Email Marketing</li>
            <li>PR Services</li>
          </ul>
        </div>


        {/* Finance Services */}
        <div className="footer-box">
          <h3>Finance Services</h3>
          <ul>
            <li>Business Advisory</li>
            <li>Tax Advisory</li>
            <li>Corporate Finance</li>
            <li>Fund Accounting</li>
            <li>Financial Planning</li>
          </ul>
        </div>

      </div>


      <div className="footer-bottom">
        <p>
          © 2026 Company Name. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;