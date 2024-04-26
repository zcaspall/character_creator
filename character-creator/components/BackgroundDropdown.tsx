"use client"
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function BackgroundDropdown({characterBG, handleChange} : {characterBG: string, handleChange: (BG: string) => void}){
    return(
        <div>
            <Dropdown>
                <DropdownTrigger>
                    <Button variant = "shadow">
                        {characterBG}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label = "Character Background"
                    variant = "flat"
                    disallowEmptySelection
                    selectionMode = "single"
                    selectedKeys = {characterBG}
                    onAction = {(keys) => handleChange(keys.toString())}>
                        <DropdownItem key = "Acolyte">Acolyte</DropdownItem>
                        <DropdownItem key = "Noble">Noble</DropdownItem>
                        <DropdownItem key = "Charlatan">Charlatan</DropdownItem>
                    </DropdownMenu>
            </Dropdown>
        </div>
    )
}