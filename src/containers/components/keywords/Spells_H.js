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


function Hallow() {
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
function HallucinatoryTerraini() {
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
function Harm() {
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
function Haste() {
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
function Heal() {
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
function HealingWord() {
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
function HeatMetal() {
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
function HellishRebuke() {
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
function HeroesFeast() {
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
function Heroism() {
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
function HideousLaughter() {
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
function HoldMonster() {
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
function HoldPerson() {
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
function HolyAura() {
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
function HuntersMark() {
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
function HypnoticPattern() {
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
    Hallow,
    HallucinatoryTerraini,
    Harm,
    Haste,
    Heal,
    HealingWord,
    HeatMetal,
    HellishRebuke,
    HeroesFeast,
    Heroism,
    HideousLaughter,
    HoldMonster,
    HoldPerson,
    HolyAura,
    HuntersMark,
    HypnoticPattern
};

