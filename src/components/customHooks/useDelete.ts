import axios from "axios"
import { useSelector } from "react-redux"
import { IStoreItem } from "../../models"

export const useDelete = () => {

    const currentMovieId = useSelector((state: IStoreItem) => state.item.id )

    async function deleteMovie () {
        try{
            await axios.delete('http://localhost:4000/movies/' + currentMovieId)
        }
        catch (e: unknown) {

        }
    }

}