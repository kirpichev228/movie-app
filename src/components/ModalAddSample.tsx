import React from 'react'
import classes from './styles/ModalWindow.module.css'
import AddModal from './UI/ModalWindow/WindowsFilling/AddModal'
import DeleteModal from './UI/ModalWindow/WindowsFilling/DeleteModal'
import EditModal from './UI/ModalWindow/WindowsFilling/EditModal'

type visibility = {
    visible: boolean
    setVisible: any
    content: string
}

const ModalAdd = ({visible, setVisible, content}:visibility) => {

    const rootClasses = [classes.modalWindow]
    if (visible) {
        rootClasses.push(classes.active)
    }

    const nullifyModal = () => {
        setVisible(false)
        
    }

  return (
    <div className={ rootClasses.join(' ') } onClick={ nullifyModal }>
        <div className={ classes.modalContainer } onClick={ (e) => e.stopPropagation() }>
            <h2 className=" text-4xl font-thin w-full items-center flex justify-between">
                { content === 'add' && 'ADD MOVIE' }
                { content === 'edit' && 'EDIT MOVIE' }
                { content === 'delete' && 'DELETE MOVIE' }
                <button 
                    className=" font-semibold text-5xl pb-3 hover:text-[#db4079] transition-all"
                    onClick={ ()=> setVisible(false) }
                >
                    &#215;
                </button>
            </h2>
            { content === 'add' && <AddModal/> }
            { content === 'edit' && <EditModal/> }
            { content === 'delete' && <DeleteModal/> }
            <div className="w-full flex items-center justify-end mt-8">
                <button
                    className={ classes.cancelButton }
                    onClick={ nullifyModal }
                >
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
