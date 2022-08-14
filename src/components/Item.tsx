import React from 'react'
import { IItem, IStoreItem, WatchListEnum } from '../models'
import InfoButton from './UI/InfoBtn/InfoButton'
import classes from './styles/movieCard.module.css'
import { useWatchAdd } from './customHooks/useWatchAdd'
import { useDispatch, useSelector } from 'react-redux'
// import { products } from './products'

export interface productProps {
    item: IItem
    onClick(): void
}

const Item = ({ item, ...props }: productProps, ) => {

    const itemGenre = item.genres.join(', ')
    const dispatch = useDispatch()

    function imgDefault ({ currentTarget }:any) {
        currentTarget.onerror = null
        currentTarget.src = 'https://i.kym-cdn.com/photos/images/facebook/000/483/553/f73.png'
    }

  const watchList = useSelector((state: IStoreItem) => state.watchList)


    const addTolist = (e) => {
        e.stopPropagation()
        if (watchList.includes(item.id)) {
            return watchList
        } else {
            dispatch({
                type: WatchListEnum.push,
                movie: item.id
            })
        }        
    }
    return (
        <div {...props} className={ classes.movieContainer } >
            <InfoButton/>
            <img 
                src={ item.poster_path } 
                alt={ item.title } 
                className={classes.itemImg}
                onError={ imgDefault }
            ></img>
            <button 
                className='absolute bg-white text-black'
                onClick={ addTolist }
            >
                add
            </button>
            <div className={ classes.movieInfo } onClick={ e => e.stopPropagation() }>
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
            <span className={classes.movieGenres} onClick={ e => e.stopPropagation() }>
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