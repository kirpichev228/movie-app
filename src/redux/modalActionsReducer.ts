const defaultState = {
    modalOpen: false,
    content: ''
}

export const modalActionsReducer = (state = defaultState, action: reducerActionType) => {
    switch(action.type) {

        case ModalEnum.open:
            return {...state, modalOpen: action.payload}

        case ModalEnum.setContent:
            return {...state, content: action.payload}

        default:
            return state
    }
}