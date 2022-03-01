import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/CardProduct'
import { doInitProducts } from '../redux/actions/productAction'

export default function Product() {
    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    const user = useSelector(state => state.user)
    let token = localStorage.getItem('my-tkn')
    // console.log(product);
    
    useEffect(()=> {
        dispatch(doInitProducts(token))
    },[])
    
    return (
        <div>
            <h1>
                Product
            </h1>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>
                            No.
                        </TableCell>
                        <TableCell>
                            Name
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                            {
                                product.data.map((value, index) => {
                                    return (
                                        <>
                                            <TableRow>
                                                <TableCell>
                                                    {index+1}
                                                </TableCell>
                                                <TableCell>
                                                    {value.name}
                                                </TableCell>
                                            </TableRow>
                                        </>
                                    )
                                })
                            }
                </TableBody>
            </Table>
        </div>
    )
}
