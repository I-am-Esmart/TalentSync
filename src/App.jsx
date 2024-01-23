import About from "./container/about_container/About";
import Landing from "./container/landing_page/Landing";
import SocialProof from "./container/social_proof_container/SocialProof";

function App() {
  return (
    <div className="container">
      <div className="sub-container">
        <div className="components-container">
          <Landing />
          <SocialProof />
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
