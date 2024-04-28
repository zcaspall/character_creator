'use client'

import React, { useState } from 'react';

const Dice: React.FC = () => {
    const [diceValue, setDiceValue] = useState<number | null>(null);
    const [previousDiceValue, setPreviousDiceValue] = useState<number | null>(null);
    const [diceAmount, setDiceAmount] = useState<number>(1);
    const [allDiceValues, setAllDiceValues] = useState<number[]>([]);
    const [selectedDice, setSelectedDice] = useState<string>("0");
    const [totalAmount, setTotalAmount] = useState<number>(0);

    const rollDice = (sides: number) => {
        const values: number[] = [];
        let total = 0;
        for (let i = 0; i < diceAmount; i++) {
            const value = Math.floor(Math.random() * sides) + 1;
            values.push(value);
            total += value;
        }
        setDiceValue(values[values.length - 1]);
        setPreviousDiceValue(diceValue);
        setAllDiceValues(prevValues => [...prevValues, ...values]);
        setSelectedDice("0");
        setTotalAmount(total);
    };

    const handleDiceSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const sides = parseInt(event.target.value);
        setAllDiceValues([]);
        rollDice(sides);
    };

    const handleDiceAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
        const amount = parseInt(event.target.value);
        setDiceAmount(amount);
    };

    return (
        <div style={{ position: 'relative' }}>
            <select
                value={selectedDice}
                onChange={handleDiceSelection}
                style={{ position: 'absolute', right: 0, transform: 'translateX(-50%)' }}
            >
                <option value="0">Dice</option>
                <option value="20">D20</option>
                <option value="12">D12</option>
                <option value="10">D10</option>
                <option value="8">D8</option>
                <option value="6">D6</option>
                <option value="4">D4</option>
            </select>

            <input type="number" min="1" value={diceAmount} onChange={handleDiceAmount} />

            {allDiceValues.length > 0 && (
                <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    Roll: {totalAmount}
                </p>
            )}
        </div>
    );
};

export default Dice;
