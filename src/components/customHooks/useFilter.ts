import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IItem, IStoreItem, ListFilterEnum } from '../../models'

const useFilter = () => {

    const dispatch = useDispatch()

    const itemsListCopy = useSelector((state: IStoreItem) => state.itemsList)
    const itemsList = useSelector((state: IStoreItem) => state.itemsList)

    const filteredMovies = (selectedGenre: keyof IItem) => {
        const filter = itemsListCopy.filter((item:IItem) => item.genres.includes(selectedGenre))
        selectedGenre.length === 0 
        ?
        dispatch({
            type: ListFilterEnum.setCopy,
            payload: itemsList
        })
        :
        dispatch({
            type: ListFilterEnum.setCopy,
            payload: filter
        })
    }

  return { filteredMovies }
}

export default useFilter