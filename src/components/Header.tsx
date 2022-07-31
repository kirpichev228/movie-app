import React from 'react'

const Header = () => {
  return (
    <header className='h-24 text-white flex justify-between items-center p-5 w-full'>
        <span className=' text-4xl font-bold'>
            MovieApp
        </span>
        <input 
            type='text' 
            placeholder='Search...'
            className=' bg-slate-600 w-[200px] outline-none rounded-lg px-2 py-1'
        ></input>
    </header>
  )
}

export default Header