import { createStore } from "redux"
import { MovieAsctionEnum, IStoreItem, reducerActionType, ListFilterEnum } from "../models"

const defaultState: IStoreItem = {
    item: {
      budget: 0,
      genres: [''],
      id: 0,
      overview: 'ой',
      poster_path: '',
      release_date: 'ой',
      revenue: 322,
      runtime: 228,
      tagline: 'ой',
      title: 'ой',
      vote_average: 8081,
      vote_count: 0,
    },
    itemsList: [

    ]
}

const reducer = (state = defaultState, action: reducerActionType) => {
    switch(action.type) {

        case MovieAsctionEnum.pick:
            return {...state, item: state.item = action.payload}
    
        case ListFilterEnum.set:
            return {...state, itemsList: state.itemsList = action.payload}
        
        default:
            return state
    }
}

export const store = createStore(reducer)
