import { Routes, Route } from "react-router-dom";

// Components
import Header from "./Components/Header/Header";
import Saidbar from './Components/Saidbar/Saidbar';
import Main from "./Components/Main/Main";
import Chanel from "./Components/Chanel/Chanel";
import Videos from "./Components/Videos/Videos";
import NotFound from "./Components/404/404";

//SASS
import './App.scss'



function App() {
  return (
    <div className='wrapper'>
      < Header />
      <div className='home__page'>
        < Saidbar />
        <Routes>
          <Route path='/' element={< Main />} />
          <Route path='/chanel/:username' element={< Chanel />} />
          <Route path='/chanel/:username/:video' element={< Videos />} />
          <Route path='*' element={< NotFound />} />
        </Routes>
      </div>


    </div>
  );
}

export default App;
