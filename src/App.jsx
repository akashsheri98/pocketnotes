/* eslint-disable react-hooks/exhaustive-deps */

import './App.css'
import { useEffect , useState } from 'react'
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom'
import DesktopNotes from './Pages/Desktop/DesktopNotes'
import MobileNotes from './Pages/Mobile/MobileNotes';

import usePocketContext from './hooks/usePocketContext';
import {Provider} from "./context/PocketContext"
import NotesMobilePages from './components/mobilePage/NotesMobilePages';

function App() {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    
    const {selected , setSelected} = usePocketContext();
    useEffect(()=>{
      setSelected(localStorage.getItem(selected || ""));
    },[selected]);

    const checkScreenSize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", checkScreenSize);
  return (
    <>
      <Provider>
        <div className="App">
        {screenSize > 500 ? (<DesktopNotes/>):(

            <Router>
            <Routes>
              <Route path='/' element={<MobileNotes/>}/>
              <Route path='/notes' element={<NotesMobilePages/>}/>
            </Routes>
            </Router>
        )}
        </div>
        
      </Provider>
    </>
  );
}

export default App;
