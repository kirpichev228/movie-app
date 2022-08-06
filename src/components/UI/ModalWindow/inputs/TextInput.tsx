import React, { useState } from 'react'

type inputChild = {
    heading: string
    placeholder: string
    value: string | number | string[]
}

const TextInput = (props:inputChild) => {

const [inputState, setInputState] = useState( props.value )


  return (
    <label className='text-xl font-light w-full text-[#db4079] mt-4'>
        { props.heading.toUpperCase() }
        <input 
            name={ props.heading }
            defaultValue={ inputState }
            onChange={e => setInputState(e.target.value)}
            type="text" 
            placeholder = { props.placeholder } 
            className=' placeholder-gray-500 w-full h-8 font-normal bg-gray-700 text-white rounded px-2 mt-2 text-base outline-none'
        />
    </label>
  )
}

export default TextInput

