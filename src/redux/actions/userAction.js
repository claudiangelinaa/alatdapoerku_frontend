import axios from 'axios'

export const doLogin = (data) => {
    return( dispatch )=> {
        axios.post('http://localhost:9000/authentic/login', data )
        .then((res) => {
            console.log(res);
            if(res.data.error === false){
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: {
                        message: res.data.message,
                        data: res.data.token
                    }
                })
            }else{
                dispatch({
                    type: 'LOGIN_ERROR',
                    payload: res.data.message
                })
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export const doRegister = (data) => {
    return(dispatch) => {
        axios.post('http://localhost:9000/authentic/register', data)
        .then((res) => {
            console.log(res);
            if(res.data.error === false){
                dispatch({
                    type: 'REGISTER_SUCCESS',
                    payload: res.data.message
                })
            }else{
                dispatch({
                    type: 'REGISTER_ERROR',
                    payload: res.data.message
                })
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
}