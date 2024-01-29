import Link from "next/link"
import { useState } from "react"


export default function NewGameButton({ gameType } : { gameType: String }) {
    const cardText = `${gameType} new game`

    return (
        <div>
            <Link 
                href={`/games/${gameType}`}
                className="capitalize"
            >
                {cardText}
            </Link>
        </div>
    )
}