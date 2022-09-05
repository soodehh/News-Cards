import React from "react";
import styles from "./cart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faHeart,
  faComment,
} from "@fortawesome/free-regular-svg-icons";

function Cart2() {
  return (
    <div className={styles.box}>
      <div className={`${styles.cartTwo} ${styles.cart}`}>
        <div className={styles.header}>
          <div className={styles.date}>
            <span className={styles.day}>12</span>
            <span className={styles.month}>Aug</span>
            <span className={styles.year}>2016</span>
          </div>
          <div className={styles.actions}>
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
        <div className={styles.content}>
          <div className={styles.description}>
            <div className={styles.author}>Jane Doe</div>
            <h2 className="title">
              <a href="#">Stranger Things: The sound of the Upside Down</a>
            </h2>
            <p class="text">
              The antsy bingers of Netflix will eagerly anticipate the digital
              release of the Survive soundtrack, out today.
            </p>
            <a href="#" class={styles.button}>
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart2;
