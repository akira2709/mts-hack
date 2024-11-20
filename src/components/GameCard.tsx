import React from 'react';
import { GamepadIcon } from 'lucide-react';

interface GameCardProps {
  title: string;
  duration: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, duration }) => {
  return (
    <div className="bg-red-600 rounded-lg p-6 text-center hover:bg-red-700 transition-colors cursor-pointer">
      <GamepadIcon className="w-12 h-12 mx-auto mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm opacity-80">{duration}</p>
    </div>
  );
}

export default GameCard;