import axios, { AxiosError } from "axios"
import { useState, useEffect } from "react"
import { IItem, IMoviesResponce } from "../../models"

export function useItems () {
    const [item, setItem] = useState<IItem[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    // const [list, setList] = useState<IItem>()

    async function fetchItems () {
        try {
        setError('')
        setLoading(true)
        const response = await axios.get<IMoviesResponce>('http://localhost:4000/movies?limit=12')
        setItem(response.data.data)
        // console.log(response.data.data)
        // console.log(item)

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

    return {item, loading, error, setItem}
}