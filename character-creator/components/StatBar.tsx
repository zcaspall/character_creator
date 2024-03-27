import { createClient } from "@/utils/supabase/server";
import { cookies } from 'next/headers'

async function Stats(){
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
        const { data : scores, error : staterr} = await supabase
        .from('AbilityScores')
        .select()

        return scores
}

export default function StatBar(){
     console.log(Stats())
}
