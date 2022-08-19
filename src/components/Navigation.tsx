import React, { useState } from 'react'
import { useSort } from './customHooks/useSort'
import ModalAdd from './ModalAddSample'
import ManageBtn from './UI/ManageList/ManageBtn'
import Select from './UI/Select/Select'
import { useSelector } from 'react-redux'
import { IItem, IStoreItem } from '../models'
import ItemFill from './ItemFill'
import Search from './UI/Search/Search'
import useFilter from './customHooks/useFilter'
import { usePage } from './customHooks/usePage'
import classes from './styles/Navigation.module.css'


const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [modalContent, setModalContent] = useState('')
    const [selectedSort, setSelectedSort] = useState('')
    const [selectedGenre, setSelectedGenre] = useState('')
    const { sortedPosts } = useSort()
    const { filteredMovies } = useFilter()
    const { setPage } = usePage()

    const itemsList = useSelector((state: IStoreItem) => state.itemsList)

    const sortFilms = (sort: keyof IItem) => {
        setSelectedSort(sort)
        sortedPosts( sort )   
        setPage(1)   
    }

    const filterFilms = (sort: keyof IItem) => {
        setPage(1)
        setSelectedGenre(sort)        
        filteredMovies( sort )    
    }

    return (
        <>
            <nav className={ classes.navbar } >
                <div className={ classes.sortbar }>
                    <div className="flex gap-2">
                        <span className='text-xl'>
                            Filter:
                        </span>
                        <Select 
                            value={ selectedGenre }
                            onChange={ filterFilms }
                            defaultValue='Filter by Genre'
                            options={[
                                { value: '', name: 'All' },
                                { value: 'Documentary', name: 'Documentary' },
                                { value: 'Comedy', name: 'Comedy' },
                                { value: 'Horror', name: 'Horror' },
                                { value: 'Action', name: 'Action' },
                                { value: 'Science Fiction', name: 'Sciense Fiction' },
                                { value: 'Fantasy', name: 'Fantasy' },
                                { value: 'Animation', name: 'Animation' },
                                { value: 'Adventure', name: 'Adventure' },
                                { value: 'Drama', name: 'Drama' },
                                { value: 'Family', name: 'Family' },
                                { value: 'Romance', name: 'Romance' },
                                { value: 'Thriller', name: 'Thriller' },
                                { value: 'Music', name: 'Music' },
                                { value: 'War', name: 'War' },
                                { value: 'History', name: 'History' },
                            ]}
                        />
                    </div>
                    <div className="flex gap-2">
                        <span className='text-xl'>
                            Sort:
                        </span>
                        <Select 
                            value={ selectedSort }
                            onChange={ sortFilms }
                            defaultValue='Sort by:'
                            options={[
                                { value: 'title', name: 'By Title (A-Z)' },
                                { value: ' title', name: 'By Title (Z-A)' },
                                { value: 'release_date', name: 'By Year (early-later)' },
                                { value: ' release_date', name: 'By Year (later-early)' },
                                { value: 'vote_average', name: 'By Vote (low-high)' },
                                { value: ' vote_average', name: 'By Vote (high-low)' },
                            ]}
                        />
                    </div>
                    <div className="flex gap-2">
                        <span className='text-xl'>
                            Search:
                        </span>
                        <Search/>
                    </div>
                    
                </div>
                <div className="flex gap-6">
                    <ManageBtn onClick={ ()=>{
                        setIsOpen(true)
                        setModalContent('add')
                    } }
                    >
                        Add film
                    </ManageBtn>
                    
                    { 
                        isOpen 
                    && 
                        <ModalAdd 
                            visible={ isOpen } 
                            setVisible={ setIsOpen } 
                            content={ modalContent }
                        />
                    }
                </div>
                
                
            </nav>
            <span className='self-start ml-[4%] mt-5 text-xl'>
                { itemsList.length } movies found
            </span>
            <ItemFill />
        </>
  )
}

export default Navigation