import React, { useState } from 'react'
import classes from './SortButton.module.css'

type btnType = {
  children: string
}

const SortButton = (props:btnType) => {

  const [isPicked, setisPicked] = useState(true)
  const isPickedCheck = () => {
    setisPicked(!isPicked)
  }

  return (
    <button 
      className={isPicked ? classes.sortBtn : classes.sortBtnPicked}
      onClick={ isPickedCheck }
    >
      {props.children}
    </button>
  )
}

export default SortButton