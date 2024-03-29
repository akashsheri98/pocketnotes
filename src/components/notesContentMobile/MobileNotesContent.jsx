/* eslint-disable react/prop-types */
import styles from "../../components/notesContentMobile/MobileNotesContent.module.css";

const MobileNotesContent = ({note}) =>{
    return(
        <div className={styles.bg}>
            <div className={styles.notifications_container}>
                <div className={styles.success}>
                    <div className={styles.flex}>                
                        <div className={styles.success_prompt_wrap}>
                            <div className={styles.success_prompt_prompt}>
                                <p>{note.content}</p>
                            </div>
                            
                    
                        </div>
                    </div>
                    <div className={styles.success_button_container}>
                        <p>{note.date}</p><ul></ul><p>{note.time}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MobileNotesContent;