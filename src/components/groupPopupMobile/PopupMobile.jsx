/* eslint-disable react/prop-types */
import { useState } from "react";
import "./PopupMobile.css";
const PopupMobile= ({groupParentName , setGroupParentName, onClose})=>{
    const [groupName , setGroupName] = useState("");
    const [bgColor , setBgColor] = useState("");

    const handleGroupName = (e)=>{
        setGroupName(e.target.value);
    };

    const handleBgColor = (e)=>{
        const div=e.target;
        setBgColor(getComputedStyle(div).backgroundColor);

    };

    const saveName = () => {
        
         const newGroup = { name: groupName, color: bgColor };
        if(newGroup.name != 0 && newGroup.color != 0){
            setGroupParentName([...groupParentName , newGroup]);
            localStorage.setItem("groupNames" , JSON.stringify([...groupParentName , newGroup]));
            onClose();
        }
      };

    return(
        <div className="mobile_popup">
            <div className="mobile_popup_title">Create New Group</div>
            <div className="mobile_popup_input">
                <span>Group Name</span>
                <input
                    value={groupName}
                    onChange={handleGroupName}
                    type="text"
                    placeholder="Enter Group Name..."
                />
            </div>
            <div className="mobile_popup_color_input">
                <span>Choose color</span>
                <div className="mobile_color_input_color">
                    <div className={`mobile_color_input_color_1 ${
                        bgColor === "rgb(179, 139, 250)" ? `highlight` : null
                        }`}
                        onClick={handleBgColor}
                    ></div>
                    <div className={`mobile_color_input_color_2 ${
                        bgColor === "rgb(255, 121, 242)" ? `highlight` : null
                        }`}
                        onClick={handleBgColor}
                    ></div>
                    <div className={`mobile_color_input_color_3 ${
                        bgColor === "rgb(67, 230, 252)" ? `highlight` : null
                        }`}
                        onClick={handleBgColor}
                    ></div>
                    <div className={`mobile_color_input_color_4 ${
                        bgColor === "rgb(241, 149, 118)" ? `highlight` : null
                        }`}
                        onClick={handleBgColor}
                    ></div>
                    <div className={`mobile_color_input_color_5 ${
                        bgColor === "rgb(0, 71, 255)" ? `highlight` : null
                        }`}
                        onClick={handleBgColor}
                    ></div>
                    <div className={`mobile_color_input_color_6 ${
                        bgColor === "rgb(102, 145, 255)" ? `highlight` : null
                        }`}
                        onClick={handleBgColor}
                    ></div>
                </div>
            </div>
            <div className="mobile_popup_close">
                <button onClick={saveName} disabled={groupName.length === 0}>
                Create
                </button>
            </div>
        </div>
    );
};
export default PopupMobile;