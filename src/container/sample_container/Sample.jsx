import styles from "./sample.module.css";
import SampleLeft from "../../components/sample/SampleLeft";
import SampleRight from "../../components/sample/SampleRight";

const Sample = () => {
  return (
    <main className={styles.samples_wrapper}>
      <div className={styles.samples_container}>
        <div className={styles.samples_sub_container}>
          <SampleLeft />
          <SampleRight />
        </div>
      </div>
    </main>
  );
};

export default Sample;
