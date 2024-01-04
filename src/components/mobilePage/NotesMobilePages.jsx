
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import enter from "../../assets/enter.png";
import back from "../../assets/back.png";
import MobileNotesContent from "../../components/notesContentMobile/MobileNotesContent";
import usePocketContext from "../../hooks/usePocketContext";
import styles from "../../components/mobilePage/NotesMobilePages.module.css";

const NotesMobilePages = ()=>{
    const [text , setText] =useState("");
    const [bgColor ,setBgColor] = useState("#fff");
    const [initials , setInitials] = useState("");
    const [selectedTitle , setSelectedTitle] = useState("");
    const { notes, setNotes, selected, setSelected } = usePocketContext();
    const navigate = useNavigate();
    useEffect(()=>{
        setNotes(JSON.parse(localStorage.getItem(selected)) || []);
        const groupNames = JSON.parse(localStorage.getItem("groupNames"));
        const selectedGroup = groupNames.find((group) => group.name === selected);
        if(selectedGroup){
            setBgColor(selectedGroup.color);
            setInitials(
                selectedGroup.name.split(" ")
                .map((word) => word.charAt(0))
                .join("")
                .toUpperCase()
            );
            setSelectedTitle(
                selectedGroup.name.split("").map((word)=>word.charAt(0).toUpperCase()+word.slice(1)).join("")
            );
        }
    },[selected,setNotes]);

    const handleKeyDown=(e)=>{
        if (e.key==="Enter" && text!== ""){
            e.preventDefault();
            handleSaveNotes();
        }
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        handleSaveNotes();
    }

    const handleSaveNotes=()=>{
        if(!text.trim()){
            return;
        }
        const notes = JSON.parse(localStorage.getItem(selected)) || [];
        const newNoteObj={
            id : Date.now(),
            title : selected,
            content :text.trim(),
            date : new Date().toLocaleDateString("en-us",{
                day:"numeric",
                month:"short",
                year:"numeric",
            }),
            time : new Date().toLocaleTimeString(),
        };
        notes.push(newNoteObj);
        localStorage.setItem(selected , JSON.stringify(notes));
        setText("");
        setNotes(notes) ;
    };
    const handleChange = (e)=>{
        setText(e.target.value);
    };

    const goBack = () => {
        setSelected("");
        navigate("/");
      };

      return(
        <div className={styles.mobile_notes}>
            <div className={styles.mobile_notes_title}>
            <img src={back} alt="back" onClick={goBack} />
                <div className={styles.mobile_notes_title_color} style={{backgroundColor:bgColor}}> 
                    {initials}
                </div>
                <div className={styles.mobile_notes_title_text}>{selectedTitle}</div>
            </div>
            <div className={styles.mobile_notes_content}>
                {notes && notes.length > 0 ?
                    notes.map((note,index)=>(
                        <MobileNotesContent key={index} note={note}/>
                    )) :
                    null
                }
            </div>
           <div className={styles.mobile_notes_input} /* style={{backgroundColor:bgColor}}*/>
                <textarea
                    value={text}
                    placeholder='ENTER YOUR NOTES HERE'
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                >
                </textarea>
                <img src={enter} onClick={handleSubmit} alt="enter" />
           </div>
        </div>
    );
};

export default NotesMobilePages;