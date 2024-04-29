'use server'
import { User } from '@supabase/auth-helpers-nextjs'
import { getGameInfo, getPlayers } from "@/app/actions/gameActions";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import PlayerCard from '@/components/GameMasterView/PlayerCard';
import NewCharButton from '@/components/NewCharButton';

export default async function gamePagePlayerView({ params } : { params: { slug: number } }) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const response = await supabase.auth.getUser();
    const user = response?.data?.user as User | null;
    let { game, gameError } = await getGameInfo({ gameId: params.slug });
    let { players, playersError } = await getPlayers({ gameId: params.slug });
    let playerCharacter = players?.find(player => player.player_id === user?.id);

    if (gameError || playersError) {
        console.error(gameError);
        console.error(playersError);
    }

    if (!game) {
        return <p>Game not found</p>
    }

    let playerCard = players?.map((player: any) => {
        return <PlayerCard key={player.player_id} player={player} userId={user?.id} slug={params.slug} />
    })
    return (
        <div>
            <div className="flex p-5 items-baseline gap-4">
                <h1 className="text-2xl">{game[0].name}</h1>
                <FontAwesomeIcon icon={faUser} className="h-5 w-5"/>
                <p>Players: {game[0].players}</p>
            </div>
            {playerCharacter?.Characters ? (
                <div className="flex">
                    {playerCard}
                </div>
            ) : (
                <div>
                    <NewCharButton />
                </div>
            )}
        </div>
    );
}