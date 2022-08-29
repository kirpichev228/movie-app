import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IStoreItem, ModalEnum } from '../models'
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
    const dispatch = useDispatch()
    const open = useSelector((state: IStoreItem) => state.modalOpen)

    const nullifyModal = () => {
        dispatch({type:ModalEnum.OPEN_MODAL, payload: false})
        setVisible(open)
    }

  return (
    
    <div data-testid='modalWindow' className={ rootClasses.join(' ') } onClick={ nullifyModal }>
        <div className={ classes.modalContainer } onClick={ (e) => e.stopPropagation() }>
            <h2 className=" text-4xl font-thin w-full items-center flex justify-between">
                { content === 'add' && 'ADD MOVIE' }
                { content === 'edit' && 'EDIT MOVIE' }
                { content === 'delete' && 'DELETE MOVIE' }
                <button 
                    className=" font-semibold text-5xl pb-3 hover:text-[#876afe] transition-all"
                    onClick={ nullifyModal }
                    data-testid='modalClose'
                >
                    &#215;
                </button>
            </h2>
            { content === 'add' && <AddModal/> }
            { content === 'edit' && <EditModal/> }
            { content === 'delete' && <DeleteModal/> }
            <div className="w-full flex items-center justify-end">
            </div>
        </div>
    </div>
  )
}

export default ModalAdd
