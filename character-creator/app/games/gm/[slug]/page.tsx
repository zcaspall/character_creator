"use client";
import { Tab, Tabs } from '@nextui-org/react';
import SessionNotes from '@/components/GameMasterView/SessionNotes';
export default function gamePageGmView({ params } : { params: { slug: string } }) {
    return (
        <div className='gm-nav'>
            <Tabs color='default' variant='underlined' >
                <Tab key='characters' title='Player Characters'>
                </Tab>
                <Tab key='npcs' title='NPCs' href='/npcs'>
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