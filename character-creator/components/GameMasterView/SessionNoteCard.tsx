import { faPenToSquare, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default function SessionNoteCard({ gameId, noteId, note } : { gameId: string, noteId: string, note: string }) {
    return (
        <>
            <Link
                href={`/games/gm/${gameId}/session/${noteId}`}
                className='flex flex-col w-40 h-60 gap-10 my-10 mx-5 bg-opacity-50 hover:bg-card-background-hover 
                        bg-card-background rounded-xl text-center  items-center justify-start text-card-foreground uppercase'
            >
                <div className="markdown-preview">
                    <ReactMarkdown>
                        {note.split('\n')[0]}
                    </ReactMarkdown>
                </div>
                <FontAwesomeIcon icon={faPenToSquare} className="text-3xl" />
            </Link>
        </>
    )
}