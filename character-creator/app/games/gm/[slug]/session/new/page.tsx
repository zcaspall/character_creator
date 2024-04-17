"use client";
import { newSessionNote } from "@/app/actions/gameMaster/session/noteActions";
import MarkdownEditor from "@/components/GameMasterView/MarkdownEditor";
import { useState } from "react";

export default function newSession ({ params } : { params: { slug: string }}) {
    const [markdown, setMarkdown] = useState<string>('');
    const handleMarkdownChange = (markdown: string) => {
        setMarkdown(markdown);
    }
    const saveMarkdown = () => {
        newSessionNote({ game_id: parseInt(params.slug), note: markdown });
    }

    return (
        <MarkdownEditor markdown={markdown} handleSave={saveMarkdown} handleMarkdownChange={handleMarkdownChange} />
    )
}