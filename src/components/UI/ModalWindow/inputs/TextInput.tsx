import React, { useState } from 'react'

type inputChild = {
    name: string
    heading: string
    placeholder: string
    value: string | number | string[]
    onChange(): HTMLInputElement
}

const TextInput = (props:inputChild) => {

// const [inputState, setInputState] = useState( props.value )


  return (
    <label className='text-lg font-light w-full text-[#db4079] mt-3'>
        { props.heading.toUpperCase() }
        <input 
            name={ props.name }
            value={ props.value }
            onChange={props.onChange}
            type="text" 
            placeholder = { props.placeholder } 
            className=' placeholder-gray-500 w-full h-6 font-normal bg-gray-700 text-white rounded px-2 text-sm outline-none'
        />
    </label>
  )
}

export default TextInput

