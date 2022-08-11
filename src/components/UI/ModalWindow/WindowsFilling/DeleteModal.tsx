import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IStoreItem, ListFilterEnum } from '../../../../models'
import classes from '../../../styles/ModalWindow.module.css'


const DeleteModal = () => {

  const currentMovie = useSelector((state: IStoreItem) => state.item )
  const currentMovieId = useSelector((state: IStoreItem) => state.item.id )
  const movieList = useSelector((state: IStoreItem) => state.itemsList )
  const movieListCopy = useSelector((state: IStoreItem) => state.itemsListCopy )
  const dispatch = useDispatch()

  const [sucсess, setSucсess] = useState(0)

  async function deleteMovies () {
    try{
      let origMovie = movieListCopy.indexOf(currentMovie)
      await axios.delete(`http://localhost:4000/movies/${currentMovieId}`)
      dispatch({
        type: ListFilterEnum.delete,
        payload: origMovie
      })

      setSucсess(1)
    }
    catch (e: any) {
      console.log(e);
      setSucсess(2)
    }
  }

  return (
    <>
      <p className='my-5 font-light text-lg'>
          Are you sure you want to delete this movie?
      </p>
      {sucсess===1 && <p className=' text-green-600 font-extralight text-sm text-center w-full'>Sucсess!</p>}
      {sucсess===2 && <p className=' text-red-600 font-extralight text-sm text-center w-full'>Something went wrong!</p>}
      <button
        className={classes.submitButton}
        onClick={deleteMovies}
      >
        SUBMIT
      </button>
    </>
    
  )
}

export default DeleteModal