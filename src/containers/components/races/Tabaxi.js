import React from 'react'
import Picture from '../pics/tabaxi.png'
import {Charisma, Dexterity} from '../keywords/AbilityScores';
import { OneD4, Proficiency, Speed, StrengthModifier } from '../keywords/Words';

function TabaxiRace() {
    return (
        <div>
        <p>The catlike tabaxi are an agile, witty, and playful folk, said to be born from the dreams of 
        <div class="tooltip">&nbsp;Melora
                <span class="tooltiptext">The Wild Mother, a god and keeper of the wilderness who represents the wild creatures of nature, the rush of angry rapids, and the heat-heavy stillness of the desert.</span>
        </div>  
        . Many are taken with a love of wordplay and debate, often engaging travelers in philosophical conversations meant to challenge the intellect and to subtly guage the disposition of strangers.</p>
        <h2>Tabaxi Traits</h2>
        <img className="raceImg" src={Picture} alt="Tabaxi"/>

            <p>Tabaxi share a number of traits in common with each other.</p>
            <p><b>Ability Score Increase:</b> Your 
            <div class="tooltip">&nbsp;Dexterity&nbsp;
                <span class="tooltiptext"><Dexterity/></span>
            </div>
            score increases by 2, and your
            <div class="tooltip">&nbsp;Charisma&nbsp;
                <span class="tooltiptext"><Charisma/></span>
            </div>  
            score increases by 1. </p>
            <p><b>Age:</b>Tabaxi have lifespans comparable to humans.</p>
            <p><b>Size:</b> Tabaxi are taller on average than humans and are relatively slender. Your size is Medium.</p>
            <p><b>Speed:</b> Your base walking speed is 
            <div class="tooltip">&nbsp;30 feet.
                <span class="tooltiptext"><Speed/></span>
            </div>
            </p>
            <p><b>Darkvision:</b> You have superior vision in the dark and dim conditions.  You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.  You can't discern color in darkness, only shades of gray.</p>
            <p><b>Feline Agility:</b> Your reflexes and agility allow you to move with a burst of speed.  When you move on your turn in combat, you can double your speed until the end of your turn. Once you use this trait, you can't use it again until you move 0 feet on one of your subsequent turns.</p>
            <p><b>Cat's Claws:</b>Because of your claws, you have a climbing speed of 20 feet. In addition, your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 
            <div class="tooltip">&nbsp;1d4&nbsp;
                <span class="tooltiptext"><OneD4/></span>
            </div>
            + your 
            <div class="tooltip">&nbsp;Strength modifier
                <span class="tooltiptext"><StrengthModifier/></span>
            </div>
            , instead of the bludgeoning damage normal for unarmed strikes.</p>
            <p><b>Cat's Talent:</b>You have  
            <div class="tooltip">&nbsp;proficiency&nbsp;
                <span class="tooltiptext"><Proficiency/></span>
            </div>  
            in the Perception and Stealth skills.</p>
            <p><b>Languages:</b>You can speak, read, and write Common and one other language of your choice.</p>
        
        </div>
    )        
}

export default TabaxiRace;