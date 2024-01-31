import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

export default function CreateGame () {
    const createGame = async (formData: FormData) => {
        'use server'
    
        const gameName = formData.get('gameName') as string
        const inviteCode = Math.random().toString(36).slice(2)
        const created = new Date()
        const cookieStore = cookies()
        const supabase = createClient(cookieStore)
        const user = (await supabase.auth.getSession()).data.session?.user;

        if (!user) {
            return redirect("/login?message=Could not authenticate user")
        }

        const { error } = await supabase
            .from('Games')
            .insert({
                gm_id: user.id,
                invite_code: inviteCode,
                name: gameName,
                created: created
            })
        
        if (error) {
            throw error
        }
    }

    return (
        <form action={createGame}>
            <label htmlFor="gameName">Enter Campaign Name:</label>
            <input name="gameName" type="text" />
            <button>
                Create Game
            </button>
        </form>
    )
}