import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, FormControlLabel, FormGroup, Switch, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

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
export default function ModalFitur() {
    const [showModal, setShowModal] = useState(false)
    return (
        <div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-2">
                        Logo Alatdapoerku
                    </div>
                    <div className="col-2">
                        Kategori
                    </div>
                    <div className="col-2">
                        Sort
                    </div>
                    <div className="col-2">
                        Filter
                    </div>
                    <div className="col-2">
                        <input type="text" placeholder="Cari barang disini" />
                    </div>
                    <div className="col-2 d-flex justify-content-end">
                        <div className="mx-3">
                            <button className="btn btn-primary" onClick={()=> setShowModal(true)}>Masuk</button>
                            <button className="btn btn-danger"><Link to="/register">Daftar</Link></button>
                        </div>
                    </div>
                </div>
                <div className="align-items-center">
                    <Modal
                        open={showModal}
                        onClose={()=> setShowModal(false)}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style}>
                            <div className="d-flex justify-content-center col-12">
                                <h2 className="mt-5 " >
                                    Login Page
                                </h2>
                            </div>
                            <div className="d-flex justify-content-center">
                                <TextField id="outlined-basic" label="Email" variant="outlined" type="text" className="my-3"/>
                            </div>
                            <div className="d-flex justify-content-center">
                                <TextField id="outlined-basic" label="Password" variant="outlined" type="password" />
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
                                <Button variant="contained" className="my-3 w-50" size="large">
                                    Log in
                                </Button>
                            </div>
                        </Box>
                    </Modal>
                </div>
            </div>
        </div>
    )
}
