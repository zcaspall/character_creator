"use client"
import React from "react"
import { useRouter } from 'next/navigation'

export default function ViewCharacterButton({}){
    const router = useRouter()
    const buttontext = "View Characters"

    return(
        <div>
            <button type = "button" onClick = {() => router.push('/viewcharmenu')} 
                className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover text-btn-foreground">
                {buttontext}
            </button>
        </div>
    )
}