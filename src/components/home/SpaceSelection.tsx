"use client";
import React, { useState } from 'react';

const SpaceSelection = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const cards = [
    { id: 1, title: "Space 1" },
    { id: 2, title: "Space 2" },
    { id: 3, title: "Space 3" },
    { id: 4, title: "Space 4" },
    { id: 5, title: "Space 5" }
  ];

  return (
    <section className="min-h-screen bg-slate-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Choose your 
            <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mt-2">
              space
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => setSelectedCard(card.id)}
              className={`
                relative group cursor-pointer transition-all duration-500 ease-out
                ${selectedCard === card.id ? 'scale-105' : 'hover:scale-105'}
              `}
            >
              {/* Card */}
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-64 flex items-center justify-center transition-all duration-500">
                
                {/* Gold Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-yellow-400/20 via-yellow-300/30 to-yellow-500/20 blur-xl transform scale-110" />
                
                {/* Inner glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-yellow-400/10 via-yellow-300/20 to-yellow-500/10" />
                
                {/* Card Content */}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl flex items-center justify-center group-hover:from-yellow-400/20 group-hover:to-yellow-500/20 transition-all duration-500">
                    <div className="w-8 h-8 bg-slate-500 rounded-lg group-hover:bg-yellow-400/50 transition-all duration-500" />
                  </div>
                  
                  <h3 className="text-white/80 text-lg font-medium group-hover:text-white transition-all duration-300">
                    {card.title}
                  </h3>
                  
                  {/* Selected indicator */}
                  {selectedCard === card.id && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                
                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 border border-yellow-400/30" />
              </div>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        {selectedCard && (
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 font-bold py-4 px-8 rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25">
              Continue with Space {selectedCard}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SpaceSelection;