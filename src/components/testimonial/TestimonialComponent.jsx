import styles from "./testimonial_component.module.css";
import shopifyIcon from "./assets/Shopify.com svg.png";
import starIcon from "./assets/Star icon.png";
import womanImage from "./assets/Avatar.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import image1 from "./assets/Image 1.png";
import image2 from "./assets/Image 2.png";
import image3 from "./assets/Image 3.png";
import image4 from "./assets/Image 4.png";
import image5 from "./assets/Image 5.png";

const TestimonialComponent = () => {
  return (
    <section className={styles.testimonial_section}>
      <div className={styles.testimonial_section_wrapper}>
        <div className={styles.testimonial_section_container}>
          <div className={styles.testimonial_section_container_left}>
            <div className={styles.testimonial_section_container_left_logo}>
              <img src={shopifyIcon} alt="" />
            </div>

            <div className={styles.testimonial_section_container_left_ratings}>
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
            </div>

            <div className={styles.testimonial_section_container_left_text}>
              <p>
                ClearLink has upgraded our remote meetings. High-quality video,
                screen sharing, and top-notch security make it essential for our
                team.
              </p>
            </div>

            <div
              className={
                styles.testimonial_section_container_left_person_container
              }
            >
              <div className={styles.testimonial_section_container_left_person}>
                <img src={womanImage} alt="" />
                <div>
                  <h4>Sarah Thompson</h4>
                  <p>Project Manager, Shopify</p>
                </div>
              </div>

              <div
                className={
                  styles.testimonial_section_container_left_arrows_container
                }
              >
                <span>
                  <FaArrowLeft />
                </span>
                <span>
                  <FaArrowRight />
                </span>
              </div>
            </div>
          </div>

          <div className={styles.testimonial_section_container_right}>
            <div
              className={styles.testimonial_section_container_right_top_images}
            >
              <img src={image1} alt="" />
              <img src={image2} alt="" />
            </div>

            <div
              className={
                styles.testimonial_section_container_right_bottom_images
              }
            >
              <img src={image3} alt="" />
              <img src={image4} alt="" />
              <img src={image5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialComponent;
