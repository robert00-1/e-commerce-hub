import { useState, useId, useRef, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function ProductForm() {
    const { setProducts } = useContext(ProductContext);

    const nameId = useId();
    const priceId = useId();
    const nameRef = useRef();

    const [form, setForm] = useState({
        name: "",
        description: "",
        origin: "",
        price: "",
        location: "",
    });

    
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        // Add product directly to context
        setProducts(prev => [...prev, { ...form, id: Date.now() }]);
        setForm({ name: "", description: "", origin: "", price: "", location: "" });
    }

    return (
        <form className="product-form" onSubmit={handleSubmit}>
            <label htmlFor={nameId}>Coffee Name</label>
            <input
                id={nameId}
                name="name"
                value={form.name}
                onChange={handleChange} 
                ref={nameRef}
            />

            <label>Description</label>
            <input
                name="description"
                value={form.description}
                onChange={handleChange}  
            />

            <label>Origin</label>
            <input
                name="origin"
                value={form.origin}
                onChange={handleChange}  
            />

            <label htmlFor={priceId}>Price</label>
            <input
                id={priceId}
                name="price"
                type="number"
                value={form.price}
                onChange={handleChange}  
            />

            <label>Location</label>
            <input
                name="location"
                value={form.location}
                onChange={handleChange}  
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default ProductForm;