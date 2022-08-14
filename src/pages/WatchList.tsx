import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ManageBtn from '../components/UI/ManageList/ManageBtn'
import WatchListItem from '../components/WatchListItem'
import { IStoreItem, WatchListEnum } from '../models'

const WatchList = () => {

  const watchList = useSelector((state: IStoreItem) => state.watchList)
  const dispatch = useDispatch()

  const listClear = () => {dispatch({
    type: WatchListEnum.clear
  }) }

  return (
    <div className="bg-[#17161b] w-full flex flex-col items-center min-h-[80vh] p-4">
      { watchList.length !== 0 && 
      <ManageBtn
        onClick={ listClear }
      >
        Clear WatchList
      </ManageBtn> }
      {watchList.length === 0 && <p className='text-white text-4xl' >WatchList Is Empty!</p>}
      {watchList.map((item) => <WatchListItem id={item} /> )}
    </div>
    
  )
}

export default WatchList