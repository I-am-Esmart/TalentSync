import styles from "./sample_right.module.css";
import screenMockUp from "./assets/screen mockup.png";

const SampleRight = () => {
  return (
    <section className={styles.sample_right_section}>
      <img src={screenMockUp} alt="" />
    </section>
  );
};

export default SampleRight;
