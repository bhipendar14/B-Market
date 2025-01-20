import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Component/CartContext";
import Navbar from "./Component/Navbar/Navbar";
import Product from "./Component/Product/Product";
import Signup from "./Component/Navbar/Signup";
import Login from "./Component/Navbar/Login";
import Logout from "./Component/Navbar/Logout";
import Profile from "./Component/Navbar/Profile";
import Home from "./Component/Home/Home";
import Shoes from "./Component/Navbar/Shoes";
import Beauty from "./Component/Navbar/Beauty";
import Electronics from "./Component/Navbar/Electronics";
import Grocery from "./Component/Navbar/Grocery";
import Fashion from "./Component/Navbar/Fashion";
import Furniture from "./Component/Navbar/Furniture";
import Contact from "./Component/Product/Contact";


import Our from "./Component/Product/Our";
import About from "./Component/Product/About";
import Terms from "./Component/Product/Terms";
import Help from "./Component/Product/Help";
import Return from "./Component/Product/Return";
import SearchResults from "./Component/Navbar/SearchResults";

import Cart from "./Component/Navbar/Cart";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/product" element={<><Navbar /><Product /></>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/term" element={<Terms />} />
            <Route path="/our" element={<Our/>} />
            <Route path="/return" element={<Return/>} />
            <Route path="/help" element={<Help/>} />
            <Route path="/logout" element={<><Navbar /><Logout /></>} />
            <Route path="/profile" element={<><Navbar /><Profile /></>} />
            <Route path="/shoes" element={<><Navbar /><Shoes /></>} />
            <Route path="/beauty" element={<><Navbar /><Beauty /></>} />
            <Route path="/cart" element={<><Navbar /><Cart /></>} />
            <Route path="/electronics" element={<><Navbar /><Electronics /></>} />
            <Route path="/grocery" element={<><Navbar /><Grocery /></>} />
            <Route path="/fashion" element={<><Navbar /><Fashion /></>} />
            <Route path="/furniture" element={<><Navbar /><Furniture /></>} />

            <Route path="/search" element={<SearchResults />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
