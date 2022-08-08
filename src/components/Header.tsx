import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IStoreItem, ListFilterEnum } from '../models'
import { useSearch } from './customHooks/useSearch'

const Header = () => {

  const [searchQuery, setSearchQuery] = useState('')
  const dispatch = useDispatch()
  const itemsList = useSelector((state: IStoreItem) => state.itemsList)
  const itemsListCopy = useSelector((state: IStoreItem) => state.itemsListCopy)

  const {Test} = useSearch(searchQuery)

//   const searched = useMemo( () => {      
//     return itemsListCopy.filter( post => post.title.toLowerCase().includes(searchQuery.toLowerCase().trim()) )
// }, [searchQuery, itemsListCopy] )

  return (
    <header className='h-24 text-white flex justify-between items-center p-5 w-full'>
        <h1 className=' text-4xl font-bold text-[#db4079]'>
            MovieApp
        </h1>
        <input 
            value={ searchQuery }
            onChange={ (e) => {
              setSearchQuery(e.target.value)
              Test()
            } }
            type='text' 
            placeholder='Search...'
            className=' bg-slate-600 w-[200px] outline-none rounded-lg px-2 py-1'
        ></input>
    </header>
  )
}

export default Header