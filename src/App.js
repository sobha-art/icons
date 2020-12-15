import './App.css';
import { IconContext } from 'react-icons';
import { FaReact } from 'react-icons/fa';
import { MdAlarm } from 'react-icons/md';
function App() {
  return (
    <div className="App">
    {/* u can use this type of icon */}
    <IconContext.Provider value={{color:"blue" ,size:"10rem"}}>
    <div className="App">
    <FaReact />
     <MdAlarm  />
    </div>
    </IconContext.Provider>
    {/* u can use this type of icons*/}
     <FaReact color="purple" size="10rem"/>
     <MdAlarm color="red"  size="10rem" />
    </div>
  );
}

export default App;
