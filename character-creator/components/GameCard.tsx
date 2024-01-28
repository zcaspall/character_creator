import Link from 'next/link'

export default function GameCard({ id, name, playerCount } : { id: number, name: string, playerCount: number }) {
    return(
        <Link
            href={`/games?id=${id}`}
        >
            <p>{name}</p>
            <p>{playerCount}</p>
        </Link>
    )
}