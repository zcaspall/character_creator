import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HealthBar from "../Healthbar";

export default function PlayerCard({ player }: { player: any}) {

    console.log(player)
    return (
        <div className='flex flex-col w-80 h-80 py-10 gap-10 my-10 mx-5 bg-opacity-50 hover:bg-card-background-hover 
                        bg-card-background rounded-xl text-center justify-center items-center text-card-foreground uppercase'>
            <p>{player.Users.email}</p>
            {player.Characters ? (
                <div className="flex justify-center w-full">
                    <HealthBar currentHealth={player.Characters.hp_curr} maxHealth={player.Characters.hp_max} characterName={player.Characters.character_name} />
                </div>
            ) : (
            <p>No character</p>
            )}
        </div>
    )

}