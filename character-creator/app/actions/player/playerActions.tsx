"use server"

import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export async function sendToDB(cName : string, cClass : string, level : number, 
                               cBG : string, cRace : string, profBonus: number, 
                               cStats: {}, saveProf: string[],skillProf: string[], hp: number){
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { error } = await supabase
  .from('Characters')
  .insert([
    {character_name: cName, class: cClass, level: level, 
    background: cBG, race: cRace, prof_bonus: profBonus,
    character_stats: cStats, character_skills: skillProf, 
    saving_throws: saveProf, hp_max: hp}
  ])
  .select()
  if (error) {
    console.error(error)
  }
}

export async function updateHealth(characterId: number, newHealth: number ) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const res = await supabase.from('Characters').update({hp_curr: newHealth}).eq('character_id', characterId);
}