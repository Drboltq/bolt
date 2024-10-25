import React from 'react';

const GameGrid = () => {
  const games = [
    {
      title: "Space Explorer",
      image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80&w=1000",
      players: "1.2k playing",
      category: "Adventure"
    },
    {
      title: "Pixel Warriors",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=1000",
      players: "856 playing",
      category: "Action"
    },
    {
      title: "Mind Maze",
      image: "https://images.unsplash.com/photo-1616499370260-485b3e5ed653?auto=format&fit=crop&q=80&w=1000",
      players: "2.1k playing",
      category: "Puzzle"
    },
    {
      title: "Speed Racing",
      image: "https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&q=80&w=1000",
      players: "945 playing",
      category: "Racing"
    }
  ];

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Popular Games</h2>
        <button className="text-purple-400 hover:text-purple-300 transition-colors">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <div
            key={game.title}
            className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-lg transition-transform hover:-translate-y-1"
          >
            <div className="aspect-[4/3] w-full">
              <img
                src={game.image}
                alt={game.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{game.title}</h3>
              <div className="mt-2 flex justify-between text-sm">
                <span className="text-purple-300">{game.category}</span>
                <span className="text-green-400">{game.players}</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity group-hover:opacity-100">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <button className="w-full rounded-lg bg-purple-500 py-2 text-center font-semibold text-white hover:bg-purple-600 transition-colors">
                  Play Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameGrid;