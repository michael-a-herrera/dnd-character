import React from 'react'
import Picture from '../pics/gnome.png'
import {useState} from 'react';
import {Charisma, Constitution, Dexterity, Intelligence, Wisdom} from '../keywords/AbilityScores';

function GnomeRace() {

    const [buttons, setButtons] = useState([
        { class:"buttonsubrace", label: "Forest Gnome", value: false },
        { class:"buttonsubrace", label: "Rock Gnome", value: false }
        
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
            <p>A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their close-knit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter. Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play.</p>
            <h2>Gnome Traits</h2>
            <img className="raceImg" src={Picture} alt="Gnome"/>

            <p>Your gnome character has certain characteristics in common with all other gnomes.</p>

            <p> Choose a subrace for additional traits, appended at the bottom of the list:</p>
            <Specialbuton {...{buttons,setButtons,handleButtonsChange}} />
            {buttons[0].value && <div><p>As a forest gnome, you have a natural knack for illusion and inherent quickness and stealth. </p></div>}
            {buttons[1].value && <div><p>As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes.</p></div>}
            

            <p><b>Ability Score Increase:</b> Your 
            <div class="tooltip">&nbsp;Intelligence&nbsp;
                <span class="tooltiptext"><Intelligence/></span>
            </div>
            score increases by 2.</p>
            <p><b>Age:</b> Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.</p>
            <p><b>Size:</b> Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.</p>
            <p><b>Speed:</b> Your base walking speed is 
            <div class="tooltip">&nbsp;25 feet.
                <span class="tooltiptext">This is how far you can move in a single round of combat without using a dash action.</span>
            </div>
            </p>
            <p><b>Darkvision:</b> Accustomed to life underground, you have superior vision in the dark and dim conditions.  You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.  You can't discern color in darkness, only shades of gray.</p>
            <p><b>Gnome Cunning:</b> You have 
            <div class="tooltip">&nbsp;advantage&nbsp;
                <span class="tooltiptext">Advantage means you can make a roll twice and take the higher of the two rolls, increasing your chance for success or a critical roll.</span>
            </div>            
            on all 
            <div class="tooltip">&nbsp;Intelligence
                <span class="tooltiptext"><Intelligence/></span>
            </div>
            ,
            <div class="tooltip">&nbsp;Wisdom
                <span class="tooltiptext"><Wisdom/></span>
            </div>
            , and 
            <div class="tooltip">&nbsp;Charisma&nbsp;
                <span class="tooltiptext"><Charisma/></span>
            </div>   
            saving throws against magic.</p>
            <p><b>Languages:</b>You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.</p>
        
            {buttons[0].value && <div>
                <h2> Additional Forest Gnome Traits</h2>
                <p><b>Ability Score Increase:</b> Your
                <div class="tooltip">&nbsp;Dexterity&nbsp;
                    <span class="tooltiptext"><Dexterity/></span>
                </div>
                score increases by 1.</p>
                <p><b>Natural Illusionist:</b> You know the 
                <div class="tooltip">&nbsp;minor illusion
                    <span class="tooltiptext">You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.</span>
                </div>
                <div class="tooltip">&nbsp;cantrip
                    <span class="tooltiptext">A cantrip is a spell that can be cast at will, without using a spell slot and without being prepared in advance. Repeated practice has fixed the spell in the caster's mind and infused the caster with the magic needed to produce the effect over and over. A cantrip's spell level is 0.</span>
                </div> 
                . 
                <div class="tooltip">&nbsp;Intelligence&nbsp;
                    <span class="tooltiptext"><Intelligence/></span>
                </div>
                is your spellcasting ability for it. </p>
                <p><b>Speak with Small Beasts:</b> Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets.</p>

            </div>}

            {buttons[1].value && <div>
                <h2> Additional Rock Gnome Traits</h2>
                <p><b>Ability Score Increase:</b> Your
                <div class="tooltip">&nbsp;Constitution&nbsp;
                    <span class="tooltiptext"><Constitution/></span>
                </div>
                score increases by 1.</p>
                <p><b>Artificer's Lore:</b> Whenever you make a History check related to magic items, alchemical objects, or technological devices, you can add twice your 
                <div class="tooltip">&nbsp;proficiency&nbsp;
                    <span class="tooltiptext">A bonus that you can add to a roll to increase your chance of success, due to your "proficiency" in the skill.</span>
                </div>  
                bonus, instead of any proficiency bonus you normally apply. </p>
                <p><b>Tinker:</b> You have 
                <div class="tooltip">&nbsp;proficiency&nbsp;
                    <span class="tooltiptext">A bonus that you can add to a roll to increase your chance of success, due to your "proficiency" in the skill.</span>
                </div>  
                with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gold pieces worth of materials to construct a Tiny clocker device, either a Clockwork Toy, a Fire Starter, or a Music Box.</p>
                
               
            </div>}

        </div>
    )        


}


export default GnomeRace;