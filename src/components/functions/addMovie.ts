import axios from "axios"
import { Dispatch } from "react"
import { AnyAction } from "redux"
import { IItem, ListFilterEnum } from "../../models"

interface IEditMovie {
    dispatch: Dispatch<AnyAction>
    values: IItem,
    currentMovie: IItem,
    movieList: IItem[]
}

export async function addMovie ({values, dispatch}: IEditMovie) {
    
    try{
        dispatch({
            type: ListFilterEnum.add,
            payload: values
        })
        await axios.post('http://localhost:4000/movies', values)
    }
    catch (e: unknown) {

    }
}