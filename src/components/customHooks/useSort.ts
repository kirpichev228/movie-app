import { useDispatch, useSelector } from "react-redux"
import { IItem, IStoreItem, ListFilterEnum } from "../../models"


export const useSort = () => {

    const dispatch = useDispatch()

    const itemsListCopy = useSelector((state: IStoreItem) => state.itemsListCopy)

    const sortedPosts = (selectedSort: keyof IItem) => {
        let cock = itemsListCopy.sort( (a: IItem, b: IItem) => a[selectedSort] > b[selectedSort] ? 1 : -1 )
        dispatch({
            type: ListFilterEnum.set,
            payload: cock
        }) 
    }
        
    return { sortedPosts }
}