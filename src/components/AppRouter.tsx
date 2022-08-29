import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Posts from '../pages/Posts'
import WatchList from '../pages/WatchList'
import Error from '../pages/Error'
import MovieIdPage from '../pages/MovieIdPage'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Posts/>} />
        <Route path='/posts' element={<Posts/>} />
        <Route path='/posts/:id' element={<MovieIdPage/>} />
        <Route path='/watchlist' element={ <WatchList/> }/>
        <Route path='/error' element={ <Error/> }/>
    </Routes>
  )
}

export default AppRouter