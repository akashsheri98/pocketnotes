/* eslint-disable no-unused-vars */
import React from 'react';
import styles from "../HomeDesktop/DesktopHome.module.css";
import home from "../../assets/home.png";
import lock from "../../assets/lock.png"

const DesktopHome = ()=>{
    return(
        <div className={styles.desktop_home}>
            <img src={home} alt='home'/>
            <h1>Pocket Notes</h1>
            <p>Send and receive messages without keeping your phone online.<br></br>
                Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            <div className={styles.desktop_home_button}>
                <img src={lock} alt="lock" />
                <span>end-to-end encrypted</span>
            </div>
        </div>
    );
};

export default DesktopHome;
