"use client"
import React from "react"
import { useRouter } from 'next/navigation'

export default function NewCharButton({}){
    const router = useRouter()
    const buttontext = 'Create a new character'

    return(
        <div>
            <button type = "button" onClick = {() => router.push('/newchar')} 
                className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover text-btn-foreground">
                {buttontext}
            </button>
        </div>
    )
}