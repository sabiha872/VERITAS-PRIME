import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import CaseStudies from "../components/CaseStudies";
import Testimonials from "../components/Testimonials";
import Blogs from "../components/Blogs";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <CaseStudies />
      <Testimonials />
      <Blogs />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;