import { getInviteCode, getPlayers } from "@/app/actions/gameActions";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { useEffect, useState } from "react"
import PlayerCard from "./PlayerCard";

export default function PlayerCharactersView({slug}: {slug: string}) {
    const [inviteCode, setInviteCode] = useState<string | null>(null);
    const [players, setPlayers] = useState<any[] | null>(null);
    useEffect(() => {
        const loadData = async () => {
            const { inviteCode, inviteCodeError } = await getInviteCode({gameId: parseInt(slug)});
            if (inviteCodeError) {
                console.error(inviteCodeError);
            }
            setInviteCode(inviteCode);
            const { players, playersError } = await getPlayers({gameId: parseInt(slug)});
            if (playersError) {
                console.error(playersError);
            }
            setPlayers(players);
        };

        loadData();
    }, [])
    
    let playerCard = players?.map((player: any) => (
        <PlayerCard key={player.player_id} player={player} />
    ))
    
    return (
        <div>
            <h1 className="ml-2">Invite Code: {inviteCode}</h1>
            <div className="flex">
                {playerCard}
            </div>
        </div>
    )
}