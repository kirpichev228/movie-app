import { useDispatch, useSelector } from "react-redux"
import { IItem, IStoreItem, ListFilterEnum } from "../../models"

export const useSearch = (searchQuery: string) => {

    const dispatch = useDispatch()

    const itemsList = useSelector((state: IStoreItem) => state.itemsList)
    const itemsListCopy = useSelector((state: IStoreItem) => state.itemsListCopy)

    const Test = ( ) => {
        searchQuery.trim().length === 1 || 0
          ?
            dispatch({
              type: ListFilterEnum.setCopy,
              payload: itemsList
            })
          :
            dispatch({
              type: ListFilterEnum.setCopy,
              payload: itemsListCopy.filter( (post: IItem) => post.title.toLowerCase().includes(searchQuery.toLowerCase().trim()) )
            })
      }
    return { Test }
}