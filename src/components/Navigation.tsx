import React, { useState } from 'react'
import { useItems } from './customHooks/useItems'
import ModalAdd from './ModalAdd'
import SortButton from './UI/SortBtn/SortButton'
import ManageBtn from './UI/ManageList/ManageBtn'

const Navigation = () => {

    const { item } = useItems()
    const [modal, setModal] = useState(false)
    return (
        <>
            <nav className=" h-12 w-11/12 py-8  border-b flex items-center justify-between" >
                <ul className="flex gap-7">
                    <li>
                        <SortButton>ALL</SortButton>
                    </li>
                    <li>
                        <SortButton>DOCUMENTARY</SortButton>
                    </li>
                    <li>
                        <SortButton>COMEDY</SortButton>
                    </li>
                    <li>
                        <SortButton>HORROR</SortButton>
                    </li>
                    <li>
                        <SortButton>CRIME</SortButton>
                    </li>
                </ul>
                <div className="flex gap-6">
                    <ManageBtn onClick={()=>setModal(true)}>Add film</ManageBtn>
                    <ManageBtn onClick={()=>setModal(true)}>edit film</ManageBtn>
                    <ManageBtn onClick={()=>setModal(true)}>delete film</ManageBtn>
                    <ModalAdd visible={modal} setVisible={setModal}/>
                </div>
                <div className="">
                    <span className=" opacity-75 mx-2">SORT BY</span>
                    <select name="" id="" className=" bg-slate-600 rounded-md">
                        <option value="ae">by something</option>
                    </select>
                </div>
            </nav>
            <span className=' self-start ml-[4%] mt-5 text-xl'>
                {item.length} movies found
            </span>
        </>
  )
}

export default Navigation