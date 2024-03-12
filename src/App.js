import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFoundPage from './component/page/NotFoundPage.jsx'
import Home from './component/page/Home.jsx'
import AddProduct from './component/page/AddProduct.jsx'
import Products from './component/page/Products.jsx'
import AddUser from './component/page/AddUser.jsx'
import Users from './component/page/Users.jsx'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/products" element={<Products />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/usrs" element={<Users />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
