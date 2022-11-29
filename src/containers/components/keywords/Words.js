import React from 'react'

function Advantage() {
    return (
        <span>
            Advantage means you can make a roll twice and take the higher of the two rolls, increasing your chance for success or a critical roll.
        </span>
        )        
}
function Proficiency() {
    return (
        <span>
            A bonus that you can add to a roll to increase your chance of success, due to your "proficiency" in the skill.
        </span>
        )        
}
function Speed() {
    return (
        <span>
            This is how far you can move in a single round of combat without using a dash action.
        </span>
        )        
}
function LongRest() {
    return (
        <span>
            A long rest is 8 hours of sleep. You regain all health and spells.
        </span>
        )        
}
function ShortRest() {
    return (
        <span>
            A short rest is 1 hour. You can regain some health if damaged, possibly regain some spells depending on race and class.
        </span>
        )        
}
function Cantrip() {
    return (
        <span>
            A cantrip is a spell that can be cast at will, without using a spell slot and without being prepared in advance. Repeated practice has fixed the spell in the caster's mind and infused the caster with the magic needed to produce the effect over and over. A cantrip's spell level is 0.
        </span>
        )        
}
function DifficultyClass() {
    return (
        <span>
            Difficulty Class. The number an affected creature is trying to meet or beat to succeed at a skill check or saving throw.
        </span>
        )        
}
function ConstitutionModifier() {
    return (
        <span>
            Based on your Constitution ability score. A score of 10 has a modifier of 0, with the modifier increasing or decreasing with every two point increase or decrease from 10 in your ability score.  Constitution score of 14 has a +2 modified, score of 8 has a -1 modifier.
        </span>
        )        
}
function StrengthModifier() {
    return (
        <span>
            Based on your Strength ability score. A score of 10 has a modifier of 0, with the modifier increasing or decreasing with every two point increase or decrease from 10 in your ability score.  Strength score of 14 has a +2 modified, score of 8 has a -1 modifier.
        </span>
        )        
}
function TwoD6() {
    return (
        <span>
            Roll 2 six sided dice, and add them together.
        </span>
        )        
}
function Reaction() {
    return (
        <span>
            During combat, once on or between your turns, you may use a reaction to use a reaction trait or cast a reaction spell.
        </span>
        )        
}
function MaterialComponents() {
    return (
        <span>
            Some spells require material components to cast. Some components are cheap and widely available, while others, usually used in powerful spells, can cost thousands of gold or require hard to obtain materials.     
        </span>
        )        
}
function BonusAction() {
    return (
        <span>
            Relates to combat and what you can do on your turn. Each turn consists of movement, an action, and a bonus action if your race or class has bonus actions available to them.
        </span>
        )        
}
function D12() {
    return (
        <span>
            A 12 sided die.
        </span>
        )        
}
function D20() {
    return (
        <span>
            20 sided die, the main die used in D&D.
        </span>
        )        
}
function OneD4() {
    return (
        <span>
            Roll one 4 sided die.
        </span>
        )        
}
function SpellLevel() {
    return (
        <span>
            Spells are classified by level (not the same as your character level) between 0 and 9, and characters have a limited number of spellcastings for each level between rests.
        </span>
        )        
}

function placeholder_word() {
    return (
        <span>
        </span>
        )        
}


export {
    Advantage,
    Proficiency,
    BonusAction,
    Cantrip,
    ConstitutionModifier,
    D12,
    D20,
    DifficultyClass,
    LongRest,
    MaterialComponents,
    OneD4,
    Reaction,
    ShortRest,
    Speed,
    SpellLevel,
    StrengthModifier,
    TwoD6
};
