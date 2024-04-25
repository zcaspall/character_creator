"use client"

import React, { Dispatch, SetStateAction } from "react"
import {useState} from "react"
import StatsDropdown from "./StatsDropdown";
import ClassDropdown from "./ClassDropdown";
import RaceDropdown from "./RaceDropdown";
import BackgroundDropdown from "./BackgroundDropdown";
import { sendToDB } from "./SendToDB";
import {Button} from "@nextui-org/react";

/*
* Take the user id and save to a variable
* save each individual input in its specific format and send in async function
* right now the uuid and cid will randomly generate for a character
* how do I link the uuid of the user to the character?
*/

export default function CharacterInfo() {
    const [characterName, setCharacterName] = useState("")
    const [playerName, setPlayerName] = useState("")
    const [characterRace, setCharacterRace] = useState("")
    const [characterClass, setCharacterClass] = useState("")
    const [characterBG, setCharacterBG] = useState("")

  return (
    <div>

        <h1>Character Creator</h1>
        <br/>

        <div className = "CharacterInfo">
            Character Name: 
            <input onChange = {(e: React.ChangeEvent<HTMLInputElement>) => setCharacterName(e.target.value)} value = {characterName}/>
            <br/>
        </div>

        <div>
            Player Name:
            <input onChange = {(e: React.ChangeEvent<HTMLInputElement>) => setPlayerName(e.target.value)} value = {playerName}/>
        </div>

        <div>
            <RaceDropdown characterRace ={characterRace} handleChange={setCharacterRace}/>
        </div>
        <button>
        
        </button>
        
        <div>
            <ClassDropdown characterClass = {characterClass} handleChange = {setCharacterClass}/>
        </div>
        
        <div>
            Strength: <StatsDropdown/>
            Dexterity: <StatsDropdown/>
            Constitution: <StatsDropdown/>
            Intelligence: <StatsDropdown/>
            Wisdom: <StatsDropdown/>
            Charisma: <StatsDropdown/>
        </div>
   
        <div>
            Select your background:
            <BackgroundDropdown characterBG = {characterBG} handleChange = {setCharacterBG}/>
        </div>

        <div>
            Skill Proficiencies:

            <label>
                <input type = "checkbox" name = "AcroProf" value = "Acrobatics"/>
                Acrobatics (Dex)
            </label>

            <label>
                <input type = "checkbox" name = "AniProf" value = "Animal Handling"/>
                Animal Handling (Wis)
            </label>

            <label>
                <input type = "checkbox" name = "ArcaProf" value = "Arcana"/>
                Arcana (Int)
            </label>

            <label>
                <input type = "checkbox" name = "AthProf" value = "Athletics"/>
                Athletics (Str)
            </label>

            <label>
                <input type = "checkbox" name = "DecProf" value = "Deception"/>
                Deception (Chr)
            </label>

            <label>
                <input type = "checkbox" name = "HisProf" value = "History"/>
                History (Int)
            </label>

            <label>
                <input type = "checkbox" name = "InsProf" value = "Insight"/>
                Insight (Wis)
            </label>

            <label>
                <input type = "checkbox" name = "IntmProf" value = "Indimidation"/>
                Intimidation (Chr)
            </label>

            <label>
                <input type = "checkbox" name = "InvProf" value = "Investigation"/>
                Investigation
            </label>

            <label>
                <input type = "checkbox" name = "MedProf" value = "Medicine"/>
                Medicine (Wis)
            </label>

            <label>
                <input type = "checkbox" name = "NatProf" value = "Nature"/>
                Nature (Int)
            </label>

            <label>
                <input type = "checkbox" name = "PerProf" value = "Perception"/>
                Perception (Wis)
            </label>

            <label>
                <input type = "checkbox" name = "PrfProf" value = "Performance"/>
                Performance (Chr)
            </label>

            <label>
                <input type = "checkbox" name = "Prs" value = "Persuasion"/>
                Acrobatics (Chr)
            </label>

            <label>
                <input type = "checkbox" name = "RelProf" value = "Religion"/>
                Religion (Int)
            </label>

            <label>
                <input type = "checkbox" name = "SleProf" value = "Sleight of Hand"/>
                Sleight of Hand (Dex)
            </label>

            <label>
                <input type = "checkbox" name = "StlProf" value = "Stealth"/>
                Stealth (Dex)
            </label>

            <label>
                <input type = "checkbox" name = "SurProf" value = "Survival"/>
                Survival (Wis)
            </label>

        </div>
        <Button type = "button" onClick = {() => sendToDB(characterName)} 
                className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover text-btn-foreground">
            send character name to db
        </Button>
    </div>
  )
}