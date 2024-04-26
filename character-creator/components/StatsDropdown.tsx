"use client"

import React, { Dispatch, SetStateAction, useEffect } from "react"
import {useState} from "react"
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function StatsDropdown ({ statName, statChange, stats} : {statName: string, statChange: (e: React.ChangeEvent<HTMLInputElement>) => void, stats: any}) {
    const [modifier, setModifier] = useState<number>(0)

    useEffect(() => {
        setModifier(Math.floor((stats[statName] - 10) / 2))
    }, [stats])
    
    
    return(
        <div>
            <label>{statName}:</label>
            <input className="w-20 h-20" type="number" onChange={statChange} name={statName} ></input>
            <div>{Number.isNaN(modifier) ? 0 : modifier}</div>
        </div>
    )
}
