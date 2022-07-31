import React from 'react'
import classes from './styles/ModalWindow.module.css'
import CheckboxDropDown from './UI/ModalWindow/CheckboxDropDown'
import DateInput from './UI/ModalWindow/DateInput'
import TextInput from './UI/ModalWindow/TextInput'

type visibility = {
    visible: boolean
    setVisible: any
}

const ModalAdd = ({visible, setVisible}:visibility) => {

    const rootClasses = [classes.modalWindow]
    if (visible) {
        rootClasses.push(classes.active)
    }

  return (
    <div className={ rootClasses.join(' ') } onClick={()=> setVisible(false)}>
        <div className={ classes.modalContainer } onClick={ (e) => e.stopPropagation() }>
            <h2 className=" text-4xl font-thin w-full items-center flex justify-between">
                ADD MOVIE
                <button 
                    className=" font-semibold text-5xl pb-3 hover:text-[#db4079] transition-all"
                    onClick={()=> setVisible(false)}
                >&#215;</button>
            </h2>
            <TextInput heading='Movie title' placeholder='Enter Movie Title'></TextInput>
            <DateInput/>
            <TextInput heading='movie url' placeholder='Movie URL'></TextInput>
            <CheckboxDropDown/>
            <TextInput heading='overview' placeholder='Overview here'></TextInput>
            <TextInput heading='runtime' placeholder='Runtime here'></TextInput>
            <div className="w-full flex items-center justify-end mt-8">
                <button className={ classes.cancelButton }>
                    CANCEL
                </button>
                <button className={ classes.submitButton }>
                    SUBMIT
                </button>
            </div>
        </div>
    </div>
  )
}

export default ModalAdd

// 1. навалить анимаций
// 2. доделать модалки
// 3. оформить раскрытие инфы о фильме
