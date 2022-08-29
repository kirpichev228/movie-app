import React from 'react'
import { btnManage } from '../../../models'
import classes from './ManageBtns.module.css'

const ManageBtn = ({ children, ...props }:btnManage) => {
  return (
    <button className={ classes.manageBtns } {...props}>
        { children.toUpperCase() }
    </button>
  )
}

export default ManageBtn