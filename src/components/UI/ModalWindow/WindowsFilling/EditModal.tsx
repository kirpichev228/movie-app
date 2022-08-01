import React from 'react'
import CheckboxDropDown from '../inputs/CheckboxDropDown'
import DateInput from '../inputs/DateInput'
import TextInput from '../inputs/TextInput'

const EditModal = () => {
  return (
    <>
        <TextInput 
            heading='Movie ID' 
            placeholder='Enter Movie ID'
        />
        <TextInput 
            heading='Movie title' 
            placeholder='Enter Movie Title'
        />
        <DateInput/>
        <TextInput 
            heading='movie url' 
            placeholder='Movie URL'
        />
        <CheckboxDropDown/>
        <TextInput 
            heading='overview' 
            placeholder='Overview here'
        />
        <TextInput 
            heading='runtime' 
            placeholder='Runtime here'
        />
    </>
  )
}

export default EditModal