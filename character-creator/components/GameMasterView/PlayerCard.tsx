import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PlayerCard({ player }: { player: any}) {


    return (
        <div className='flex flex-col w-40 h-60 gap-10 my-10 mx-5 bg-opacity-50 hover:bg-card-background-hover 
                        bg-card-background rounded-xl text-center justify-center items-center text-card-foreground uppercase'>
            <p>{player.Users.email}</p>
            {player.character_id ? (<div>Test</div>) : (<p>No character</p>)}
        </div>
    )

}