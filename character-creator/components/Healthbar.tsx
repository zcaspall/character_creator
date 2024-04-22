import React, { useState } from 'react';

export default function HealthBar({ currentHealth = 100, maxHealth = 100 }) {
  const [health, setHealth] = useState(currentHealth);

  const increaseHealth = () => {
    if (health < maxHealth) {
      setHealth(health + 1);
    }
  };

  const decreaseHealth = () => {
    if (health > 0) {
      setHealth(health - 1);
    }
  };

  const healthPercentage = (health / maxHealth) * 100;

  return (
    <div style={{ 
      width: '100%', 
      height: '20px', 
      backgroundColor: '#ccc' 
    }}>
      <div style={{ 
        width: `${healthPercentage}%`, 
        height: '100%', 
        backgroundColor: healthPercentage < 20 ? 'red' : 'green' 
      }} />
      <div>
        <button onClick={increaseHealth}>Increase Health</button>
        <button onClick={decreaseHealth}>Decrease Health</button>
      </div>
    </div>
  );
}