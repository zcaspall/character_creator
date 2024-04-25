'use client';
import { getSessionNoteById, updateSessionNote } from "@/app/actions/gameMaster/session/noteActions";
import MarkdownEditor from "@/components/GameMasterView/MarkdownEditor";
import { PostgrestError } from "@supabase/supabase-js";
import { use, useEffect, useState } from "react";

export default function NotePage( { params } : { params : { slug: string, noteId: number }} ) {
    const [markdown, setMarkdown] = useState<string>('');
    const [sessionNoteError, setSessionNoteError] = useState<PostgrestError | null>(null);
    useEffect(() => {
        const loadData = async () => {
            const { sessionNote, sessionNoteError } = await getSessionNoteById(parseInt(params.slug), params.noteId);
            setSessionNoteError(sessionNoteError);
            setMarkdown(sessionNote.note.toString());
        };

        loadData();
    }, [])
    if (sessionNoteError) {
        console.error(sessionNoteError);
    }
    const handleMarkdownChange = (markdown: string) => {
        setMarkdown(markdown);
    }
    const saveMarkdown = () => {
        updateSessionNote(params.noteId, markdown);
    }
    return (
        <MarkdownEditor markdown={markdown} handleSave={saveMarkdown} handleMarkdownChange={handleMarkdownChange} />
    )
}