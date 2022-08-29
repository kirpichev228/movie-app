import { Dispatch } from "react"
import { AnyAction } from "redux"

export interface IItem {
    budget: number,
    genres: string[],
    id: number,
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
    selectedGenres: string[],
    pagination: number,
    pageItems: IItem[],
    pageStartIndex: number,
    pageEndIndex: number,
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
    payload: IItem & number & string
    movie: number & number[]
    genre: string
}

export enum MovieAsctionEnum  {
    ADD_MOVIE = 'ADD_MOVIE',
    PICK_MOVIE = 'PICK_MOVIE',
    DELETE_MOVIE = 'DELETE_MOVIE',
    EDIT_MOVIE = 'EDIT_MOVIE',
    CANCEL = 'CANCEL'
}

export enum ListFilterEnum {
    SET = 'SET_LIST',
    SEARCH = 'SEARCH',
    SET_COPY = 'SET_COPY',
    EDIT_LIST = 'EDIT_LIST',
    ADD_MOVIES = 'ADD_MOVIES',
    DELETE_MOVIES = 'DELETE_MOVIES',
    SET_PAGE = 'SET_PAGE',
    SET_PAGE_ITEMS = 'SET_PAGE_ITEMS',
    SET_START = 'SET_START',
    SET_END = 'SET_END'
}

export enum ModalEnum {
    OPEN_MODAL = 'OPEN_MODAL',
    SET_CONTENT = 'SET_CONTENT',
    DELETE_CHECK = 'DELETE_CHECK',
}

export enum WatchListEnum {
    PUSH_TO_LIST = 'PUSH_TO_LIST',
    DELETE_FROM_LIST = 'DELETE_FROM_LIST',
    CLEAR_LIST = 'CLEAR_LIST'
}

export enum GenreSort {
    ADD_GENRE = 'ADD_GENRE',
    DELETE_GENRE = 'DELETE_GENRE',
    CLEAR_GENRES = 'CLEAR_GENRES'
}