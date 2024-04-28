'use server'
import { createClient } from "@/utils/supabase/server";
import { User } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

async function CreateGame({ gameName } : { gameName: string}) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const response = await supabase.auth.getUser();
    const user = response?.data?.user as User | null;

    const gm_id = user?.id;
    const inviteCode = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    const { data, error } = await supabase.from('Games').insert([{gm_id, invite_code: inviteCode, name: gameName}]).select('id');
    
    if (error) {
        console.error(error);
    } else if (data) {
        let gameId = data[0].id;
        return redirect(`/games/gm/${gameId}`);
    }
}

async function JoinGame({ inviteCode } : { inviteCode: string }) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const response = await supabase.auth.getUser();
    const user = response?.data?.user as User | null;

    const { data, error } = await supabase.from('Games').select().eq('invite_code', inviteCode);

    if (error) {
        console.error(error);
    } else if (data) {
        const game = data[0];
        const player = user?.id;
        const { error } = await supabase.from('JoinedGame').insert({player_id: player, game_id: game.id});
        const { error: error2 } = await supabase.from('Games').update({players: game.players + 1}).eq('id', game.id)
        if (error || error2) {
            console.error(error);
            return;
        } else {
            return redirect(`/games/player/${game.id}`);
        }
    }
}

async function getInviteCode({ gameId } : { gameId: number }) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase.from('Games').select('invite_code').eq('id', gameId);
  
    const inviteCode = data ? data[0]?.invite_code : null;
    return { inviteCode, inviteCodeError: error }
}

async function getPlayers({ gameId } : { gameId: number }) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase.from('JoinedGame').select('player_id, Users( email ), character_id').eq('game_id', gameId);
 
    return { players: data, playersError: error }
}

export { CreateGame, JoinGame, getInviteCode, getPlayers } 