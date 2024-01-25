import AOS from "aos";
import "aos/dist/aos.css";
import About from "./container/about_container/About";
import FAQ from "./container/faq_container/FAQ";
import Footer from "./container/footer_container/Footer";
import Landing from "./container/landing_page/Landing";
import Sample from "./container/sample_container/Sample";
import SocialProof from "./container/social_proof_container/SocialProof";
import Testimonial from "./container/testimonial_container/Testimonial";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="container">
      <div className="sub-container">
        <div className="components-container">
          <div data-aos="fade-right">
            <Landing />
          </div>

          <div data-aos="flip-left">
            <SocialProof />
          </div>

          <div data-aos="zoom-in">
            <About />
          </div>

          <div data-aos="fade-up">
            <Testimonial />
          </div>

          <div data-aos="fade-up">
            <FAQ />
          </div>

          <div data-aos="zoom-in">
            <Sample />
          </div>

          <div data-aos="fade-up">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
