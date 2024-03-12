import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFoundPage from './component/page/NotFoundPage.jsx'
import Home from './component/page/Home.jsx'
import AddProduct from './component/page/AddProduct.jsx'
import Products from './component/page/Products.jsx'
import AddUserComponent from './component/page/AddUser.jsx'
import Users from './component/page/Users.jsx'
import Navbar from './component/Navbar.jsx'
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/products" element={<Products />} />
          <Route path="/adduser" element={<AddUserComponent />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
