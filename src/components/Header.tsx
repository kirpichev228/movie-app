import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header className='h-[10vh] text-white flex justify-between items-center py-5 px-20 w-full bg-[#17161b] border-b-2 border-[#1b1a1f]'>
        <h1 className=' text-4xl font-bold text-[#876afe]'>
            MovieApp
        </h1>
        <nav className='flex gap-4'>
          <Link 
            to={'/watchlist'}
            className='text-xl hover:text-[#876afe] transition-all'
          >
            WatchList
          </Link>
          <Link 
            className='text-xl hover:text-[#876afe] transition-all'
            to={'/posts'} 
          >
            Posts
          </Link>
        </nav>
    </header>
  )
}

export default Header