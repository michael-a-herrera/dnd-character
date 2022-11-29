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


function Telekinesis() {
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
function TelepathicBond() {
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
function Teleport() {
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
function TeleportationCircle() {
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
function Thaumaturgy() {
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
function Thunderwave() {
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
function TimeStop() {
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
function TinyHut() {
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
function Tonguess() {
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
function TransportViaPlants() {
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
function TreeStride() {
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
function TruePolymorph() {
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
function TrueResurrection() {
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
function TrueSeeing() {
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
function TrueStrike() {
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
    Telekinesis,
    TelepathicBond,
    Teleport,
    TeleportationCircle,
    Thaumaturgy,
    Thunderwave,
    TimeStop,
    TinyHut,
    Tonguess,
    TransportViaPlants,
    TreeStride,
    TruePolymorph,
    TrueResurrection,
    TrueSeeing,
    TrueStrike
};

