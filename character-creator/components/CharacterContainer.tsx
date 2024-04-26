'use client'
import React from 'react';
import HealthBar from '@/components/Healthbar';

const CharacterContainer: React.FC = () => {
    const characterName = 'John Doe';
    const characterLevel = 1;
    const stats = {
        STR: 10,
        DEX: 12,
        CON: 14,
        INT: 8,
        WIS: 16,
        CHR: 10,
    };

    return (
        <div className="character-container" style={{ border: '1px solid black', borderRadius: '10px', padding: '10px', textAlign: 'center', width: '300px', background: 'linear-gradient(to bottom, #301934, #483248)' }}>
            <h2>Level: {characterLevel}</h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <HealthBar />
            </div>
            <div style={{ marginBottom: '30px' }}></div> {/* Add space below the HealthBar */}
            <div className="stats-container">
                <h3>Stats:</h3>
                <ul>
                    <li>(STR): {stats.STR}</li>
                    <li>(DEX): {stats.DEX}</li>
                    <li>(CON): {stats.CON}</li>
                    <li>(INT): {stats.INT}</li>
                    <li>(WIS): {stats.WIS}</li>
                    <li>(CHA): {stats.CHR}</li>
                </ul>
            </div>
        </div>
    );
};

export default CharacterContainer;