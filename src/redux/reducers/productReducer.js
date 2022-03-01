let initialState = {
    loading: false,
    data: null,
    message: null
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOADING':
            return {...state, loading: true}
        default:
            return state
    }
}

export default productReducer