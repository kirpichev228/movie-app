import React, {useState} from 'react'
import Multiselect from 'multiselect-react-dropdown'

type CHBDDType = {
    value: string[]
}

const CheckboxDropDown = (props:CHBDDType) => {
    
    const data = [
        { genre: 'Documentary'},
        { genre: 'Comedy'},
        { genre: 'Horror'},
        { genre: 'Crime'},
        { genre: 'Action'},
        { genre: 'Science Fiction'},
        { genre: 'Fantasy'},
        { genre: 'Animation'},
        { genre: 'Adventure'},
        { genre: 'Family'},
        { genre: 'Drama'},
        { genre: 'Romance'},
        { genre: 'Thriller'},
        { genre: 'Music'},
        { genre: 'War'},
        { genre: 'Mystery'}
    ]
    // console.log (data)

    const [options] = useState(data)

    return (
        <label className='text-xl font-light w-full text-[#db4079] mt-4'>
            GENRE
            <Multiselect 
                selectedValues={props.value.map((item) => {
                    return {genre: item}
                } )}
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