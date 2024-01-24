import styles from "./footer_component.module.css";
import logo from "./assets/ClearLink..png";
import ClearLinklogo from "./assets/ClearLinkLogo.png";
import appStoreLogo from "./assets/app store.png";
import playStoreLogo from "./assets/play store.png";
import FooterBottom from "./FooterBottom";
// import FooterBottom from "./FooterBottom";

const FooterComponent = () => {
  return (
    <section className={styles.footer_section}>
      <div className={styles.footer_section_wrapper}>
        <div className={styles.footer_section_container}>
          <div className={styles.footer_section_container_top}>
            <div className={styles.footer_section_container_logo}>
              <div className={styles.footer_section_container_logo_images}>
                <img src={ClearLinklogo} alt="" />
                <img src={logo} alt="" />
              </div>
              <p className={styles.footer_section_container_about}>
                ClearLink is your gateway to effortless, high-quality video
                conferencing. Join us in shaping the future of communication!
              </p>
            </div>

            <div className={styles.footer_section_container_others}>
              <h5>Product</h5>
              <p>Overview</p>
              <p>Features</p>
              <p>Solutions</p>
              <p>Tutorials</p>
              <p>Pricing</p>
            </div>
            <div className={styles.footer_section_container_others}>
              <h5>Company</h5>
              <p>About us</p>
              <p>Careers</p>
              <p>Press</p>
              <p>News</p>
              <p>Contact</p>
            </div>
            <div className={styles.footer_section_container_others}>
              <h5>Resources</h5>
              <p>Blog</p>
              <p>Events</p>
              <p>Help centre</p>
              <p>Tutorials</p>
              <p>Support</p>
            </div>
            <div className={styles.footer_section_container_others}>
              <h5>Legal</h5>
              <p>Terms</p>
              <p>Privacy</p>
              <p>Cookies</p>
              <p>Licenses</p>
              <p>Contact</p>
            </div>

            <div className={styles.footer_section_container_get_app}>
              <h5>Get the app</h5>
              <img src={appStoreLogo} alt="" />
              <img src={playStoreLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </section>
  );
};

export default FooterComponent;
