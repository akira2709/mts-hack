import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import AxiosInstance from "../api/instance.ts";
import {User} from "lucide-react";

interface UserBase {
  username: string;
  password: string;
  ac_creation_time?: string | null;
  last_activity?: string | null;
  points?: number;
  quizes_done?: string;
  ach_done?: string;
  likes?: number;
  dislikes?: number;
  films_watched?: number;
  streak_days?: number;
}
const Header = () => {
  const [user, setUser] = useState<UserBase | null>(null);

  const fetchProfile = () => {
    AxiosInstance.get('/profile')
      .then(response => {
        setUser(response.data as UserBase);
      })
  };

  useEffect(() => {
    fetchProfile();
  }, []);

	const navigate = useNavigate()
  return (
    <header className="border-b border-gray-800">
      <div className="py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <img src='/img/logo.webp' alt='' className="h-[50px] cursor-pointer" onClick={() => navigate("/")}/>
            <nav className="hidden lg:flex space-x-6 mt-1">
              <a onClick={() => navigate("/")} className="text-[#BA9D5A] cursor-pointer">Главная</a>
              {user && (
                <div className="text-gray-400">
                  Дней в ударном режиме: <span className="text-white">{user.streak_days}</span>
                </div>
              )}
            </nav>
          </div>
          <a onClick={() => navigate(user ? "/profile" : "/login")}
             className="flex items-center space-x-2 rounded mt-3 cursor-pointer">
            <User size={20}/>
            {user? (
              <span>{user.username}</span>
            ) : (
              <span>Войти</span>
            )}
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header;
