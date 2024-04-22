"use client"

import React, { Dispatch, SetStateAction } from "react"
import {useState} from "react"
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function StatsDropdown (){
    const [characterStat, setcharacterStat] = useState<Set<string>>(new Set([""]))
    const selectedStat = React.useMemo(
        () => Array.from(characterStat).join(", ").replaceAll("_", " "),
        [characterStat]
    );
    return(
        <div>
        <Dropdown>
            <DropdownTrigger>
                <Button variant = "shadow">
                    {selectedStat}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="stats"
                variant = "flat"
                selectionMode="single"
                hideSelectedIcon = {true}
                selectedKeys = {characterStat}
                onSelectionChange = {(keys) => setcharacterStat(keys as Set<string>)}>
                    <DropdownItem key = "15">15</DropdownItem>
                    <DropdownItem key = "14">14</DropdownItem>
                    <DropdownItem key = "13">13</DropdownItem>
                    <DropdownItem key = "12">12</DropdownItem>
                    <DropdownItem key = "10">10</DropdownItem>
                    <DropdownItem key = "8">8</DropdownItem>
                </DropdownMenu>
        </Dropdown>
    </div>
    )
}
