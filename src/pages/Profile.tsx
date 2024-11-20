import { Trophy, Film, Star, Clock } from 'lucide-react';
import MovieCard from "../components/MovieCard.tsx";
import Header from "../components/Header.tsx";

const Profile = () => {
  const user = {
    name: "Иван Старабогов",
    avatar: "https://avatars.githubusercontent.com/u/105022062?v=4",
    stats: {
      watching: "48",
      completed: "156"
    },
    favoriteMovies: [
      {
        title: "Начало",
        poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300"
      },
      {
        title: "Интерстеллар",
        poster: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=300"
      },
      {
        title: "Матрица",
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300"
      }
    ],
    achievements: [
      { icon: Trophy, label: "Любитель кино", color: "text-yellow-500" },
      { icon: Star, label: "Лучший рецензент", color: "text-purple-500" },
      { icon: Clock, label: "Ранний пользователь", color: "text-blue-500" }
    ]
  };

  return (
    <div className="px-[80px]">
      <Header />
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-4xl bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="pt-20 px-8 pb-8">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{user.name}</h1>
                <div className="flex gap-4 flex-wrap">
                  {user.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-gray-700 rounded-full px-4 py-1 transform transition hover:scale-105"
                    >
                      <achievement.icon className={`w-4 h-4 ${achievement.color}`} />
                      <span className="text-sm text-gray-300">{achievement.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-6">
                <StatCard icon={Film} label="Смотрит сейчас" value={user.stats.watching} />
                <StatCard icon={Clock} label="Просмотрено" value={user.stats.completed} />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white">Любимые фильмы</h2>
              <div className="grid grid-cols-3 gap-4">
                {user.favoriteMovies.map((movie, index) => (
                  <MovieCard type="По подписке" key={index} title={movie.title} rating={4} imageUrl={movie.poster}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="text-center group">
      <div className="bg-gray-700 p-3 rounded-lg mb-2 transform transition group-hover:scale-110 group-hover:bg-gray-600 justify-center items-center flex">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}

export default Profile;