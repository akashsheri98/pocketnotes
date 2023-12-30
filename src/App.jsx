/* eslint-disable react-hooks/exhaustive-deps */

import './App.css'
import { useEffect } from 'react'
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom'
import DesktopNotes from './Pages/Desktop/DesktopNotes'
import usePocketContext from './hooks/usePocketContext';
import {Provider} from "./context/PocketContext"
function App() {
    const {selected , setSelected} = usePocketContext();
    useEffect(()=>{
      setSelected(localStorage.getItem(selected || ""));
    },[selected]);

  return (
    <>
      <Provider>
      <Router>
        <Routes>
          <Route path='/' element={<DesktopNotes/>}/>
        </Routes>
      </Router>
      </Provider>
    </>
  )
}

export default App
