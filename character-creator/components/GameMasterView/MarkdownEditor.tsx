import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownEditor ({ markdown, handleSave, handleMarkdownChange } : { markdown: string | undefined, handleSave: () => void, handleMarkdownChange: (arg0: string) => void }) {
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        handleMarkdownChange(event.target.value);
    }
    return (
        <div className="flex overflow-hidden">
            <div id="markdown-container" className="w-6/12 h-screen">
                <textarea name="markdown-input" id="markdown-input" onChange={handleChange} placeholder="Start typing notes here..."
                    className="h-full w-full bg-input-background text-input-foreground" value={markdown}></textarea>
            </div>
            <div id="preview-container" className="w-6/12"> 
                <div className="markdown-preview">
                    <ReactMarkdown>
                        {markdown}
                    </ReactMarkdown>
                </div>
                <Button className="absolute bottom-2 right-2 w-20 h-20 bg-btn-background text-btn-foreground text-center hover:btn-background-hover" onPress={handleSave}>
                    <FontAwesomeIcon icon={faPlus} className="text-3xl"/>
                </Button>
            </div>
        </div>
    )
}