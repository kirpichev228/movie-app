import axios, { Axios, AxiosError } from "axios"
import { Dispatch } from "react"
import { AnyAction } from "redux"
import { IEditMovie, IItem, ListFilterEnum, ModalEnum,} from "../../models"



export async function editMovie ({values, dispatch, movieList, currentMovie}: IEditMovie) {
    
    try{

        let origMovie = movieList.indexOf(currentMovie)
        dispatch({
            type: ListFilterEnum.edit,
            payload: origMovie,
            value: values
        })
        await axios.put('http://localhost:4000/movies', values)
        // dispatch({
        //     type: ModalEnum.isEdited,
        //     payload: false
        // })
        // dispatch({
        //     type: ModalEnum.isEdited,
        //     payload: true
        // })
    }
    catch (e: unknown) {
        const error = e as AxiosError
        console.log(error.response);
        
    }
}