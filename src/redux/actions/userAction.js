import axios from 'axios'

export const doLogin = (data) => {
    return(dispatch) => {
        axios.post('http://localhost:9000/authentic/login', data )
        .then((res) => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }
}