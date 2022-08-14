import { applyMiddleware, createStore } from "redux"
import thunk from 'redux-thunk';
import { MovieAsctionEnum, IStoreItem, reducerActionType, ListFilterEnum, ModalEnum, WatchListEnum } from "../models"

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
    itemsList: [],
    itemsListCopy: [],
    modalOpen: false,
    content: '',
    deleted: false,
    watchList: [ ],
}


const reducer = (state = defaultState, action: reducerActionType) => {
    switch(action.type) {

        case MovieAsctionEnum.pick:
            return {...state, item: state.item = action.payload}

        case MovieAsctionEnum.delete:
            return {...state, item: state.item = state.itemsList[action.payload]}
            
        case MovieAsctionEnum.edit:
            return {...state, item: state.item = action.payload}
    
        case ListFilterEnum.set:
            return {...state, itemsList: state.itemsList = action.payload}
        
        case ListFilterEnum.search:
            return {...state, itemsList: action.payload}

        case ListFilterEnum.setCopy:
            return {...state, itemsListCopy: state.itemsListCopy = action.payload}
            
        case ListFilterEnum.edit:
            return {...state, itemsList: state.itemsListCopy[action.payload] = action.value}
        
        case ListFilterEnum.add:
            return {...state, itemsList: state.itemsListCopy.unshift(action.payload) }

        case ListFilterEnum.delete: 
            return {...state, itemsList: state.itemsListCopy.splice(action.payload, 1)}
        
        case ModalEnum.open:
            return {...state, modalOpen: action.payload}

        case ModalEnum.setContent:
            return {...state, content: action.payload}

        case ModalEnum.deleteCheck:
            return {...state, deleted: action.payload}

        case WatchListEnum.push:
            return {...state, watchList: state.watchList.concat(action.movie)}
        
        case WatchListEnum.delete:
            return {...state, watchList: state.watchList = action.movie }

        case WatchListEnum.clear:
            return {...state, watchList: state.watchList = []}

        default:
            return state
    }
}

export const store = createStore(reducer, applyMiddleware(thunk))
