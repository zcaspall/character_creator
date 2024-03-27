'use client';
import React from 'react';
import { Tab, Tabs } from '@nextui-org/react';
import SessionNotes from '@/components/GameMasterView/SessionNotes';
export default function gamePageGmView({ params } : { params: { slug: string } }) {
    
    return (
        <div className='gm-nav'>
            <Tabs color='default' variant='underlined'>
                <Tab key='player-characters' title='Player Characters'>
                </Tab>
                <Tab key='npcs' title='NPCs'>
                </Tab>
                <Tab key='locations' title='Locations'>
                </Tab>
                <Tab key="encounters" title="Encounters">
                </Tab>
                <Tab key='sessions' title='Sessions'>
                    <SessionNotes slug={params.slug} />
                </Tab>
                <Tab key='story' title='Story'>
                </Tab>
            </Tabs>
        </div>
    )
}