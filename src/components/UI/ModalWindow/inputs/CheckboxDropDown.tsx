import React, {ChangeEventHandler, useState} from 'react'
import Multiselect from 'multiselect-react-dropdown'

type CHBDDType = {
    value: string[]
    name: string
    onChange: ChangeEventHandler<HTMLInputElement> 
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
        <label className='text-lg font-light w-full text-[#876afe] mt-3'>
            GENRE
            <Multiselect 
                name={props.name}
                onChange={props.onChange}
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
                            'font-size': '14px',
                            'line-height': '20px',
                        },
                        multiselectContainer: {
                            color: '#876afe'
                        },
                        chips: {
                            background: '#876afe',
                            color: 'white',
                            'border-radius': '5px',
                            height: '25px',
                            
                        },
                        optionContainer: {
                            background: '#374151',
                            border: 'none'
                        },
                        option: {
                            'font-size': '14px' 
                        },
                    }
                }
            />
        </label>
    )
}

export default CheckboxDropDown