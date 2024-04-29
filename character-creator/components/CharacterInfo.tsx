"use client"

import React, { Dispatch, SetStateAction, use, useEffect } from "react"
import {useState} from "react"
import StatsDropdown from "./StatsDropdown";
//import ClassDropdown from "./ClassDropdown";
//import RaceDropdown from "./RaceDropdown";
//import BackgroundDropdown from "./BackgroundDropdown";
import {sendToDB} from "@/app/actions/player/playerActions";
import {Button} from "@nextui-org/react";
import ProficienyBox from "./ProficiencyBox";
import { useRouter } from 'next/navigation'

export default function CharacterInfo({ characterData = undefined } : { characterData: any }) {
    
    const [characterName, setCharacterName] = useState(characterData?.character_name || "")
    const [characterRace, setCharacterRace] = useState(characterData?.race || "")
    const [characterClass, setCharacterClass] = useState(characterData?.characterClass || "")
    const [characterBG, setCharacterBG] = useState(characterData?.background || "")
    const [characterStats, setCharacterStats] = useState(characterData?.character_stats || {})
    const [skillProfs, setSkillProfs] = useState(characterData?.character_skills || [])
    const [saveProfs, setSaveProfs] = useState(characterData?.saving_throws || [])
    const [inspo, setInspo] = useState(characterData?.inspiration || 0)
    const [profBonus, setProfBonus] = useState(characterData?.prof_bonus || 2)
    const [level, setLevel] = useState(characterData?.level || 1)
    const [hitPoints, setHitPoints] = useState(characterData?.hp_curr || 0)

    const router = useRouter()

    const handleStatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCharacterStats({...characterStats, [e.target.name]: parseInt(e.target.value)})
    }

    const skills = ["Acrobatics (DEX)", "Animal Handling (WIS)","Arcana (INT)", "Athletics (STR)", "Deception (CHA)", "History (INT)", 
                    "Insight (WIS)", "Intimidation (CHA)", "Investigation (INT)", "Medicine (WIS)", "Nature (INT)", "Perception (WIS)", 
                    "Performance (CHA)", "Persuasion (CHA)", "Religion (INT)", "Sleight of Hand (DEX)", "Stealth (DEX)", "Survival (WIS)"]

    const savingThrows = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]
    return (
        <div className="grid grid-cols-8 gap-4">
            <div className="col-span-4 ">
                <label>Character Name:</label>
                <input onChange = {(e: React.ChangeEvent<HTMLInputElement>) => setCharacterName(e.target.value)} value = {characterName}/>
                <br/>
            </div>

            <div className="col-span-4 grid grid-rows-2 grid-cols-2 gap-2">
                <label>Class:</label>
                <input onChange = {(e: React.ChangeEvent<HTMLInputElement>) => setCharacterClass(e.target.value)} value = {characterClass}/>
                <label>Level:</label>
                <input type = "number" min = "1" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLevel(parseInt(e.target.value))} value={level} />
                <label>Hit Points:</label>
                <input type = "number" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHitPoints(parseInt(e.target.value))} value={hitPoints} />
                <label>Background:</label>
                <input onChange = {(e: React.ChangeEvent<HTMLInputElement>) => setCharacterBG(e.target.value)} value = {characterBG}/>
                <label>Race:</label>
                <input onChange = {(e: React.ChangeEvent<HTMLInputElement>) => setCharacterRace(e.target.value)} value = {characterRace}/>
            </div>

            <div className="col-span-1">
                <StatsDropdown statName="Strength" statChange={handleStatChange} stats={characterStats}/>
                <StatsDropdown statName="Dexterity" statChange={handleStatChange} stats={characterStats}/>
                <StatsDropdown statName="Constitution" statChange={handleStatChange} stats={characterStats}/>
                <StatsDropdown statName="Intelligence" statChange={handleStatChange} stats={characterStats}/>
                <StatsDropdown statName="Wisdom" statChange={handleStatChange} stats={characterStats}/>
                <StatsDropdown statName="Charisma" statChange={handleStatChange} stats={characterStats}/>
            </div>
            <div className="col-span-2">
                <div className="flex flex-col">
                    <label>Inspiration:
                        <input type="number" min = "2" value={inspo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInspo(parseInt(e.target.value))} />
                    </label>
                    <label>Proficiency Bonus:
                        <input type="number" min = "2" value={profBonus} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProfBonus(parseInt(e.target.value))} />
                    </label>
                </div>
                <div className="flex flex-col">
                    Saving Throws:
                    <ProficienyBox skills={savingThrows} proficiencies={saveProfs} setProficiencies={setSaveProfs}/>
                </div>

                <div className="flex flex-col">
                    Skill Proficiencies:
                    <ProficienyBox skills={skills} proficiencies={skillProfs} setProficiencies={setSkillProfs}/>
                </div>

            </div>
            <Button type = "button" onClick = {() => {sendToDB(characterName, characterClass, level, characterBG, characterRace, profBonus, characterStats, saveProfs, skillProfs, hitPoints); () => router.push("")}} 
                    className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover text-btn-foreground">
                Save Character
            </Button>
        </div>
    )
}