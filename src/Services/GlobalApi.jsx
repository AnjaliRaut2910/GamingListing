import axios from "axios";
const key = "cf5193874a2b41218a7344bd1b0dc5b8";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});
const getGenreList = () => {
  return axiosCreate.get(`/genres?key=${key}`).catch((error) => {
    console.error("Error fetching genres:", error.message);
  });
};

const getAllGames = () => {
  return axiosCreate.get(`/games?key=${key}`).catch((error) => {
    console.error("Error fetching games:", error.message);
  });
};

const getGamesListByGenreId=(id)=>{
return axiosCreate.get('/games?key='+key+'&genres='+id)
}

export default { getGenreList, getAllGames,getGamesListByGenreId };
