import { connect } from "react-redux";
import { updateClass,updateSubClass } from "../../redux/actionCreators";
import BarbarianClass from '../components/class/Barbarian';
import ArtificerClass from '../components/class/Artificer';
import BardClass from '../components/class/Bard';
import ClericClass from '../components/class/Cleric';
import DruidClass from '../components/class/Druid';
import FighterClass from '../components/class/Fighter';
import MonkClass from '../components/class/Monk';
import PaladinClass from '../components/class/Paladin';
import RangerClass from '../components/class/Ranger';
import RogueClass from '../components/class/Rogue';
import SorcererClass from '../components/class/Sorcerer';
import WarlockClass from '../components/class/Warlock';
import WizardClass from '../components/class/Wizard';
import {useState} from 'react';

const mapStateToProps = state => {
    return {
      class: state.pc.class
    };
  };
  
const mapDispatchToProps = dispatch => ({
    updateCharClass: (newclass) => dispatch(updateClass(newclass)),
    updateCharSubClass: (newsubclass) => dispatch(updateSubClass(newsubclass))
  });

const ClassSelectPage = props => {

    const [buttons, setButtons] = useState([
        { class:"buttonclass", label: "Barbarian", value: false },
        { class:"buttonclass", label: "Bard", value: false },
        { class:"buttonclass", label: "Cleric", value: false },
        { class:"buttonclass", label: "Druid", value: false },
        { class:"buttonclass", label: "Fighter", value: false },
        { class:"buttonclass", label: "Monk", value: false },
        { class:"buttonclass", label: "Paladin", value: false },
        { class:"buttonclass", label: "Ranger", value: false },
        { class:"buttonclass", label: "Rogue", value: false },
        { class:"buttonclass", label: "Sorcerer", value: false },
        { class:"buttonclass", label: "Warlock", value: false },
        { class:"buttonclass", label: "Wizard", value: false },
        { class:"buttonclass", label: "Artificer", value: false }

    ]);

    const handleButtonsChange = ({
        buttons,
        setButtons,
        handleButtonsChange
    }) => label => {
        const newButtonsState = buttons.map(button => {
            if (button.label === label) {
                return (button = { class: "buttonclass_clicked", label: button.label, value: true});
            }
            return {
                class: "buttonclass",
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
                            props.updateCharClass(button.label);
                            props.updateCharSubClass("");
                            }
                        }
                    >
                        {button.label}
                    </button>
                ))}
            </>
        )
    }

    return <div>
        <h1>Select Your Class</h1>
        <p></p>
        <Specialbuton {...{buttons,setButtons,handleButtonsChange}} />
        {buttons[0].value && <div><BarbarianClass /></div>}
        {buttons[1].value && <div><BardClass /></div>}
        {buttons[2].value && <div><ClericClass /></div>}
        {buttons[3].value && <div><DruidClass /></div>}
        {buttons[4].value && <div><FighterClass /></div>}
        {buttons[5].value && <div><MonkClass /></div>}
        {buttons[6].value && <div><PaladinClass /></div>}
        {buttons[7].value && <div><RangerClass /></div>}
        {buttons[8].value && <div><RogueClass /></div>}
        {buttons[9].value && <div><SorcererClass /></div>}
        {buttons[10].value && <div><WarlockClass /></div>}
        {buttons[11].value && <div><WizardClass /></div>}
        {buttons[12].value && <div><ArtificerClass /></div>}

        </div>;
}

export default connect(mapStateToProps,mapDispatchToProps)(ClassSelectPage);