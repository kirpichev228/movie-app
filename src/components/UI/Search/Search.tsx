import React, { useState } from 'react'
import { useSearch } from '../../customHooks/useSearch'

const Search = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const { Search } = useSearch()

    return (
        <input 
            value={ searchQuery }
            onChange={ (e) => {
                setSearchQuery(e.target.value)
                Search(searchQuery)
            } }
            type='text' 
            placeholder='Search...'
            className=' bg-[#17161b] w-[200px] outline-none border border-[#3f414d] rounded-lg px-2 py-1 mx-2'
        ></input>
  )
}

export default Search