import { useDispatch, useSelector } from "react-redux"
import { IStoreItem, ListFilterEnum } from "../../models"


export const useSort = () => {

    const dispatch = useDispatch()

    const itemsListCopy = useSelector((state: IStoreItem) => state.itemsListCopy)

    const sortedPosts = (selectedSort: string) => {
        let cock = itemsListCopy.sort( (a, b) => a[selectedSort] > b[selectedSort] ? 1 : -1 )
        dispatch({
            type: ListFilterEnum.set,
            payload: cock
        }) 
    }
        
    return { sortedPosts }
}