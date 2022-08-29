import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GenreSort, IStoreItem } from '../../../models'
import classes from './SortButton.module.css'

type btnType = {
  children: string
}

const SortButton = (props:btnType) => {

  const dispatch = useDispatch()
  const genresList = useSelector((state:IStoreItem) => state.selectedGenres)

  const [isPicked, setisPicked] = useState(true)
  const isPickedCheck = () => {
    setisPicked(!isPicked)
    if (genresList.includes(props.children.toLowerCase())){
      dispatch({
        type: GenreSort.DELETE_GENRE,
        genre: props.children.toLowerCase()
      })
    } else {
      dispatch({
        type: GenreSort.ADD_GENRE,
        genre: props.children.toLowerCase()
      })
    }    
  }

  return (
    <button 
      className={ isPicked ? classes.sortBtn : classes.sortBtnPicked }
      onClick={ isPickedCheck }
    >
      {props.children}
    </button>
  )
}

export default SortButton