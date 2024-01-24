import styles from "./navbar.module.css";
import ClearLinkLogo1 from "./assets/ClearLinkLogo.png";
import ClearLinkLogo2 from "./assets/ClearLink..png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState(false);

  const handleToggleDropdown = (dropdown) => {
    if (dropdown === "products") {
      setShowProducts(!showProducts);
    } else if (dropdown === "solutions") {
      setShowSolutions(!showSolutions);
    } else if (dropdown === "resources") {
      setShowResources(!showResources);
    }
  };

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
            <div
              className={styles.navbar_container_services_products}
              onClick={() => handleToggleDropdown("products")}
            >
              <p>Products</p>
              <span>
                <RiArrowDropDownLine />
              </span>
              {showProducts && (
                <div className={styles.dropdown_content}>
                  {/* Add your dropdown content for Products here */}
                  <p>Product 1</p>
                  <p>Product 2</p>
                  <p>Product 3</p>
                </div>
              )}
            </div>

            <div
              className={styles.navbar_container_services_solutions}
              onClick={() => handleToggleDropdown("solutions")}
            >
              <p>Solutions</p>
              <span>
                <RiArrowDropDownLine />
              </span>
              {showSolutions && (
                <div className={styles.dropdown_content}>
                  {/* Add your dropdown content for Solutions here */}
                  <p>Solution 1</p>
                  <p>Solution 2</p>
                  <p>Solution 3</p>
                </div>
              )}
            </div>

            <div
              className={styles.navbar_container_services_resources}
              onClick={() => handleToggleDropdown("resources")}
            >
              <p>Resources</p>
              <span>
                <RiArrowDropDownLine />
              </span>
              {showResources && (
                <div className={styles.dropdown_content}>
                  {/* Add your dropdown content for Resources here */}
                  <p>Resource 1</p>
                  <p>Resource 2</p>
                  <p>Resource 3</p>
                </div>
              )}
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
