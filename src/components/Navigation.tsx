import React, { useState } from 'react'
import { useSort } from './customHooks/useSort'
import ModalAdd from './ModalAddSample'
import SortButton from './UI/SortBtn/SortButton'
import ManageBtn from './UI/ManageList/ManageBtn'
import Select from './UI/Select/Select'
import { useSelector } from 'react-redux'
import { IItem, IStoreItem } from '../models'
import ItemFill from './ItemFill'


const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [modalContent, setModalContent] = useState('')
    const [selectedSort, setSelectedSort] = useState('')
    const { sortedPosts } = useSort()

    const itemsListCopy = useSelector((state: IStoreItem) => state.itemsListCopy)

    const sortFilms = (sort: keyof IItem) => {
        setSelectedSort(sort)
        sortedPosts( sort )      
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
                    { isOpen && <ModalAdd 
                        visible={ isOpen } 
                        setVisible={ setIsOpen } 
                        content={modalContent}/>
                    }
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
                { itemsListCopy.length } movies found
            </span>
            <ItemFill />
        </>
  )
}

export default Navigation