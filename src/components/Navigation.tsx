import React, { useState } from 'react'
import { useItems } from './customHooks/useItems'
import ModalAdd from './ModalAddSample'
import SortButton from './UI/SortBtn/SortButton'
import ManageBtn from './UI/ManageList/ManageBtn'
import Select from './UI/Select/Select'


const Navigation = () => {

    const { item, setItem } = useItems()
    const [isOpen, setIsOpen] = useState(false)
    const [modalContent, setModalContent] = useState('')
    const [selectedSort, setSelectedSort] = useState('')

    const sortFilms = (sort: string) => {
        setSelectedSort(sort)
        setItem( [...item].sort( (a, b) => a[sort].localeCompare(b[sort]) ) )
        console.log(item);
        
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
                        {value: 'title', name: 'by title'},
                        {value: 'release_date', name: 'by year'}
                    ]}
                />
            </nav>
            <span className='self-start ml-[4%] mt-5 text-xl'>
                { item.length } movies found
            </span>
        </>
  )
}

export default Navigation