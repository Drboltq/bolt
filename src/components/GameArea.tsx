import React from 'react';

const GameArea = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 mb-24">
      <div className="relative w-96 h-96 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center">
        {/* Placeholder for the actual wheel implementation */}
        <div className="absolute inset-2 rounded-full border-4 border-dashed border-purple-400 animate-spin-slow"></div>
        <div className="text-white text-xl font-bold">Wheel Coming Soon</div>
      </div>
      
      <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl shadow-lg transform transition-transform hover:scale-105 active:scale-95">
        SPIN NOW
      </button>

      <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
          <h3 className="text-purple-400 text-sm mb-2">Available Balance</h3>
          <p className="text-2xl font-bold text-white">0.0000 USDT</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
          <h3 className="text-purple-400 text-sm mb-2">Total Winnings</h3>
          <p className="text-2xl font-bold text-white">0.0000 USDT</p>
        </div>
      </div>
    </div>
  );
};

export default GameArea;