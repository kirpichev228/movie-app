import React from 'react'
import { ISelectProps } from '../../../models'



const Select = ({options, defaultValue, value, onChange}: ISelectProps) => {
  return (
    <>
      <span className=" opacity-75"></span>
      <select 
        className=" bg-[#17161b] border border-[#3f414d] px-2 py-1 rounded-md outline-none"
        value={ value }
        onChange={ event => onChange(event.target.value) }
      >
        <option disabled value="">{ defaultValue }</option>
        { options.map(option => 
          <option key={ option.value } value={ option.value }>
              { option.name }
            </option>) }
      </select>
    </>
  )
}

export default Select