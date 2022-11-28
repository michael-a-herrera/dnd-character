import MainNavigation from '../components/layout/MainNavigation';
import DwarfRace from '../components/races/Dwarf';
import ElfRace from '../components/races/Elf';
import HalflingRace from '../components/races/Halfling';
import HumanRace from '../components/races/Human';
import DragonbornRace from '../components/races/Dragonborn';
import GnomeRace from '../components/races/Gnome';
import HalfElfRace from '../components/races/HalfElf';
import HalfOrcRace from '../components/races/HalfOrc';
import TieflingRace from '../components/races/Tiefling';
import AasimarRace from '../components/races/Aasimar';
import FirbolgRace from '../components/races/Firbolg';
import GenasiRace from '../components/races/Genasi';
import GoliathRace from '../components/races/Goliath';
import TabaxiRace from '../components/races/Tabaxi';

import {useState} from 'react';

function RaceSelectPage() {

    const [buttons, setButtons] = useState([
        { class:"buttonrace", label: "Dwarf", value: false },
        { class:"buttonrace", label: "Elf", value: false },
        { class:"buttonrace", label: "Halfling", value: false },
        { class:"buttonrace", label: "Human", value: false },
        { class:"buttonrace", label: "Dragonborn", value: false },
        { class:"buttonrace", label: "Gnome", value: false },
        { class:"buttonrace", label: "Half-Elf", value: false },
        { class:"buttonrace", label: "Half-Orc", value: false },
        { class:"buttonrace", label: "Tiefling", value: false },
        { class:"buttonrace", label: "Aasimar", value: false },
        { class:"buttonrace", label: "Firbolg", value: false },
        { class:"buttonrace", label: "Genasi", value: false },
        { class:"buttonrace", label: "Goliath", value: false },
        { class:"buttonrace", label: "Tabaxi", value: false }

    ]);
   

    const handleButtonsChange = ({
        buttons,
        setButtons,
        handleButtonsChange
    }) => label => {
        const newButtonsState = buttons.map(button => {
            if (button.label === label) {
                return (button = { class: "buttonrace_clicked", label: button.label, value: true});
            }
            return {
                class: "buttonrace",
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
                    <button class={`${button.class}`}
                        key={`${button.label}-${index}`}
                        onClick={() =>
                            handleButtonsChange({ buttons, setButtons })(button.label)
                        }
                    >
                        {button.label}
                    </button>
                ))}
            </>
        )
    }

    return <div>
        <h1>Select Your Race</h1>
        <p>Below is a list of available races to start building your character.  Each race has a set of traits that generally describe characters from that race. If you'd like, keep these traits in mind when building your character as they can provide helpful bonuses to certain classes of adventurers. For example, elves have a bonus to Dexterity which is important for the Stealth skill, so they can make good Rogues. However, you can create whatever kind of character you'd like, and non-typical character builds offer the opprotunity for interesting backstories. Also note that D&D has some problematic origins for races as they may relate to real stereotypes. If you'd like to make some adjustments to a race to accomadate this, let the dungeon master know and they can help modify the character to better fit your desires.</p>
        <Specialbuton {...{buttons,setButtons,handleButtonsChange}} />
        {buttons[0].value && <div><DwarfRace /></div>}
        {buttons[1].value && <div><ElfRace /></div>}
        {buttons[2].value && <div><HalflingRace /></div>}
        {buttons[3].value && <div><HumanRace /></div>}
        {buttons[4].value && <div><DragonbornRace /></div>}
        {buttons[5].value && <div><GnomeRace /></div>}
        {buttons[6].value && <div><HalfElfRace /></div>}
        {buttons[7].value && <div><HalfOrcRace /></div>}
        {buttons[8].value && <div><TieflingRace /></div>}
        {buttons[9].value && <div><AasimarRace /></div>}
        {buttons[10].value && <div><FirbolgRace /></div>}
        {buttons[11].value && <div><GenasiRace /></div>}
        {buttons[12].value && <div><GoliathRace /></div>}
        {buttons[13].value && <div><TabaxiRace /></div>}



        </div>;
}

export default RaceSelectPage;