import MovieCard from '../components/MovieCard.tsx';
import GameCard from '../components/GameCard.tsx';
import AchievementCard from '../components/AchievementCard.tsx';
import Header from "../components/Header.tsx";

const Home = () => {
  const movieData = Array(6).fill({
    title: 'Праздники',
    rating: 8,
    type: 'Бесплатно',
    imageUrl: 'https://static.kion.ru/content/mts/series/66067000/posters/VERTICAL_d60dd2fbe9479db727bf4d58618ef888.webp?x=168&y=10&ar=keep'
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
    <div className="min-h-screen bg-[#0a0b17] text-white px-[80px]">
      {/* Header */}
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Popular Section */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6">Популярно сейчас:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {movieData.map((movie, index) => (
              <MovieCard key={index} {...movie} />
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6">Статистика наград:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} {...achievement} />
            ))}
          </div>
        </section>

        {/* Games Section */}
        <section>
          <h2 className="text-2xl mb-6">Наши игры:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
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