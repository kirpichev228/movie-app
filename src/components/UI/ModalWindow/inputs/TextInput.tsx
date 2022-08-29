import React, { ChangeEventHandler } from 'react'

type inputChild = {
    name: string
    heading: string
    placeholder: string
    value: string | number | string[]
    type: string
    step?: number
    onChange: ChangeEventHandler<HTMLInputElement> 
}

const TextInput = (props:inputChild) => {

  return (
    <label className='text-lg font-light w-full text-[#876afe] mt-3'>
        { props.heading.toUpperCase() }
        <input 
            name={ props.name }
            value={ props.value }
            onChange={ props.onChange }
            type={ props.type } 
            step={ props.step }
            placeholder = { props.placeholder } 
            className=' placeholder-gray-500 w-full h-6 font-normal bg-gray-700 text-white rounded px-2 text-sm outline-none'
        />
    </label>
  )
}

export default TextInput

