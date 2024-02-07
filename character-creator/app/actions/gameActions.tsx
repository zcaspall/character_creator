'use server'
import { createClient } from "@/utils/supabase/server";
import { User } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function CreateGame({ gameName } : { gameName: string}) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const response = await supabase.auth.getUser();
    const user = response?.data?.user as User | null;

    const gm_id = user?.id;
    const inviteCode = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    const { error } = await supabase.from('Games').insert([{gm_id, invite_code: inviteCode, name: gameName}]);

    if (error) {
        // throw new Error('Could not create game');
        console.error(error);
    }
}