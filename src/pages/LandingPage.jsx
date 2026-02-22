import React from "react";
import { Link} from "react-router-dom";

function LandingPage() {
    return (
        <div className="page-container">
            
            <h1 className="page-title">
                Welcome to Mmasi R Us
                </h1>
            <p className="page-description">
                This is the administrator portal for managing products and users.
                Use the navigation above to view products, add new items and update pricing.
                </p>
                
        </div>
    );
}

export default LandingPage;