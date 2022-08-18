import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IStoreItem, ListFilterEnum } from '../../models'

export const usePage = () => {

    const itemsListCopy = useSelector((state: IStoreItem) => state.itemsList)
    const dispatch = useDispatch()
  
    const setPage = (n:number) => {
        if (n * 24 > itemsListCopy.length+24 || n <= 0) {
            return
          } else {
            let b = n * 24
            let a = b - 24
            dispatch({
                type: ListFilterEnum.setStart,
                payload: a
              })
              dispatch({
                type: ListFilterEnum.setEnd,
                payload: b
              })
              dispatch({
                type: ListFilterEnum.setPageItems,
                payload: itemsListCopy.slice(a, b)
              })
              dispatch({
                type: ListFilterEnum.setPage,
                payload: n
              })
          }
    }
    return { setPage }
}

export default usePage