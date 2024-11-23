import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

function GenreList({ genereId,selectedGenereName }) {
  const [generes, setGeneres] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const getGenreList = () => {
    GlobalApi.getGenreList().then((resp) => {
      console.log(resp.data.results);
      setGeneres(resp.data.results);
    });
  };

  useEffect(() => {
    getGenreList();
  }, []);

  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">Genre</h2>
      {generes.map((item, index) => (
        <div
          key={item.id}
          onClick={() => {
            setActiveIndex(index);
            genereId(item.id); // Call the passed function here
            selectedGenereName(item.name)
          }}
          className={`flex gap-2 items-center mb-4 cursor-pointer hover:bg-gray-300 p-2 mr-8 group rounded-lg hover:dark:bg-gray-600 ${
            activeIndex === index ? "bg-gray-300 dark:bg-gray-600" : ""
          }`}
        >
          <img
            src={item.image_background}
            alt="Image"
            className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-100 ${
              activeIndex === index ? "scale-105" : ""
            }`}
          />
          <h3
            className={`text-[18px] font-normal dark:text-white group-hover:font-bold scale-105 transition-all ease-out duration-100 ${
              activeIndex === index ? "font-bold" : ""
            }`}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
