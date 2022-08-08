import React, { useState } from 'react'
import { useSearch } from './customHooks/useSearch'

const Header = () => {

  const [searchQuery, setSearchQuery] = useState('')

  const {Test} = useSearch(searchQuery)

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