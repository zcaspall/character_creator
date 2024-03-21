import { createClient } from "@/utils/supabase/server";
import { cookies } from 'next/headers'

async function Stats(){
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
        const { data, error } = await supabase
        .from('AbilityScores')
        .select()

    //scores = data
}

export default function StatBar(){
    
}
