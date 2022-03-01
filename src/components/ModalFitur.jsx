import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, FormControlLabel, FormGroup, Switch, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


export default function ModalFitur() {
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
                            <button className="btn btn-primary" ><Link to="/login">Masuk</Link></button>
                            <button className="btn btn-danger"><Link to="/register">Daftar</Link></button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
