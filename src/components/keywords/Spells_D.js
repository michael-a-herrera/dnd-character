import React from 'react'

function DisplaySpell(input_spell) {
    return (
        <div>
            <div class="hspell">{input_spell.name}</div>
            <div class="typespell">{input_spell.type}</div>
            <div class="bspell">
                <span style={{ fontWeight: 'bold' }}>Casting Time:</span>
                <span style={{ fontSize: '85%'}}>{input_spell.casting_time}</span><br />
            </div>
            <div class="bspell">
                <span style={{ fontWeight: 'bold' }}>Range:</span>
                <span style={{ fontSize: '85%' }}>{input_spell.range}</span><br />
            </div>
            <div class="bspell">
                <span style={{ fontWeight: 'bold' }}>Target:</span>
                <span style={{ fontSize: '85%' }}>{input_spell.target}</span><br />
            </div>
            <div class="bspell">
                <span style={{ fontWeight: 'bold' }}>Components:</span>
                <span style={{ fontSize: '85%' }}>{input_spell.components}</span><br />
            </div>
            <div class="bspell">
                <span style={{ fontWeight: 'bold' }}>Duration:</span>
                <span style={{ fontSize: '85%' }}>{input_spell.duration}</span><br />
            </div>
            <div class="bspell">
                <span style={{ fontWeight: 'bold' }}>Classes:</span>
                <span style={{ fontSize: '85%' }}>{input_spell.classes}</span><br />
            </div>
            <div class="bspell">
                <span style={{ fontSize: '85%' }}>{input_spell.description}</span>
            </div>
            {input_spell.high_level === "true" && <div class="bspell">
                <span style={{ fontWeight: 'bold' }}>At Higher Levels:</span>
                <span style={{ fontSize: '85%' }}>{input_spell.high_des}</span>
                </div>}
        </div> 
    )
}

function Darkness() {
    const spell = {
        name: " Darkness", 
        type: " 2nd level evocation",
        casting_time: " 1 action",
        range: " 60 feet",
        target: " A point you choose within range",
        components: " V M (Bat fur and a drop of pitch or piece of coal)",
        duration: " Concentration, Up to 10 minutes",
        classes: " Sorcerer, Warlock, Wizard",
        description: [" Magical darkness spreads from a point you choose within range to fill a 15-foot-radius sphere for the duration. The darkness spreads around corners. A creature with darkvision can't see through this darkness, and nonmagical light can't illuminate it.", <br />,"If the point you choose is on an object you are holding or one that isn't being worn or carried, the darkness emanates from the object and moves with it. Completely covering the source of the darkness with an opaque object, such as a bowl or a helm, blocks the darkness.",<br />,"If any of this spell's area overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled."],
        high_level: "false"
    }
    return (DisplaySpell(spell))        
}
function DancingLights() {
    const spell = {
        name: " Dancing Lights", 
        type: " cantrip evocation",
        casting_time: " 1 action",
        range: " 120 feet",
        target: " Four points within range",
        components: " V S M  (A bit of phosphorus or wychwood, or a glowworm)",
        duration: " Concentration, up to 1 minute",
        classes: " Bard, Sorcerer, Wizard",
        description: [" You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius.", <br />,"As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range."],
        high_level: "false"
    }
    return (DisplaySpell(spell))        
}




export {DancingLights,Darkness};

