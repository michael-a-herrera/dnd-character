import React from 'react'
import Picture from '../pics/barbarian.png'
import {useState} from 'react';

import { connect } from "react-redux";
import { updateSubClass } from "../../../redux/actionCreators";
import { AbilityScoreImprovement, BrutalCritical, DangerSense, ExtraAttack, FastMovement, FeralInstinct, Frenzy, IndomitableMight, IntimidatingPresence, MindlessRage, PathFeature, PersistentRage, PrimalChampion, PrimalPath, Rage, RecklessAttack, Retaliation, UnarmoredDefense } from '../keywords/BarbarianFeatures';
import {Strength} from '../keywords/AbilityScores';

const mapStateToProps = state => {
    return {
      subclass: state.pc.subclass
    };
  };
  
  const mapDispatchToProps = dispatch => ({
    updateCharSubClass: (newsubclass) => dispatch(updateSubClass(newsubclass))
  });

const BarbarianClass = props => {

    const [buttons, setButtons] = useState([
        {class: "buttonsubclass", label: "Beserker", value: false },
        {class: "buttonsubclass", label: "Totem Warrior", value: false },
        {class: "buttonsubclass", label: "Beast", value: false },
        {class: "buttonsubclass", label: "Wild Magic", value: false },
        {class: "buttonsubclass", label: "Ancestral Guardian", value: false },
        {class: "buttonsubclass", label: "Storm Herald", value: false },
        {class: "buttonsubclass", label: "Zealot", value: false }
    
    ]);

    const handleButtonsChange = ({
        buttons,
        setButtons,
        handleButtonsChange
    }) => label => {
        const newButtonsState = buttons.map(button => {
            if (button.label === label) {
                return (button = { class: "buttonsubclass_clicked", label: button.label, value: true});
            }
            return {
                class: "buttonsubclass",
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
                            props.updateCharSubClass(button.label);
                            }
                        }
                    >
                        {button.label}
                    </button>
                ))}
            </>
        )
    }

    const data = [
        { level: "1st",  profbonus: "+2", feature1: "Rage, ",                        feature2: "Unarmored Defense", rages: "2", ragedmg: "+2", page1:<Rage/>, page2:<UnarmoredDefense/>},
        { level: "2nd",  profbonus: "+2", feature1: "Reckless Attack, ",             feature2: "Danger Sense",      rages: "2", ragedmg: "+2", page1:<RecklessAttack/>, page2:<DangerSense/>},
        { level: "3rd",  profbonus: "+2", feature1: "Primal Path",                   feature2: "",                  rages: "3", ragedmg: "+2", page1:<PrimalPath/>, page2:""},
        { level: "4th",  profbonus: "+2", feature1: "Ability Score Improvement",     feature2: "",                  rages: "3", ragedmg: "+2", page1:<AbilityScoreImprovement/>, page2:""},
        { level: "5th",  profbonus: "+3", feature1: "Extra Attack, ",                feature2: "Fast Movement",     rages: "3", ragedmg: "+2", page1:<ExtraAttack/>, page2:<FastMovement/>},
        { level: "6th",  profbonus: "+3", feature1: "Path Feature",                  feature2: "",                  rages: "4", ragedmg: "+2", page1:<PathFeature/>, page2:""},
        { level: "7th",  profbonus: "+3", feature1: "Feral Instinct",                feature2: "",                  rages: "4", ragedmg: "+2", page1:<FeralInstinct/>, page2:""},
        { level: "8th",  profbonus: "+3", feature1: "Ability Score Improvement",     feature2: "",                  rages: "4", ragedmg: "+2", page1:<AbilityScoreImprovement/>, page2:""},
        { level: "9th",  profbonus: "+4", feature1: "Brutal Critical (1 die)",       feature2: "",                  rages: "4", ragedmg: "+3", page1:<BrutalCritical/>, page2:""},
        { level: "10th", profbonus: "+4", feature1: "Path Feature",                  feature2: "",                  rages: "4", ragedmg: "+3", page1:<PathFeature/>, page2:""},
        { level: "11th", profbonus: "+4", feature1: "Relentless Rage",               feature2: "",                  rages: "4", ragedmg: "+3", page1:<RecklessAttack/>, page2:""},
        { level: "12th", profbonus: "+4", feature1: "Ability Score Improvement",     feature2: "",                  rages: "5", ragedmg: "+3", page1:<AbilityScoreImprovement/>, page2:""},
        { level: "13th", profbonus: "+5", feature1: "Brutal Critical (2 die)",       feature2: "",                  rages: "5", ragedmg: "+3", page1:<BrutalCritical/>, page2:""},
        { level: "14th", profbonus: "+5", feature1: "Path Feature",                  feature2: "",                  rages: "5", ragedmg: "+3", page1:<PathFeature/>, page2:""},
        { level: "15th", profbonus: "+5", feature1: "Persistent Rage",               feature2: "",                  rages: "5", ragedmg: "+3", page1:<PersistentRage/>, page2:""},
        { level: "16th", profbonus: "+5", feature1: "Ability Score Improvement",     feature2: "",                  rages: "5", ragedmg: "+4", page1:<AbilityScoreImprovement/>, page2:""},
        { level: "17th", profbonus: "+6", feature1: "Brutal Critical (3 die)",       feature2: "",                  rages: "6", ragedmg: "+4", page1:<BrutalCritical/>, page2:""},
        { level: "18th", profbonus: "+6", feature1: "Indomitable Might",             feature2: "",                  rages: "6", ragedmg: "+4", page1:<IndomitableMight/>, page2:""},
        { level: "19th", profbonus: "+6", feature1: "Ability Score Improvement",     feature2: "",                  rages: "6", ragedmg: "+4", page1:<AbilityScoreImprovement/>, page2:""},
        { level: "20th", profbonus: "+6", feature1: "Primal Champion",               feature2: "",                  rages: "Unlimited", ragedmg: "+4", page1:<PrimalChampion/>, page2:""},
    
      ]

    return (
        <div>
            <img className="raceImg" src={Picture} alt="Barbarian"/>

            <p>Barbarians are defined by their rage: unbridled, unquenchable, and unthinking fury. More than a mere emotion, their anger is the ferocity of a cornered predator, the unrelenting assault of a storm, the churning turmoil of the sea. For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.</p>

            <h2>How Barbarians Play</h2>
            <p>Rather than requiring a player to manage a character's list of spell slots, Barbarians traditionally aim to rush into the fray, dealing substantial damage to a party's foes, whilst diverting attacks towards themselves, soaking up hits with their massive pool of HP.</p>
            <p>Your primary abiliity is 
            <div class="tooltip_spell">&nbsp;Rage&nbsp;
                <span class="tooltipspelltext"><Rage/></span>
            </div>
            which reduces physical damage you take, makes it more likely to succeed at  
            <div class="tooltip_spell">&nbsp;Strength&nbsp;
                <span class="tooltipspelltext"><Strength/></span>
            </div>
            based rolls, and adds damage to your attacks.</p>

            <span style={{ fontWeight: 'bold', fontSize:"16px" }}>Primary Ability Score: </span><span style={{ fontWeight: 'normal', fontSize:"16px" }}>Strength</span>
            <br/><span style={{ fontWeight: 'bold', fontSize:"16px" }}>Saving Throw Proficiencies: </span><span style={{ fontWeight: 'normal', fontSize:"16px" }}>Strength & Constitution</span>
            <br/><span style={{ fontWeight: 'bold', fontSize:"16px" }}>Armor and Weapon Proficiencies: </span><span style={{ fontWeight: 'normal', fontSize:"16px" }}>Light and medium armor, shields, simple and martial weapons</span>
            <br/><span style={{ fontWeight: 'bold', fontSize:"16px" }}>Skills: </span><span style={{ fontWeight: 'normal', fontSize:"16px" }}>Choose two from Animal Handling, Athletics, Intimidatiion, Nature, Perception, and Survival</span>
            <br/><span style={{ fontWeight: 'bold', fontSize:"16px" }}>Hit Dice: </span><span style={{ fontWeight: 'normal', fontSize:"16px" }}>1d12 per barbarian level</span>
            <br/><span style={{ fontWeight: 'bold', fontSize:"16px" }}>Hit Points at 1st Level: </span><span style={{ fontWeight: 'normal', fontSize:"16px" }}>12 + your Constitution modifier</span>
            <br/><span style={{ fontWeight: 'bold', fontSize:"16px" }}>Hit Points at Higher Levels: </span><span style={{ fontWeight: 'normal', fontSize:"16px" }}>1d12 + your Constitution modifier per barbarian level after 1st</span>
            
            <h2>Primal Path (Barbarian Subclass)</h2>
            <p>Rage burns in every barbarian's heart, a furnace that drives him or her towards greatness. Different barbarians attribute their rage to different sources. Each subclass provides different features you can gain as you level.</p>
            <Specialbuton {...{buttons,setButtons,handleButtonsChange}} />
            {buttons[0].value && 
                <div>
                    <p>The Path of the Beserker is a path of trammeled fury, slick with blood. As you enter the beserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being.</p>
                    <p>At each of the following levels, you gain the listed feature:
                    <ul>
                        <li> &nbsp;3rd Level:
                            <div class="tooltip_spell">&nbsp;Frenzy&nbsp;
                                <span class="tooltipspelltext"><Frenzy/></span>
                            </div>
                        </li>
                        <li> &nbsp;6th Level:
                            <div class="tooltip_spell">&nbsp;Mindless Rage&nbsp;
                                <span class="tooltipspelltext"><MindlessRage/></span>
                            </div>
                        </li>
                        <li>10th Level:
                            <div class="tooltip_spell">&nbsp;Intimidating Presence&nbsp;
                                <span class="tooltipspelltext"><IntimidatingPresence/></span>
                            </div>
                        </li>
                        <li>14th Level:
                            <div class="tooltip_spell">&nbsp;Retaliation&nbsp;
                                <span class="tooltipspelltext"><Retaliation/></span>
                            </div>
                        </li>
                    </ul>
                    </p>
                </div>
            }

            


            <h2>Barbarian Table</h2>
            <p>This table describes what your barbarian character gains each level.</p>

            <table className="classtable">
                <tr>
                <th>Level</th>
                <th>Proficiency Bonus</th>
                <th>Feature</th>
                <th>Rages</th>
                <th>Rage Damage</th>
                </tr>
                {data.map((val, key) => {
                return (
                    <tr key={key}>
                    <td>{val.level}</td>
                    <td>{val.profbonus}</td>
                    <td class="tooltip_spell">{val.feature1}<span class="tooltipspelltext">{val.page1}</span></td>
                    <td class="tooltip_spell">{val.feature2}<span class="tooltipspelltext">{val.page2}</span></td>
                    <td>{val.rages}</td>
                    <td>{val.ragedmg}</td>
                    </tr>
                )
                })}
            </table>
            
         
         </div>
    )        
}

export default connect(mapStateToProps,mapDispatchToProps)(BarbarianClass);
