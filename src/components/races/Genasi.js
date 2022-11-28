import React from 'react'
import Picture from '../pics/genasi.png'
import {useState} from 'react';
import {Constitution, Dexterity, Intelligence, Strength, Wisdom} from '../keywords/AbilityScores';

function GenasiRace() {

    const [buttons, setButtons] = useState([
        { class:"buttonsubrace", label: "Air Genasi", value: false },
        { class:"buttonsubrace", label: "Earth Genasi", value: false },
        { class:"buttonsubrace", label: "Fire Genasi", value: false },
        { class:"buttonsubrace", label: "Water Genasi", value: false }
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
        <p>Genasi are exceedingly rare as befits their unique origins.  They are often created as the result of a powerful elemental influence at the moment of their birth. A baby born within the eye of a hurricane might become an air genasi, while a fire genasi might be born in the midst of a raging forest fire.</p>
        <h2>Genasi Traits</h2>
        <img class="raceImg2" src={Picture} alt="Genasi"/>

            <p>A genasi character has the following racial traits. Choose a subrace for additional benefits.</p>

            <p> Choose a subrace for additional traits, appended at the bottom of the list:</p>
            <Specialbuton {...{buttons,setButtons,handleButtonsChange}} />
            {buttons[0].value && <div><p>As an air genasi, you are descended from the djinn. As changeable as the weather, your moods shift from calm to wild and violent with little warning, but these storms rarely last long. Air genasi typically have light blue skin, hair, and eyes. A faint but constant breeze accompanies they, tousling the hair and stirring the clothing. </p></div>}
            {buttons[1].value && <div><p>As an earth genasi, you are descended from the curel and greedy dao, though you aren't necessarily evil. You have inherited some measure of control over earth, reveling in superior stength and solid power. Some earth genasi always have bits of dust falling from their bodies and mud clinging to their clothes. Others are as shiny and polished as gemstones, with skin tones of deep brown or black, eyes sparkling like agates.</p></div>}
            {buttons[2].value && <div><p>As a fire genasi, you have inherited the volatile mood and keen mind of the efreet. You tend towards impatience and making snap judgements. Rather than hide your distinctive appearance, you exult in it. Nearly all fire genasi are feverishly hot as if burning inside, an impression reinforced by flaming red, coal black, or ash-grey skin tones. Some rare fire genasi spot actual flames dancing on their heads.</p></div>}
            {buttons[3].value && <div><p>As a water genasi, you are descended from the turbulent marids. You wander freely and take pride in your independence, though others might consider you sselfish. Most water genasi look as if they just finished bathing and smell of fresh rain and clean water. Blue and green skin is common and their hair might float freely, swaying and waving as if underwater.</p></div>}

            <p><b>Ability Score Increase:</b> Your 
            <div class="tooltip">&nbsp;Constitution&nbsp;
                <span class="tooltiptext"><Constitution/></span>
            </div>
            score increases by 2.</p>
            <p><b>Age:</b> Genasi mature at about the same rate as humans and reach adulthood in their late teens. They live somewhat longer than humans do, up to 120 years.</p>
            <p><b>Size:</b> Genasi are as varied as their mortal parents but are generally built like humans. Your size is Medium.</p>
            <p><b>Speed:</b> Your base walking speed is 
            <div class="tooltip">&nbsp;30 feet.
                <span class="tooltiptext">This is how far you can move in a single round of combat without using a dash action.</span>
            </div>
            </p>
            
            <p><b>Languages:</b>You can speak, read, and write Common and Primordial. Primordial is a guttural language, filled with harsh syllables and hard consonants.</p>
            
            {buttons[0].value && <div>
                <h2> Additional Air Genasi Traits</h2>
                <p><b>Ability Score Increase:</b> Your
                <div class="tooltip">&nbsp;Dexterity&nbsp;
                    <span class="tooltiptext"><Dexterity/></span>
                </div>
                score increases by 1.</p>
                <p><b>Unending Breath:</b> You can hold your breath indefinitely while you're not incapacitated.</p>
                <p><b>Mingle with the Wind:</b> You can cast the 
                <div class="tooltip">&nbsp;levitate&nbsp;
                    <span class="tooltiptext">One creature or loose object of your choice that you can see within range rises vertically, up to 20 feet, and remains suspended there for the duration. The spell can levitate a target that weighs up to 500 pounds. An unwilling creature that succeeds on a Constitution saving throw is unaffected.</span>
                </div>
                spell once with this trait, requiring no 
                <div class="tooltip">&nbsp;material components
                    <span class="tooltiptext">Some spells require material components to cast. Some components are cheap and widely available, while others, usually used in powerful spells, can cost thousands of gold or require hard to obtain materials.</span>
                </div> 
                , and you regain the ability to cast it this way when you finish a 
                <div class="tooltip">&nbsp;long&nbsp;
                    <span class="tooltiptext">A long rest is 8 hours of sleep. You regain all health and spells.</span>
                </div> 
                rest.
                <div class="tooltip">&nbsp;Constitution&nbsp;
                    <span class="tooltiptext"><Constitution/></span>
                </div>
                is the spellcasting ability for this spell.</p>
            </div>}

            {buttons[1].value && <div>
                <h2> Additional Earth Genasi Traits</h2>
                <p><b>Ability Score Increase:</b> Your
                <div class="tooltip">&nbsp;Strength&nbsp;
                    <span class="tooltiptext"><Strength/></span>
                </div> 
                score increases by 1.</p>
                <p><b>Earth Walk:</b> You can move across difficult terrain made of earth and stone without expending extra movement. </p>
                <p><b>Path without Trace:</b>You can cast the
                <div class="tooltip">&nbsp;pass without trace&nbsp;
                    <span class="tooltiptext">A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Stealth checks and can't be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage.</span>
                </div>
                spell once with this trait, requiring no 
                <div class="tooltip">&nbsp;material components
                    <span class="tooltiptext">Some spells require material components to cast. Some components are cheap and widely available, while others, usually used in powerful spells, can cost thousands of gold or require hard to obtain materials.</span>
                </div> 
                , and you regain the ability to cast it this way when you finish a 
                <div class="tooltip">&nbsp;long&nbsp;
                    <span class="tooltiptext">A long rest is 8 hours of sleep. You regain all health and spells.</span>
                </div> 
                rest.
                <div class="tooltip">&nbsp;Constitution&nbsp;
                    <span class="tooltiptext"><Constitution/></span>
                </div>
                is the spellcasting ability for this spell.</p>
            </div>}
            {buttons[2].value && <div>
                <h2> Additional Fire Genasi Traits</h2>
                <p><b>Ability Score Increase:</b> Your
                <div class="tooltip">&nbsp;Intelligence&nbsp;
                    <span class="tooltiptext"><Intelligence/></span>
                </div> 
                score increases by 1.</p>
                <p><b>Darkvision:</b> You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.  Your ties to the Elemental Plane of Fire make your darkvision unusual: everything you see in darkness is a shade of red.</p>
                <p><b>Fire Resistance:</b> You have resistance to fire damage.</p>
                <p><b>Reach to the Blaze:</b> You know the 
                <div class="tooltip">&nbsp;produce flame
                    <span class="tooltiptext">A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again. Can also be thrown to cause damage.</span>
                </div> 
                <div class="tooltip">&nbsp;cantrip
                    <span class="tooltiptext">A cantrip is a spell that can be cast at will, without using a spell slot and without being prepared in advance. Repeated practice has fixed the spell in the caster's mind and infused the caster with the magic needed to produce the effect over and over. A cantrip's spell level is 0.</span>
                </div> 
                . When you reach 3rd level, you can cast
                <div class="tooltip">&nbsp;burning hands&nbsp;
                    <span class="tooltiptext">As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.</span>
                </div> 
                as a 1st-level spell once with this trait, and you regain the ability to cast it this way when you finish a 
                <div class="tooltip">&nbsp;long&nbsp;
                    <span class="tooltiptext">A long rest is 8 hours of sleep. You regain all health and spells.</span>
                </div> 
                rest.
                <div class="tooltip">&nbsp;Constitution&nbsp;
                    <span class="tooltiptext"><Constitution/></span>
                </div>
                is the spellcasting ability for this spell.</p>
            </div>}
            {buttons[3].value && <div>
                <h2> Additional Water Genasi Traits</h2>
                <p><b>Ability Score Increase:</b> Your
                <div class="tooltip">&nbsp;Wisdom&nbsp;
                    <span class="tooltiptext"><Wisdom/></span>
                </div>
                score increases by 1.</p>
                <p><b>Acid Resistance:</b> You have resistance to acid damage.</p>
                <p><b>Amphibious:</b> You can breathe air and water.</p>
                <p><b>Swim:</b> You have a swimming speed of 30 feet.</p>
                <p><b>Call to the Wave:</b> You know the 
                <div class="tooltip">&nbsp;shape water
                    <span class="tooltiptext">You manipulate an area of water that you can see within range that fits within a 5 foot cube. </span>
                </div> 
                <div class="tooltip">&nbsp;cantrip
                    <span class="tooltiptext">A cantrip is a spell that can be cast at will, without using a spell slot and without being prepared in advance. Repeated practice has fixed the spell in the caster's mind and infused the caster with the magic needed to produce the effect over and over. A cantrip's spell level is 0.</span>
                </div> 
                . When you reach 3rd level, you can cast
                <div class="tooltip">&nbsp;create or destroy water&nbsp;
                    <span class="tooltiptext">You can create or destroy up to 10 gallons of water.</span>
                </div> 
                as a 2nd-level spell once with this trait, and you regain the ability to cast it this way when you finish a 
                <div class="tooltip">&nbsp;long&nbsp;
                    <span class="tooltiptext">A long rest is 8 hours of sleep. You regain all health and spells.</span>
                </div> 
                rest.
                <div class="tooltip">&nbsp;Constitution&nbsp;
                    <span class="tooltiptext"><Constitution/></span>
                </div>
                is the spellcasting ability for this spell.</p>
            
            </div>}

        </div>
    )        


}


export default GenasiRace;