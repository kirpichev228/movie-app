import axios, { AxiosError } from "axios"
import { Dispatch } from "react"
import { AnyAction } from "redux"
import { IItem, ListFilterEnum, MovieAsctionEnum } from "../../models"

interface IEditMovie {
    dispatch: Dispatch<AnyAction>
    values: IItem,
    currentMovie: IItem,
    movieList: IItem[]
}

export async function addMovie ({values, dispatch, movieList, currentMovie}: IEditMovie) {
    
    try{
        // dispatch({
        //     type: MovieAsctionEnum.edit,
        //     payload: values
        // })
        dispatch({
            type: ListFilterEnum.add,
            payload: values
        })
        // let origMovie = movieList.indexOf(currentMovie)
        await axios.post('http://localhost:4000/movies', values)
    }
    catch (e: unknown) {
        const error = e as AxiosError
    console.log(error.response);
    }
}