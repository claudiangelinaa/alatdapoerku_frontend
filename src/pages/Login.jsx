import { Box, Button, FormControlLabel, FormGroup, Switch, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import {doLogin} from '../redux/actions/userAction'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 500,
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    
    const onLogin = () => {
        let data = {
            email: email,
            password: password
        }
        console.log('data:',data);
        console.log('tes');
        dispatch(doLogin(data))
    }

    return (
        <div>
            <div className="container my-2">
                <h1 style={{textDecoration: 'none'}}>
                    <Link to="/">
                        Alatdapoerku
                    </Link>
                </h1>
            </div>
            <div className="d-flex justify-content-between" style={{height: '90vh'}}>
                <div className="col-12 border mt-5 justify-content-between">
                    <div className="row ">
                        <Box sx={style}>
                            <div className="d-flex justify-content-center col-12">
                                <h2 className="mt-5 " >
                                    Login Page
                                </h2>
                            </div>
                            <div className="d-flex justify-content-center">
                                <TextField id="outlined-basic" label="Email" variant="outlined" type="text" className="my-3" onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="d-flex justify-content-center">
                                <TextField id="outlined-basic" label="Password" variant="outlined" type="password" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="d-flex justify-content-end">
                                <FormGroup>
                                    <FormControlLabel control={<Switch defaultUnchecked />} label="Show password" />
                                </FormGroup>
                            </div>
                            <div className="d-flex justify-content-center">
                                <p className="my-2">Don't have an account? <Link to="/register">Sign up</Link></p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Button variant="contained" className="my-3 w-50" size="large" onClick={()=>onLogin()}>
                                    Log in
                                </Button>
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login