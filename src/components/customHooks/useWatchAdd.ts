import { useDispatch, useSelector } from "react-redux"
import { IStoreItem, WatchListEnum } from "../../models"


export const useWatchAdd = (id: number) => {

    const dispatch = useDispatch()

    // dispatch({
    //     type: WatchListEnum.push,
    //     movie: id
    // })
}