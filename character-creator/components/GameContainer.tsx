'use server'
import { Database } from '@/supabase'
import { User, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import GameCard from './GameCard'
import NewGameButton from './NewGameButton'
import React, { ReactElement } from 'react'
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'


export default async function GameContainer() {
    // Fetch data on the server
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const response = await supabase.auth.getUser();
    const user = response?.data?.user as User | null;
    const { data } = await supabase.from('Games').select();

    console.log(data)

    const runningGameCards = data?.filter(game => game.gm_id === user?.id).map(game => (
        <GameCard id={game.id} name={game.name} playerCount={game.players ? game.players.length : 0} />
    ));
    const playingGameCards = data?.filter(game => game.gm_id !== user?.id).map(game => (
        <GameCard id={game.id} name={game.name} playerCount={game.players ? game.players.length : 0} />
    ));

    

    return (
        <div className=''>
            <p>Running:</p>
            {runningGameCards}
            <NewGameButton gameType={'create'} />
            <p>Playing:</p>
            {playingGameCards}
            <NewGameButton gameType={'join'} />
        </div>
    )
}