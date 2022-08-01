import React, { useState } from 'react'
import { IItem } from '../models'
import { useItems } from './customHooks/useItems'
import Item from './Item'

const ItemFill = () => {

    const { loading, error, item } = useItems()
    const [pickedFilm, setPickedFilm] = useState<IItem>()

  return (
    <div className=' grid grid-cols-4 max-w-7xl items-center justify-items-center w-[90%] gap-10 p-5' >
      { loading && <p className=' mx-auto text-white'>Loading...</p> }
      { error && <p className=' mx-auto text-white'>{ error }</p> }
      { item.map(item => <Item item={item} key={item.id} onClick={ ()=> {
          // console.log(item)
          setPickedFilm(item)
          console.log(pickedFilm)
        } }/>) }
    </div>
  )
}

export default ItemFill