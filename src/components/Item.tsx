import React from 'react'
import { IItem } from '../models'
import InfoButton from './UI/InfoBtn/InfoButton'
import classes from './styles/movieCard.module.css'

export interface productProps {
    item: IItem
    onClick(): void
}

const Item = ({ item, ...props }: productProps, ) => {

    const itemGenre = item.genres.join(', ')

    function imgDefault ({ currentTarget }:any) {
        currentTarget.onerror = null
        currentTarget.src = 'https://i.kym-cdn.com/photos/images/facebook/000/483/553/f73.png'
    }

    return (
        <div {...props} className={ classes.movieContainer } >
            <InfoButton id={ item.id }/>
            <img 
                src={ item.poster_path } 
                alt={ item.title } 
                className={ classes.itemImg }
                onError={ imgDefault }
            ></img>
            <div className={ classes.movieInfo } onClick={ e => e.stopPropagation() }>
                <h3 className="item-name font-bold text-xl">
                    { item.title.length > 20 
                        ? 
                        item.title.slice(0,18) + '...'
                        : item.title
                    }
                </h3>
                <span className="item-realese px-2 border border-slate-500">
                    { item.release_date.slice(0,4) }
                </span>
            </div>
            <span className={ classes.movieGenres } onClick={ e => e.stopPropagation() }>
                { itemGenre.length > 40 
                    ?
                    itemGenre.slice(0, 40) + '...'
                    : 
                    itemGenre
                }
            </span>
        </div>
    )
}

export default Item