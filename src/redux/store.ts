import { applyMiddleware, createStore } from "redux"
import thunk from 'redux-thunk';
import { MovieAsctionEnum, IStoreItem, reducerActionType, ListFilterEnum, ModalEnum, WatchListEnum, GenreSort } from "../models"

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
    watchList: [],
    selectedGenres: [],
    pagination: 1,
    pageItems: [],
    pageStartIndex: 0,
    pageEndIndex: 24,
}


const reducer = (state = defaultState, action: reducerActionType) => {
    switch(action.type) {

        case MovieAsctionEnum.PICK_MOVIE:
            return {...state, item: state.item = action.payload}

        case MovieAsctionEnum.DELETE_MOVIE:
            return {...state, item: state.item = state.itemsList[action.payload]}
            
        case MovieAsctionEnum.EDIT_MOVIE:
            return {...state, item: state.item = action.payload}
    
        case ListFilterEnum.SET:
            return {...state, itemsList: state.itemsList = action.payload}
        
        case ListFilterEnum.SEARCH:
            return {...state, itemsList: action.payload}

        case ListFilterEnum.SET_PAGE:
            return {...state, pagination: state.pagination = action.payload}

        case ListFilterEnum.SET_PAGE_ITEMS:
            return {...state, pageItems: state.pageItems = action.payload}

        case ListFilterEnum.SET_COPY:
            return {...state, itemsListCopy: state.itemsListCopy = action.payload}

        case ListFilterEnum.SET_START:
            return {...state, pageStartIndex: state.pageStartIndex = action.payload}

        case ListFilterEnum.SET_END:
            return {...state, pageEndIndex: state.pageEndIndex = action.payload}
            
        case ListFilterEnum.EDIT_LIST:
            return {...state, itemsList: state.itemsListCopy[action.payload] = action.value}
        
        case ListFilterEnum.ADD_MOVIES:
            return {...state, itemsList: state.itemsListCopy.unshift(action.payload) }

        case ListFilterEnum.DELETE_MOVIES: 
            return {...state, itemsList: state.itemsListCopy.splice(action.payload, 1)}
        
        case ModalEnum.OPEN_MODAL:
            return {...state, modalOpen: action.payload}

        case ModalEnum.SET_CONTENT:
            return {...state, content: action.payload}

        case ModalEnum.DELETE_CHECK:
            return {...state, deleted: action.payload}

        case WatchListEnum.PUSH_TO_LIST:
            return {...state, watchList: state.watchList.concat(action.movie)}
        
        case WatchListEnum.DELETE_FROM_LIST:
            return {...state, watchList: state.watchList = action.movie }

        case WatchListEnum.CLEAR_LIST:
            return {...state, watchList: state.watchList = []}

        case GenreSort.ADD_GENRE:
            return {...state, selectedGenres: state.selectedGenres.concat(action.genre) }

        case GenreSort.DELETE_GENRE:
            return {...state, selectedGenres: state.selectedGenres.filter(item => item !== action.genre) }

        default:
            return state
    }
}

export const store = createStore(reducer, applyMiddleware(thunk))
