import React, { useState } from 'react';

const Dice: React.FC = () => {
    const [diceValue, setDiceValue] = useState<number | null>(null);

    const rollDice = (sides: number) => {
        const value = Math.floor(Math.random() * sides) + 1;
        setDiceValue(value);
    };

    const handleDiceSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const sides = parseInt(event.target.value);
        rollDice(sides);
    };

    return (
        <div style={{ position: 'relative' }}>
            <select
                onChange={handleDiceSelection}
                style={{ position: 'absolute', right: 0, transform: 'translateX(-100%)' }}
            >
                <option value="20">D20</option>
                <option value="12">D12</option>
                <option value="10">D10</option>
                <option value="8">D8</option>
                <option value="6">D6</option>
                <option value="4">D4</option>
            </select>

            {diceValue && <p>Result: {diceValue}</p>}
        </div>
    );
};

export default Dice;