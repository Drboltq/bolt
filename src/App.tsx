import React from 'react';
import Sidebar from './components/Sidebar';
import AnnouncementSlider from './components/AnnouncementSlider';
import GameArea from './components/GameArea';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-950 to-purple-900">
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8 flex flex-col items-center text-center">
            <h1 className="text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Crypto Wheel
            </h1>
            <p className="text-purple-200 mb-8">Spin the wheel to win crypto rewards!</p>
            <AnnouncementSlider />
          </header>
          <GameArea />
        </div>
      </main>
      <Sidebar />
    </div>
  );
}

export default App;