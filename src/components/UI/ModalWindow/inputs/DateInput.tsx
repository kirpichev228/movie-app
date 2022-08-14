import React, { ChangeEventHandler, useState } from 'react'

type datePropsType = {
  value: string
  name: string,
  onChange: ChangeEventHandler<HTMLInputElement> 
}

const DateInput = (props:datePropsType) => {

  return (
    <label className='text-lg font-light w-full text-[#876afe] mt-3'>
        REALESE DATE
        <input 
            name={props.name}
            value={ props.value }
            onChange = { props.onChange }
            type="date" 
            min='1900-01-01'
            max='2022-12-31'
            placeholder='Select Date' 
            className=' placeholder-gray-500 w-full h-6 font-normal bg-gray-700 text-white rounded px-2 text-sm outline-none' 
        />
    </label>
  )
}

export default DateInput