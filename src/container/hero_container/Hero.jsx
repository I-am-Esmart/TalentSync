import styles from "./hero_container.module.css";
import HeroLeft from "../../components/hero/HeroLeft";
import HeroRight from "../../components/hero/HeroRight";

const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_sub_container}>
        <div className={styles.hero_sub_container_wrapper}>
          <HeroLeft />
          <HeroRight />
        </div>
      </div>
    </div>
  );
};

export default Hero;
