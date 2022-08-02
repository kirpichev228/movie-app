import React from 'react'
import CheckboxDropDown from '../inputs/CheckboxDropDown'
import DateInput from '../inputs/DateInput'
import TextInput from '../inputs/TextInput'

const AddModal = () => {
  return (
    <>
        <TextInput 
            heading='Movie title' 
            placeholder='Enter Movie Title'
            value={''}
        />
        <DateInput
            value=''
        />
        <TextInput 
            heading='movie url' 
            placeholder='Movie URL'
            value={''}
        />
        <CheckboxDropDown
            value={[]}
        />
        <TextInput 
            heading='overview' 
            placeholder='Overview here'
            value={''}
        />
        <TextInput 
            heading='runtime' 
            placeholder='Runtime here'
            value={''}
        />
    </>
  )
}

export default AddModal