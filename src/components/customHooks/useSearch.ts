import { useDispatch, useSelector } from "react-redux"
import { IItem, IStoreItem, ListFilterEnum } from "../../models"
import { usePage } from "./usePage"

export const useSearch = () => {

    const dispatch = useDispatch()

    const itemsList = useSelector((state: IStoreItem) => state.itemsListCopy)
    const startIndex = useSelector((state: IStoreItem) => state.pageStartIndex)
    const endIndex = useSelector((state: IStoreItem) => state.pageEndIndex)
    
    const {setPage} = usePage()

    const Search = ( searchQuery: string) => {
        setPage(1)
        const searchResult = itemsList.filter( (post: IItem) => post.title.toLowerCase().includes(searchQuery.toLowerCase().trim()) )
        if (searchQuery.trim().length === 1 || 0) {
          dispatch({
            type: ListFilterEnum.set,
            payload: itemsList
          })
          dispatch({
            type: ListFilterEnum.setPageItems,
            payload: itemsList.slice(startIndex, endIndex)
          })
        } else {
          dispatch({
            type: ListFilterEnum.set,
            payload: searchResult
            })
          dispatch({
            type: ListFilterEnum.setPageItems,
            payload: searchResult.slice(startIndex, endIndex)
          })
          
        }  
                 
      }
    return { Search }
}