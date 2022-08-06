import React from 'react'
import { ISelectProps } from '../../../models'



const Select = ({options, defaultValue, value, onChange}: ISelectProps) => {
  return (
    <>
        
            <span className=" opacity-75 mx-2">SORT BY</span>
            <select 
                // name="" 
                // id="" 
                className=" bg-slate-600 rounded-md"
                value={value}
                onChange={event => onChange(event.target.value)}
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