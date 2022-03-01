let initialState = {
    loading: false,
    data: null,
    message: null
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOADING':
            return {...state, loading: true}
        case 'LOGIN_SUCCESS':
            return {...state, message: action.payload}
        default:
            return state
    }
}

export default userReducer