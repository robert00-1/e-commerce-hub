import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
// Custom hook for accessing products globally
export const useProducts = () => {
    return useContext(ProductContext);
};