import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesByGenereId from "../Components/GamesByGenereId";

function HomePage() {
  const [allGameList, setAllGameList] = useState();
  const [gameListByGenere, setGameListByGenere] = useState([]);
  const [selectedGenereName,setSelectedGenereName]=useState('Action')

  // Define the function before using it in useEffect
  const getAllGamesList = () => {
    GlobalApi.getAllGames()
      .then((resp) => {
        setAllGameList(resp.data.results);
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
      });
  };

  const getGameListByGenereId = (id) => {
    console.log("GENRE ID", id);
    GlobalApi.getGamesListByGenreId(id).then((resp) => {
      console.log("GenreBy ID:", resp.data.results);
      setGameListByGenere(resp.data.results);
    });
  };

  useEffect(() => {
    getAllGamesList();
    getGameListByGenereId(4); // Example: initial genre ID is 4
  }, []);

  return (
    <div className="grid grid-cols-4 px-8">
      <div className="h-full hidden md:block">
        {/* Pass the function as a prop */}
        <GenreList genereId={getGameListByGenereId} selectedGenereName={(name)=>setSelectedGenereName(name)} />
      </div>
      <div className="col-span-4 md:col-span-3">
        {allGameList?.length > 0 && gameListByGenere.length > 0 ? (
          <div>
            <Banner gameBanner={allGameList[0]} />
            <TrendingGames trendGames={allGameList} />
            <GamesByGenereId gameListByGenreId={gameListByGenere} selectedGenereName={selectedGenereName} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default HomePage;
