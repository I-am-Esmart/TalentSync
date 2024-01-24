import styles from "./about_component.module.css";
import { AboutData } from "./data";
import generalImage from "./assets/Rectangle 1.png";
import handArrow from "./assets/Hand-drawn arrow.png";

const AboutComponent = () => {
  return (
    <section className={styles.about_section}>
      <div className={styles.about_section_wrapper}>
        <div className={styles.about_section_container}>
          <div className={styles.about_section_container_title}>
            <p>The ClearLink Advantage</p>
            <h2>Why choose ClearLink?</h2>
            <p>
              In a world where connection is everything, ClearLink takes the
              lead. Our <br /> cutting-edge video conferencing app offers:
            </p>
          </div>

          <div className={styles.about_section_container_body}>
            <div className={styles.about_section_container_body_left}>
              {AboutData.map((data) => {
                return (
                  <div
                    key={data.id}
                    className={styles.about_section_left_content_container}
                  >
                    <img src={data.image} alt="" />
                    <h3> {data.title} </h3>
                    <p> {data.text} </p>
                  </div>
                );
              })}
            </div>

            <div className={styles.about_section_container_body_right}>
              <img src={generalImage} alt="" />
            </div>
            <img className={styles.hand_drawn_arrow} src={handArrow} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
