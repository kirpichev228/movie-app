import axios from "axios"
import { Dispatch } from "react"
import { AnyAction } from "redux"
import { IItem, MovieAsctionEnum } from "../../models"

export interface IDeleteMovie {
    dispatch: Dispatch<AnyAction>,
    currentMovie: IItem,
    currentMovieId: number,
    movieList: IItem[]
}

export async function deleteMovie ({dispatch, currentMovie, currentMovieId, movieList}: IDeleteMovie) {
    
    let origMovie = movieList.indexOf(currentMovie)
    dispatch({
        type: MovieAsctionEnum.delete,
        payload: origMovie + 1
    })
    movieList.splice(origMovie, 1)
    try{
        // await axios.delete('http://localhost:4000/movies/' + currentMovieId)
    }
    catch (e: unknown) {

    }
}