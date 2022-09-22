import * as React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "../dashboard/dashboard";
import Profile from "../profile/profile";
import Sales from "../sales/sales";
import Inventory from "../inventory/inventory";
import Customers from "../customers/customers";
import Statistics from "../statistics/statistics";
import Investors from "../investors/investors";
import Investments from "../investments/investments";
import Orders from "../orders/orders";
import Categories from "../categories/categories";
import Products from "../products/products";
import Payments from "../payments/payments";
import Reviews from "../reviews/reviews";
import Settings from "../settings/settings";
import SignIn from "../signin/signin";
import SignUp from "../signup/signup";

export default function Admin () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
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
    </Router>
  )
}