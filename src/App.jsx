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
    const key = `${suit.symbol}-${rank]`;
    setCheckedCards((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const resetAll = () => setCheckedCards({});

  const totalCards = suits.length * ranks.length;
  const checkedCount = Object.values(checkedCards).filter(Boolean).length;

  return (
    <main className="p-4 min-h-screen bg-white text-black">
      <h1 className="text-3xl font-bold text-center mb-2">Contador de Cartas - Golpeado</h1>

      <div className="flex flex-col items-center gap-2 mb-4">
        <p className="text-lg">Cartas marcadas: <strong>{checkedCount}</strong> / {totalCards}</p>
        <button
          onClick={resetAll}
          className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
        >
          Limpiar todo
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-base border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border border-gray-300 text-left">Carta</th>
              {suits.map((suit) => (
                <th key={suit.symbol} className="p-2 border border-gray-300 text-center text-xl">
                  {suit.symbol}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ranks.map((rank) => (
              <tr key={rank} className="even:bg-gray-50">
                <td className="p-2 border border-gray-300 font-semibold text-lg">{rank}</td>
                {suits.map((suit) => {
                  const key = \`\${suit.symbol}-\${rank}\`;
                  const isChecked = !!checkedCards[key];
                  return (
                    <td
                      key={key}
                      className="p-2 border border-gray-300 text-center cursor-pointer"
                      onClick={() => toggleCard(suit.symbol, rank)}
                    >
                      <div
                        className={\`w-10 h-10 mx-auto rounded border-2 border-gray-500 flex items-center justify-center text-lg transition-colors duration-200 \${isChecked ? 'bg-green-500 text-white' : 'bg-white hover:bg-gray-200'}\`}
                      >
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
