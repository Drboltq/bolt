import React from 'react';
import { Disc3, Wallet, Users2, ListTodo } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Disc3, label: 'Spin', active: true },
    { icon: Wallet, label: 'Wallet' },
    { icon: Users2, label: 'Referral' },
    { icon: ListTodo, label: 'Tasks' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/20 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <nav className="flex justify-around py-4">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors
                ${item.active 
                  ? 'text-purple-400' 
                  : 'text-gray-400 hover:text-white'}`}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;