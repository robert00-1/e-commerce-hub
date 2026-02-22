import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";


function AdminPortal() {
 return (
    <div className="Admin-page">
       <div className="admin-card">
        <h2 className="portal-title">Components</h2>
        <ProductForm/>
    </div>
    </div>
 );
}

export default AdminPortal;