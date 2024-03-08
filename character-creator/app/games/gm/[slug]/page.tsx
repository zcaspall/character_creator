'use client';
import React from 'react';
import { Tab, Tabs } from '@nextui-org/react';
export default function gamePageGmView() {
    return (
        <div className='gm-nav'>
            <Tabs color='warning'>
                <Tab key='player-characters' title='Player Characters'>
                </Tab>
                <Tab key='npcs' title='NPCs'>
                </Tab>
                <Tab key='locations' title='Locations'>
                </Tab>
                <Tab key='sessions' title='Sessions'>
                </Tab>
                <Tab key='story' title='Story'>
                </Tab>
            </Tabs>
        </div>
    )
}