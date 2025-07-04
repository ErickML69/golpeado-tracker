import { useState } from "react";

const suits = [
  { symbol: "♠", name: "Espadas" },
  { symbol: "♥", name: "Corazones" },
  { symbol: "♦", name: "Diamantes" },
  { symbol: "♣", name: "Tréboles" },
];

const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

export default function CardTracker() {
  const [checkedCards, setCheckedCards] = useState({});

  const toggleCard = (suit, rank) => {
    const key = `${suit}-${rank}`;
    setCheckedCards(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const resetAll = () => setCheckedCards({});

  const totalCards = suits.length * ranks.length;
  const checkedCount = Object.values(checkedCards).filter(Boolean).length;

  return (
    <main style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Contador de Cartas - Golpeado</h1>

      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        marginBottom: '20px',
        gap: '10px'
      }}>
        <p style={{ fontSize: '1.2rem' }}>
          Cartas marcadas: <strong>{checkedCount}</strong> / {totalCards}
        </p>
        <button onClick={resetAll}>
          Limpiar todo
        </button>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }}>Carta</th>
              {suits.map(suit => (
                <th key={suit.symbol} style={{ fontSize: '1.5rem' }}>
                  {suit.symbol}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ranks.map(rank => (
              <tr key={rank} style={{ backgroundColor: 'rgba(0,0,0,0.02)' }}>
                <td style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{rank}</td>
                {suits.map(suit => {
                  const key = `${suit.symbol}-${rank}`;
                  const isChecked = !!checkedCards[key];
                  return (
                    <td
                      key={key}
                      onClick={() => toggleCard(suit.symbol, rank)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div style={{
                        width: '40px',
                        height: '40px',
                        margin: '0 auto',
                        borderRadius: '4px',
                        border: '2px solid #555',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: isChecked ? '#28a745' : 'white',
                        color: isChecked ? 'white' : 'transparent',
                        transition: 'all 0.2s'
                      }}>
                        {isChecked ? '✓' : ''}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}