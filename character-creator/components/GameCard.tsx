import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function GameCard({ id, name, playerCount } : { id: number, name: string, playerCount: number }) {
    return(
        <>
            <Link
                href={`/games?id=${id}`}
                className='flex flex-col w-40 h-60 gap-10 my-10 mx-5 bg-opacity-50 hover:bg-opacity-100 
                        bg-gray-300 rounded-xl text-center justify-center items-center text-black uppercase'
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