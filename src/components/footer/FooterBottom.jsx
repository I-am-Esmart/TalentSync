import styles from "./footer_bottom.module.css";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

const FooterBottom = () => {
  return (
    <section className={styles.footer_bottom_section}>
      <div className={styles.footer_bottom_section_wrapper}>
        <div className={styles.footer_bottom_section_container}>
          <div className={styles.footer_bottom_section_container_left}>
            <p>© 2023 ClearLink. All rights reserved.</p>
          </div>
          <div className={styles.footer_bottom_section_container_right}>
            <div className={styles.footer_bottom_section_container_right_icons}>
              <div>
                <FaLinkedin />
              </div>
              <div>
                <FaTwitter />
              </div>
              <div>
                <FaFacebook />
              </div>
              <div>
                <FaInstagram />
              </div>
              <div>
                <FaGithub />
              </div>
              <div>
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterBottom;
