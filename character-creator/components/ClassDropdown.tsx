"use client"

import React, { Dispatch, SetStateAction } from "react"
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function ClassDropdown({characterClass, handleChange} : {characterClass: string, handleChange: (race: string) => void}){

    return(
        <div>
        Character Class:
            <Dropdown>
                <DropdownTrigger>
                    <Button variant = "shadow">
                        {characterClass}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label = "Character Class"
                    variant = "flat"
                    disallowEmptySelection
                    selectionMode = "single"
                    selectedKeys = {characterClass}
                    onAction = {(keys) => handleChange(keys.toString())}>
                        <DropdownItem key = "Fighter">Fighter</DropdownItem>
                        <DropdownItem key = "Wizard">Wizard</DropdownItem>
                        <DropdownItem key = "Cleric">Cleric</DropdownItem>
                        <DropdownItem key = "Ranger">Ranger</DropdownItem>
                        <DropdownItem key = "Rouge">Rogue</DropdownItem>
                        <DropdownItem key = "Barbarian">Barbarian</DropdownItem>
                        <DropdownItem key = "Paladin">Paladin</DropdownItem>
                        <DropdownItem key = "Sorcerer">Sorcerer</DropdownItem>
                        <DropdownItem key = "Druid">Druid</DropdownItem>
                        <DropdownItem key = "Bard">Bard</DropdownItem>
                        <DropdownItem key = "Monk">Monk</DropdownItem>
                        <DropdownItem key = "Warlock">Warlock</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )

}