import React from 'react'
import {useState} from 'react';
import Picture from '../pics/dwarf.png'
import {Constitution, Strength, Wisdom} from '../keywords/AbilityScores';

function DwarfRace() {
    
    const [buttons, setButtons] = useState([
        { class:"buttonsubrace", label: "Hill Dwarf", value: false },
        { class:"buttonsubrace", label: "Mountain Dwarf", value: false }

    ]);

    const handleButtonsChange = ({
        buttons,
        setButtons,
        handleButtonsChange
    }) => label => {
        const newButtonsState = buttons.map(button => {
            if (button.label === label) {
                return (button = { class: "buttonsubrace_clicked", label: button.label, value: true});
            }
            return {
                class: "buttonsubrace",
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
    
    return (
        
        <div>
            <p>Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, the echoing of picks and hammers in deep mines and blazing forges, a commitment to clan and tradition, and a burning hatred of goblins and orcs—these common threads unite all dwarves.</p>
            <h2>Dwarf Traits</h2>
            <img className="raceImg" src={Picture} alt="Drawf"/>
            <p>Your dwarf character has an assortment of inborn abilities, part and parcel of dwarven nature.</p>

            <p> Choose a subrace for additional traits, appended at the bottom of the list:</p>
            <Specialbuton {...{buttons,setButtons,handleButtonsChange}} />
            {buttons[0].value && <div><p>As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.</p></div>}
            {buttons[1].value && <div><p>As a mountain dwarf, you're strong and hardy, accustomed to a difficult life in rugged terrain</p></div>}


            <p><b>Ability Score Increase:</b> Your 
            <div class="tooltip">&nbsp;Constitution&nbsp;
                <span class="tooltiptext"><Constitution/></span>
            </div>
            score increases by 2.</p>
            <p><b>Age:</b> Dwarves mature at the same rate as humans, but they're considered young until they reach the ages of 50. On average, they live about 350 years.</p>
            <p><b>Size:</b> Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is medium.</p>
            <p><b>Speed:</b> Your base walking speed is 
            <div class="tooltip">&nbsp;25 feet.
                <span class="tooltiptext">This is how far you can move in a single round of combat without using a dash action.</span>
            </div>
            &nbsp;Your speed is not reduced by wearing heavy armor.</p>
            <p><b>Darkvision:</b> Accustomed to life underground, you have superior vision in the dark and dim conditions.  You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.  You can't discern color in darkness, only shades of gray.</p>
            <p><b>Dwarven Resilience:</b> You have 
            <div class="tooltip">&nbsp;advantage&nbsp;
                <span class="tooltiptext">Advantage means you can make a roll twice and take the higher of the two rolls, increasing your chance for success or a critical roll.</span>
            </div>            
            on saving throws against poison, and you have resistance against poison damage.</p>
            <p><b>Dwarven Combat Training:</b> You have 
            <div class="tooltip">&nbsp;proficiency&nbsp;
                <span class="tooltiptext">A bonus that you can add to a roll to increase your chance of success, due to your "proficiency" in the skill.</span>
            </div>  
            with the battleaxe, handaxe, light hammer, and warhammer.</p>
            <p><b>Tool Proficiency:</b> You gain 
            <div class="tooltip">&nbsp;proficiency&nbsp;
                <span class="tooltiptext">A bonus that you can add to a roll to increase your chance of success, due to your "proficiency" in the skill.</span>
            </div> 
            with the artisan's tools of your choice, smith's tools, brewer's supplies, or mason's tools.</p>
            <p><b>Stonecunning:</b> Whenever you make a History check related to the origin of stonework, you are considered proficient in the History skill and add double your 
            <div class="tooltip">&nbsp;proficiency&nbsp;
                <span class="tooltiptext">A bonus that you can add to a roll to increase your chance of success, due to your "proficiency" in the skill.</span>
            </div> 
            bonus to the check.</p>
            <p><b>Languages:</b> You can speak, read, and write Common and Dwarvish.  Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.</p>
            
            
            {buttons[0].value && <div>
                <h2> Additional Hill Dwarf Traits</h2>
                <p><b>Ability Score Increase:</b> Your
                <div class="tooltip">&nbsp;Wisdom&nbsp;
                <span class="tooltiptext"><Wisdom/></span>
                </div>
                score increases by 1.</p>
                <p><b>Dwarven Toughness:</b> Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.</p>
                </div>}
            {buttons[1].value && <div>
                <h2> Additional Mountain Dwarf Traits</h2>
                <p><b>Ability Score Increase:</b> Your
                <div class="tooltip">&nbsp;Strength&nbsp;
                <span class="tooltiptext"><Strength/></span>
                </div> 
                score increases by 2.</p>
                <p><b>Dwarven Armor Training:</b> You have 
                <div class="tooltip">&nbsp;proficiency&nbsp;
                    <span class="tooltiptext">A bonus that you can add to a roll to increase your chance of success, due to your "proficiency" in the skill.</span>
                </div>  
                with light and medium armor.</p>
                </div>}
        </div>
    )        


}


export default DwarfRace;