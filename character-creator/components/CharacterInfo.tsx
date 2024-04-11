"use client"

import React, { Dispatch, SetStateAction } from "react"
import {useState} from "react"
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";


export default function CharacterInfo() {
  const [characterName, setCharacterName] = useState("")
  const [playerName, setPlayerName] = useState("")
  const [characterRace, setCharacterRace] = useState<Set<string>>(new Set([""]))

  const selectedRace = React.useMemo(
    () => Array.from(characterRace).join(", ").replaceAll("_", " "),
    [characterRace]
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
      </>
  )
}