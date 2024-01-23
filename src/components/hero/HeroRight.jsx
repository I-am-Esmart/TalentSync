import styles from "./hero_right.module.css";
import Image1 from "./assets/image 1.png";
import Image2 from "./assets/image 2.png";
import Image3 from "./assets/image 3.png";
import Image4 from "./assets/image 4.png";
import Image5 from "./assets/image 5.png";
import Image6 from "./assets/image 6.png";
import faceSmile from "./assets/face-smile.png";
import messageText from "./assets/message-text-circle-02.png";
import microphone from "./assets/microphone-01.png";
import monitor from "./assets/monitor-01.png";
import settings from "./assets/settings-01.png";
import videoRecorder from "./assets/video-recorder.png";

const HeroRight = () => {
  return (
    <section className={styles.hero_section_right}>
      <div className={styles.hero_section_right_container}>
        <div className={styles.hero_section_right_container_images}>
          <img src={Image1} alt="" />
          <img src={Image2} alt="" />
          <img src={Image3} alt="" />
          <img src={Image4} alt="" />
          <img src={Image5} alt="" />
          <img src={Image6} alt="" />
        </div>

        <div className={styles.hero_section_right_container_icons}>
          <img src={microphone} alt="" />
          <img src={videoRecorder} alt="" />
          <img src={monitor} alt="" />
          <img src={faceSmile} alt="" />
          <img src={messageText} alt="" />
          <img src={settings} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroRight;
