/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import  "./CreateGroupPopup.css";

const CreateGroupPopup = ({groupParentName , setGroupParentName, onClose})=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [groupName , setGroupName] = useState("");
    const [bgColor , setBgColor] = useState("");

    const handleGroupName = (e)=>{
        setGroupName(e.target.value);
    };

    const handleBgColor = (e)=>{
        const div=e.target;
        setBgColor(getComputedStyle(div).backgroundColor);

    };

    const saveName=()=>{
        const newGroup = { name:groupName , color:bgColor};
        setGroupParentName([...groupParentName , newGroup]);
        localStorage.setItem("groupNames" , JSON.stringify([...groupParentName , newGroup]));
        onClose();
    };
    return(
        <div className="popup">
            <div className="popup_title">Create New Group</div>
            <div className="popup_input">
                <span>Group Name</span>
                <input
                    value={groupName}
                    onChange={handleGroupName}
                    type="text"
                    placeholder="Enter Group Name..."
                />
            </div>
            <div className="popup_color_input">
                <span>Choose color</span>
                <div className="color_input_color">
                    <div className={`color_input_color_1 ${
                        bgColor === "rgb(179, 139, 250)" ? `highlight` : null
                        }`}
                        onClick={handleBgColor}
                    ></div>
                    <div className={`color_input_color_2 ${
                        bgColor === "rgb(255, 121, 242)" ? `highlight` : null
                        }`}
                        onClick={handleBgColor}
                    ></div>
                    <div className={`color_input_color_3 ${
                        bgColor === "rgb(67, 230, 252)" ? `highlight` : null
                        }`}
                        onClick={handleBgColor}
                    ></div>
                    <div className={`color_input_color_4 ${
                        bgColor === "rgb(241, 149, 118)" ? `highlight` : null
                        }`}
                        onClick={handleBgColor}
                    ></div>
                    <div className={`color_input_color_5 ${
                        bgColor === "rgb(0, 71, 255)" ? `highlight` : null
                        }`}
                        onClick={handleBgColor}
                    ></div>
                    <div className={`color_input_color_6 ${
                        bgColor === "rgb(102, 145, 255)" ? `highlight` : null
                        }`}
                        onClick={handleBgColor}
                    ></div>
                </div>
            </div>
            <div className="popup_close">
                <button onClick={saveName} disabled={groupName.length === 0}>
                Create
                </button>
            </div>
        </div>
    );
};

export default CreateGroupPopup;