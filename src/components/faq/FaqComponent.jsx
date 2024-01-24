import styles from "./faq_component.module.css";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { faq } from "./data";
import { useState } from "react";

const FaqComponent = () => {
  const [showAnswers, setShowAnswers] = useState(Array(faq.length).fill(false));

  const handleShowAnswer = (index) => {
    setShowAnswers((prev) => {
      const newShowAnswers = [...prev];
      newShowAnswers[index] = !newShowAnswers[index];
      return newShowAnswers;
    });
  };

  return (
    <section className={styles.faq_section}>
      <div className={styles.faq_section_wrapper}>
        <div className={styles.faq_section_container}>
          <div className={styles.faq_section_container_left}>
            <p>Support</p>
            <h3>FAQ</h3>
            <p>
              Everything you need to know about the product and billing. Can’t
              find the answer you’re looking for? Please
              <span>
                <a href=""> chat to our friendly team.</a>
              </span>
            </p>
          </div>

          <div className={styles.faq_section_container_right}>
            {faq.map((item, index) => (
              <div
                key={item.id}
                className={styles.faq_section_container_right_faq_container}
              >
                <div className={styles.faq_section_container_right_faq}>
                  <h5> {item.question} </h5>
                  {showAnswers[index] && <p> {item.answer} </p>}
                </div>

                <div
                  className={styles.faq_section_container_right_icons}
                  onClick={() => handleShowAnswer(index)}
                >
                  {showAnswers[index] ? <CiCircleMinus /> : <CiCirclePlus />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqComponent;
