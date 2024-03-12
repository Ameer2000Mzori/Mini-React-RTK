import React from 'react'
import { useSelector } from 'react-redux'
const Products = () => {
  const collectionOfProducts = useSelector((state) => state.counter.products)

  console.log('this is products collection ', collectionOfProducts)
  if (collectionOfProducts.length <= 0) return <div>no products to show</div>

  return (
    <>
      <h1>Products</h1>
      <ul>
        {collectionOfProducts.map((product) => (
          <li key={product}>{product.productName}</li>
        ))}
      </ul>
    </>
  )
}

export default Products
