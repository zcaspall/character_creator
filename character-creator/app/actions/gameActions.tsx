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
        const { error } = await supabase.from('joined_games').insert({game_id: game.id, player_id: player})
        if (error) {
            console.error(error);
            return;
        } else {
            return redirect(`/games/player/${game.id}`);
        }
    }
}

export { CreateGame, JoinGame }