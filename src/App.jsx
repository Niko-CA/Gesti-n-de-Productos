import "./App.css";
import { useEffect, useState } from "react";
import { ProductTable } from "./Components/ProductTable/ProductTable";
import { ProductForm } from "./Components/ProductForm/ProductForm";
import { productmockdata } from "./utils/ProductMockData";
import { Spinner } from "./Components/Spinner/Spinner";


const App= () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
        setProductos(productmockdata);
        setLoading(false);        
      }, 1000);
      return () => clearTimeout (timeout);
    }, []);

    const addProducto = (nuevoProducto) => {
      setProductos(prevProductos => [
          ...prevProductos,
          {...nuevoProducto, _id: prevProductos.length + 1 },
        ]);
    };
    if (loading) {
        return (
        <Spinner/>
        )
    };
    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h1>Gestión de Productos</h1>
            <ProductForm cargarProducto={addProducto}  />
            <ProductTable products={productos} />
        </div>
    )
    
}
export default App;