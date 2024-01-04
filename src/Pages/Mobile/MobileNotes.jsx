import { useState, useEffect } from "react";
import PopupMobile from "../../components/groupPopupMobile/PopupMobile";
import MobileNotesComponent from "../../components/notesMobile/MobileNotesComponent";
import styles from "../Mobile/MobileNotes.module.css";
const MobileNotes = ()=>{
    const [title, setTitle] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [groupParentName, setGroupParentName] = useState(localStorage.getItem("groupNames") || []);

    useEffect(() => {
        const data = localStorage.getItem("groupNames");

        if (data) {
            setGroupParentName(JSON.parse(data));
        } else {
            setGroupParentName([]);
        }
    }, []);

    /*useEffect(()=>{
        const obj = JSON.parse(localStorage.getItem("groupNames") );
        const result = Object.keys(obj).map((key)=> [obj[key]]);
    setTitle(result);           
    },[groupParentName]);*/

    useEffect(() => {
        const obj = JSON.parse(localStorage.getItem("groupNames"));

        if (obj !== null) {
            const result = Object.keys(obj).map((key) => [obj[key]]);
            setTitle(result);
        }
    }, [groupParentName]);


    const handleClick = () => {
        setShowPopup(true);
    }
    const handleClose = () => {
        setShowPopup(false);
    }

    return (
        <div className={styles.desktop_sidebar}>
            <div className={styles.mobile_sidebar_title}>Pocket Notes</div>
            <div className={styles.mobile_sidebar_notes_title}>
                {title.length > 0 ? (title.map((titles, index) => <MobileNotesComponent key={index} title={titles} />)) :
                    (
                        <div className={styles.mobile_sidebar_notes_title}><p>No Notes group created</p>
                        <h5>to create notes group click button</h5>
                        </div>
                    )}

            </div>

            <div className={styles.mobile_sidebar_create_button}>
                <button id={styles.add} onClick={handleClick}>
                    <span>+</span>
                </button>
            </div>
            {showPopup && (
                <div className={styles.mobile_popup_overlay}>
                    <PopupMobile
                        groupParentName={groupParentName}
                        setGroupParentName={setGroupParentName}
                        onClose={handleClose}
                    />
                </div>
            )}
        </div>
    );
};

export default MobileNotes;