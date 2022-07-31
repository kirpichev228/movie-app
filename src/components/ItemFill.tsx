import React from 'react'
import { useItems } from './customHooks/useItems'
import Item from './Item'

const ItemFill = () => {

    const { loading, error, item } = useItems()
  return (
    <div className=' grid grid-cols-3 max-w-7xl items-center justify-items-center w-[90%] gap-10 p-5' >
      { loading && <p className=' mx-auto text-white'>Loading...</p> }
      { error && <p className=' mx-auto text-white'>{ error }</p> }
      { item.map(item => <Item item={item} key={item.id}/>) }
    </div>
  )
}

export default ItemFill