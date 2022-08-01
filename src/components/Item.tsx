import React from 'react'
import { IItem } from '../models'
import InfoButton from './UI/InfoBtn/InfoButton'
// import { products } from './products'

export interface productProps {
    item: IItem
    onClick(): void
}

const Item = ({ item, ...props }: productProps, ) => {

    function imgDefault ({ currentTarget }:any) {
        currentTarget.onerror = null
        currentTarget.src = 'https://i.kym-cdn.com/photos/images/facebook/000/483/553/f73.png'
    }
    return (
        <div {...props} className="item  w-[300px] bg-[#1b1a1c] shadow-2xl" >
            <InfoButton/>
            <img 
                src={ item.poster_path } 
                alt={ item.title } 
                className=' w-[300px] h-[450px]'
                onError={ imgDefault }
            ></img>
            <div className="item-heading p-2 flex justify-between items-center">
                <h3 className="item-name font-bold text-xl">
                    { item.title }
                </h3>
                <span className="item-realese px-2 border border-slate-500">
                    { item.release_date.slice(0,4) }
                </span>
            </div>
            <span className="item-genre text-sm opacity-80 p-2">
                { item.genres.join(', ') }
            </span>
        </div>
    )
}

export default Item