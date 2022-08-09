import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IStoreItem } from '../models'
import classes from './styles/ModalWindow.module.css'
import AddModal from './UI/ModalWindow/WindowsFilling/AddModal'
import DeleteModal from './UI/ModalWindow/WindowsFilling/DeleteModal'
import EditModal from './UI/ModalWindow/WindowsFilling/EditModal'
import { deleteMovie } from './functions/deleteMovie'

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

    const dispatch = useDispatch()
    const currentMovie = useSelector((state: IStoreItem) => state.item )
    const currentMovieId = useSelector((state: IStoreItem) => state.item.id )
    const movieList = useSelector((state: IStoreItem) => state.itemsList )
    const movieListCopy = useSelector((state: IStoreItem) => state.itemsListCopy )

    const switchSubmit = () => {
        switch (content) {
            case 'delete':
                deleteMovie(
                    {dispatch, 
                    currentMovie, 
                    currentMovieId, 
                    movieList}
                )
                setVisible(false)
                break;
                        // МОЖЕТ БЫТЬ СЮДА МОЖНО БУДЕТ ПРОКИНУТЬ ФУНКЦИЮ ЭДИТА БЕЗ ЕБАТРОНИКИ С КНОПУКАМИ
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
            <div className="w-full flex items-center justify-end">
                <button
                    className={ classes.cancelButton }
                    onClick={ nullifyModal }
                >
                    CANCEL
                </button>
                {/* <button
                    type='submit'
                    className={ classes.submitButton }
                    onClick = {switchSubmit}
                >
                    SUBMIT
                </button> */}
            </div>
        </div>
    </div>
  )
}

export default ModalAdd
