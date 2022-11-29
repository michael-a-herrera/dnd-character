import React from 'react'
import Picture from '../pics/goliath.png'
import {Constitution, Strength} from '../keywords/AbilityScores';
import { D12, LongRest, Proficiency, Reaction, ShortRest, Speed } from '../keywords/Words';

function GoliathRace() {
    return (
        <div>
        <p>The goliaths are a mighty people with stone giant blood running through their veins.  Most stand well over 7 feet tall and are blessed with naturally powerful physique.  Goliaths tend to have a strong drive to compete and win, counting their deeds and tallying their accomplishments to compare to others. While they love to win, they see defeat as a prod to improve their skills. Few goliaths reach old age, as most die attempting to surpass thier past achievements. Among goliaths, any adult who can't or won't contribute to the clan is expelled.</p>
        <h2>Goliath Traits</h2>
        <img className="raceImg" src={Picture} alt="Goliath"/>

            <p>Goliaths share a number of traits in common with each other.</p>
            <p><b>Ability Score Increase:</b> Your 
            <div class="tooltip">&nbsp;Strength&nbsp;
                <span class="tooltiptext"><Strength/></span>
            </div> 
            score increases by 2, and your
            <div class="tooltip">&nbsp;Constitution&nbsp;
                <span class="tooltiptext"><Constitution/></span>
            </div>
            score increases by 1. </p>
            <p><b>Age:</b>Goliaths have lifespans comparable to humans.</p>
            <p><b>Size:</b> Goliaths stand between 7 and 8 feet tall and weight between 280 and 340 pounds. Your size is Medium.</p>
            <p><b>Speed:</b> Your base walking speed is 
            <div class="tooltip">&nbsp;30 feet.
                <span class="tooltiptext"><Speed/></span>
            </div>
            </p>
            <p><b>Natural Athlete:</b> You have 
            <div class="tooltip">&nbsp;proficiency&nbsp;
                <span class="tooltiptext"><Proficiency/></span>
            </div>  
            in the Athletics skill.</p>
            <p><b>Stone's Endurance:</b> You can focus yourself to occasionally shrug off injury. When you take damage, you can use your
            <div class="tooltip">&nbsp;reaction&nbsp;
                <span class="tooltiptext"><Reaction/></span>
            </div>  
            to roll a 
            <div class="tooltip">&nbsp;d12
                <span class="tooltiptext"><D12/></span>
            </div>
            . Add your 
            <div class="tooltip">&nbsp;Constitution&nbsp;
                <span class="tooltiptext"><Constitution/></span>
            </div>
            modifier to the number rolled, and reduce the damage by that total. After you use this trait, you can't use it again until you finish a 
            <div class="tooltip">&nbsp;short&nbsp;
                <span class="tooltiptext"><ShortRest/></span>
            </div> 
            or 
            <div class="tooltip">&nbsp;long&nbsp;
                <span class="tooltiptext"><LongRest/></span>
            </div> 
            rest.</p>
            <p><b>Powerful Build:</b>You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.</p>
            <p><b>Mountain Born:</b>You're acclimated to high altitude, including elevations above 20,000 feet. You're also naturally adapted to cold climates.</p>
            <p><b>Languages:</b>You can speak, read, and write Common and Giant.</p>
        
        </div>
    )        


}


export default GoliathRace;