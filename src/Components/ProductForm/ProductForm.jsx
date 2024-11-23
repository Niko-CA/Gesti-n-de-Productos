import { useState } from 'react';

export const ProductForm = ({cargarProducto}) => {
    const [formData, setFormData] = useState({
    _id: "",
    nombre: '',
    precio: '',
    categoria: ''
    });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ 
            ...formData, 
            [name]: value 
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        cargarProducto(formData);
        setFormData({ 
            _id: "",
            nombre: "", 
            precio: "", 
            categoria: "" 
        });
    };
    
    return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3>Agregar Nuevo Producto</h3>
        <input
            type="text"
            name="nombre"
            placeholder="Nombre del producto"
            value={formData.nombre}
            onChange={handleInputChange}
            style={{ margin: '10px', padding: '8px', width: '250px' }}
        />
        <input
            type="Number"
            name="precio"
            placeholder="Precio"
            value={formData.precio}
            onChange={handleInputChange}
            style={{ margin: '10px', padding: '8px', width: '250px' }}
        />
        <input
            type="text"
            name="categoria"
            placeholder="Categoría"
            value={formData.categoria}
            onChange={handleInputChange}
            style={{ margin: '10px', padding: '8px', width: '250px' }}
        />
        <button type="submit" style={{ padding: '8px 16px', marginTop: '10px', cursor: 'pointer' }}>
            Agregar Producto
        </button>
    </form>
    );
};