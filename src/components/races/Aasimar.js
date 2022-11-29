import React from 'react'
import Picture from '../pics/aasimar.png'
import {useState} from 'react';
import {Charisma,Wisdom,Constitution} from '../keywords/AbilityScores';
import {Light} from '../keywords/Spells_L';
import { Cantrip, LongRest, Speed } from '../keywords/Words';

function AasimarRace() {

    const [buttons, setButtons] = useState([
        {class: "buttonsubrace", label: "Protector Aasimar", value: false },
        {class: "buttonsubrace", label: "Scourge Aasimar", value: false }
    
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
            <p>Aasimar are the purest expression of the divine light of the gods.  While that light burns in every mortal soul, the souls of those blessed with an angelic ancestor blaze brighter than any other and are understood to be destined for a grander cosmic purpose. In every culture across the world, the birth of an aasimar is seen as a blessing and a portent.  Aasimar who can bear the burden of destiny become champions of noble causes, and encourage others to walk always in the light. More often than not, however, an aasimar saddled with a vague destiny and the grand aspirations of their clan ultimately falls from grace, their inner light succumbing to shadow.</p>
            <h2>Aasimar Traits</h2>
            <img className="raceImg" src={Picture} alt="Aasimar"/>

            <p>An aasimar character has the following racial traits.</p>

            <p> Choose a subrace for additional traits, appended at the bottom of the list:</p>
            <Specialbuton {...{buttons,setButtons,handleButtonsChange}} />
            {buttons[0].value && <div><p>Protector aasimar are charged by the powers of good to protect the weak, to strike at evil wherever it arises, and to stand vigilant against the darkness. From a young age, a protector aasimar recieves advice and directives that urge them to stand against evil.</p></div>}
            {buttons[1].value && <div><p>Scourge aasimar are imbued with a divine energy that blazes intensely within them.  It feeds a powerful desire to destroy evil-a desire that is, at its best, unflinching and, at its worst, all-consuming. Many scourge aasimar wear masks to block out the world and focus on containing this power, unmasking themselves only in battle.</p></div>}

            <p><b>Ability Score Increase:</b> Your 
            <div class="tooltip">&nbsp;Charisma&nbsp;
                <span class="tooltiptext"><Charisma/></span>
            </div>  
            score increases by 2.</p>
            <p><b>Age:</b> Aasimar mature at the same rate as humans, but they can live up to 160 years.</p>
            <p><b>Size:</b> Aasimar have the same range of height and weight as humans. Your size is medium.</p>
            <p><b>Speed:</b> Your base walking speed is 
            <div class="tooltip">&nbsp;30 feet.
                <span class="tooltiptext"><Speed/></span>
            </div>
            </p>
            <p><b>Darkvision:</b> Blessed with a radiant soul, you have superior vision in the dark and dim conditions.  You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.  You can't discern color in darkness, only shades of gray.</p>
            <p><b>Celestial Resistance:</b> You have resistance to necrotic damage and radiant damage. </p>
            <p><b>Healing Hands:</b> You can touch a creature and cause it regain a number of hit points equal to your level. Once you use this trait, you can't use it again until you finish a 
            <div class="tooltip">&nbsp;long&nbsp;
                <span class="tooltiptext"><LongRest/></span>
            </div> 
            rest.</p>
            <p><b>Light Bearer:</b>You know the 
            <div class="tooltip_spell">&nbsp;light
                <span class="tooltipspelltext"><Light/></span>
            </div> 
            <div class="tooltip">&nbsp;cantrip
                <span class="tooltiptext"><Cantrip/></span>
            </div> 
            .
            <div class="tooltip">&nbsp;Charisma&nbsp;
                <span class="tooltiptext"><Charisma/></span>
            </div>  
            is your spellcasting ability for this spell.</p>
            
            <p><b>Languages:</b>You can speak, read, and write Common and Celestial.</p>
        
            {buttons[0].value && <div>
                <h2> Additional Protector Aasimar Traits</h2>
                <p><b>Ability Score Increase:</b> Your
                <div class="tooltip">&nbsp;Wisdom&nbsp;
                    <span class="tooltiptext"><Wisdom/></span>
                </div>
                score increases by 1. </p>
                <p><b>Radiant Soul:</b> Starting at 3rd level, you can use you action to unleash the divine energy within yourself, causing your eyes to glimmer and two luminous, incorporeal wings to sprout from your back. Your transformation lasts for 1 minute or until you end it as a bonus action. You have a flying speed of 30 feet, and once on each of your turns, you can deal extra radiant damange equal to your level. Once you use this trait, you can't use it again until you finish a 
                <div class="tooltip">&nbsp;long&nbsp;
                    <span class="tooltiptext"><LongRest/></span>
                </div> 
                rest. </p>
            </div>}

            {buttons[1].value && <div>
                <h2> Additional Scourge Aasimar Traits</h2>
                <p><b>Ability Score Increase:</b> Your
                <div class="tooltip">&nbsp;Constitution&nbsp;
                    <span class="tooltiptext"><Constitution/></span>
                </div>
                score increases by 1. </p>
                <p><b>Radiant Consumption:</b> Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing a searing light to radiate from you, pouring out of your eyes and mouth, and threaten to char you. Your transformation lasts for 1 minute or until you end it as a bonus action. You shed bright light in a 10 foot radius and dim liight for an additional 10 feet, and at the end of each of your turns, you and each creature within 10 feet of you take radiant damage equal to half your level (rounded up). In addition, once on each of your turns, you can deal extra radiante damge equal to your level. Once you use this trait, you can't use it again until you finish a 
                <div class="tooltip">&nbsp;long&nbsp;
                    <span class="tooltiptext"><LongRest/></span>
                </div> 
                rest. </p>
            </div>}
         </div>
    )        
}

export default AasimarRace;