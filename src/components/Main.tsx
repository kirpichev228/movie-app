import React from 'react'
import Item from './Item'
import { products } from './products'

const Main = () => {
  return (
    <div className=' grid grid-cols-7 gap-4 p-5' >
        <Item product={ products[0] }/>
    </div>
  )
}

export default Main