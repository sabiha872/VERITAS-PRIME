import "./Hero.css";
import heroImage from "../assets/images/hero.png";

function Hero() {
  return (
    <section className="hero">
      <section className="hero" data-aos="fade-up"></section>
      <div className="hero-content">
        <h1>
          Grow Your Business With Digital Marketing & Finance Solutions
        </h1>

        <p>
          We help businesses increase their online presence, manage finances,
          and achieve sustainable growth through innovative strategies.
        </p>

        <div className="hero-buttons">
          <button className="btn primary">
            Get Started
          </button>

          <button className="btn secondary">
            Our Services
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img 
          src={heroImage}
          alt="Digital Marketing"
        />
      </div>
    </section>
  );
}

export default Hero;