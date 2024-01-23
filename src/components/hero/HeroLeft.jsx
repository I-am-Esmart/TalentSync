import styles from "./hero_left.module.css";
import { RiRobot2Line } from "react-icons/ri";
import ReviewPeople from "./assets/review_people.png";
import StarIcon from "./assets/Star icon.png";

const HeroLeft = () => {
  return (
    <section className={styles.hero_section_left}>
      <div className={styles.hero_section_left_container}>
        <div className={styles.hero_section_left_title}>
          <p>
            Uniting the world, <br />
            one video call at a time
          </p>
        </div>

        <div className={styles.hero_section_left_description}>
          <p>
            Experience the future of communication with ClearLink – where
            crystal-clear video conferencing meets unparalleled simplicity.
          </p>
        </div>

        <div className={styles.hero_section_left_free_trial_container}>
          <button>Start your free trial</button>

          <div
            className={
              styles.hero_section_left_free_trial_container_ai_assistant
            }
          >
            <RiRobot2Line /> <span>Discover AI assistant</span>
          </div>
        </div>

        <div className={styles.hero_section_left_reviews_container}>
          <img src={ReviewPeople} alt="reviews" />

          <div className={styles.hero_section_left_reviews}>
            <div className={styles.hero_section_left_reviews_star_icons}>
              <img src={StarIcon} alt="" />
              <img src={StarIcon} alt="" />
              <img src={StarIcon} alt="" />
              <img src={StarIcon} alt="" />
              <img src={StarIcon} alt="" />
              <span>5.0</span>
            </div>

            <div className={styles.hero_section_left_reviews_number}>
              <p>from 3,000+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLeft;
