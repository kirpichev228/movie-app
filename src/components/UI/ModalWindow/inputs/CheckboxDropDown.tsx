import React, {useState} from 'react'
import Multiselect from 'multiselect-react-dropdown'

const CheckboxDropDown = () => {
    
    const data = [
        { genre: 'Documentary', id: 1 },
        { genre: 'Comedy', id: 2 },
        { genre: 'Horror', id: 3 },
        { genre: 'Crime', id: 4 },
    ]

    const [options] = useState(data)

    return (
        <label className='text-xl font-light w-full text-[#db4079] mt-4'>
            GENRE
            <Multiselect 
                options = { options } 
                displayValue = 'genre' 
                showCheckbox = { true }
                placeholder = 'Select Genres'
                avoidHighlightFirstOption = { true }
                hidePlaceholder = { true }
                showArrow = { true }
                style = {
                    {
                        searchBox: {
                            border: 'none',
                            background: '#374151',
                            'font-size': '16px',
                            'line-height': '24px',
                        },
                        multiselectContainer: {
                            color: '#db4079'
                        },
                        chips: {
                            background: '#db4079',
                            color: 'white',
                            'border-radius': '5px'
                        },
                        optionContainer: {
                            background: '#374151',
                            border: 'none'
                        },
                        option: {
                            'font-size': '16px' 
                        },
                    }
                }
            />
        </label>
    )
}

export default CheckboxDropDown