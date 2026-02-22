import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between", 
        backgroundColor: "#333",
        padding: "1rem",
        color: "white",
      }}
    >
      
      <div>
        <Link to="/" style={{ textDecoration: "none", color: "white", fontWeight: "600" }}>
          Home
        </Link>
      </div>

      
      <div>
        <Link to="/products" style={{ textDecoration: "none", color: "white", fontWeight: "700" }}>
          Shop
        </Link>
      </div>

      
      <div>
        <Link to="/add-product" style={{ textDecoration: "none", color: "white", fontWeight: "600" }}>
          Admin Portal
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;