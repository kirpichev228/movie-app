import React from 'react'
import { ISelectProps } from '../../../models'



const Select = ({options, defaultValue, value, onChange}: ISelectProps) => {
  return (
    <>
        <div className="">
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
                {/* <option value="nameDown">by name (A-Z)</option>
                <option value="nameUp">by name (Z-A)</option>
                <option value="yearUp">by year(oldest-newest)</option>
                <option value="yearDown">by year(newest-oldest)</option> */}
            </select>
        </div>
    </>
  )
}

export default Select