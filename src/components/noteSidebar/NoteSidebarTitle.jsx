/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./NoteSidebarTitle.css"
import usePocketContext from "../../hooks/usePocketContext";

const NotesTitle = ({title})=>{
    const {selected , setSelected} = usePocketContext();
    console.log(title[0]);
    const nameInitial = 
        title[0].name
        .split(" ")
        .map((word) => word.charAt(0))
        .join("")
        .toUpperCase();
    const newTitle = title[0].name.split("").map((word)=>word.charAt(0)+word.slice(1)).join("");

    const handleTitleClick=()=>{
        setSelected(title[0].name);
    };
    return(
        <div onClick={handleTitleClick}
           className={ `group_title_logo ${selected === title[0].name ? "highlighted_title": null}`}
        >
            <div className="title_logo" style={{backgroundColor: title[0].color }}>
                {nameInitial}
            </div>
            <div className="group_title">{newTitle}</div>
        </div>
    );
};

export default NotesTitle;