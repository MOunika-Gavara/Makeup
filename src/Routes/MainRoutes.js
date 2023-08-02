import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import BuyNow from "../pages/BuyNow";
import Category from "../pages/Category";
import Brands from "../pages/Brands";
import Cart from "../pages/Cart";
import Header from "../components/Header";
import Products from "../pages/Products"
import '../App.css';
import "../pages/Home.css";
import Maybelline from "../pages/Maybelline";
import Footer from "../components/Footer"
import Lipsticks from "../pages/Lipsticks";
import CoverGirl from "../pages/CoverGirl";

const MainRoutes = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/category" element={<Category />}></Route>
            <Route exact path='/brands' element={<Brands />}></Route>
            <Route exact path="/Cart" element={<Cart />}></Route>
            <Route exact path="/lipsticks" element={<Lipsticks />}></Route>
          </Routes>
        </Header>
        <Routes>
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path="/maybelline" element={<Maybelline />}></Route>
          <Route exact path="/cover" element={<CoverGirl />}></Route>
          <Route exact path='/buy' element={<BuyNow style={{ backgroundColor: "#f4e1d2" }} />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer className="footer"></Footer>
    </div>

  )
}
export default MainRoutes;