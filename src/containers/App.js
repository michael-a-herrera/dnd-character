import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ClassSelectPage from './pages/ClassSelect';
import RaceSelectPage from './pages/RaceSelect';
import {useState} from 'react';
import CharacterSummary from './components/layout/CharacterSummary'
import MainNavigation from './components/layout/MainNavigation'

const App = props => {

  const [buttons, setButtons] = useState([
    { class:"buttonnav", label: "Race", value: true },
    { class:"buttonnav", label: "Class", value: false },
  ]);

  const handleButtonsChange = ({
      buttons,
      setButtons,
      handleButtonsChange
  }) => label => {
      const newButtonsState = buttons.map(button => {
          if (button.label === label) {
              return (button = { class: "buttonnav_clicked", label: button.label, value: true});
          }
          return {
              class: "buttonnav",
              label: button.label,
              value: false
          };
      });
      setButtons(newButtonsState)
  };



  const Specialbuton = ({ buttons, setButtons, handleButtonsChange }) => {
      return (
          <>
              {buttons.map((button,index) => (
                  <button className={`${button.class}`}
                      key={`${button.label}-${index}`}
                      onClick={() => {
                          handleButtonsChange({ buttons, setButtons })(button.label);
                          }
                      }
                  >
                      {button.label}
                  </button>
              ))}
          </>
      )
  }

  return (
    <div>      
      <summary_style><CharacterSummary/></summary_style>
      <Specialbuton {...{buttons,setButtons,handleButtonsChange}} />
      {buttons[0].value && <div><RaceSelectPage /></div>}
      {buttons[1].value && <div><ClassSelectPage /></div>}
    </div>
  );
}

export default App;




//<MainNavigation/>
//      <Router>
//        <Routes>
//          <Route path='/' element={<RaceSelectPage />} />
//          <Route path='/class' element={<ClassSelectPage />} />
//        </Routes>
//      </Router>