import React from "react";
import { RiInstagramLine, RiShareLine } from "react-icons/ri";
import {FaFacebookF,FaTwitter} from "react-icons/fa"

import styles from "../../styles/Home.module.css";

export default function SocialMedia() {
  return (
    <div>
      <div className="flex pl-2 mt-2 space-x-2 justify-between">
        <button
          onClick={() => window.open("https://www.facebook.com/WestinNewOrleans/ ")}
          className="cursor-pointer bg-white  font-bold py-2 px-2 rounded-full"
        >
          <FaFacebookF className={styles.iconFaFacebook} />
        </button>
        <button
          onClick={() =>
            window.open("https://www.instagram.com/accounts/login/?next=/westinneworleans/")
          }
          className="cursor-pointer bg-white  font-bold py-2 px-2 rounded-full"
        >
          <RiInstagramLine className={styles.iconFaFacebook} />
        </button>
        <button
          onClick={() => window.open("https://twitter.com/westinnola")}
          className="cursor-pointer bg-white  font-bold py-2 px-2 rounded-full"
        >
          <FaTwitter className={styles.iconFaFacebook} />
        </button>
        <button className="cursor-pointer bg-white  font-bold py-2 px-2 rounded-full">
          <RiShareLine className={styles.iconFaFacebook} />
        </button>
      </div>
    </div>
  );
}
