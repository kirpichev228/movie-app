import axios from "axios"
import { IEditMovie, ListFilterEnum} from "../../models"


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
    }
    
}