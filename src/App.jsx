import { Routes, Route} from "react-router-dom";
 import Navbar from "./components/Navbar";
 import ShopPage from "./pages/ShopPage";
 import LandingPage from "./pages/LandingPage";
 import Footer from "./components/Footer";
 import AdminPortal from "./pages/AdminPortal";


function App ()  {
return (
  
    <div className="flex flex-col min-h-screen bg-[#8B5E3C] text-white">
    <Navbar />

    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ShopPage />} />
      <Route path="/add-product" element={<AdminPortal />} />
      
    </Routes>

    <Footer />
    </div>
  
);

}
export default App;
