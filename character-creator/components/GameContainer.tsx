'use server'
import { Database } from '@/supabase'
import { User, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import GameCard from './GameCard'
import NewGameButton from './NewGameButton'
import React, { ReactElement } from 'react'
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'


export default async function GameContainer() {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const response = await supabase.auth.getUser();
    const user = response?.data?.user as User | null;
    const { data: joinedGames, error: joinedGamesError } = await supabase.from('JoinedGame').select().eq('player_id', user?.id);
    const { data: hostedGames, error: hostedGamesError } = await supabase.from('Games').select().eq('gm_id', user?.id);
    if (joinedGamesError || hostedGamesError) {
        console.error(joinedGamesError);
        console.error(hostedGamesError);
        return;
    }

    const runningGameCards = hostedGames?.map(game => (
        <GameCard key={game.id} id={game.id} name={game.name} playerCount={game.players ? game.players.length : 0} />
    ));

    const playingGameCards = joinedGames?.map(game => (
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