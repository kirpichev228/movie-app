const defaultState = {
    itemsList: [],
    itemsListCopy: [],
}

export const movieListReducer = (state = defaultState, action: reducerActionType) => {
    switch (action.type) {
        
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

        default:
            return state
    }
}