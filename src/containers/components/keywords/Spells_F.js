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

function Fabricate() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function FaerieFire() {
    const spell = {
        name: " Faerie Fire", 
        type: " 1st level evocation",
        casting_time: " 1 action",
        range: " 60 feet",
        target: " Each object in a 20-foot cube within range",
        components: " V",
        duration: " Concentration, Up to 1 minute",
        classes: " Bard, Druid",
        description: [" Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius.", <br />,"Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible."],
        high_level: "false"
    }
    return (DisplaySpell(spell))        
}
function FaithfulHound() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function Falselife() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function Fear() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function FeatherFall() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function Feeblemind() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function FindFamiliar() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function FindSteed() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function FindTraps() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function FindThePath() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function FingerOfDeath() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function FireBolt() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function FireShield() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function FireStorm() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function Fireball() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function FlameBlade() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function FlameStrike() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function FlamingSphere() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function FleshToStone() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function FloatingDisk() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function Fly() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function FogCloud() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function Forbiddance() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function Forcecage() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function Foresight() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function FreedomOfMovement() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}
function FreezingSphere() {
    const spell = {
        name: " ", 
        type: " ",
        casting_time: " ",
        range: " ",
        target: " ",
        components: " ",
        duration: " ",
        classes: " ",
        description: ["", <br />,""],
        high_level: "false",
        high_des: " NA"
    }
    return (DisplaySpell(spell))        
}

export {
    Fabricate,
    FaerieFire,
    FaithfulHound,
    Falselife,
    Fear,
    FeatherFall,
    Feeblemind,
    FindFamiliar,
    FindSteed,
    FindThePath,
    FindTraps,
    FingerOfDeath,
    FireBolt,
    FireShield,
    FireStorm,
    Fireball,
    FlameBlade,
    FlameStrike,
    FlamingSphere,
    FleshToStone,
    FloatingDisk,
    Fly,
    FogCloud,
    Forbiddance,
    Forcecage,
    Foresight,
    FreedomOfMovement,
    FreezingSphere
};

