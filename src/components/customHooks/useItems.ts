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
            const response = await axios.get<IMoviesResponce>('http://localhost:4000/movies?limit=4000')
            dispatch({
                type: ListFilterEnum.SET, 
                payload: response.data.data
            })
            dispatch({
                type: ListFilterEnum.SET_COPY, 
                payload: response.data.data
            }) 
            dispatch({
                type: ListFilterEnum.SET_PAGE_ITEMS, 
                payload: response.data.data.slice(0, 24)
            })  
            setLoading(false)            
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


