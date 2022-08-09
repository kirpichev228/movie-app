import axios, { AxiosError } from "axios"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { IMoviesResponce, ListFilterEnum } from "../../models"

export function useItems () {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const dispatch = useDispatch()

    async function fetchItems () {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IMoviesResponce>('http://localhost:4000/movies?limit=20')
            dispatch({type: ListFilterEnum.set, payload: response.data.data})
            dispatch({type: ListFilterEnum.setCopy, payload: response.data.data})  
            setLoading(false)
            console.log(response);
            
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchItems()
    }, [])

    return { loading, error }
}


