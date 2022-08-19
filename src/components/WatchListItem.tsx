import React, { useState } from 'react'
import { useMovie } from './customHooks/useMovie'
import classes from '../components/styles/WatchListItem.module.css'
import ManageBtn from './UI/ManageList/ManageBtn'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IStoreItem, WatchListEnum } from '../models'

type WatchListType = {
    id: number
}

const WatchListItem = (props: WatchListType) => {

    const { movie } = useMovie(props.id)
    const watchList = useSelector((state: IStoreItem) => state.watchList)
    const dispatch = useDispatch()
    const [style, setStyle] = useState({})
    
    const deleteFromList = () => {
        const itemIndex = watchList.indexOf(props.id, 0);
        watchList.splice(itemIndex, 1)
        dispatch({
            type: WatchListEnum.delete,
            movie: watchList
        })  
        setStyle({display: 'none'})
    }

    function imgDefault ({ currentTarget }: any): void {
        currentTarget.onerror = null
        currentTarget.src = 'https://i.kym-cdn.com/photos/images/facebook/000/483/553/f73.png'
    }

  return (
    <div className={ classes.itemContainer } style={ style }>
        <img 
            src={ movie?.poster_path } 
            alt={ movie?.title } 
            className={ classes.itemImage }
            onError={ imgDefault }
        />
        <h2 className={ classes.itemHeading }>
            { movie?.title }
        </h2>
        <div className={ classes.buttonsBlock }>
            <ManageBtn
                onClick={ deleteFromList }
            >
                Delete from the list
            </ManageBtn>
            <Link 
                to={`/posts/${ props.id }`} 
                className={ classes.manageBtns }
            >
                TO MOVIE PAGE
            </Link>
        </div>
    </div>
  )
}

export default WatchListItem