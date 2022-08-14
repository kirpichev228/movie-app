import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MovieAsctionEnum, IItem, IStoreItem, ModalEnum } from '../models'
import { useItems } from './customHooks/useItems'
import classes from './styles/ModalWindow.module.css'
import Item from './Item'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ItemFill = () => {

  const { loading, error } = useItems()
  const dispatch = useDispatch()
  const router = useNavigate()
  
  const itemsListCopy = useSelector((state: IStoreItem) => state.itemsListCopy)
  const isDeleted = useSelector((state: IStoreItem) => state.deleted)
  setTimeout(()=> {
    dispatch({
      type: ModalEnum.deleteCheck,
      payload: false
    })
  }, 2000)


  const pickMovie = (item:IItem) => {
    dispatch({type: MovieAsctionEnum.pick, payload: item} )
    router(`/posts/${item.id}`)
    dispatch({
      type: ModalEnum.deleteCheck,
      payload: false
    })
  }
 
  return (
    <div className=' grid grid-cols-4 max-w-7xl items-center justify-items-center w-[90%] gap-10 p-5' >
      { loading && <p className=' mx-auto text-white'>Loading...</p> }
      { error && <p className=' mx-auto text-white'>{ error }</p> }
      <TransitionGroup className='absolute'>
        { isDeleted && 
        <CSSTransition
          key={1230}
          timeout={500}
          classNames='modalDelete'
        >
          <div className={classes.modalDeleted}>Success</div>
        </CSSTransition>
        }
      </TransitionGroup>
      
      { 
      itemsListCopy.length 
      ?
        itemsListCopy.map((item: IItem) => <Item item={item} key={item.id} onClick={ ()=> {
          pickMovie(item)
        } }/>)
      :
        <h2 className=' text-4xl'>
          Posts not found!
        </h2>
      }
    </div>
  )
}

export default ItemFill