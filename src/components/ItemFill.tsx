import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MovieAsctionEnum, IItem, IStoreItem } from '../models'
import { useItems } from './customHooks/useItems'
import { useSort } from './customHooks/useSort'
import Item from './Item'

const ItemFill = () => {

  const { loading, error } = useItems()
  const { sortedPosts } = useSort()

  const dispatch = useDispatch()

  const pickMovie = (item:IItem) => {
    dispatch({type: MovieAsctionEnum.pick, payload: item} )
  }

  const itemsList = useSelector((state: IStoreItem) => state.itemsList)
  const itemsListCopy = useSelector((state: IStoreItem) => state.itemsListCopy)

  
  
  return (
    <div className=' grid grid-cols-4 max-w-7xl items-center justify-items-center w-[90%] gap-10 p-5' >
      { loading && <p className=' mx-auto text-white'>Loading...</p> }
      { error && <p className=' mx-auto text-white'>{ error }</p> }
      { 
      itemsListCopy.length 
      ?
        itemsListCopy.map(item => <Item item={item} key={item.id} onClick={ ()=> {
          pickMovie(item)
        } }/>)
      :
        <h2 className=' text-4xl'>
          Posts not found!
        </h2>
      }
    </div>
  )
}

export default ItemFill