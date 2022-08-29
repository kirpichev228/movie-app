import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IStoreItem, ListFilterEnum } from '../../models'

export const usePage = () => {

    const itemsListCopy = useSelector((state: IStoreItem) => state.itemsList)
    const dispatch = useDispatch()
  
    const setPage = (pageNumber:number) => {
        if (pageNumber * 24 > itemsListCopy.length+24 || pageNumber <= 0) {
            return
          } else {
            let pageLastItemNumber = pageNumber * 24
            let pageFirstItemNumber = pageLastItemNumber - 24
            dispatch({
                type: ListFilterEnum.SET_START,
                payload: pageFirstItemNumber
              })
              dispatch({
                type: ListFilterEnum.SET_END,
                payload: pageLastItemNumber
              })
              dispatch({
                type: ListFilterEnum.SET_PAGE_ITEMS,
                payload: itemsListCopy.slice(pageFirstItemNumber, pageLastItemNumber)
              })
              dispatch({
                type: ListFilterEnum.SET_PAGE,
                payload: pageNumber
              })
          }
    }
    return { setPage }
}

export default usePage