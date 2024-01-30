import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

export default function CreateGame () {
    const createGame = async (formData: FormData) => {
        'use server'

        const gameName = formData.get('gameName') as string
        const inviteCode = crypto.getRandomValues().toString()
        const cookieStore = cookies()
        const supabase = createClient(cookieStore)
        const user = (await supabase.auth.getSession()).data.session?.user;

        if (!user) {
            alert("Oops you need to login")
            return redirect("/login")
        }

        console.log(inviteCode)

        // const { error } = await supabase
        //     .from('Games')
        //     .insert({
        //         gm_id: user.id,
        //         invite_code: 
        //     })
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