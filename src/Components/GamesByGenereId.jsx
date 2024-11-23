import React, { useEffect } from 'react'

function GamesByGenereId({gameListByGenreId,selectedGenereName}) {
    useEffect(()=>{
        console.log("gameListByGenreId",gameListByGenreId);
    },[])
  return (
    <div>
        <h2 className='font-bold text-[30px] dark:text-white mt-5'>{selectedGenereName.includes('Games') ? selectedGenereName : `${selectedGenereName} Games`}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8 mb-[5%] '>
            {gameListByGenreId.map((item)=>(
                <div className='bg-[#76a8f75e] p-4 rounded-lg pb-[25%] h-full hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer'>
                    <img src={item.background_image} alt="" className='w-full h-[80%] rounded-xl object-cover' />
                    <h2 className='text-[20px] dark:text-white font-bold pt-2'>{item.name} <span className='p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium'>{item.metacritic}</span></h2> 
                    <h2 className='text-gray-500 dark:text-gray-300'> ⭐{item.rating}    💬{item.reviews_count}    🔥{item.suggestions_count}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default GamesByGenereId