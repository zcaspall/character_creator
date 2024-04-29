"use client";
import { Tab, Tabs } from '@nextui-org/react';
import SessionNotes from '@/components/GameMasterView/SessionNotes';
import Dice from '@/components/Dice';
import PlayerCharactersView from '@/components/GameMasterView/PlayerCharactersView';

export default function gamePageGmView({ params } : { params: { slug: string } }) {
    return (
        <div className='gm-nav'>
            <Tabs color='default' variant='underlined' >
                <Tab key='characters' title='Player Characters'>
                    <PlayerCharactersView slug={params.slug} />
                </Tab>
                <Tab key='npcs' title='NPCs'>
                </Tab>
                <Tab key="encounters" title="Encounters">
                </Tab>
                <Tab key='notes' title='Notes'>
                    <SessionNotes slug={params.slug} />
                </Tab>
            </Tabs>
        </div>
    )
}