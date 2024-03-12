import React from 'react'
import { useSelector } from 'react-redux'
const Products = () => {
  const products = useSelector((state) => state.products)

  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  )
}

export default Products
