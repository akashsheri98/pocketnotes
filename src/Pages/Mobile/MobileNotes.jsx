import { useState, useEffect ,useRef } from "react";
import PopupMobile from "../../components/groupPopupMobile/PopupMobile";
import MobileNotesComponent from "../../components/notesMobile/MobileNotesComponent";
import styles from "../Mobile/MobileNotes.module.css";
import MobileHome from "../../components/homeMobile/MobileHome";
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

    const modRef =useRef(null);
    useEffect(()=>{ 
        let handler;
        handler =(event)=>{
            if(!modRef.current?.contains(event.target)){
                setShowPopup(false);
            }
            else{
                setShowPopup(true);
            }
        }
        document.addEventListener("mousedown",handler);
    },[]);

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
                        <MobileHome/>
                    )}

            </div>

            <div className={styles.mobile_sidebar_create_button}>
                <button id={styles.add} onClick={handleClick}>
                    <span>+</span>
                </button>
            </div>
            {showPopup && (
                <div className={styles.mobile_popup_overlay}>
                    <div className={styles.openclose} ref={modRef}>
                        <PopupMobile
                            groupParentName={groupParentName}
                            setGroupParentName={setGroupParentName}
                            onClose={handleClose}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileNotes;