import React from 'react'
import Picture from '../pics/halforc.png'
import {Constitution, Strength} from '../keywords/AbilityScores';
import { LongRest, Proficiency, Speed } from '../keywords/Words';

function HalfOrcRace() {
    return (
        <div>
        <p>Whether united under the leadership of a mighty warlock or having fought to a standstill after years of conflict, orc and human communities, sometimes form alliances. When these alliances are sealed by marriages, half-orcs are born. Some half-orcs rise to become proud leaders of orc communities. Some venture into the world to prove their worth. Many of these become adventurers, achieving greatness for their mighty deeds.</p>
        <h2>Half-Orc Traits</h2>
        <img className="raceImg" src={Picture} alt="HalfOrc"/>

            <p>Your half-orc character has certain traits deriving from your orc ancestry.</p>
            <p><b>Ability Score Increase:</b> Your 
            <div class="tooltip">&nbsp;Strength&nbsp;
                <span class="tooltiptext"><Strength/></span>
            </div> 
            score increases by 2, and your
            <div class="tooltip">&nbsp;Constitution&nbsp;
                <span class="tooltiptext"><Constitution/></span>
            </div>
            score increases by 1. </p>
            <p><b>Age:</b> Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.</p>
            <p><b>Size:</b> Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.</p>
            <p><b>Speed:</b> Your base walking speed is 
            <div class="tooltip">&nbsp;30 feet.
                <span class="tooltiptext"><Speed/></span>
            </div>
            </p>
            <p><b>Darkvision:</b> Thanks to your orc blood, you have superior vision in the dark and dim conditions.  You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.  You can't discern color in darkness, only shades of gray.</p>
            <p><b>Menacing:</b> You gain 
            <div class="tooltip">&nbsp;proficiency&nbsp;
                <span class="tooltiptext"><Proficiency/></span>
            </div>  
            in the Intimidation skill.</p>
            <p><b>Relentless Endurance:</b> When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a 
            <div class="tooltip">&nbsp;long&nbsp;
                <span class="tooltiptext"><LongRest/></span>
            </div> 
            rest.</p>
            <p><b>Savage Attacks:</b>  When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit. </p>

            <p><b>Languages:</b>You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.</p>
        
        </div>
    )        
}

export default HalfOrcRace;