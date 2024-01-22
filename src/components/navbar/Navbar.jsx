import styles from "./navbar.module.css";
import ClearLinkLogo1 from "./assets/ClearLinkLogo.png";
import ClearLinkLogo2 from "./assets/ClearLink..png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [showMenuItems, setShowMenuItems] = useState(false);
  const handleShowMenuItems = () => {
    setShowMenuItems(!showMenuItems);
  };
  return (
    <nav>
      <div className={styles.navbar_wrapper}>
        <div className={styles.navbar_container}>
          <div className={styles.navbar_container_logo}>
            <img src={ClearLinkLogo1} alt="company logo" />
            <img src={ClearLinkLogo2} alt="company logo" />
          </div>

          <div className={styles.navbar_container_services}>
            <div className={styles.navbar_container_services_products}>
              <p>Products</p>
              <span>
                <RiArrowDropDownLine />
              </span>
            </div>
            <div className={styles.navbar_container_services_solutions}>
              <p>Solutions</p>
              <span>
                <RiArrowDropDownLine />
              </span>
            </div>
            <div className={styles.navbar_container_services_resources}>
              <p>Resources</p>
              <span>
                <RiArrowDropDownLine />
              </span>
            </div>
            <div className={styles.navbar_container_services_pricing}>
              <p>Pricing</p>
            </div>
          </div>

          <div className={styles.navbar_container_buttons}>
            <button className={styles.navbar_container_button1}>
              Talk to sales
            </button>
            <button className={styles.navbar_container_button2}>
              Sign up for free
            </button>
          </div>
        </div>
      </div>

      {/* navbar mobile view */}
      <div className={styles.mobile_nav}>
        <div className={styles.mobile_nav_wrapper}>
          <div className={styles.mobile_nav_container}>
            <div className={styles.mobile_nav_container_logo}>
              <img src={ClearLinkLogo1} alt="company logo" />
              <img src={ClearLinkLogo2} alt="company logo" />
            </div>

            <div
              className={styles.mobile_nav_container_menu}
              onClick={handleShowMenuItems}
            >
              <RxHamburgerMenu />
            </div>

            {showMenuItems && (
              <div className={styles.mobile_nav_menu_items_container}>
                <div className={styles.mobile_nav_menu_items}>
                  <p>aldf;d</p>
                  <p>aldf;d</p>
                  <p>aldf;d</p>
                </div>

                <div
                  className={styles.mobile_nav_menu_items_times}
                  onClick={() => {
                    setShowMenuItems(false);
                  }}
                >
                  <FaTimes />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
