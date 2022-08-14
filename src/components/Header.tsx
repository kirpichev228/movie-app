import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSearch } from './customHooks/useSearch'

const Header = () => {

  const [searchQuery, setSearchQuery] = useState('')

  const {Test} = useSearch(searchQuery)

  return (
    <header className='h-[10vh] text-white flex justify-between items-center p-5 w-full bg-[#17161b] border-b-2 border-[#1b1a1f]'>
        <h1 className=' text-4xl font-bold text-[#876afe]'>
            MovieApp
        </h1>
        <nav className='flex gap-4'>
          <Link to={'/watchlist'} >WatchList</Link>
          <Link to={'/posts'} >Posts</Link>
        </nav>
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