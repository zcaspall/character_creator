'use client'
import HealthBar from "../Healthbar";
import router from "next/router";

export default function PlayerCard({ player, userId = undefined, slug = undefined}: { player: any, userId: string | undefined, slug?: number}) {

    const isUser = player.player_id === userId;
    console.log(isUser, slug)
    return (
        <div className='flex flex-col w-80 h-80 py-10 gap-10 my-10 mx-5 bg-opacity-50 hover:bg-card-background-hover 
                        bg-card-background rounded-xl text-center justify-center items-center text-card-foreground uppercase'
                        onClick={isUser && slug ? () => router.push(`players/${slug}/editchar`) : undefined}>
            <p>{isUser ? ("You") : (player.Users.email)}</p>
            {player.Characters ? (
                <div className="flex justify-center w-full">
                    <HealthBar currentHealth={player.Characters.hp_curr} maxHealth={player.Characters.hp_max} characterName={player.Characters.character_name} id={player.Characters.character_id} />
                </div>
            ) : (
            <p>No character</p>
            )}
        </div>
    )

}