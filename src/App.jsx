import About from "./container/about_container/About";
import FAQ from "./container/faq_container/FAQ";
import Footer from "./container/footer_container/Footer";
import Landing from "./container/landing_page/Landing";
import Sample from "./container/sample_container/Sample";
import SocialProof from "./container/social_proof_container/SocialProof";
import Testimonial from "./container/testimonial_container/Testimonial";

function App() {
  return (
    <div className="container">
      <div className="sub-container">
        <div className="components-container">
          <Landing />
          <SocialProof />
          <About />
          <Testimonial />
          <FAQ />
          <Sample />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
