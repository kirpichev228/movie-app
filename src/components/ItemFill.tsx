import React from 'react'
import { useDispatch } from 'react-redux'
import { MovieAsctionEnum, IItem } from '../models'
import { useItems } from './customHooks/useItems'
import Item from './Item'

const ItemFill = () => {

  const { loading, error, item } = useItems()
  const dispatch = useDispatch()

  const pickMovie = (item:IItem) => {
    dispatch({type: MovieAsctionEnum.pick, payload: item} )
  }
    
  return (
    <div className=' grid grid-cols-4 max-w-7xl items-center justify-items-center w-[90%] gap-10 p-5' >
      { loading && <p className=' mx-auto text-white'>Loading...</p> }
      { error && <p className=' mx-auto text-white'>{ error }</p> }
      { item.map(item => <Item item={item} key={item.id} onClick={ ()=> {
        pickMovie(item)
      } }/>) }
    </div>
  )
}

export default ItemFill