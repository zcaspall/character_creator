'use client'

import React, { useState } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function HealthBar({ currentHealth = 20, maxHealth = 20, characterName = 'Character Name' }) {
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
      width: '100%', // Adjust the width to make the healthbar smaller
      height: '20px', // Adjust the height to make the healthbar smaller
      backgroundColor: '#ccc',
      position: 'relative'
    }}>
      <div style={{ 
        width: `${healthPercentage}%`, 
        height: '100%', 
        backgroundColor: healthPercentage < 20 ? 'red' : 'green' 
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '16px',
        color: 'black'
      }}>
        {characterName}
      </div>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        marginTop: '30px' // Adjust the marginTop to position the buttons closer to the healthbar
      }}>
        <button className="decrease-button" style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px', borderRadius: '5px', border: 'none' }} onClick={decreaseHealth}>-</button>
        <div>{health}/{maxHealth}</div>
        <button className="increase-button" style={{ backgroundColor: 'blue', color: 'white', padding: '5px 10px', borderRadius: '5px', border: 'none' }} onClick={increaseHealth}>+</button>
      </div>
    </div>
  );
}
