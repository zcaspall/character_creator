import { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
export default function SessionNotes({slug}: {slug: string} ) {
    return (
        <div>
            <Link
                href={`/games/gm/${slug}/session/new`}
                className="uppercase flex flex-col w-40 h-60 gap-10 my-10 mx-5 bg-btn-new-background 
                        hover:bg-btn-new-background-hover text-btn-new-foreground text-center justify-center rounded-lg"
                >
                <FontAwesomeIcon icon={faPlus} className="text-3xl"/>
                New Session
            </Link>
        </div>
    )
}