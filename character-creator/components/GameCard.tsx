import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function GameCard({ id, name, playerCount, type } : { id: number, name: string, playerCount: number, type: string}) {
    return(
        <>
            <Link
                href={`/games/${type}/${id}`}
                className='flex flex-col w-40 h-60 gap-10 my-10 mx-5 bg-opacity-50 hover:bg-card-background-hover 
                        bg-card-background rounded-xl text-center justify-center items-center text-card-foreground uppercase'
            >
                <p>{name}</p>
                <div>
                    <FontAwesomeIcon icon={faUser} className="text-3xl"/>
                    <p>{playerCount}</p>
                </div>
            </Link>
        </>
    )
}