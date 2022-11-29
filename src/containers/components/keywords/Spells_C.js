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
function CallLightning() {
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
function CalmEmotions() {
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
function ChainLightning() {
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
function CharmPerson() {
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
function ChillTouch() {
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
function CircleOfDeath() {
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
function Clairvoyance() {
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
function Clone() {
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
function Cloudkill() {
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
function ColorSpray() {
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
function Command() {
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
function Commune() {
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
function CommuneWithNature() {
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
function ComprehendLanguages() {
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
function Compulsion() {
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
function ConeOfCold() {
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
function Confusion() {
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
function ConjureAnimals() {
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
function ConjureCelestial() {
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
function ConjureElemental() {
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
function ConjureFey() {
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
function ConjureMinorElemental() {
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
function ConjureWoodlandBeings() {
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
function ContactOtherPlane() {
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
function Contagion() {
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
function Contingency() {
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
function ContinualFlame() {
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
function ControlWater() {
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
function ControlWeather() {
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
function CounterSpell() {
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
function CreateFoodAndWater() {
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
function CreateUndead() {
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
function CreateOrDestroyWater() {
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
function Creation() {
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
function CureWounds() {
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
    CallLightning,
    CalmEmotions,
    ChainLightning,
    CharmPerson,
    ChillTouch,
    CircleOfDeath,
    Clairvoyance,
    Clone,
    Cloudkill,
    ColorSpray,
    Command,
    Commune,
    CommuneWithNature,
    ComprehendLanguages,
    Compulsion,
    ConeOfCold,
    Confusion,
    ConjureAnimals,
    ConjureCelestial,
    ConjureElemental,
    ConjureFey,
    ConjureMinorElemental,
    ConjureWoodlandBeings,
    ContactOtherPlane,
    Contagion,
    Contingency,
    ContinualFlame,
    ControlWater,
    ControlWeather,
    CounterSpell,
    CreateFoodAndWater,
    CreateUndead,
    CreateOrDestroyWater,
    Creation,
    CureWounds
};

