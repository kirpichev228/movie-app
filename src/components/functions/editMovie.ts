import axios from "axios"
import { Dispatch } from "react"
import { AnyAction } from "redux"
import { IItem, ListFilterEnum,} from "../../models"

interface IEditMovie {
    dispatch: Dispatch<AnyAction>
    values: IItem,
    currentMovie: IItem,
    movieList: IItem[]
}

export async function editMovie ({values, dispatch, movieList, currentMovie}: IEditMovie) {
    
    try{

        let origMovie = movieList.indexOf(currentMovie)
        dispatch({
            type: ListFilterEnum.edit,
            payload: origMovie,
            value: values
        })
        await axios.put('http://localhost:4000/movies', values)
        
    }
    catch (e: unknown) {
        console.log(e.response);
        
    }
}