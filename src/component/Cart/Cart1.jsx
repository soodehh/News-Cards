import React, { useState } from "react";
import styles from "./cart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import {
  faBookmark,
  faHeart,
  faComment,
} from "@fortawesome/free-regular-svg-icons";

function Cart1() {
  const [visible, setVisible] = useState(false);

  const openActions = () => {
    setVisible(!visible);
  };
  console.log(visible);

  return (
    <div className={styles.box}>
      <div className={`${styles.cartOne} ${styles.cart}`}>
        {/* date */}
        <div className={styles.date}>
          <li className={styles.day}>12</li>
          <li className={styles.month}>Aug</li>
          <li className={styles.year}>2016</li>
        </div>
        <div className={styles.content}>
          <div className={styles.description}>
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.author}>Jane Doe</div>
              <div className={styles.menuIcon} onClick={openActions}>
                <FontAwesomeIcon icon={faEllipsis} />
              </div>
            </div>
            <h2 className={styles.title}>
              <a href="#">Stranger Things: The sound of the Upside Down</a>
            </h2>
            <p>
              The antsy bingers of Netflix will eagerly anticipate the digital
              release of the Survive soundtrack, out today.
            </p>
          </div>
          <div
            className={`${styles.actions} ${
              visible === true ? styles.show : styles.hide
            }`}
          >
            <div className={styles.menu}>
              <a href="#">
                <FontAwesomeIcon icon={faBookmark} />
              </a>
            </div>
            <div className={styles.menu}>
              <a href="#">
                <FontAwesomeIcon icon={faHeart} />
                <span>18</span>
              </a>
            </div>
            <div className={styles.menu}>
              <a href="#">
                <FontAwesomeIcon icon={faComment} />
                <span>3</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart1;
