import React from 'react'
import Picture from '../pics/tiefling.png'
import {Charisma, Intelligence} from '../keywords/AbilityScores';
import { Cantrip, LongRest, Speed, SpellLevel } from '../keywords/Words';
import { Darkness } from '../keywords/Spells_D';
import { HellishRebuke } from '../keywords/Spells_H';
import { Thaumaturgy } from '../keywords/Spells_T';

function TieflingRace() {
    return (
        <div>
        <p>To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of Asmodeus—overlord of the Nine Hells—into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children's children will always be held accountable.</p>
        <h2>Tiefling Traits</h2>
        <img className="raceImg" src={Picture} alt="Tiefling"/>

            <p>Tieflings share certain racial traits as a result of their infernal descent.</p>
            <p><b>Ability Score Increase:</b> Your 
            <div class="tooltip">&nbsp;Intelligence&nbsp;
                <span class="tooltiptext"><Intelligence/></span>
            </div>
            score increases by 1, and your
            <div class="tooltip">&nbsp;Charisma&nbsp;
                <span class="tooltiptext"><Charisma/></span>
            </div>  
            score increases by 2. </p>
            <p><b>Age:</b> Tieflings mature at the same rate as humans but live a few years longer.</p>
            <p><b>Size:</b> Tieflings are about the same size and build as humans. Your size is Medium.</p>
            <p><b>Speed:</b> Your base walking speed is 
            <div class="tooltip">&nbsp;30 feet.
                <span class="tooltiptext"><Speed/></span>
            </div>
            </p>
            <p><b>Darkvision:</b> Due to your infernal heritage, you have superior vision in the dark and dim conditions.  You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.  You can't discern color in darkness, only shades of gray.</p>
            <p><b>Hellish Resistance:</b> You have resistance to fire damage. </p>
            <p><b>Infernal Legacy:</b> You know the  
            <div class="tooltip_spell">&nbsp;Thaumaturgy
                <span class="tooltipspelltext"><Thaumaturgy/></span>
            </div> 
            <div class="tooltip">&nbsp;cantrip
                <span class="tooltiptext"><Cantrip/></span>
            </div> 
            . When you reach 3rd level, you can cast the 
            <div class="tooltip_spell">&nbsp;Hellish Rebuke&nbsp;
                <span class="tooltipspelltext"><HellishRebuke/></span>
            </div> 
            spell as a 
            <div class="tooltip">&nbsp;2nd-level&nbsp;
                <span class="tooltiptext"><SpellLevel/></span>
            </div> 
            spell once with this trait and regain the ability to do so when you finish a 
            <div class="tooltip">&nbsp;long&nbsp;
                <span class="tooltiptext"><LongRest/></span>
            </div> 
            rest. When you reach 5th level, you can cast the 
            <div class="tooltip_spell">&nbsp;Darkness&nbsp;
                <span class="tooltipspelltext"><Darkness/></span>
            </div> 
            spell once with this trait and regain the ability to do so when you finish a 
            <div class="tooltip">&nbsp;long&nbsp;
                <span class="tooltiptext"><LongRest/></span>
            </div> 
            rest. 
            <div class="tooltip">&nbsp;Charisma&nbsp;
                <span class="tooltiptext"><Charisma/></span>
            </div>  
            is your spellcasting ability for these spells.</p>
            
            <p><b>Languages:</b>You can speak, read, and write Common and Infernal.</p>
        
        </div>
    )        
}

export default TieflingRace;