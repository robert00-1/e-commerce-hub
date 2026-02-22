import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();
const mockProducts = [
{id: 1, name: "Coffee Name", description: "Description", origin:"Origin", price: "price" },
{ id:2, name: "Coffee Name", description: "Description", origin: "Origin", price: "price" },
{id: 3, name: "Coffee Name", description: "Description", origin:"Origin", price: "price" },
{ id:4, name: "Coffee Name", description: "Description", origin: "Origin", price: "price"},
{id: 5, name: "Coffee Name", description: "Description", origin:"Origin", price: "price" },
{ id:6, name: "Coffee Name", description: "Description", origin: "Origin", price: "price"},


];
export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  setProducts(mockProducts)
  }, []);

  // create product
  const addProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };
  // delete product
  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };
  // update product
  const updateProduct = (updateProduct) => {
    setProducts((prev) =>
   prev.map((product) =>
    product.id === updateProduct.id ? updateProduct : product
  ) 
    );
  };

  return (
    <ProductContext.Provider 
    value={{ 
      products,
      setProducts,
      addProduct,
      deleteProduct,
      updateProduct,


    }}
    >
      {children}
    </ProductContext.Provider>
  );
}