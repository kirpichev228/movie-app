import React from 'react'
import { useSelector } from 'react-redux'
import { IItem } from '../../../../models'
import CheckboxDropDown from '../inputs/CheckboxDropDown'
import DateInput from '../inputs/DateInput'
import TextInput from '../inputs/TextInput'



const EditModal = () => {

    const movie: IItem = useSelector( state => state.item )

  return (
    <>
        <h3 className='text-2xl font-light w-full text-[#db4079] mt-4'>
            Movie ID
        </h3>
        <span className='font-bold text-lg'>
            {movie.id}
        </span>
        <TextInput 
            heading='Movie title' 
            placeholder='Enter Movie Title'
            value={ movie.title }
        />
        <DateInput
            value={movie.release_date}
        />
        <TextInput 
            heading='movie url' 
            placeholder='Movie Image URL'
            value={ movie.poster_path }
        />
        <CheckboxDropDown
            value={ movie.genres }
        />
        <TextInput 
            heading='overview' 
            placeholder='Overview here'
            value={ movie.overview }
        />
        <TextInput 
            heading='runtime' 
            placeholder='Runtime here(in mins.)'
            value={ movie.runtime }
        />
    </>
  )
}

export default EditModal