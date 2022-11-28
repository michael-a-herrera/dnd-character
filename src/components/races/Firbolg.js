import React from 'react'
import Picture from '../pics/firbolg.png'
import {Charisma, Strength, Wisdom} from '../keywords/AbilityScores';

function FirbolgRace() {
    return (
        <div>
        <p>Firbolgs are a forest dwelling race whose bodies are covered with thick fur ranging from tones of earthen brown and ruddy red to cool grays and blues, and even to wild hues of pink and green.  Most firbolgs live in extended family units and it's unusual to find one living alone. However, they are introverted to the point where they seldom engage with other firbolgs outside the family unit. Many firbolgs still enjoy visiting other nations' settlements for a short time for trade, sightseeing, and to visit friends.</p>
        <h2>Firbolg Traits</h2>
        <img class="raceImg" src={Picture} alt="Firbolg"/>

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
                <span class="tooltiptext">This is how far you can move in a single round of combat without using a dash action.</span>
            </div>
            </p>
            <p><b>Firbolg Magic:</b> You can cast 
            <div class="tooltip">&nbsp;Detect Magic&nbsp;
                <span class="tooltiptext">For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.</span>
            </div> 
            and 
            <div class="tooltip">&nbsp;Disguise Self&nbsp;
                <span class="tooltiptext">You make yourself (including your clothing, armor, weapons, and other belongings on your person) look different until the spell ends. You can appear thin, fat, or in between. You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.</span>
            </div> 
            with this trait, using 
            <div class="tooltip">&nbsp;Wisdom&nbsp;
                <span class="tooltiptext"><Wisdom/></span>
            </div>
            as your spellcasting ability for them. Once you cast either spell, you can't cast it again with this trait until you finish a 
            <div class="tooltip">&nbsp;short&nbsp;
                <span class="tooltiptext">A short rest is 1 hour. You can regain some health if damaged, possibly regain some spells depending on race and class.</span>
            </div> 
            or 
            <div class="tooltip">&nbsp;long&nbsp;
                <span class="tooltiptext">A long rest is 8 hours of sleep. You regain all health and spells.</span>
            </div> 
            rest. When you use this version of 
            <div class="tooltip">&nbsp;Disguise Self&nbsp;
                <span class="tooltiptext">You make yourself (including your clothing, armor, weapons, and other belongings on your person) look different until the spell ends. You can appear thin, fat, or in between. You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.</span>
            </div> 
            you can seem up to 3 feet shorter than normal, allowing you to more easily blend in with humans and elves.</p>
            <p><b>Hidden Step:</b> As a 
            <div class="tooltip">&nbsp;bonus action&nbsp;
                <span class="tooltiptext">Relates to combat and what you can do on your turn. Each turn consists of movement, an action, and a bonus action if your race or class has bonus actions available to them.</span>
            </div> 
            you can magically turn invisible until the start of your next turn or until you attack, make a damage roll, or force someone to make a saving throw. Once you use this trait, you can't use it again until a 
            <div class="tooltip">&nbsp;short&nbsp;
                <span class="tooltiptext">A short rest is 1 hour. You can regain some health if damaged, possibly regain some spells depending on race and class.</span>
            </div> 
            or 
            <div class="tooltip">&nbsp;long&nbsp;
                <span class="tooltiptext">A long rest is 8 hours of sleep. You regain all health and spells.</span>
            </div> 
            rest.</p>
            <p><b>Powerful Build:</b>You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.</p>
            <p><b>Speech of Beast and Leaf:</b>You have the ability to communicate in a limited manner with beasts and plants.  They can understand the meaning of your words, though you have no special ability to understand them in return. You have 
            <div class="tooltip">&nbsp;advantage&nbsp;
                <span class="tooltiptext">Advantage means you can make a roll twice and take the higher of the two rolls, increasing your chance for success or a critical roll.</span>
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