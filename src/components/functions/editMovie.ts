import axios from "axios"
import { Dispatch } from "react"
import { AnyAction } from "redux"
import { IItem, ListFilterEnum, MovieAsctionEnum } from "../../models"

interface IEditMovie {
    dispatch: Dispatch<AnyAction>
    values: IItem,
    currentMovie: IItem,
    movieList: IItem[]
}

export async function editMovie ({values, dispatch, movieList, currentMovie}: IEditMovie) {
    
    try{
        dispatch({
            type: MovieAsctionEnum.edit,
            payload: values
        })
        let origMovie = movieList.indexOf(currentMovie)
        await axios.put('http://localhost:4000/movies', values)
        dispatch({
            type: ListFilterEnum.edit,
            payload: origMovie
        })
    }
    catch (e: unknown) {

    }
}