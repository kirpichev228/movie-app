import { createStore } from "redux"
import { IStoreItem, reducerActionType } from "../models"

const defaultState: IStoreItem = {
    item: {
      budget: 0,
      genres: [''],
      id: 0,
      overview: 'Это ты конечно зря. Тыкни на любой фильм что бы вернуть все в норму',
      poster_path: '',
      release_date: 'Ну',
      revenue: 322,
      runtime: 228,
      tagline: 'Кто-то попал сюда раньше времени',
      title: 'Оппа',
      vote_average: 8081,
      vote_count: 0,
    }
}

const reducer = (state = defaultState, action: reducerActionType) => {
    switch(action.type) {

        case 'PICK_MOVIE':
            return {...state, item: state.item = action.payload}
        
        case 'ADD_MOVIE':
            return{...state, }

        default:
            return state
    }
}

export const store = createStore(reducer)