import React from 'react'
import { useSelector } from 'react-redux'
import classes from './styles/MovieInfo.module.css'

const MovieInfo = () => {
  
  const movie = useSelector( state => state.item )

  return (
    <div className={ classes.infoContainer }>
        <img 
            src={ movie.poster_path }
            alt={ movie.title } 
            className="w-[300px] h-[450px]" 
        />
        <div className={ classes.descriptionContainer }>
          <h2 className=" text-6xl font-light">
            { movie.title }
            <p className=" font-extralight text-lg opacity-70 mt-2">
              { movie.tagline }
            </p>
          </h2>
          <span className='text-[#db4079] font-light text-2xl'>
            Vote rate: <span className='text-white'>{ movie.vote_average }</span>  
          </span>
          <div className="w-[250px]  flex items-center justify-between text-[#db4079] font-light text-4xl">
            <span className="">
              {movie.release_date.slice(0, 4)}
            </span>
            <span className=''>
              {movie.runtime} min
            </span>
          </div>
          <p className=" font-light text-xl">
            {movie.overview}
          </p>
        </div>
    </div>
  )
}

export default MovieInfo