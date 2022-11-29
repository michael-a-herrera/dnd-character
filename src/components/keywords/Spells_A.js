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

function AcidSplash() {
    const spell = {
        name: " Acid Splash", 
        type: " cantrip evocation",
        casting_time: " 1 action",
        range: " 60 feet",
        target: " One creature within range or two creatures within range that are within 5 feet of each other",
        components: " V S",
        duration: " Instantaneous",
        classes: " Sorcerer, Wizard",
        description: " You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.",
        high_level: "false"
    }
    return (DisplaySpell(spell))
}
function Aid() {
    const spell = {
        name: " Aid", 
        type: " 2nd level abjuration",
        casting_time: " 1 action",
        range: " 30 feet",
        target: " Up to three creatures within range",
        components: " V S M (A tiny strip of white cloth)",
        duration: " 8 hours",
        classes: " Cleric, Paladin",
        description: " Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration.",
        high_level: "true",
        high_des: " When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd."
    }
    return (DisplaySpell(spell))
}
function Alarm() {
    const spell = {
        name: " Alarm", 
        type: " 1st level abjuration (ritual)",
        casting_time: " 1 minute",
        range: " 30 feet",
        target: " A door, a window, or an area within range that is no larger than a 20-foot cube",
        components: " V S M (a tiny bell and a piece of fine silver wire)",
        duration: " 8 hours",
        classes: " Ranger, Wizard",
        description: [" You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible.", <br />,"A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping.", <br />,"An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet"],
        high_level: "false"
    }
    return (DisplaySpell(spell))
}
function AlterSelf() {
    const spell = {
        name: " Alter Self", 
        type: " 2nd level transmutation",
        casting_time: " 1 action",
        range: " Self",
        target: " Self",
        components: " V S",
        duration: " Concentration, Up to 1 hour",
        classes: " Sorcerer, Wizard",
        description: [" You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one.", <br />,"Aquatic Adaptation. You adapt your body to an aquatic environment, sprouting gills and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed.", <br />,"Change Appearance. You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. You can make yourself appear as a member of another race, though none of your statistics change. You also can't appear as a creature of a different size than you, and your basic shape stays the same; if you're bipedal, you can't use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again.",< br/>,"Natural Weapons. You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with your unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it."],
        high_level: "false",
        high_des: "NA"
    }
    return (DisplaySpell(spell))        
}
function AnimalFriendship() {
    const spell = {
        name: " Animal Friendship", 
        type: " 1st level enchantment",
        casting_time: " 1 action",
        range: " 30 feet",
        target: " A beast that you can see within range",
        components: "  V S M (A morsel of food)",
        duration: " 24 hours",
        classes: " Bard, Druid, Ranger",
        description: " This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spells ends.",
        high_level: "true",
        high_des: " When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st."
    }
    return (DisplaySpell(spell))        
}
function AnimalMessenger() {
    const spell = {
        name: " Animal Messenger", 
        type: " 2nd level enchantment (ritual)",
        casting_time: " 1 action",
        range: " 30 feet",
        target: " A tiny beast you can see within range",
        components: " V S M (A morsel of food)",
        duration: " 24 hours",
        classes: " Bard, Druid, Ranger",
        description: " By means of this spell, you use an animal to deliver a message. Choose a Tiny beast you can see within range, such as a squirrel, a blue jay, or a bat. You specify a location, which you must have visited, and a recipient who matches a general description, such as “a man or woman dressed in the uniform of the town guard” or “a red-haired dwarf wearing a pointed hat.” You also speak a message of up to twenty-five words. The target beast travels for the duration of the spell toward the specified location, covering about 50 miles per 24 hours for a flying messenger, or 25 miles for other animals.",
        high_level: "true",
        high_des: " If you cast this spell using a spell slot of 3rd level or higher, the Duration of the spell increases by 48 hours for each slot level above 2nd."
    }
    return (DisplaySpell(spell))        
}
function AnimalShapes() {
    const spell = {
        name: " Animal Shapes", 
        type: " 8th level transmutation",
        casting_time: " 1 action",
        range: " 30 feet",
        target: " Any number of willing creatures that you can see within range",
        components: " V S",
        duration: " Concentrations, Up to 24 hours",
        classes: " Bard, Cleric, Sorcerer, Wizard",
        description: [" Your magic turns others into beasts. Choose any number of willing creatures that you can see within range. You transform each target into the form of a Large or smaller beast with a challenge rating of 4 or lower. On subsequent turns, you can use your action to transform affected creatures into new forms.",<br/>,"The transformation lasts for the duration for each target, or until the target drops to 0 hit points or dies. You can choose a different form for each target. A target's game statistics are replaced by the statistics of the chosen beast, though the target retains its alignment and Intelligence, Wisdom, and Charisma scores. The target assumes the hit points of its new form, and when it reverts to its normal form, it returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can't speak or cast spells.", <br />,"The target's gear melds into the new form. The target can't activate, wield, or otherwise benefit from any of its equipment."],
        high_level: "false",
        high_des: "NA"
    }
    return (DisplaySpell(spell))        
}
function AnimateDead() {
    const spell = {
        name: " Animate Dead", 
        type: " 3rd level necromancy",
        casting_time: " 1 minute",
        range: " 10 feet",
        target: " A pile of bones or a corpse of a Medium or Small humanoid within range",
        components: " V S M (A drop of blood, a piece of flesh, and a pinch of bone dust)",
        duration: " Instantaneous",
        classes: " Cleric, Wizard",
        description: " This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a skeleton if you chose bones or a zombie if you chose a corpse (the GM has the creature's game statistics). On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. The creature is under your control for 24 hours, after which it stops obeying any command you've given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one.",
        high_level: "true",
        high_des: " When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional Undead creatures for each slot above 3rd. Each of the creatures must come from a different corpse or pile of bones."
    }
    return (DisplaySpell(spell))        
}
function AnimateObjects() {
    const spell = {
        name: " Animate Objects", 
        type: " 5th level transmutation",
        casting_time: " 1 action",
        range: " 120 feet",
        target: " Up to ten nonmagical objects within range that are not being worn or carried",
        components: " V S",
        duration: " Concentration, Up to 1 minute",
        classes: " Bard, Sorcerer, Wizard",
        description: " Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, Huge targets count as eight objects. You can’t animate any object larger than Huge. Each target animates and becomes a creature under your control until the spell ends or until reduced to 0 hit points. As a bonus action, you can mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. Animated Object Statistics Size HP AC Attack Str Dex Tiny 20 18 +8 to hit, 1d4 + 4 damage 4 18 Small 25 16 +6 to hit, 1d8 + 2 damage 6 14 Medium 40 13 +5 to hit, 2d6 + 1 damage 10 12 Large 50 10 +6 to hit, 2d10 + 2 damage 14 10 Huge 80 10 +8 to hit, 2d12 + 4 damage 18 6 An animated object is a construct with AC, hit points, attacks, Strength, and Dexterity determined by its size. Its Constitution is 10 and its Intelligence and Wisdom are 3, and its Charisma is 1. Its speed is 30 feet; if the object lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or a larger object, such as a chain bolted to a wall, its speed is 0. It has blindsight with a radius of 30 feet and is blind beyond that distance. When the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form. If you command an object to attack, it can make a single melee attack against a creature within 5 feet of it. It makes a slam attack with an attack bonus and bludgeoning damage determined by its size. The GM might rule that a specific object inflicts slashing or piercing damage based on its form.",
        high_level: "true",
        high_des: " If you cast this spell using a spell slot of 6th level or higher, you can animate two additional Objects for each slot level above 5th."
    }
    return (DisplaySpell(spell))        
}
function AntilifeShell() {
    const spell = {
        name: " Antilife Shell", 
        type: " 5th level abjuration",
        casting_time: " 1 action",
        range: " Self (10-foot radius)",
        target: " Self (10-foot radius)",
        components: " V S",
        duration: " Concentration, Up to 1 hour",
        classes: " Druid",
        description: [" A shimmering barrier extends out from you in a 10-foot radius and moves with you, remaining centered on you and hedging out creatures other than undead and constructs. The barrier lasts for the duration.", <br />,"The barrier prevents an affected creature from passing or reaching through. An affected creature can cast spells or make attacks with ranged or reach weapons through the barrier.",<br/>,"If you move so that an affected creature is forced to pass through the barrier, the spell ends."],
        high_level: "false",
        high_des: "NA"
    }
    return (DisplaySpell(spell))        
}
function AntimagicField() {
    const spell = {
        name: " Antimagic Fieldd", 
        type: " 8th level abjuration",
        casting_time: " 1 action",
        range: " Self (10-foot-radius sphere)",
        target: " Self (10-foot-radius sphere)",
        components: " V S M (A pinch of powdered iron or iron fillings)",
        duration: " Concentration, Up to 1 hour",
        classes: " Cleric, Wizard",
        description: [" A 10-foot-radius invisible sphere of antimagic surrounds you. This area is divorced from the magical energy that suffuses the multiverse. Within the sphere, spells can’t be cast, summoned creatures disappear, and even magic items become mundane. Until the spell ends, the sphere moves with you, centered on you.",<br />,"Spells and other magical effects, except those created by an artifact or a deity, are suppressed in the sphere and can’t protrude into it. A slot expended to cast a suppressed spell is consumed. While an effect is suppressed, it doesn’t function, but the time it spends suppressed counts against its duration.",<br />,"Targeted Effects. Spells and other magical effects, such as magic missile and charm person, that target a creature or an object in the sphere have no effect on that target.",<br />,"Areas of Magic. The area of another spell or magical effect, such as fireball, can’t extend into the sphere. If the sphere overlaps an area of magic, the part of the area that is covered by the sphere is suppressed. For example, the flames created by a wall of fire are suppressed within the sphere, creating a gap in the wall if the overlap is large enough."
        ,<br />,"Spells. Any active spell or other magical effect on a creature or an object in the sphere is suppressed while the creature or object is in it."
        ,<br />,"Magic Items. The properties and powers of magic items are suppressed in the sphere. For example, a +1 longsword in the sphere functions as a nonmagical longsword."
        ,<br />,"A magic weapon’s properties and powers are suppressed if it is used against a target in the sphere or wielded by an attacker in the sphere. If a magic weapon or a piece of magic ammunition fully leaves the sphere (for example, if you fire a magic arrow or throw a magic spear at a target outside the sphere), the magic of the item ceases to be suppressed as soon as it exits."
        ,<br />,"Magical Travel. Teleportation and planar travel fail to work in the sphere, whether the sphere is the destination or the departure point for such magical travel. A portal to another location, world, or plane of existence, as well as an opening to an extradimensional space such as that created by the rope trick spell, temporarily closes while in the sphere."
        ,<br />,"Creatures and Objects. A creature or object summoned or created by magic temporarily winks out of existence in the sphere. Such a creature instantly reappears once the space the creature occupied is no longer within the sphere."
        ,<br />,"Dispel Magic. Spells and magical effects such as dispel magic have no effect on the sphere. Likewise, the spheres created by different antimagic field spells don’t nullify each other."],
        high_level: "false",
        high_des: "NA"
    }
    return (DisplaySpell(spell))        
}
function AntipathySympathy() {
    const spell = {
        name: " Antipathy Sympathy", 
        type: " 8th level enchantment",
        casting_time: " 1 hour",
        range: " 60 feet",
        target: " --",
        components: "  V S M (Either a lump of alum soaked in vinegar for the antipathy effect or a drop of honey for the sympathy effect)",
        duration: " 10 days",
        classes: " Druid, Wizard",
        description: ["This spell attracts or repels creatures of your choice. You target something within range, either a Huge or smaller object or creature or an area that is no larger than a 200-foot cube. Then specify a kind of intelligent creature, such as red dragons, goblins, or vampires. You invest the target with an aura that either attracts or repels the specified creatures for the duration. Choose antipathy or sympathy as the aura's effect.", <br />,"Antipathy: The enchantment causes creatures of the kind you designated to feel an intense urge to leave the area and avoid the target. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a Wisdom saving throw or become frightened. The creature remains frightened while it can see the target or is within 60 feet of it. While frightened by the target, the creature must use its movement to move to the nearest safe spot from which it can't see the target. If the creature moves more than 60 feet from the target and can't see it, the creature is no longer frightened, but the creature becomes frightened again if it regains sight of the target or moves within 60 feet of it.", <br />,"Sympathy: The enchantment causes the specified creatures to feel an intense urge to approach the target while within 60 feet of it or able to see it. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a Wisdom saving throw or use its movement on each of its turns to enter the area or move within reach of the target. When the creature has done so, it can't willingly move away from the target. If the target damages or otherwise harms an affected creature, the affected creature can make a Wisdom saving throw to end the effect, as described below.", <br />,"Ending the Effect: If an affected creature ends its turn while not within 60 feet of the target or able to see it, the creature makes a Wisdom saving throw. ON a successful save, the creature is no longer affected by the target and recognizes the feeling of repugnance or attraction as magical. In addition, a creature affected by the spells is allowed another Wisdom saving throw every 24 hours while the spell persists.",<br/>,"A creature that successfully saves against this effect is immune to it for 1 minute, after which time it can be affected again."],
        high_level: "false",
        high_des: "NA"
    }
    return (DisplaySpell(spell))        
}
function ArcaneEye() {
    const spell = {
        name: " Arcane Eye", 
        type: " 4th level divination",
        casting_time: " 1 action",
        range: " 30 feet",
        target: " A point within range",
        components: "  V S M (A bit of bat fur)",
        duration: " Concentration, Up to 1 hour",
        classes: " Wizard",
        description: ["You create an invisible, magical eye within range that hovers in the air for the duration.", <br />,"You mentally receive visual information from the eye, which has normal vision and darkvision out to 30 feet. The eye can look in every direction.", <br />,"As an action, you can move the eye up to 30 feet in any direction. There is no limit to how far away from you the eye can move, but it can’t enter another plane of existence. A solid barrier blocks the eye’s movement, but the eye can pass through an opening as small as 1 inch in diameter."],
        high_level: "false",
        high_des: "NA"
    }
    return (DisplaySpell(spell))        
}
function ArccaneHand() {
    const spell = {
        name: " Arcane Hand", 
        type: " 5th level evocation",
        casting_time: " 1 action",
        range: " 120 feet",
        target: " An unoccupied space that you can see within range",
        components: " V S M (An eggshell and a snakeskin glove)",
        duration: " Concentration, Up to 1 minute",
        classes: " Wizard",
        description: [" You create a Large hand of shimmering, translucent force in an unoccupied space that you can see within range. The hand lasts for the spell’s duration, and it moves at your command, mimicking the movements of your own hand."
        , <br />,"The hand is an object that has AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the spell ends. It has a Strength of 26 (+8) and a Dexterity of 10 (+0). The hand doesn’t fill its space.",
        , <br />,"When you cast the spell and as a bonus action on your subsequent turns, you can move the hand up to 60 feet and then cause one of the following effects with it.",
        , <br />,"Clenched Fist. The hand strikes one creature or object within 5 feet of it. Make a melee spell attack for the hand using your game statistics. On a hit, the target takes 4d8 force damage.",
        , <br />,"Forceful Hand. The hand attempts to push a creature within 5 feet of it in a direction you choose. Make a check with the hand’s Strength contested by the Strength (Athletics) check of the target. If the target is Medium or smaller, you have advantage on the check. If you succeed, the hand pushes the target up to 5 feet plus a number of feet equal to five times your spellcasting ability modifier. The hand moves with the target to remain within 5 feet of it.",
        , <br />,"Grasping Hand. The hand attempts to grapple a Huge or smaller creature within 5 feet of it. You use the hand’s Strength score to resolve the grapple. If the target is Medium or smaller, you have advantage on the check. While the hand is grappling the target, you can use a bonus action to have the hand crush it. When you do so, the target takes bludgeoning damage equal to 2d6 + your spellcasting ability modifier.",
        , <br />,"Interposing Hand. The hand interposes itself between you and a creature you choose until you give the hand a different command. The hand moves to stay between you and the target, providing you with half cover against the target. The target can’t move through the hand’s space if its Strength score is less than or equal to the hand’s Strength score. If its Strength score is higher than the hand’s Strength score, the target can move toward you through the hand’s space, but that space is difficult terrain for the target."],
        high_level: "true",
        high_des: " When you cast this spell using a spell slot of 6th level or higher, the damage from the clenched fist option increases by 2d8 and the damage from the grasping hand increases by 2d6 for each slot level above 5th."
    }
    return (DisplaySpell(spell))        
}
function ArcaneLock() {
    const spell = {
        name: " Arcane Lock", 
        type: " 2nd level abjuration",
        casting_time: " 1 action",
        range: " Touch",
        target: " A closed door, window, gate, chest, or other entryway",
        components: " V S M (Gold dust worth at least 25 gp, which the spell consumes)",
        duration: " Until dispelled",
        classes: " Wizard",
        description: ["You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration. You and the creatures you designate when you cast this spell can open the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute. Otherwise, it is impassable until it is broken or the spell is dispelled or suppressed. Casting knock on the object suppresses arcane lock for 10 minutes.", <br />,"While affected by this spell, the object is more difficult to break or force open; the DC to break it or pick any locks on it increases by 10."],
        high_level: "false",
        high_des: "NA"
    }
    return (DisplaySpell(spell))        
}
function ArcaneSword() {
    const spell = {
        name: " Arcane Sword", 
        type: " 7th level evocation",
        casting_time: " 1 action",
        range: " 60 feet",
        target: " See text",
        components: " V S M (A miniature platinum sword with a grip and pommel of copper and zinc, worth 250 gp)",
        duration: " Concentration, Up to 1 miinute",
        classes: " Bard, Wizard",
        description: [" You create a sword-shaped plane of force that hovers within range. It lasts for the duration.", <br />,"When the sword appears, you make a melee spell attack against a target of your choice within 5 feet of the sword. On a hit, the target takes 3d10 force damage. Until the spell ends, you can use a bonus action on each of your turns to move the sword up to 20 feet to a spot you can see and repeat this attack against the same target or a different one."],
        high_level: "false",
        high_des: "NA"
    }
    return (DisplaySpell(spell))        
}
function ArcanistsMagicAura() {
    const spell = {
        name: " Arcanist's Magic Aura", 
        type: " 2nd level illusion",
        casting_time: " 1 action",
        range: " Touch",
        target: " A creature or object you touch",
        components: " V S M (A small square of silk)",
        duration: " 24 hours",
        classes: " Wizard",
        description: ["You place an illusion on a creature or an object you touch so that divination spells reveal false information about it. The target can be a willing creature or an object that isn’t being carried or worn by another creature.", <br />,"When you cast the spell, choose one or both of the following effects. The effect lasts for the duration. If you cast this spell on the same creature or object every day for 30 days, placing the same effect on it each time, the illusion lasts until it is dispelled.", <br />,"False Aura. You change the way the target appears to spells and magical effects, such as detect magic, that detect magical auras. You can make a nonmagical object appear magical, a magical object appear nonmagical, or change the object’s magical aura so that it appears to belong to a specific school of magic that you choose. When you use this effect on an object, you can make the false magic apparent to any creature that handles the item.", <br />,"Mask. You change the way the target appears to spells and magical effects that detect creature types, such as a paladin’s Divine Sense or the trigger of a symbol spell. You choose a creature type and other spells and magical effects treat the target as if it were a creature of that type or of that alignment."],
        high_level: "false",
        high_des: "NA"
    }
    return (DisplaySpell(spell))        
}


function placeholder21() {
    const spell = {
        name: " Light", 
        type: " cantrip evocation",
        casting_time: " 1 action",
        range: " Touch",
        target: " One object that is no larger than 10 feet in any dimension",
        components: " V M (a firefly or phosphorescent moss)",
        duration: " 1 hour",
        classes: " Bard, Cleric, Sorcerer, Wizard",
        description: ["", <br />,""],
        high_level: "false",
        high_des: "NA"
    }
    return (DisplaySpell(spell))        
}

export {
    AcidSplash,
    Aid,
    Alarm,
    AlterSelf,
    AnimalFriendship,
    AnimalMessenger,
    AnimalShapes,
    AnimateDead,
    AnimateObjects,
    AntilifeShell,
    AntimagicField,
    AntipathySympathy,
    ArcaneEye,
    ArccaneHand,
    ArcaneLock,
    ArcaneSword,
    ArcanistsMagicAura
}
