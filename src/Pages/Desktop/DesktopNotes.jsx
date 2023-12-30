import styles from "../../Pages/Desktop/DesktopNotes.module.css";
import DesktopHome from "../../components/HomeDesktop/DesktopHome";
import SidebarDesktop from "../../components/DesktopSidebar/sidebarDesktop";
import DesktopNotesComponent from "../../components/notesDesktop/DesktopNotesComponent";
import usePocketContext from "../../hooks/usePocketContext";
const DesktopNotes =()=>{
    const {selected} = usePocketContext();

    return(
         
          <div className={styles.desktop}>
           <SidebarDesktop/>
            {selected.length > 0 ?  <DesktopNotesComponent/>:<DesktopHome/>}
          </div>
        
    );
};

export default DesktopNotes;
