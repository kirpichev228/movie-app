import { Dispatch } from "react"
import { AnyAction } from "redux"

export interface IItem {
    budget: number,
    genres: string[],
    id?: number,
    overview: string
    poster_path: string
    release_date: string
    revenue: number
    runtime: number
    tagline: string
    title: string
    vote_average: number
    vote_count: number
}

export interface IMoviesResponce {
    data:IItem[]
}

export interface IStoreItem {
    item: IItem
    itemsList: IItem[],
    itemsListCopy: IItem[],
    modalOpen: boolean,
    content: string,
    deleted: boolean, 
    watchList: number[],
}

export interface IEditMovie {
    dispatch: Dispatch<AnyAction>
    values: IItem,
    currentMovie: IItem,
    movieList: IItem[]
}

export type btnManage = {
    children: string
    onClick(): void
    className?: any
}

export interface ISelectProps {
    options: optionsType[]
    defaultValue: string
    value: string
    onChange: any
}

export type optionsType = {
    value: string,
    name: string
}

export type reducerActionType = {
    value: any
    type: string
    payload: IItem & number
    movie: number
}

export enum MovieAsctionEnum  {
    add = 'ADD_MOVIE',
    pick = 'PICK_MOVIE',
    delete = 'DELETE_MOVIE',
    edit = 'EDIT_MOVIE',
    cancel = 'CANCEL'
}

export enum ListFilterEnum {
    set = 'SET_LIST',
    search = 'SEARCH',
    setCopy = 'SET_COPY',
    edit = 'EDIT_LIST',
    add = 'ADD_MOVIES',
    delete = 'Delete_movies',
    
}

export enum ModalEnum {
    open = 'OPEN_MODAL',
    setContent = 'SET_CONTENT',
    deleteCheck = 'DELETE_CHECK',
}

export enum WatchListEnum {
    push = 'PUSH_TO_LIST',
    delete = 'DELETE_FROM_LIST',
    clear = 'CLEAR_LIST'
}