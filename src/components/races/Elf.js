import React from 'react'
import Picture from '../pics/elf.png'
import {useState} from 'react';
import {Charisma, Constitution, Dexterity, Intelligence, Wisdom} from '../keywords/AbilityScores';
import {Light,Invisibility,Sleep,FaerieFire,DancingLights,Darkness} from '../keywords/Spells';

function ElfRace() {

    const [buttons, setButtons] = useState([
        {class: "buttonsubrace", label: "High Elf", value: false },
        {class: "buttonsubrace", label: "Wood Elf", value: false },
        {class: "buttonsubrace", label: "Drow", value: false },
        {class: "buttonsubrace", label: "Palid Elf", value: false },
        {class: "buttonsubrace", label: "Sea Elf", value: false }



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
                    <button class={`${button.class}`}
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
            <p>Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.
            They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrencies on the breeze.
            Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.</p>
            <h2>Elf Traits</h2>
            <img class="raceImg" src={Picture} alt="Elf"/>

            Your elf character has a variety of natural abilities, the result of thousands of years of elven refinement.
            
            <p> Choose a subrace for additional traits, appended at the bottom of the list:</p>
            <Specialbuton {...{buttons,setButtons,handleButtonsChange}} />
            {buttons[0].value && <div><p>As a high elf, you have a keen mind and a master of at least the basics of magic. </p></div>}
            {buttons[1].value && <div><p>As a wood elf, you have keen senses and intuition, and your fleet of foot carry you quickly and stealthily through your native forests.</p></div>}
            {buttons[2].value && <div><p>As a drow, you are infused with the magic of the Underdark. The drow that live on the surface escaped the shackles of the betrayer god Lolth, finding a new diety of light and moving to the surface.  </p></div>}
            {buttons[3].value && <div><p>The pallid elves are a mystical and insightful people with skin as pale as Exandria's largest moon. They emerged from the Pallid Grove this century and wander the world with childlike curiosity.</p></div>}
            {buttons[4].value && <div><p>Sea Elves are a reclusive and deeply territorial people who have as much in common with merfolk as they do with other elves.</p></div>}

            
            <p><b>Ability Score Increase:</b> Your 
            <div class="tooltip">&nbsp;Dexterity&nbsp;
                <span class="tooltiptext"><Dexterity/></span>
            </div>
            score increases by 2.</p>
            <p><b>Age:</b> Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass experience.  An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.</p>
            <p><b>Size:</b> Elves range from under 5 to over 6 feet tall and have slender builds.  Your size is medium.</p>
            <p><b>Speed:</b> Your base walking speed is 
            <div class="tooltip">&nbsp;30 feet.
                <span class="tooltiptext">This is how far you can move in a single round of combat without using a dash action.</span>
            </div>
            </p>
            <p><b>Darkvision:</b> Accustomed to twilit forests and the night sky, you have superior vision in the dark and dim conditions.  You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.  You can't discern color in darkness, only shades of gray.</p>
            <p><b>Keen Senses:</b> You have 
            <div class="tooltip">&nbsp;proficiency&nbsp;
                <span class="tooltiptext">A bonus that you can add to a roll to increase your chance of success, due to your "proficiency" in the skill.</span>
            </div>  
            in the Perception skill.</p>
            <p><b>Fey Ancestry:</b> You have 
            <div class="tooltip">&nbsp;advantage&nbsp;
                <span class="tooltiptext">Advantage means you can make a roll twice and take the higher of the two rolls, increasing your chance for success or a critical roll.</span>
            </div>            
            on saving throws against being charmed, and magic can't put you to sleep.</p>
            <p><b>Trance:</b>Elves don't need to sleep. Instead they meditate deeply, remaining semiconscious, for 4 hours a day gaining the same benefit that a human does after 8 hours of sleep.</p>
            <p><b>Languages:</b>You can speak, read, and write Common and Elvish.  Elvish is fluid, with subtle intonations and intricate grammer.</p>
        
            {buttons[0].value && <div>
                <h2>Additional High Elf Traits</h2>
                <p><b>Ability Score Increase:</b> Your
                <div class="tooltip">&nbsp;Intelligence&nbsp;
                    <span class="tooltiptext"><Intelligence/></span>
                </div>
                score increases by 1.</p>
                <p><b>Elf Weapon Training:</b> You have 
                <div class="tooltip">&nbsp;proficiency&nbsp;
                    <span class="tooltiptext">A bonus that you can add to a roll to increase your chance of success, due to your "proficiency" in the skill.</span>
                </div> 
                with the longsword, shortsword, shortbow, and longbow.</p>
                <p><b>Cantrip:</b> You know one 
                <div class="tooltip">&nbsp;cantrip&nbsp;
                    <span class="tooltiptext">A cantrip is a spell that can be cast at will, without using a spell slot and without being prepared in advance. Repeated practice has fixed the spell in the caster's mind and infused the caster with the magic needed to produce the effect over and over. A cantrip's spell level is 0.</span>
                </div> 
                of your choice from the wizard spell list. 
                <div class="tooltip">&nbsp;Intelligence&nbsp;
                    <span class="tooltiptext"><Intelligence/></span>
                </div> 
                is your spellcasting ability for it.</p> 
                <p><b>Extra Language:</b>You can speak, read, and write one extra language of your choice.</p>
            </div>}

            {buttons[1].value && <div>
                <h2>Additional Wood Elf Traits</h2>
                <p><b>Ability Score Increase:</b> Your
                <div class="tooltip">&nbsp;Wisdom&nbsp;
                    <span class="tooltiptext"><Wisdom/></span>
                </div>
                score increases by 1.</p>
                <p><b>Elf Weapon Training:</b> You have 
                <div class="tooltip">&nbsp;proficiency&nbsp;
                    <span class="tooltiptext">A bonus that you can add to a roll to increase your chance of success, due to your "proficiency" in the skill.</span>
                </div> 
                with the longsword, shortsword, shortbow, and longbow.</p>
                <p><b>Fleet of Foot:</b> Your base walking speed increases to 35 feet.</p>
                <p><b>Mask of the Wild:</b> You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomenom.</p>
            </div>}

            {buttons[2].value && <div>
                <h2>Additional Drow Traits</h2>
                <p><b>Ability Score Increase:</b> Your
                <div class="tooltip">&nbsp;Charisma&nbsp;
                    <span class="tooltiptext"><Charisma/></span>
                </div>  
                score increases by 1.</p>
                <p><b>Superior Darkvision:</b> Your darkvision has a radius of 120 feet. </p>
                <p><b>Drow Weapon Training:</b> You have 
                <div class="tooltip">&nbsp;proficiency&nbsp;
                    <span class="tooltiptext">A bonus that you can add to a roll to increase your chance of success, due to your "proficiency" in the skill.</span>
                </div> 
                with rapiers, shortswords, and hand crossbows.</p>
                <p><b>Drow Magic:</b> You know the 
                <div class="tooltip_spell">&nbsp;dancing lights
                    <span class="tooltipspelltext"><DancingLights/></span>
                </div> 
                <div class="tooltip">&nbsp;cantrip
                    <span class="tooltiptext">A cantrip is a spell that can be cast at will, without using a spell slot and without being prepared in advance. Repeated practice has fixed the spell in the caster's mind and infused the caster with the magic needed to produce the effect over and over. A cantrip's spell level is 0.</span>
                </div> 
                . When you reach 3rd level, you can cast the 
                <div class="tooltip_spell">&nbsp;faerie fire&nbsp;
                    <span class="tooltipspelltext"><FaerieFire/></span>
                </div> 
                spell once with this trait. When you reach 5th level, you can cast the 
                <div class="tooltip_spell">&nbsp;darkness&nbsp;
                    <span class="tooltipspelltext"><Darkness/></span>
                </div> 
                spell once with this trait. You regain the ability to cast these spells (cantrips can be used as many times as you want) when you finish a  
                <div class="tooltip">&nbsp;long&nbsp;
                    <span class="tooltiptext">A long rest is 8 hours of sleep. You regain all health and spells.</span>
                </div> 
                rest. 
                <div class="tooltip">&nbsp;Charisma&nbsp;
                    <span class="tooltiptext"><Charisma/></span>
                </div>  
                is your spellcasting ability for these spells.</p>
            </div>}

            {buttons[3].value && <div>
                <h2>Additional Pallid Elf Traits</h2>
                <p><b>Ability Score Increase:</b> Your
                <div class="tooltip">&nbsp;Wisdom&nbsp;
                    <span class="tooltiptext"><Wisdom/></span>
                </div>
                score increases by 1.</p>
                <p><b>Incisive Sense:</b> You have 
                <div class="tooltip">&nbsp;advantage&nbsp;
                    <span class="tooltiptext">Advantage means you can make a roll twice and take the higher of the two rolls, increasing your chance for success or a critical roll.</span>
                </div>           
                on Investigation and Insight checks. </p>
                <p><b>Blessing of the Moon Weaver:</b> You know the  
                <div class="tooltip_spell">&nbsp;light
                    <span class="tooltipspelltext"><Light/></span>
                </div> 
                <div class="tooltip">&nbsp;cantrip
                    <span class="tooltiptext">A cantrip is a spell that can be cast at will, without using a spell slot and without being prepared in advance. Repeated practice has fixed the spell in the caster's mind and infused the caster with the magic needed to produce the effect over and over. A cantrip's spell level is 0.</span>
                </div> 
                . When you reach 3rd level, you can cast the 
                <div class="tooltip_spell">&nbsp;sleep&nbsp;
                    <span class="tooltipspelltext"><Sleep/></span>
                </div> 
                spell once with this trait. When you reach 5th level, you can cast the 
                <div class="tooltip_spell">&nbsp;invisibility&nbsp;
                    <span class="tooltipspelltext"><Invisibility/></span>
                </div> 
                spell once with this trait. You regain the ability to cast these spells (cantrips can be used as many times as you want) when you finish a  
                <div class="tooltip">&nbsp;long&nbsp;
                    <span class="tooltiptext">A long rest is 8 hours of sleep. You regain all health and spells.</span>
                </div> 
                rest. Casting these spells with this trait doesn't require 
                <div class="tooltip">&nbsp;material components
                    <span class="tooltiptext">Some spells require material components to cast. Some components are cheap and widely available, while others, usually used in powerful spells, can cost thousands of gold or require hard to obtain materials.</span>
                </div> 
                . 
                <div class="tooltip">&nbsp;Wisdom&nbsp;
                    <span class="tooltiptext"><Wisdom/></span>
                </div>
                is your spellcasting ability for these spells.</p>
            </div>}

            {buttons[4].value && <div>
                <h2>Additional Sea Elf Traits</h2>
                <p><b>Ability Score Increase:</b> Your
                <div class="tooltip">&nbsp;Constitution&nbsp;
                    <span class="tooltiptext"><Constitution/></span>
                </div>
                score increases by 1.</p>
                <p><b> Sea Elf Training:</b> You have 
                <div class="tooltip">&nbsp;proficiency&nbsp;
                    <span class="tooltiptext">A bonus that you can add to a roll to increase your chance of success, due to your "proficiency" in the skill.</span>
                </div> 
                with the spear, trident, light crossbow, and net. </p>
                <p><b>Child of the Sea:</b> You have a swimming speed of 30 feet, and you can breathe air and water. </p> 
                <p><b>Friend of the Sea:</b> Using gestures and sounds, you can communicate simple ideas with any beast that has an innate swimming speed.</p> 
                <p><b>Languages:</b>You can speak, read, and write Aquan.</p>
            </div>}
            
        </div>
    )        


}


export default ElfRace;