'use server'
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

async function newSessionNote ({ game_id, note } : { game_id: number, note: string }) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase.from('SessionNotes').insert({game_id, note}).select('game_id');
    
    if (error) {
        console.error(error);
    } else if (data) {
        let gameId = data[0].game_id;
        return redirect(`/games/gm/${gameId}`);
    }
    
}

async function updateSessionNote(noteId: number, note: string) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase.from('SessionNotes').update({ note: note }).eq('id', noteId).select('game_id');
    if (error) {
        console.error(error)
    } else if (data) {
        let gameId = data[0].game_id;
        return redirect(`/games/gm/${gameId}`);
    }
}

async function getSessionNotes (gameId: number) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase.from('SessionNotes').select().eq('game_id', gameId);
    
    return { sessionNotes: data, sessionNotesError: error }
}

async function getSessionNoteById(gameId: number, noteId: number) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase.from('SessionNotes').select().eq('game_id', gameId).eq('id', noteId).single();
    
    return { sessionNote: data, sessionNoteError: error }
}

export { newSessionNote, updateSessionNote, getSessionNotes, getSessionNoteById }