import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';


export const ProductTable = ({ products = [] }) => {
    return (
        <TableContainer component={Paper}>
            <h3>Tabla de Productos</h3>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell align="right">Precio</TableCell>
                    <TableCell>Categoría</TableCell>
                </TableRow>
                </TableHead>
            <TableBody>
                {products?.map((product, index) => {
                return (
                    <TableRow key={index}>
                        <TableCell>{product?._id}</TableCell>
                        <TableCell>{product?.nombre}</TableCell>
                        <TableCell align="right">${product?.precio}</TableCell>
                        <TableCell>{product?.categoria}</TableCell>
                    </TableRow>
                    );
                })}
            </TableBody>
            </Table>
        </TableContainer>
    );
};