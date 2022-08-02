import axios, { AxiosError } from "axios"
import { useState, useEffect } from "react"
import { IItem, IMoviesResponce } from "../../models"
import { connect } from "react-redux"


export function useItems () {
    const [item, setItem] = useState<IItem[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function fetchItems () {
        try {
        setError('')
        setLoading(true)
        const response = await axios.get<IMoviesResponce>('http://localhost:4000/movies?limit=12')
        setItem(response.data.data)

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

    function mapStateToProps(state) {
        console.log('mapStatetoprops >', state);
        return{
            item: state.item
        }
    }

    return {item, loading, error, setItem}
}

