import React from 'react';

export default function HealthBar({ currentHealth, maxHealth }) {
  const healthPercentage = (currentHealth / maxHealth) * 100;

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
    </div>
  );
}