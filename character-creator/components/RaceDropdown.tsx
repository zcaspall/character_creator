"use client"

import React, { Dispatch, SetStateAction } from "react"
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function RaceDropdown({ characterRace, handleChange } : { characterRace: string, handleChange: (race: string) => void}){

    return (
        <div>
            Race:
            <Dropdown>
                <DropdownTrigger>
                    <Button variant = "shadow">
                        {characterRace}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label = "character races"
                    variant = "flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys = {characterRace}
                    onAction={(key) => handleChange(key.toString())}>
                        <DropdownItem key = "Human">Human</DropdownItem>
                        <DropdownItem key = "Elf">Elf</DropdownItem>
                        <DropdownItem key = "Dwarf">Dwarf</DropdownItem>
                        <DropdownItem key = "Gnome">Gnome</DropdownItem>
                        <DropdownItem key = "Tabaxi">Tabaxi</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )

}