import React from 'react'

const DateInput = () => {
  return (
    <label className='text-xl font-light w-full text-[#db4079] mt-4'>
        REALESE DATE
        <input 
            type="date" 
            min='1900-01-01'
            max='2022-12-31'
            placeholder='Select Date' 
            className=' placeholder-gray-500 w-full h-8 font-normal bg-gray-700 text-white rounded px-2 mt-2 text-base outline-none' 
        />
    </label>
  )
}

export default DateInput