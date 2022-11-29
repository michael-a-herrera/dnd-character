import React from 'react'
import Picture from '../pics/halfelf.png'
import {Charisma} from '../keywords/AbilityScores';

function HalfElfRace() {
    return (
        <div>
            <p>Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves. Some half-elves live among humans, set apart by their emotional and physical differences, watching friends and loved ones age while time barely touches them. Others live with the elves, growing restless as they reach adulthood in the timeless elven realms, while their peers continue to live as children. Many half-elves, unable to fit into either society, choose lives of solitary wandering or join with other misfits and outcasts in the adventuring life.</p>
            <h2>Half-Elf Traits</h2>
            <img className="raceImg" src={Picture} alt="HalfElf"/>

            <p>Your half-elf character has some qualities in common with elves and some that are unique to half-elves.</p>
            <p><b>Ability Score Increase:</b> Your 
            <div class="tooltip">&nbsp;Charisma&nbsp;
                <span class="tooltiptext"><Charisma/></span>
            </div>   
            score increases by 2, and two other ability scores of your choice increase by 1.</p>
            <p><b>Age:</b> Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.</p>
            <p><b>Size:</b> Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.</p>
            <p><b>Speed:</b> Your base walking speed is 
            <div class="tooltip">&nbsp;30 feet.
                <span class="tooltiptext">This is how far you can move in a single round of combat without using a dash action.</span>
            </div>
            </p>
            <p><b>Darkvision:</b> Thanks to your elf blood, you have superior vision in the dark and dim conditions.  You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.  You can't discern color in darkness, only shades of gray.</p>
            <p><b>Fey Ancestry:</b> You have 
            <div class="tooltip">&nbsp;advantage&nbsp;
                <span class="tooltiptext">Advantage means you can make a roll twice and take the higher of the two rolls, increasing your chance for success or a critical roll.</span>
            </div>            
            on saving throws against being charmed, and magic can't put you to sleep.</p>
            <p><b>Skill Versatility:</b> You gain 
            <div class="tooltip">&nbsp;proficiency&nbsp;
                <span class="tooltiptext">A bonus that you can add to a roll to increase your chance of success, due to your "proficiency" in the skill.</span>
            </div>  
            in two skills of your choice. </p>
            <p><b>Languages:</b>You can speak, read, and write Common, Elvish, and one extra language of your choice.</p>
        
        </div>
    )        


}


export default HalfElfRace;