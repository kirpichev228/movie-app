import React from 'react'
import { IItem } from '../models'
import { products } from './products'

interface productProps {
    product: IItem
}

const Item = (props: productProps) => {

    

    return (
        <div className="item  w-[300px] shadow-2xl">
                <img 
                    src={props.product.image} 
                    alt='' 
                    className=' w-[300px] h-[400px]'
                ></img>
                <div className="item-heading p-2 flex justify-between items-center">
                    <h3 className="item-name font-bold text-xl">
                        {props.product.title}
                    </h3>
                    <span className="item-realese px-2 border border-slate-500">
                        {props.product.year}
                    </span>
                </div>
                <span className="item-genre text-sm opacity-80 px-2">
                    {props.product.genre}
                </span>
            </div>
    )
}

export default Item