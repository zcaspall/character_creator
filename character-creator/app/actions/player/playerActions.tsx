"use server"

import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export async function sendToDB(cName : string){
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    console.log("Yelp?")
    const res = await supabase
  .from('Character')
  .insert([
    {CharacterName: cName},
  ])
  .select()
  
}