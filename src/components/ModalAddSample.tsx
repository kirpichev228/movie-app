import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IStoreItem, MovieAsctionEnum } from '../models'
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

    const nullifyModal = () => {
        setVisible(false)
    }

    const currentMovie = useSelector((state: IStoreItem) => state.item )
    const movieList = useSelector((state: IStoreItem) => state.itemsList )
    const movieListCopy = useSelector((state: IStoreItem) => state.itemsListCopy )

    const deleteMovie = () => {
        let origMovie = movieList.indexOf(currentMovie)
        dispatch({
            type: MovieAsctionEnum.delete,
            payload: origMovie + 1
        })
        movieList.splice(origMovie, 1)
    }

    const switchSubmit = () => {
        switch (content) {
            case 'delete':
                deleteMovie()
                setVisible(false)
                break;

            case 'edit':
                setVisible(false)
                break

            case 'add':
                setVisible(false)
                break
        
            default:
                break;
        }
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
                <button
                    className={ classes.submitButton }
                    onClick = {switchSubmit}
                >
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
