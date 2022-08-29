import React from 'react'

const Footer = () => {
  return (
    <footer className='h-[10vh] 
    text-white 
      flex 
      justify-between 
      items-center 
      py-5 
      px-20 
      w-full 
      bg-[#17161b] 
      border-t-2 
      border-[#1b1a1f]'>
        <span>
            2022
        </span>
        <a 
            href="https://github.com/kirpichev228/movie-app/tree/dev" 
            target='_blank'
            className='hover:text-[#876afe] transition-all' 
            rel="noreferrer"
        > 
            GitHub 
        </a>
    </footer>
  )
}

export default Footer