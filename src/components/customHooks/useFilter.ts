import { useDispatch, useSelector } from 'react-redux'
import { IItem, IStoreItem, ListFilterEnum } from '../../models'

const useFilter = () => {

    const dispatch = useDispatch()
    const itemsList = useSelector((state: IStoreItem) => state.itemsListCopy)
    const startIndex = useSelector((state: IStoreItem) => state.pageStartIndex)
    const endIndex = useSelector((state: IStoreItem) => state.pageEndIndex)
    
    const filteredMovies = (selectedGenre: keyof IItem) => {
        if (selectedGenre.length === 0) {
            dispatch({
                type: ListFilterEnum.SET,
                payload: itemsList
            })
            dispatch({
                type: ListFilterEnum.SET_PAGE_ITEMS,
                payload: itemsList.slice(startIndex, endIndex)
            })
        } else {
            const filter = itemsList.filter((item:IItem) => item.genres.includes(selectedGenre))
            dispatch({
                type: ListFilterEnum.SET,
                payload: filter
            })
            dispatch({
                type: ListFilterEnum.SET_PAGE_ITEMS,
                payload: filter.slice(startIndex, endIndex)
            })
        }       
    }
  return { filteredMovies }
}

export default useFilter