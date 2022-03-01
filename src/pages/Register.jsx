import { Button, FormControlLabel, FormGroup, Switch, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { doRegister } from '../redux/actions/userAction'

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const onRegister = () => {
        let data = {
            email: email,
            password: password,
            name: name,
            phone_number: phoneNumber
        }
        console.log(data);

        dispatch(doRegister(data))
    }
    return (
        <div>
            <div className="container my-2">
                <h1>
                    Alatdapoerku
                </h1>
            </div>
            <div className="d-flex justify-content-between" style={{height: '90vh'}}>
                <div className="col-12 border mt-5 justify-content-between">
                    <div className="row">
                        <div className="d-flex justify-content-center mt-5">
                            <h2>
                                Register now
                            </h2>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h4>Already have an account? <Link to="/login">Log in</Link></h4>
                        </div>
                        <div className="d-flex justify-content-center mt-5">
                            <TextField id="outlined-basic" label="Email" variant="outlined" type="text" className="my-2 col-6" onChange={(e)=> setEmail(e.target.value)}/>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" className="my-2 col-6" onChange={(e)=> setPassword(e.target.value)}/>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <TextField id="outlined-basic" label="Name" variant="outlined" type="text" className="my-2 col-6" onChange={(e)=> setName(e.target.value)}/>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <TextField id="outlined-basic" label="Phone Number" variant="outlined" type="text" className="my-2 col-6" onChange={(e)=> setPhoneNumber(e.target.value)}/>
                        </div>
                        <div className="d-flex justify-content-end">
                            <FormGroup>
                                <FormControlLabel control={<Switch defaultUnchecked />} label="Show password" />
                            </FormGroup>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Button variant="contained" className="col-6" size="large" onClick={onRegister}>Daftar</Button>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <p>
                            Dengan mendaftar, saya menyetujui <u>Syarat dan Ketentuan</u> serta Kebijakan Privasi
                            </p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <p style={{color: 'red'}}>
                                {user.message}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
