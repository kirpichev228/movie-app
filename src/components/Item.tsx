import React from 'react'
import { IItem } from '../models'
import InfoButton from './UI/InfoBtn/InfoButton'
import classes from './styles/movieCard.module.css'
// import { products } from './products'

export interface productProps {
    item: IItem
    onClick(): void
}

const Item = ({ item, ...props }: productProps, ) => {

    function imgDefault ({ currentTarget }:any) {
        currentTarget.onerror = null
        currentTarget.src = 'https://i.kym-cdn.com/photos/images/facebook/000/483/553/f73.png'
    }
    return (
        <div {...props} className={ classes.movieContainer } >
            <InfoButton/>
            <img 
                src={ item.poster_path } 
                alt={ item.title } 
                className=' w-[300px] h-[450px]'
                onError={ imgDefault }
            ></img>
            <div className={ classes.movieInfo }>
                <h3 className="item-name font-bold text-xl">
                    { item.title.length > 21 
                        ? 
                        item.title.slice(0,19) + '...'
                        : item.title
                    }
                </h3>
                <span className="item-realese px-2 border border-slate-500">
                    { item.release_date.slice(0,4) }
                </span>
            </div>
            <span className={classes.movieGenres}>
                { item.genres.join(', ') }
            </span>
        </div>
    )
}

export default Item