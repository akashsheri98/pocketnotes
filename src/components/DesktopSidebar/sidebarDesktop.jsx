/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import styles from "./SidebarDesktop.module.css";
import CreateGroupPopup from "../groupPopupDesktop/CreateGroupPopup";
import NotesTitle from "../noteSidebar/NoteSidebarTitle";

const SidebarDesktop = () => {
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
            <div className={styles.desktop_sidebar_heading}>Pocket Notes</div>
            <div className={styles.desktop_sidebar_notes_title}>
                {title.length > 0 ? (title.map((titles, index) => <NotesTitle key={index} title={titles} />)) :
                    (
                        <div className={styles.desktop_sidebar_notes_title}><p>No Notes group created</p>
                        <h6>to create notes group click button</h6>
                        </div>
                    )}

            </div>

            <div className={styles.desktop_sidebar_create_button}>
                <button id={styles.add} onClick={handleClick}>
                    <span>+</span>
                </button>
            </div>
            {showPopup && (
                <div className={styles.desktop_grouppopup}>
                    <CreateGroupPopup
                        groupParentName={groupParentName}
                        setGroupParentName={setGroupParentName}
                        onClose={handleClose}
                    />
                </div>
            )}
        </div>
    );
};

export default SidebarDesktop;
