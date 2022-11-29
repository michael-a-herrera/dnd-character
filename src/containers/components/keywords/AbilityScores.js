import React from 'react'

function Wisdom() {
    return (
        <span>
            Measures awareness, intuition, and insight. Important for Clerics, Druids, and some Rangers as it is the main score used in their spellcasting. Contributes to Animal Handling, Insight, Medicine, Perception, and Survival skills.
        </span>
        )        
}

function Constitution() {
    return (
        <span>
            Measures health, stamina, and vital force. Important for everyone, contributes to your health points.
        </span>
        )        
}

function Strength() {
    return (
        <span>
            Measures bodily power, athletic training, and the extent you can extert raw physical power. Important for Barbarians, Fighters, and Paladins. Contributes to Athletics checks and damage with melee weapons.       
        </span>
        )        
}

function Dexterity() {
    return (
        <span>
            Measures agility, reflexes, and balance.  Important for Monks, Rangers, and Rogues.  Affects the Acrobatics, Sleight of Hand, and Stealth skills, as well as contributing to your armor class and initiative.
        </span>
        )        
}

function Intelligence() {
    return (
        <span>
            Measures mental acuity, information recall, and analytical skill. Important for Wizards as it is the main score used in their spellcasting. Contributes to Arcana, History, Investigation, Nature, and Religion skills.
        </span>
        )        
}

function Charisma() {
    return (
        <span>
            Measures you ability to interact effectively with others. Important for Bards, Sorcerers, and Warlocks. Contributes to Deception, Intimidation, Performance, and Persuasion skills.
        </span>
        )        
}

export {Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma};
