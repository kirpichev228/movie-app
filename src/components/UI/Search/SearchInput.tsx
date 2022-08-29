import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IStoreItem, IItem, ListFilterEnum } from '../../../models'
import usePage from '../../customHooks/usePage'

const SearchInput = () => {

    const [searchQuery, setSearchQuery] = useState('')

    const dispatch = useDispatch()

    const itemsList = useSelector((state: IStoreItem) => state.itemsListCopy)
    const startIndex = useSelector((state: IStoreItem) => state.pageStartIndex)
    const endIndex = useSelector((state: IStoreItem) => state.pageEndIndex)
    
    const {setPage} = usePage()

    const search = ( searchQuery: string) => {
        setPage(1)
        const searchResult = itemsList.filter( (post: IItem) => post.title.toLowerCase().includes(searchQuery.toLowerCase().trim()) )
        if (searchQuery.trim().length === 1 || 0) {
          dispatch({
            type: ListFilterEnum.SET,
            payload: itemsList
          })
          dispatch({
            type: ListFilterEnum.SET_PAGE_ITEMS,
            payload: itemsList.slice(startIndex, endIndex)
          })
        } else {
          dispatch({
            type: ListFilterEnum.SET,
            payload: searchResult
            })
          dispatch({
            type: ListFilterEnum.SET_PAGE_ITEMS,
            payload: searchResult.slice(startIndex, endIndex)
          })
        }        
      }

    return (
        <input 
            value={ searchQuery }
            onChange={ (e) => {
                setSearchQuery(e.target.value)
                search(searchQuery)
            } }
            type='text' 
            placeholder='Search...'
            className=' bg-[#17161b] w-[200px] outline-none border border-[#3f414d] rounded-lg px-2 py-1 mx-2'
        ></input>
  )
}

export default SearchInput