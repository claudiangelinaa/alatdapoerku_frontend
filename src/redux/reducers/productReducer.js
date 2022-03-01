let initialState = {
    loading: false,
    data: null,
    message: null
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOADING':
            return {...state, loading: true}
        case 'INIT_PRODUCTS_SUCCESS':
            return {...state, data: action.payload}
        case 'INIT_PRODUCTS_ERROR':
            return {...state, message: action.payload}
        default:
            return state
    }
}

export default productReducer