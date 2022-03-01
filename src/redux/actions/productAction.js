import axios from "axios"

export const doInitProducts = (token) => {
    return(dispatch) => {
        axios.get('http://localhost:9000/product/get-all-products', {
            headers: {
                'authorization': `${token}`
            }
        })
        .then((res) => {
            if(res.data.error === false){
                dispatch({
                    type: 'INIT_PRODUCTS_SUCCESS',
                    payload: res.data.data
                })
            }else if(res.data.error === true){
                dispatch({
                    type: 'INIT_PRODUCTS_ERROR',
                    payload: res.data.message
                })
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
}