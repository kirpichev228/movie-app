import React from 'react'
import classes from './ManageBtns.module.css'

type btnManage = {
  children: string
  onClick(): void
}

const ManageBtn = ({children, ...props}:btnManage) => {
  return (
    <button className={ classes.manageBtns } {...props}>
        { children.toUpperCase() }
    </button>
  )
}

export default ManageBtn