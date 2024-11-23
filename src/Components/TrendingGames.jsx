import React, { useEffect } from "react";

function TrendingGames({ trendGames }) {
  useEffect(() => {
    console.log("Check my Trending games", trendGames);
  }, []);
  return (
    <>
    <div className="hidden md:block">
    <h2 className="font-bold text-[30px] dark:text-white mt-5">Trending Games</h2>
    <div className=" md:grid md:grid-cols-3 gap-5 lg:grid-cols-4">
      {trendGames.map(
        (item, index) =>
          index < 4 && (
            <div className="bg-[#76a8f75e] rounded-lg group hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer mt-8">
              <img src={item.background_image} alt="" className="h-[270px] rounded-t-lg object-cover" />
              <h2 className="dark:text-white text-[20px] p-2 font-bold">{item.name}</h2>
            </div>
          )
      )}
    </div>
    </div>
    </>
  );
}

export default TrendingGames;
