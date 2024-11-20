import Header from "../components/Header.tsx";

interface Movie {
  id: number;
  image_url: string;
}

const GuessMovie = () => {
  const movie: Movie = {
    id: 123,
    image_url: "https://avatars.mds.yandex.net/i?id=d120faad19d96f5257f37befcb382776_l-5292406-images-thumbs&n=13",
  }


  return (
    <div className="px-[80px]">
      <Header />
      <div className="flex flex-col items-center justify-center gap-5">
        <span className="mt-5 text-2xl">Угадай фильм по кадру</span>
        <img src={movie.image_url} alt="" className="max-h-[60vh]"/>
        <div className="grid-cols-2 justify-center gap-x-9 gap-y-2 flex flex-wrap">
          <div className="bg-[#080D2C] text-white w-max px-6 py-5 rounded-2xl cursor-pointer">Старый бог</div>
          <div className="bg-[#080D2C] text-white w-max px-6 py-5 rounded-2xl cursor-pointer">Старый бог</div>
          <div className="bg-[#080D2C] text-white w-max px-6 py-5 rounded-2xl cursor-pointer">Старый бог</div>
          <div className="bg-[#080D2C] text-white w-max px-6 py-5 rounded-2xl cursor-pointer">Старый бог</div>
        </div>
      </div>
    </div>
  )
}

export default GuessMovie;