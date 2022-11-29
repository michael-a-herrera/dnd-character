import React from 'react'
import Picture from '../pics/halfling.png'
import {useState} from 'react';
import {Charisma, Constitution, Dexterity, Wisdom} from '../keywords/AbilityScores';
import { Advantage, Cantrip, D20, LongRest, Speed } from '../keywords/Words';
import { Druidcraft } from '../keywords/Spells_D';
import { Entangle } from '../keywords/Spells_E';
import { SpikeGrowth } from '../keywords/Spells_S';
import { connect } from "react-redux";
import { updateSubRace } from "../../../redux/actionCreators";

const mapStateToProps = state => {
    return {
      subrace: state.pc.subrace
    };
  };
  
  const mapDispatchToProps = dispatch => ({
    updateCharSubRace: (newsubrace) => dispatch(updateSubRace(newsubrace))
  });

const HalflingRace = props => {

    const [buttons, setButtons] = useState([
        {class: "buttonsubrace", label: "Lightfoot", value: false },
        {class: "buttonsubrace", label: "Stout", value: false },
        {class: "buttonsubrace", label: "Lotusden", value: false }
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
                    <button className={`${button.class}`}
                        key={`${button.label}-${index}`}
                        onClick={() => {
                            handleButtonsChange({ buttons, setButtons })(button.label);
                            props.updateCharSubRace(button.label);
                            }
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
            <p>The comforts of home are the goals of most halflings' lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies; a blazing fire and a generous meal; fine drink and fine conversation. Though some halflings live out their days in remote agricultural communities, others form nomadic bands that travel constantly, lured by the open road and the wide horizon to discover the wonders of new lands and peoples. But even these wanderers love peace, food, hearth, and home, though home might be a wagon jostling along a dirt road or a raft floating downriver.</p>
            <h2>Halfling Traits</h2>
            <img className="raceImg" src={Picture} alt="Halfling"/>

            <p>Your halfling character has a number of traits in common with all other halflings.</p>

            <p> Choose a subrace for additional traits, appended at the bottom of the list:</p>
            <Specialbuton {...{buttons,setButtons,handleButtonsChange}} />
            {buttons[0].value && <div><p>As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You're inclined to be affable and get along with others. You are more prone to wanderlust. </p></div>}
            {buttons[1].value && <div><p>As a stout halfling, you're hardier than average and have some resistance to poison. Some say stouts have dwarven blood.</p></div>}
            {buttons[2].value && <div><p>Long tied to the n atural heart of the Lotusden Greenwood, these halflings have adapted to live synergistically with the chaotic laws of the wild.</p></div>}

            <p><b>Ability Score Increase:</b> Your 
            <div class="tooltip">&nbsp;Dexterity&nbsp;
                <span class="tooltiptext"><Dexterity/></span>
            </div>
            score increases by 2.</p>
            <p><b>Age:</b> A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.</p>
            <p><b>Size:</b> Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.</p>
            <p><b>Speed:</b> Your base walking speed is 
            <div class="tooltip">&nbsp;25 feet.
                <span class="tooltiptext"><Speed/></span>
            </div>
            </p>
            <p><b>Lucky:</b> When you roll a 1 on the 
            <div class="tooltip">&nbsp;d20&nbsp;
                <span class="tooltiptext"><D20/></span>
            </div>     
            for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.</p>
            <p><b>Brave:</b> You have 
            <div class="tooltip">&nbsp;advantage&nbsp;
                <span class="tooltiptext"><Advantage/></span>
            </div>            
            on saving throws against being frightened.</p>
            <p><b>Halfling Nimbleness:</b>You can move through the space of any creature that is of a size larger than yours.</p>
            <p><b>Languages:</b>You can speak, read, and write Common and Halfling. The Halfling language isn’t secret, but halflings are loath to share it with others. They write very little, so they don’t have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.</p>
        
            {buttons[0].value && <div>
                <h2>Additional Lightfoot Halfling Traits</h2>
                <p><b>Ability Score Increase:</b> Your
                <div class="tooltip">&nbsp;Charisma&nbsp;
                    <span class="tooltiptext"><Charisma/></span>
                </div>  
                score increases by 1.</p>
                <p><b>Naturally Stealthy:</b> You can attempt to hide even when you are obscurred only by a creature that is at least one size larger than you. </p>
            </div>}

            {buttons[1].value && <div>
                <h2>Additional Stout Halfling Traits</h2>
                <p><b>Ability Score Increase:</b> Your
                <div class="tooltip">&nbsp;Constitution&nbsp;
                    <span class="tooltiptext"><Constitution/></span>
                </div>
                score increases by 1.</p>
                <p><b>Stout Resilience:</b> You have  
                <div class="tooltip">&nbsp;advantage&nbsp;
                    <span class="tooltiptext"><Advantage/></span>
                </div>        
                on saving throws against poison, and you have resistance against poison damage.</p>
            </div>}

            {buttons[2].value && <div>
                <h2>Additional Lotusden Halfling Traits</h2>
                <p><b>Ability Score Increase:</b> Your
                <div class="tooltip">&nbsp;Wisdom&nbsp;
                    <span class="tooltiptext"><Wisdom/></span>
                </div>
                score increases by 1.</p>
                <p><b>Child of the Wood:</b> You know the 
                <div class="tooltip_spell">&nbsp;druidcraft
                    <span class="tooltipspelltext"><Druidcraft/></span>
                </div> 
                <div class="tooltip">&nbsp;cantrip
                    <span class="tooltiptext"><Cantrip/></span>
                </div> 
                . When you reach 3rd level, you can cast the 
                <div class="tooltip_spell">&nbsp;entangle&nbsp;
                    <span class="tooltipspelltext"><Entangle/></span>
                </div> 
                spell once with this trait. When you reach 5th level, you can cast the 
                <div class="tooltip_spell">&nbsp;spike growth&nbsp;
                    <span class="tooltipspelltext"><SpikeGrowth/></span>
                </div> 
                spell once with this trait. You regain the ability to cast these spells (cantrips can be used as many times as you want) when you finish a  
                <div class="tooltip">&nbsp;long&nbsp;
                    <span class="tooltiptext"><LongRest/></span>
                </div> 
                rest. 
                <div class="tooltip">&nbsp;Wisdom&nbsp;
                    <span class="tooltiptext"><Wisdom/></span>
                </div>
                is your spellcasting ability for these spells.</p>
            </div>}

        </div>
    )        
}
export default connect(mapStateToProps,mapDispatchToProps)(HalflingRace);
