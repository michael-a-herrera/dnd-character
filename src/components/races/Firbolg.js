import React from 'react'
import Picture from '../pics/firbolg.png'
import {Charisma, Strength, Wisdom} from '../keywords/AbilityScores';
import { Advantage, BonusAction, LongRest, ShortRest, Speed } from '../keywords/Words';
import { DetectMagic, DisguiseSelf } from '../keywords/Spells_D';

function FirbolgRace() {
    return (
        <div>
        <p>Firbolgs are a forest dwelling race whose bodies are covered with thick fur ranging from tones of earthen brown and ruddy red to cool grays and blues, and even to wild hues of pink and green.  Most firbolgs live in extended family units and it's unusual to find one living alone. However, they are introverted to the point where they seldom engage with other firbolgs outside the family unit. Many firbolgs still enjoy visiting other nations' settlements for a short time for trade, sightseeing, and to visit friends.</p>
        <h2>Firbolg Traits</h2>
        <img className="raceImg" src={Picture} alt="Firbolg"/>

            <p>A Firbolg character had the following racial traits.</p>
            <p><b>Ability Score Increase:</b> Your 
            <div class="tooltip">&nbsp;Wisdom
                <span class="tooltiptext"><Wisdom/></span>
            </div>
            score increases by 2, and your
            <div class="tooltip">&nbsp;Strength&nbsp;
                <span class="tooltiptext"><Strength/></span>
            </div> 
            score increases by 1. </p>
            <p><b>Age:</b> As humanoids related to fey, firbolgs have long lifespans. A firbolg reaches adulthood around 30, and the oldest of them can live for 500 years.</p>
            <p><b>Size:</b> Firbolg stand between 7 and 8 feet tall and weight between 240 and 300 pounds. Your size is Medium.</p>
            <p><b>Speed:</b> Your base walking speed is 
            <div class="tooltip">&nbsp;30 feet.
                <span class="tooltiptext"><Speed/></span>
            </div>
            </p>
            <p><b>Firbolg Magic:</b> You can cast 
            <div class="tooltip_spell">&nbsp;Detect Magic&nbsp;
                <span class="tooltipspelltext"><DetectMagic/></span>
            </div> 
            and 
            <div class="tooltip_spell">&nbsp;Disguise Self&nbsp;
                <span class="tooltipspelltext"><DisguiseSelf/></span>
            </div> 
            with this trait, using 
            <div class="tooltip">&nbsp;Wisdom&nbsp;
                <span class="tooltiptext"><Wisdom/></span>
            </div>
            as your spellcasting ability for them. Once you cast either spell, you can't cast it again with this trait until you finish a 
            <div class="tooltip">&nbsp;short&nbsp;
                <span class="tooltiptext"><ShortRest/></span>
            </div> 
            or 
            <div class="tooltip">&nbsp;long&nbsp;
                <span class="tooltiptext"><LongRest/></span>
            </div> 
            rest. When you use this version of 
            <div class="tooltip_spell">&nbsp;Disguise Self&nbsp;
                <span class="tooltipspelltext"><DisguiseSelf/></span>
            </div> 
            you can seem up to 3 feet shorter than normal, allowing you to more easily blend in with humans and elves.</p>
            <p><b>Hidden Step:</b> As a 
            <div class="tooltip">&nbsp;bonus action&nbsp;
                <span class="tooltiptext"><BonusAction/></span>
            </div> 
            you can magically turn invisible until the start of your next turn or until you attack, make a damage roll, or force someone to make a saving throw. Once you use this trait, you can't use it again until a 
            <div class="tooltip">&nbsp;short&nbsp;
                <span class="tooltiptext"><ShortRest/></span>
            </div> 
            or 
            <div class="tooltip">&nbsp;long&nbsp;
                <span class="tooltiptext"><LongRest/></span>
            </div> 
            rest.</p>
            <p><b>Powerful Build:</b>You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.</p>
            <p><b>Speech of Beast and Leaf:</b>You have the ability to communicate in a limited manner with beasts and plants.  They can understand the meaning of your words, though you have no special ability to understand them in return. You have 
            <div class="tooltip">&nbsp;advantage&nbsp;
                <span class="tooltiptext"><Advantage/></span>
            </div>   
            on all 
            <div class="tooltip">&nbsp;Charisma&nbsp;
                <span class="tooltiptext"><Charisma/></span>
            </div>  
            checks you make to influence them.</p>
            <p><b>Languages:</b>You can speak, read, and write Common, Elvish, and Giant.</p>
        
        </div>
    )        
}

export default FirbolgRace;