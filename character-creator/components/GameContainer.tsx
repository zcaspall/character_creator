'use client'
import { Database } from '@/supabase'
import { User, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import GameCard from './GameCard'
import NewGameButton from './NewGameButton'
import React, { ReactElement, useCallback, useEffect, useState } from 'react'

export default function GameContainer({ user }: { user: User }) {
    const supabase = createClientComponentClient<Database>()
    const [runningGameCards, setRunningGameCards] = useState<React.ReactNode[]>([])
    const [playingGameCards, setPlayingGameCards] = useState<React.ReactNode[]>([])

    const getGames = useCallback(async () => {
        try {
            const { data, error, status } = await supabase
                .from('Games')
                .select()

            if (error && status !== 406) {
                throw error
            }

            console.log(data)

            if (data) {
                data.forEach(game => {
                    if (game.gm_id === user.id) {
                        setRunningGameCards([
                            ...runningGameCards, <GameCard id={game.id} name={game.name} playerCount={(game.players) ? (game.players.length) : (0)} />
                        ])
                    } else {
                        setPlayingGameCards([
                            <GameCard id={game.id} name={game.name} playerCount={(game.players) ? (game.players.length) : (0)} />
                        ])
                    }
                })
            }
        } catch (error) {
            alert('Error loading game data!')
            console.log(error)
        }
    }, [user, supabase])

    useEffect(() => {
        getGames()
    }, [user, getGames])

    return (
        <div className=''>
            <p>Running:</p>
            {(runningGameCards.length) ? runningGameCards : <NewGameButton gameType={'create'} />}
            <hr></hr>
            <p>Playing:</p>
            {(playingGameCards.length) ? playingGameCards : <NewGameButton gameType={'join'} />}
        </div>
    )
}