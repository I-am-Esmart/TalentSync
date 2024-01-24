import styles from "./sample_left.module.css";
import checkCircle from "./assets/check-circle.png";

const SampleLeft = () => {
  return (
    <section className={styles.sample_left_section}>
      <div className={styles.sample_left_section_title}>
        <h3>Ready to clear the path to perfect communication?</h3>
      </div>

      <div className={styles.sample_left_section_packages}>
        <div className={styles.sample_left_section_single_package}>
          <img src={checkCircle} alt="checkCircle" />
          <p>30 days free trial</p>
        </div>

        <div className={styles.sample_left_section_single_package}>
          <img src={checkCircle} alt="checkCircle" />
          <p>Cancel at any time</p>
        </div>

        <div className={styles.sample_left_section_single_package}>
          <img src={checkCircle} alt="checkCircle" />
          <p>Access to all features</p>
        </div>

        <div className={styles.sample_left_section_single_package}>
          <img src={checkCircle} alt="checkCircle" />
          <p>Peronalized onboarding</p>
        </div>
      </div>

      <div className={styles.sample_left_section_buttons}>
        <button className={styles.sample_left_section_button1}>
          Talk to sales
        </button>
        <button className={styles.sample_left_section_button2}>
          Start your free trial
        </button>
      </div>
    </section>
  );
};

export default SampleLeft;
