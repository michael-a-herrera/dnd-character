import React from 'react'
import Picture from '../pics/dragonborn.png'
import {useState} from 'react';
import {Charisma,Constitution, Intelligence, Strength} from '../keywords/AbilityScores';
import { Advantage, ConstitutionModifier, DifficultyClass, LongRest, Proficiency, Reaction, ShortRest, Speed, TwoD6 } from '../keywords/Words';

const data = [
    { dragon: "Black", damage: "Acid", weapon: "5 by 30 ft. line (Dex save)" },
    { dragon: "Blue", damage: "Lightning", weapon: "5 by 30 ft. line (Dex save)"  },
    { dragon: "Brass", damage: "Fire", weapon: "5 by 30 ft. line (Dex save)" },
    { dragon: "Bronze", damage: "Lightning", weapon: "5 by 30 ft. line (Dex save)" },
    { dragon: "Copper", damage: "Acid", weapon: "5 by 30 ft. line (Dex save)" },
    { dragon: "Gold", damage: "Fire", weapon: "15 ft. cone (Dex Save)" },
    { dragon: "Green", damage: "Poison", weapon: "15 ft. cone (Con Save)" },
    { dragon: "Red", damage: "Fire", weapon: "15 ft. cone (Dex Save)" },
    { dragon: "Silver", damage: "Cold", weapon: "15 ft. cone (Con Save)" },
    { dragon: "White", damage: "Cold", weapon: "15 ft. cone (Con Save)" },

  ]

function DragonbornRace() {

    const [buttons, setButtons] = useState([
        { class:"buttonsubrace", label: "Draconblood", value: false },
        { class:"buttonsubrace", label: "Ravenite", value: false }

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
            <p>Shaped by draconic gods or the dragons themselves, dragonborn originally hatched from dragon eggs as a unique race, combining the best attributes of dragons and humanoids. The ravenite dragonkin established a city-state, Draconia, over 1000 years ago in Wildemount. Almost 1000 years ago, during a worldwide apocalyptic event called The Calamity, a colonizing group of dragonkin known as the draconblood came to Draconia and over time enslaved the ravenite. Twenty years ago, Draconia was destroyed by a group of ancient dragons called the Chroma Conclave.  The ravenites rose up in the ashes of the city and overthrew their masters and now work to rebuild their civilization.</p>
            <h2>Dragonborn Traits</h2>
            <img className="raceImg" src={Picture} alt="Dragonborn"/>

            <p>Your draconic heritage manifests in a variety of traits you share with other dragonborn.</p>
            
            <p> Choose a subrace for additional traits, appended at the bottom of the list:</p>
            <Specialbuton {...{buttons,setButtons,handleButtonsChange}} />
            {buttons[0].value && <div><p>Draconbloods possess long tails and a knack for social manipulation. They remember the days when they were once mighty conquerers.</p></div>}
            {buttons[1].value && <div><p>Ravenites have no tails and a hearty physique. They remember the days when they were slaves as well as the day they overthrew their masters.</p></div>}

            <p><b>Age:</b>Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.</p>
            <p><b>Size:</b> Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.</p>
            <p><b>Speed:</b> Your base walking speed is 
            <div class="tooltip">&nbsp;30 feet.
                <span class="tooltiptext"><Speed/></span>
            </div>
            </p>
            <p><b>Draconic Ancestry:</b> You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.</p>
            <table>
                <tr>
                <th>Dragon</th>
                <th>Damage Type</th>
                <th>Breath Weapon</th>
                </tr>
                {data.map((val, key) => {
                return (
                    <tr key={key}>
                    <td>{val.dragon}</td>
                    <td>{val.damage}</td>
                    <td>{val.weapon}</td>
                    </tr>
                )
                })}
            </table>
            <p><b>Dragon Breath:</b> You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The 
            <div class="tooltip">&nbsp;DC&nbsp;
                <span class="tooltiptext"><DifficultyClass/></span>
            </div>
            for this saving throw equals 8 + your 
            <div class="tooltip">&nbsp;Constitution modifier&nbsp;
                <span class="tooltiptext"><ConstitutionModifier/></span>
            </div>
             + your 
             <div class="tooltip">&nbsp;proficiency&nbsp;
                <span class="tooltiptext"><Proficiency/></span>
            </div>  
            bonus. A creature takes 
            <div class="tooltip">&nbsp;2d6&nbsp;
                <span class="tooltiptext"><TwoD6/></span>
            </div> 
            damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can't use it again until you complete a 
            <div class="tooltip">&nbsp;short&nbsp;
                <span class="tooltiptext"><ShortRest/></span>
            </div> 
            or 
            <div class="tooltip">&nbsp;long&nbsp;
                <span class="tooltiptext"><LongRest/></span>
            </div> 
            rest.</p>
            <p><b>Damage Resistance:</b> You have resistance to the damage type associated with your draconic ancestry.</p>
            <p><b>Languages:</b>You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.</p>
        
            {buttons[0].value && <div>
                <h2> Additional Draconblood Dragonborn Traits</h2>
                <p><b>Ability Score Increase:</b> Your
                <div class="tooltip">&nbsp;Intelligence&nbsp;
                <span class="tooltiptext"><Intelligence/></span>
                </div> 
                score increases by 2 and your 
                <div class="tooltip">&nbsp;Charisma&nbsp;
                <span class="tooltiptext"><Charisma/></span>
                </div>  
                score increases by 1.</p>
                <p><b>Darkvision:</b> You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.  You can't discern color in darkness, only shades of gray.</p>
                <p><b>Foreceful Presence:</b> You can use your understanding of creative diplomacy or intimidation to guide a conversation in your favor.  When you make a Intimidation or Persuasion check, you can do so with
                <div class="tooltip">&nbsp;advantage
                    <span class="tooltiptext"><Advantage/></span>
                </div>
                . Once you use this trait, you can't do so again until you finish a 
                <div class="tooltip">&nbsp;short&nbsp;
                    <span class="tooltiptext"><ShortRest/></span>
                </div> 
                or 
                <div class="tooltip">&nbsp;long&nbsp;
                    <span class="tooltiptext"><LongRest/></span>
                </div> 
                rest.</p>
            </div>}

            {buttons[1].value && <div>
                <h2> Additional Ravenite Traits</h2>
                <p><b>Ability Score Increase:</b> Your
                <div class="tooltip">&nbsp;Strength&nbsp;
                <span class="tooltiptext"><Strength/></span>
                </div> 
                score increases by 2 and your 
                <div class="tooltip">&nbsp;Constitution&nbsp;
                <span class="tooltiptext"><Constitution/></span>
                </div>
                score increases by 1.</p>
                <p><b>Darkvision:</b> You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.  You can't discern color in darkness, only shades of gray.</p>
                <p><b>Vengeful Assault:</b> When you take damage from a creature in range of a weapon you are weilding, you can use your 
                <div class="tooltip">&nbsp;reaction&nbsp;
                    <span class="tooltiptext"><Reaction/></span>
                </div>  
                to make an attack with the weapon against the creature. Once you use this trait, you can't do so again until you finish a 
                <div class="tooltip">&nbsp;short&nbsp;
                    <span class="tooltiptext"><ShortRest/></span>
                </div> 
                or 
                <div class="tooltip">&nbsp;long&nbsp;
                    <span class="tooltiptext"><LongRest/></span>
                </div> 
                rest.</p>
            </div>}

        </div>
    )        
}

export default DragonbornRace;