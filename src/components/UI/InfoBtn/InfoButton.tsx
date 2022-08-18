import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IStoreItem, WatchListEnum } from '../../../models'
import classes from '../../styles/movieCard.module.css'


type PropsType = {
  id: number | undefined
}

const InfoButton = ({id, ...props}: PropsType) => {

  const [menuVisibele, setMenuVisibele] = useState(false)
  const dispatch = useDispatch()
  const movieList = useSelector((state:IStoreItem) => state.watchList)
  const menuRef = useRef(null)
  useEffect(()=>{
    if(!menuVisibele) return;

    const handleClick = (e) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) {
        setMenuVisibele(false)
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.addEventListener('click', handleClick)
    }
  }, [menuVisibele])

  const buttonClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
    setMenuVisibele(true)
  }

  return (
    <>
      <button className={ classes.infoBtn } onClick={buttonClick}>
          ...
      </button>
      { menuVisibele && 
        <div className={ classes.menuContainer } ref={ menuRef }>
          { movieList.includes(id)
            ?
              <p 
                className='text-white bg-green-600 h-8 px-2 flex items-center'
                onClick={e => e.stopPropagation()}
              >
                In WatchList!
              </p>
            :
              <button 
                className={classes.menuButton}
                onClick={(e)=>{
                  e.stopPropagation()
                  dispatch({
                    type: WatchListEnum.push,
                    movie: id
                  })
                }
                }
              >
              To WatchList
            </button>
          }
          <Link
            onClick={e => e.stopPropagation()}
            to={`/posts/${id}`}
            className={classes.menuButton}
          >
            Movie Info
          </Link>
        </div>
      }
    </>
  )
}

export default InfoButton