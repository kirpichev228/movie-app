import axios from "axios"
import { useState, useEffect } from "react"
import { Params } from "react-router-dom"
import { IItem } from "../../models"

export function useMovie (id: number) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [movie, setMovie] = useState<IItem>()

    async function fetchItems () {
        try {
            setError(false)
            setLoading(true)
            const response = await axios.get<IItem>(`http://localhost:4000/movies/${id}`)
            setMovie(response.data);
            setLoading(false)            
        } catch (e: unknown) {
            setLoading(false)
            setError(true)
        }
    }

    useEffect(()=> {fetchItems()},[])

    return { loading, error, movie }
}
