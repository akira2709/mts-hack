import {User} from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold">KION</h1>
            <nav className="hidden lg:flex space-x-6 mt-1">
              <a href="#" className="text-[#BA9D5A]">Главная</a>
              <a href="#" className="text-gray-400 hover:text-white">Профиль</a>
              <a href="#" className="text-gray-400 hover:text-white">Статистика</a>
              <div className="text-gray-400">
                Дней в ударном режиме: <span className="text-white">25</span>
              </div>
            </nav>
          </div>
          <a href="/login" className="flex items-center space-x-2 rounded mt-3">
            <User size={20}/>
            <span>Войти</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header;