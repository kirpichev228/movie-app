import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MovieAsctionEnum, IItem, IStoreItem, ModalEnum } from '../models'
import { useItems } from './customHooks/useItems'
import classes from './styles/ModalWindow.module.css'
import Item from './Item'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import usePage from './customHooks/usePage'

const ItemFill = () => {

  const { loading, error } = useItems()
  const dispatch = useDispatch()
  const router = useNavigate()
  const {setPage} = usePage()
  const itemsList = useSelector((state: IStoreItem) => state.itemsList)
  const isDeleted = useSelector((state: IStoreItem) => state.deleted)  
  const page = useSelector((state: IStoreItem) => state.pagination)
  const pageItems = useSelector((state: IStoreItem) => state.pageItems)

  const lastPage = Math.ceil(itemsList.length/24)

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
    <>
      <div className=' grid grid-cols-4 max-w-7xl items-center justify-items-center w-[90%] gap-10 p-5 min-h-[66.9vh]' >
        { 
          loading
        && 
          <p className=' mx-auto text-white'>
            Loading...
          </p> 
        }
        { 
          error 
        && 
          <p className=' mx-auto text-white'>
            { error }
          </p> 
        }
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
          itemsList.length 
        ?
          pageItems.map((item: IItem) => 
            <Item  
              item={item} 
              key={item.id} 
              onClick={ ()=> {
                pickMovie(item)
          } }/>)
        :
          <h2 className=' text-4xl'>
            Posts not found!
          </h2>
        }
      </div>
      <div className="w-1/3 flex justify-between items-center h-16 m-3">
        <button 
          disabled={ page === 1 } 
          className={ classes.paginationButton } 
          onClick={ () => setPage(1) }
        >
          &#60; &#60;
        </button>
        <button 
          className={ classes.paginationButton } 
          onClick={ () => setPage(page-1) }
        >
          &#60;
        </button>
        <span className={ classes.paginationButton }>
          { page }
        </span>
        <button 
          className={ classes.paginationButton } 
          onClick={ () => setPage(page+1) }
        >
          &#62;
        </button>
        <button 
          disabled={ page === lastPage } 
          className={ classes.paginationButton } 
          onClick={ () => setPage(lastPage) }
        >
          &#62; &#62;
        </button>
      </div>
    </>
    
  )
}

export default ItemFill