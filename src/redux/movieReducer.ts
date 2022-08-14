const defaultState = {
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
      }
}

export const movieReducer = (state = defaultState, action: reducerActionType) => {
    switch (action.type) {

        case MovieAsctionEnum.pick:
            return {...state, item: state.item = action.payload}

        case MovieAsctionEnum.delete:
            return {...state, item: state.item = state.itemsList[action.payload]}
            
        case MovieAsctionEnum.edit:
            return {...state, item: state.item = action.payload}
                
        default:
            return state
    }
}