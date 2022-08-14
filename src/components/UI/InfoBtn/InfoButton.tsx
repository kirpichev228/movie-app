import React from 'react'
import classes from './infoButton.module.css'

const InfoButton = () => {

  const buttonClick = (e) => {
    e.stopPropagation()
  }

  return (
    <button className={ classes.infoBtn } onClick={buttonClick}>
        ...
    </button>
  )
}

export default InfoButton