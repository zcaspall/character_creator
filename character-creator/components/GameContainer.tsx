'use server'
import { Database } from '@/supabase'
import { User, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import GameCard from './GameCard'
import NewGameButton from './NewGameButton'
import React, { ReactElement } from 'react'
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { run } from 'node:test'


export default async function GameContainer() {
    // Fetch data on the server
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const response = await supabase.auth.getUser();
    const user = response?.data?.user as User | null;
    const { data } = await supabase.from('Games').select().eq('Games.gm_id', user?.id);
    console.log(data)

    const runningGameCards = data?.map(game => (
        <GameCard key={game.id} id={game.id} name={game.name} playerCount={game.players ? game.players.length : 0} />
    ));
    const playingGameCards = data?.filter(game => game.gm_id !== user?.id).map(game => (
        <GameCard key={game.id} id={game.id} name={game.name} playerCount={game.players ? game.players.length : 0} />
    ));

    

    return (
        <div className=''>
            <p>Running:</p>
            <div className='flex'>
                {runningGameCards}
                <NewGameButton gameType={'create'} />
            </div>
            <p>Playing:</p>
            <div className='flex'>
                {playingGameCards}
                <NewGameButton gameType={'join'} />
            </div>
        </div>
    )
}