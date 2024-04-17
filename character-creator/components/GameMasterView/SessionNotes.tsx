'use client';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import SessionNoteCard from "./SessionNoteCard";
import { getSessionNotes } from "@/app/actions/gameMaster/session/noteActions";
import { useEffect, useState } from "react";
import { PostgrestError } from "@supabase/supabase-js";
export default function SessionNotes({slug}: {slug: string} ) {
    const [ sessionNotes, setSessionNotes ] = useState<any[] | null>(null);
    const [ sessionNotesError, setSessionNotesError ] = useState<PostgrestError | null>(null);

    useEffect(() => {
        const loadData = async () => {
            const { sessionNotes, sessionNotesError } = await getSessionNotes(parseInt(slug));
            setSessionNotes(sessionNotes);
            setSessionNotesError(sessionNotesError);
        };

        loadData();
    }, [])
    if (sessionNotesError) {
        console.error(sessionNotesError)
    }
    const noteCards = sessionNotes?.map(note => (
        <SessionNoteCard key={note.id} noteId={note.id} gameId={note.game_id} note={note.note} />
    ))
    return (
        <div className="flex">
            {noteCards}
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