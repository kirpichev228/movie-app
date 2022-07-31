import React from 'react'
import { useItems } from './customHooks/useItems'
import classes from './styles/MovieInfo.module.css'

const MovieInfo = () => {
  
    const { item } = useItems()

  return (
    <div className={ classes.infoContainer }>
        <img 
            // src={ item[0].poster_path }
            // alt={ item[0].title } 
            className="w-[300px] h-[450px]" 
        />
        <div className={ classes.descriptionContainer }>
          <h2 className=" text-6xl font-light">
            {/* { item[0].title } */}
            <p className=" font-extralight text-lg opacity-70 mt-2">
              {/* { item[0].tagline } */}
            </p>
          </h2>
          <span className='text-[#db4079] font-light text-2xl'>
            {/* Vote rate: <span className='text-white'>{ item[0].vote_average }</span>   */}
          </span>
          <div className="w-[250px]  flex items-center justify-between text-[#db4079] font-light text-4xl">
            <span className="">
              {/* {item[0].release_date.slice(0, 4)} */}
            </span>
            <span className=''>
              {/* {item[0].runtime} min */}
            </span>
          </div>
          <p className=" font-light text-xl">
            {/* {item[0].overview} */}
          </p>
        </div>
    </div>
  )
}

export default MovieInfo