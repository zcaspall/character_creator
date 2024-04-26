"use client"

import React, { Dispatch, SetStateAction, use, useEffect } from "react"
import {useState} from "react"
import StatsDropdown from "./StatsDropdown";
import ClassDropdown from "./ClassDropdown";
import RaceDropdown from "./RaceDropdown";
import BackgroundDropdown from "./BackgroundDropdown";
import { sendToDB } from "./SendToDB";
import {Button} from "@nextui-org/react";
import ProficienyBox from "./ProficiencyBox";

/*
* Take the user id and save to a variable
* save each individual input in its specific format and send in async function
* right now the uuid and cid will randomly generate for a character
* how do I link the uuid of the user to the character?
*/

export default function CharacterInfo() {
    const [characterName, setCharacterName] = useState("")
    const [characterRace, setCharacterRace] = useState("")
    const [characterClass, setCharacterClass] = useState("")
    const [characterBG, setCharacterBG] = useState("")
    const [characterStats, setCharacterStats] = useState({})
    const [skillProfs, setSkillProfs] = useState([])
    const [saveProfs, setSaveProfs] = useState([])
    const [inspo, setInspo] = useState(false)
    const [profBonus, setProfBonus] = useState(2)
    const [level, setLevel] = useState(1)

    const handleStatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCharacterStats({...characterStats, [e.target.name]: parseInt(e.target.value)})
    }

    //useEffect(() => {
    //    console.log(skillProfs);
    //}, [skillProfs])

    const skills = ["Acrobatics (DEX)", "Animal Handling (WIS)","Arcana (INT)", "Athletics (STR)", "Deception (CHA)", "History (INT)", "Insight (WIS)", "Intimidation (CHA)", "Investigation (INT)", "Medicine (WIS)", "Nature (INT)", "Perception (WIS)", "Performance (CHA)", "Persuasion (CHA)", "Religion (INT)", "Sleight of Hand (DEX)", "Stealth (DEX)", "Survival (WIS)"]
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
            <input type = "number" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLevel(parseInt(e.target.value))} value={level} />
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
                <label>
                    <input type="checkbox" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInspo(e.target.checked)} checked={inspo} />
                    Inspiration
                </label>
                <label>Proficiency Bonus:
                    <input type="number" value={profBonus} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProfBonus(parseInt(e.target.value))} />
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
        <Button type = "button" onClick = {() => sendToDB(characterName)} 
                className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover text-btn-foreground">
            Save Character
        </Button>
    </div>
  )
}