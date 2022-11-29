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

function Light() {
    const spell = {
        name: " Light", 
        type: " cantrip evocation",
        casting_time: " 1 action",
        range: " Touch",
        target: " One object that is no larger than 10 feet in any dimension",
        components: " V M (a firefly or phosphorescent moss)",
        duration: " 1 hour",
        classes: " Bard, Cleric, Sorcerer, Wizard",
        description: [" You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action.", <br />,"If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell."],
        high_level: "false"
    }
    return (DisplaySpell(spell))        
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
        description: ["You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius.", <br />,"As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range."],
        high_level: "false"
    }
    return (DisplaySpell(spell))        
}

function FaerieFire() {
    const spell = {
        name: " FaerieFire", 
        type: " 1st level evocation",
        casting_time: " 1 action",
        range: " 60 feet",
        target: " Each object in a 20-foot cube within range",
        components: " V",
        duration: " Concentration, Up to 1 minute",
        classes: " Bard, Druid",
        description: ["Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius.", <br />,"Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible."],
        high_level: "false"
    }
    return (DisplaySpell(spell))        
}

function Sleep() {
    const spell = {
        name: " Sleep", 
        type: " 1st level enchantment",
        casting_time: " 1 action",
        range: " 90 feet",
        target: " Creatures within 20 feet of a point you choose within range (in ascending order of their current hit points, ignoring unconscious creatures)",
        components: " V S M (A pinch of fine sand, rose petals, or a cricket)",
        duration: " 1 minute",
        classes: " Bard, Sorcerer, Wizard",
        description: ["This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures). Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected. Undead and creatures immune to being charmed aren't affected by this spell."],
        high_level: "true",
        high_des: "When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st."
    }
    return (DisplaySpell(spell))        
}

function Invisibility() {
    const spell = {
        name: " Invisibility", 
        type: " 2nd level illusion",
        casting_time: " 1 action",
        range: " Touch",
        target: " A creature you touch",
        components: " V S M (An eyelash encased in gum arabic)",
        duration: " Concentration, Up to 1 hour",
        classes: " Bard, Sorcerer, Warlock, Wizard",
        description: "A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person. The spell ends for a target that attacks or casts a spell.",
        high_level: "true",
        high_des: "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
    }
    return (DisplaySpell(spell))        
}

function placeholder() {
    const spell = {
        name: " Light", 
        type: " cantrip evocation",
        casting_time: " 1 action",
        range: " Touch",
        target: " One object that is no larger than 10 feet in any dimension",
        components: " V M (a firefly or phosphorescent moss)",
        duration: " 1 hour",
        classes: " Bard, Cleric, Sorcerer, Wizard",
        description: ["", <br />,""]
    }
    return (DisplaySpell(spell))        
}

export {Light,Invisibility,Sleep,FaerieFire,DancingLights,Darkness};

