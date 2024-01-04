/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import usePocketContext from "../../hooks/usePocketContext";
import styles from "../notesMobile/MobileNotesComponent.module.css";
const MobileNotesComponent=({title}) =>{
    const navigate = useNavigate();
    const { setSelected } = usePocketContext();
    const initials = title[0].name
      .split(" ")
      .map((n) => n[0].toUpperCase())
      .join("");
    const newTitle = title[0].name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    const handleTitleClick = () => {
      localStorage.setItem("selected", title[0].name);
      setSelected(title[0].name);
      navigate("/notes");
    };
    return (
      <div onClick={handleTitleClick} className={styles.mobile_notes}>
        <div
          className={styles.mobile_notes_icon}
          style={{ backgroundColor: title[0].color }}
        >
          {initials}
        </div>
        <div className={styles.mobile_notes_title}>{newTitle}</div>
      </div>
    );
  }
  
  export default MobileNotesComponent;