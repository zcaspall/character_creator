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
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const response = await supabase.auth.getUser();
    const user = response?.data?.user as User | null;
    const { data, status, error } = await supabase.from('Games').select(`*, joined_games(player_id)`).or(`gm_id.eq.${user?.id}, joined_games.cs.player_id.eq.${user?.id}`)
    console.log(data)
    const runningGameCards = data?.filter(game => game.gm_id === user?.id).map(game => (
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