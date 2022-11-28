import { Routes, Route } from 'react-router-dom';

import ClassSelectPage from './pages/ClassSelect';
import RaceSelectPage from './pages/RaceSelect';
import logo from "./components/pics/dndlogo.png"

function App() {

  return (
    <div>
      <img class="logoImg" src={logo} alt="Logo"/>

      <Routes>
        <Route path='/' element={<RaceSelectPage />} />
        <Route path='/class' element={<ClassSelectPage />} />
      </Routes>
    </div>
  );
}

export default App;
