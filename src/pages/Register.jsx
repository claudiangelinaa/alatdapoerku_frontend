import { Button, FormControlLabel, FormGroup, Switch, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
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
                            <TextField id="outlined-basic" label="Email" variant="outlined" type="text" className="my-2 col-6"/>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" className="my-2 col-6"/>
                        </div>
                        <div className="d-flex justify-content-end">
                            <FormGroup>
                                <FormControlLabel control={<Switch defaultUnchecked />} label="Show password" />
                            </FormGroup>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Button variant="contained" className="col-6" size="large">Daftar</Button>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <p>
                            Dengan mendaftar, saya menyetujui <u>Syarat dan Ketentuan</u> serta Kebijakan Privasi
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
