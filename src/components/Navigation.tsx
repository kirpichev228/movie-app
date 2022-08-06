import React, { useState } from 'react'
import { useItems } from './customHooks/useItems'
import ModalAdd from './ModalAddSample'
import SortButton from './UI/SortBtn/SortButton'
import ManageBtn from './UI/ManageList/ManageBtn'
import Select from './UI/Select/Select'
import { useDispatch, useSelector } from 'react-redux'
import { IItem, IStoreItem, ListFilterEnum } from '../models'
import ItemFill from './ItemFill'


const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [modalContent, setModalContent] = useState('')
    const [selectedSort, setSelectedSort] = useState('')
    const itemsList = useSelector((state: IStoreItem) => state.itemsList)
    const dispatch = useDispatch()

    const sortFilms = (sort: string) => {
        setSelectedSort(sort)
        sort === 'title' || 'release_date' || 'vote_average'
        ?
            itemsList.sort( (a, b) => a[sort] > b[sort] ? 1 : -1 )
        : 
            itemsList.sort( (a, b) => a[sort] < b[sort] ? 1 : -1 )
        dispatch({type: ListFilterEnum.set, payload: itemsList})       
    }

    return (
        <>
            <nav className=" h-12 w-11/12 py-8  border-b flex items-center justify-between" >
                <div className="flex gap-7">
                    <SortButton> ALL </SortButton>
                    <SortButton> DOCUMENTARY </SortButton>
                    <SortButton> COMEDY </SortButton>
                    <SortButton> HORROR </SortButton>
                    <SortButton> CRIME </SortButton>
                </div>
                <div className="flex gap-6">
                    <ManageBtn onClick={ ()=>{
                        setIsOpen(true)
                        setModalContent('add')
                    } }
                    >
                        Add film
                    </ManageBtn>
                    <ManageBtn onClick={ ()=>{
                        setIsOpen(true)
                        setModalContent('edit')
                        setIsOpen(true)
                    } }
                    >
                        Edit film
                    </ManageBtn>
                    <ManageBtn onClick={ ()=>{
                        setIsOpen(true)
                        setModalContent('delete')
                    } }
                    >
                        Delete film
                    </ManageBtn>
                    { isOpen && <ModalAdd visible={ isOpen } setVisible={ setIsOpen } content={modalContent}/>}
                </div>
                <Select 
                    value={ selectedSort }
                    onChange={ sortFilms }
                    defaultValue='Sort by:'
                    options={[
                        {value: 'title', name: 'By Title (A-Z)'},
                        {value: ' title', name: 'By Title (Z-A)'},
                        {value: 'release_date', name: 'By Year (early-later)'},
                        {value: ' release_date', name: 'By Year (later-early)'},
                        {value: 'vote_average', name: 'By Vote (low-high)'},
                        {value: ' vote_average', name: 'By Vote (high-low)'},
                    ]}
                />
            </nav>
            <span className='self-start ml-[4%] mt-5 text-xl'>
                { itemsList.length } movies found
            </span>
            <ItemFill />
        </>
  )
}

export default Navigation