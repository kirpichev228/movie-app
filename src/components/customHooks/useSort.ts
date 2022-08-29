import { useDispatch, useSelector } from "react-redux"
import { IItem, IStoreItem, ListFilterEnum } from "../../models"

export const useSort = () => {

    const dispatch = useDispatch()
    const itemsListCopy = useSelector((state: IStoreItem) => state.itemsList)

    const sortedPosts = (selectedSort: keyof IItem) => {
        if (selectedSort.includes(' ')) {
            let sortReverse = itemsListCopy
                .sort( (a: any, b: any) => a[selectedSort.trim()] > b[selectedSort.trim()] ? 1 : -1 )
                .reverse()
            dispatch({
                type: ListFilterEnum.SET,
                payload: sortReverse
            })            
        } else {
            let sort = itemsListCopy
                .sort( (a: IItem, b: IItem) => a[selectedSort] > b[selectedSort] ? 1 : -1 )
            dispatch({
                type: ListFilterEnum.SET,
                payload: sort
            })            
        }     
         
    }
    return { sortedPosts }
}