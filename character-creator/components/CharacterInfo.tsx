"use client"

import React, { Dispatch, SetStateAction } from "react"
import {useState} from "react"
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import StatsDropdown from "./StatsDropdown";


export default function CharacterInfo() {
    const [characterName, setCharacterName] = useState("")
    const [playerName, setPlayerName] = useState("")
    const [characterRace, setCharacterRace] = useState<Set<string>>(new Set([""]))
    const [characterClass, setCharacterClass] = useState<Set<string>>(new Set([""]))
 
    const selectedRace = React.useMemo(
        () => Array.from(characterRace).join(", ").replaceAll("_", " "),
        [characterRace]
    );

    const selectedClass = React.useMemo(
        () => Array.from(characterClass).join(", ").replaceAll("_", " "),
        [characterClass]    
    );
    
  
  
  return (
    <>
    <div className = "CharacterInfo">
    Character Name: 
    <input onChange = {(e: React.ChangeEvent<HTMLInputElement>) => setCharacterName(e.target.value)} value = {characterName}/>
    </div>

    <div>
    Player Name:
    <input onChange = {(e: React.ChangeEvent<HTMLInputElement>) => setPlayerName(e.target.value)} value = {playerName}/>
    </div>

    <div>
    Race:
    <Dropdown>
        <DropdownTrigger>
            <Button variant = "shadow">
                {selectedRace}
            </Button>
        </DropdownTrigger>
        <DropdownMenu
            aria-label = "character races"
            variant = "flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys = {characterRace}
            onSelectionChange={(keys) => setCharacterRace(keys as Set<string>)}>
                <DropdownItem key = "human">Human</DropdownItem>
                <DropdownItem key = "elf">Elf</DropdownItem>
                <DropdownItem key = "dwarf">Dwarf</DropdownItem>
                <DropdownItem key = "gnome">Gnome</DropdownItem>
                <DropdownItem key = "tabaxi">Tabaxi</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    </div>

    <div>
    Character Class:
    <Dropdown>
        <DropdownTrigger>
            <Button variant = "shadow">
                {selectedClass}
            </Button>
        </DropdownTrigger>
        <DropdownMenu
            aria-label = "Character Class"
            variant = "flat"
            disallowEmptySelection
            selectionMode = "single"
            selectedKeys = {characterClass}
            onSelectionChange = {(keys) => setCharacterClass(keys as Set<string>)}>
                <DropdownItem key = "fighter">Fighter</DropdownItem>
                <DropdownItem key = "wizard">Wizard</DropdownItem>
                <DropdownItem key = "cleric">Cleric</DropdownItem>
                <DropdownItem key = "ranger">Ranger</DropdownItem>
                <DropdownItem key = "rouge">Rogue</DropdownItem>
                <DropdownItem key = "barbarian">Barbarian</DropdownItem>
                <DropdownItem key = "paladin">Paladin</DropdownItem>
                <DropdownItem key = "sorcerer">Sorcerer</DropdownItem>
                <DropdownItem key = "druid">Druid</DropdownItem>
                <DropdownItem key = "bard">Bard</DropdownItem>
                <DropdownItem key = "monk">Monk</DropdownItem>
                <DropdownItem key = "warlock">Warlock</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
    <div>
        Strength
        <StatsDropdown/>
        Dexterity
        <StatsDropdown/>
        Constitution
        <StatsDropdown/>
        Intelligence
        <StatsDropdown/>
        Wisdom
        <StatsDropdown/>
        Charisma
        <StatsDropdown/>
    </div>
    </>
  )
}