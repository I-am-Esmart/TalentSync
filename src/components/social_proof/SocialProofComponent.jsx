import styles from "./social_proof_component.module.css";
import Automattic from "./assets/Automattic svg.png";
import Coinbase from "./assets/Coinbase svg.png";
import Dropbox from "./assets/Dropbox svg.png";
import Intercom from "./assets/Intercom svg.png";
import Marvel from "./assets/Marvel svg.png";
import Shopify from "./assets/Shopify svg.png";

const SocialProofComponent = () => {
  return (
    <section className={styles.social_proof}>
      <div className={styles.social_proof_wrapper}>
        <div className={styles.social_proof_container}>
          <div className={styles.social_proof_container_title}>
            <p>
              Join 1,500+ companies already video conferencing the ClearLink way
            </p>
          </div>

          <div className={styles.social_proof_container_companies}>
            <img src={Shopify} alt="Shopify" />
            <img src={Coinbase} alt="Shopify" />
            <img src={Dropbox} alt="Dropbox" />
            <img src={Intercom} alt="Intercom" />
            <img src={Marvel} alt="Marvel" />
            <img src={Automattic} alt="Automatic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofComponent;
