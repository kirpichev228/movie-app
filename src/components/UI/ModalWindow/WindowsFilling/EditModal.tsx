import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IEditMovie, IStoreItem, ListFilterEnum, ModalEnum } from '../../../../models'
import CheckboxDropDown from '../inputs/CheckboxDropDown'
import DateInput from '../inputs/DateInput'
import TextInput from '../inputs/TextInput'
import classes from '../../../styles/ModalWindow.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { editMovie } from '../../../functions/editMovie'
import axios, { AxiosError } from 'axios'

const EditModal = () => {

    const currentMovie = useSelector((state: IStoreItem) => state.item )
    const movieList = useSelector((state: IStoreItem) => state.itemsListCopy )
    const dispatch = useDispatch()
    const [sucсess, setSucсess] = useState(0)

    async function editMovie ({values, dispatch, movieList, currentMovie}: IEditMovie) {
        try{
            let origMovie = movieList.indexOf(currentMovie)
            dispatch({
                type: ListFilterEnum.edit,
                payload: origMovie,
                value: values
            })
            await axios.put('http://localhost:4000/movies', values)
            setSucсess(1)
        }
        catch (e: unknown) {
            const error = e as AxiosError
            console.log(error.response);
            setSucсess(2)
        }
    }

    const formik = useFormik({
        initialValues: {
            id: currentMovie.id,
            title: currentMovie.title,
            poster_path: currentMovie.poster_path,
            overview: currentMovie.overview,
            runtime: currentMovie.runtime,
            release_date: currentMovie.release_date,
            genres: currentMovie.genres,
            tagline: currentMovie.tagline,
            revenue: currentMovie.revenue,
            budget: currentMovie.budget,
            vote_average: currentMovie.vote_average,
            vote_count: currentMovie.vote_count
        },
        validationSchema: Yup.object({
            title: Yup.string().min(1).max(50, 'Must be 50 characters or less').required('Required') ,
            poster_path: Yup.string().required('Required') ,
            overview: Yup.string().max(1000, '1000 characters or less').required('Required') ,
            runtime: Yup.number().min(1).max(300, 'Max 300 mins').required('Required') ,
            release_date: Yup.date().required('Required'),
            genres: Yup.array().required('Required') ,
            tagline: Yup.string().max(50, '50 characters or less').required('Required') ,
            revenue: Yup.number().min(1).max(5000000000, '5 bils or less').required('Required'),
            budget: Yup.number().min(1).max(1000000000, '1 bil or less').required('Required') ,
            vote_average: Yup.number().min(1).max(10, 'Max score - 10').required('Required') ,
            vote_count: Yup.number().min(1).max(10000, 'Max votes - 10000').required('Required') 
        }),
        onSubmit(values) {
            editMovie({values, dispatch, movieList, currentMovie})
        },
    })

    return (
    <>
        <form onSubmit={formik.handleSubmit} className={classes.modalForm}>
            {formik.values.id}
            <TextInput 
                name='title'
                heading='Movie title' 
                placeholder='Enter Movie Title'
                type='text'
                value={ formik.values.title }
                onChange={ formik.handleChange }
            />
            { formik.errors.title ? <p className=' text-xs text-red-700'>Must be 50 characters or less</p> : null }
            <TextInput 
                name='tagline'
                heading='tagline' 
                placeholder='Tagline'
                type='text'
                value={ formik.values.tagline }
                onChange={ formik.handleChange }
            />
            { formik.errors.tagline ? <p className=' text-xs text-red-700'>Must be 50 characters or less</p> : null }
            <DateInput
                name='release_date'
                // type='text'
                value={ formik.values.release_date }
                onChange={ formik.handleChange }
            />
            { formik.errors.release_date ? <p className=' text-xs text-red-700'>Required</p> : null }
            <TextInput 
                name='poster_path'
                heading='movie url' 
                placeholder='Movie Image URL'
                type='text'
                value={ formik.values.poster_path }
                onChange={ formik.handleChange }
            />
            { formik.errors.poster_path ? <p className=' text-xs text-red-700'>Required</p> : null }
            <CheckboxDropDown
                value={ formik.values.genres }
                name='genres'
                onChange={ formik.handleChange }
            />
            { formik.errors.genres ? <p className=' text-xs text-red-700'>Maximum 4 genres</p> : null }
            <TextInput 
                name='overview'
                heading='overview' 
                placeholder='Overview here'
                type='text'
                value={ formik.values.overview }
                onChange={ formik.handleChange }
            />
            { formik.errors.overview ? <p className=' text-xs text-red-700'>1000 characters or less</p> : null }
            <div className="flex w-full gap-3">
                <div className='flex flex-col'>
                    <TextInput 
                        name='runtime'
                        heading='runtime' 
                        placeholder='Runtime here(in mins.)'
                        type='number'
                        step={1}
                        value={ formik.values.runtime }
                        onChange={ formik.handleChange }
                    />
                    { formik.errors.runtime ? <p className=' text-xs text-red-700'>Max 300 mins</p> : null }
                </div>
                <div className="flex flex-col">
                   <TextInput 
                        name='budget'
                        heading='Budget' 
                        placeholder='Budget'
                        type='number'
                        step={100000}
                        value={ formik.values.budget }
                        onChange={ formik.handleChange }
                    />
                    { formik.errors.budget ? <p className=' text-xs text-red-700'>1 bils or less</p> : null } 
                </div>
                <div className="flex flex-col">
                    <TextInput 
                        name='revenue'
                        heading='Revenue' 
                        placeholder='Revenue'
                        type='number'
                        step={100000}
                        value={ formik.values.revenue }
                        onChange={ formik.handleChange }
                    />
                    { formik.errors.revenue ? <p className=' text-xs text-red-700'>5 bils or less</p> : null }
                </div>
                
            </div>
            <div className="flex w-full gap-3">
                <div className="flex flex-col">
                   <TextInput 
                        name='vote_average'
                        heading='Vote Average' 
                        placeholder='Vote Average'
                        type='number'
                        step={0.1}
                        value={ formik.values.vote_average }
                        onChange={ formik.handleChange }
                    />
                    { formik.errors.vote_average ? <p className=' text-xs text-red-700'>10</p> : null } 
                </div>
                <div className="flex flex-col">
                    <TextInput 
                        name='vote_count'
                        heading='Votes Count' 
                        placeholder='Votes Count'
                        type='number'
                        step={10}
                        value={ formik.values.vote_count }
                        onChange={ formik.handleChange }
                    />
                    { formik.errors.vote_count ? <p className=' text-xs text-red-700'>10000</p> : null }
                </div>
                
            </div>
            <button 
                type='submit'
                className={classes.submitButton}
            >
                SUBMIT
            </button>
            {sucсess===1 && <p className=' text-green-600 font-extralight mt-2 text-sm text-center w-full'>Success!</p>}
            {sucсess===2 && <p className=' text-red-600 font-extralight mt-2 text-sm text-center w-full'>Something went wrong!</p>}
        </form>
    </>
  )
}

export default EditModal