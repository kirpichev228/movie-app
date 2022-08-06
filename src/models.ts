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
}

export type btnManage = {
    children: string
    onClick(): void
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
    type: string
    payload: IItem
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
    filterName = 'FILTER_NAME',
    filterYear = 'FILTER_YEAR'
}