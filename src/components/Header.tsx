import {User} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate()
  return (
    <header className="border-b border-gray-800">
      <div className="py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <img src='/img/logo.webp' alt='' className="h-[50px] cursor-pointer" onClick={() => navigate("/")}/>
            <nav className="hidden lg:flex space-x-6 mt-1">
              <a onClick={() => navigate("/")} className="text-[#BA9D5A] cursor-pointer">Главная</a>
              <div className="text-gray-400">
                Дней в ударном режиме: <span className="text-white">25</span>
              </div>
            </nav>
          </div>
          <a href="/login" className="flex items-center space-x-2 rounded mt-3">
            <User size={20}/>
            <span onClick={() => navigate("/login")}>Войти</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header;
