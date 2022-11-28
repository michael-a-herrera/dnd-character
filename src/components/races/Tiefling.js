import React from 'react'
import Picture from '../pics/tiefling.png'
import {Charisma, Intelligence} from '../keywords/AbilityScores';

function TieflingRace() {
    return (
        <div>
        <p>To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of Asmodeus—overlord of the Nine Hells—into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children's children will always be held accountable.</p>
        <h2>Tiefling Traits</h2>
        <img class="raceImg" src={Picture} alt="Tiefling"/>

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
                <span class="tooltiptext">This is how far you can move in a single round of combat without using a dash action.</span>
            </div>
            </p>
            <p><b>Darkvision:</b> Due to your infernal heritage, you have superior vision in the dark and dim conditions.  You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.  You can't discern color in darkness, only shades of gray.</p>
            <p><b>Hellish Resistance:</b> You have resistance to fire damage. </p>
            <p><b>Infernal Legacy:</b> You know the  
            <div class="tooltip">&nbsp;Thaumaturgy
                <span class="tooltiptext">You manifest a minor wonder, a sign of supernatural power, within a 30 ft range, such as causing flames to flick or change color, throw open unlocked doors and windows, change your eye color. See your character summary for additional details.</span>
            </div> 
            <div class="tooltip">&nbsp;Cantrip
                <span class="tooltiptext">A cantrip is a spell that can be cast at will, without using a spell slot and without being prepared in advance. Repeated practice has fixed the spell in the caster's mind and infused the caster with the magic needed to produce the effect over and over. A cantrip's spell level is 0.</span>
            </div> 
            . When you reach 3rd level, you can cast the 
            <div class="tooltip">&nbsp;Hellish Rebuke&nbsp;
                <span class="tooltiptext">You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one.</span>
            </div> 
            spell as a 
            <div class="tooltip">&nbsp;2nd-level&nbsp;
                <span class="tooltiptext">Spells are classified by level (not the same as your character level) between 0 and 9, and characters have a limited number of spellcastings for each level between rests.</span>
            </div> 
            spell once with this trait and regain the ability to do so when you finish a 
            <div class="tooltip">&nbsp;long&nbsp;
                <span class="tooltiptext">A long rest is 8 hours of sleep. You regain all health and spells.</span>
            </div> 
            rest. When you reach 5th level, you can cast the 
            <div class="tooltip">&nbsp;Darkness&nbsp;
                <span class="tooltiptext">Magical darkness spreads from a point you choose within range to fill a 15-foot-radius sphere for the duration. The darkness spreads around corners. A creature with darkvision can't see through this darkness, and nonmagical light can't illuminate it.</span>
            </div> 
            spell once with this trait and regain the ability to do so when you finish a 
            <div class="tooltip">&nbsp;long&nbsp;
                <span class="tooltiptext">A long rest is 8 hours of sleep. You regain all health and spells.</span>
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