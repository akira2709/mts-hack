import { User } from 'lucide-react';
import MovieCard from '../MovieCard/MovieCard.tsx';
import GameCard from '../components/GameCard.tsx';
import AchievementCard from '../components/AchievementCard.tsx';

const Home = () => {
  const movieData = Array(6).fill({
    title: 'Спецкоры',
    rating: 8,
    type: 'Бесплатно',
    imageUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=387'
  });

  const achievements = Array(5).fill({
    title: 'Месяц фильмов',
    description: 'Смотри фильмы и сериалы каждый день',
    progress: '8 / 20'
  });

  const games = Array(5).fill({
    title: 'Угадай фильм',
    duration: '20 мин.'
  });

  return (
    <div className="min-h-screen bg-[#0a0b17] text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold">KION</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-yellow-500">Главная</a>
                <a href="#" className="text-gray-400 hover:text-white">Профиль</a>
                <a href="#" className="text-gray-400 hover:text-white">Статистика</a>
                <div className="text-gray-400">
                  Дней в ударном режиме: <span className="text-white">25</span>
                </div>
              </nav>
            </div>
            <button className="flex items-center space-x-2 bg-blue-900 px-4 py-2 rounded">
              <User size={20} />
              <span>Войти</span>
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Popular Section */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6">Популярно сейчас:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {movieData.map((movie, index) => (
              <MovieCard key={index} {...movie} />
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6">Статистика наград:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} {...achievement} />
            ))}
          </div>
        </section>

        {/* Games Section */}
        <section>
          <h2 className="text-2xl mb-6">Наши игры:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {games.map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;