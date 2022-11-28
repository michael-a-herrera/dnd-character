import React from 'react'
import Picture from '../pics/human.png'

function HumanRace() {
    return (
        <div>
            <p>In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that’s why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.</p>
            <h2>Human Traits</h2>
            <img class="raceImg" src={Picture} alt="Human"/>

            <p>It's hard to make generalizations about humans, but your human character has these traits.</p>
            <p><b>Ability Score Increase:</b> Your ability scores each increase by 1.</p>
            <p><b>Age:</b>Humans reach adulthood in their late teens and live less than a century.</p>
            <p><b>Size:</b> Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.</p>
            <p><b>Speed:</b> Your base walking speed is 
            <div class="tooltip">&nbsp;30 feet.
                <span class="tooltiptext">This is how far you can move in a single round of combat without using a dash action.</span>
            </div>
            </p>
            <p><b>Languages:</b>You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.</p>
        
        </div>
    )        


}


export default HumanRace;