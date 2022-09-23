import './App.css'
import Nav from "./components/shared/nav/nav";
import {Routes, Route} from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Profile from "./components/profile/profile";
import Sales from "./components/sales/sales";
import Inventory from "./components/inventory/inventory";
import Customers from "./components/customers/customers";
import Statistics from "./components/statistics/statistics";
import Investors from "./components/investors/investors";
import Investments from "./components/investments/investments";
import Orders from "./components/orders/orders";
import Categories from "./components/categories/categories";
import Products from "./components/products/products";
import Payments from "./components/payments/payments";
import Reviews from "./components/reviews/reviews";
import Settings from "./components/settings/settings";
import SignIn from "./components/signin/signin";
import SignUp from "./components/signup/signup";
import * as React from "react";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/"  element={<Dashboard/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/sales" element={<Sales/>}/>
        <Route path="/inventory" element={<Inventory/>}/>
        <Route path="/customers" element={<Customers/>}/>
        <Route path="/statistics" element={<Statistics/>}/>
        <Route path="/investors" element={<Investors/>}/>
        <Route path="/investments" element={<Investments/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/payments" element={<Payments/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default App
