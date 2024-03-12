import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { StyledProductsWrapper } from './shared/StyledComponents.jsx'
const Products = () => {
  const collectionOfProducts = useSelector((state) => state.counter.products)

  console.log('this is products collection ', collectionOfProducts)
  if (collectionOfProducts.length <= 0)
    return (
      <>
        <StyledProductsWrapper>
          <div>there is no products here</div>
          <p>would you like to add new product ?</p>
          <Link
            className="text-white flex flex-col text-center items-center justify-center w-[150px] h-[40px] bg-zinc-500 rounded-sm hover:bg-zinc-400 active:bg-zinc-600"
            to="/addproduct"
          >
            Add Product
          </Link>
        </StyledProductsWrapper>
      </>
    )

  return (
    <StyledProductsWrapper>
      <Link
        className=" text-white flex flex-col text-center items-center justify-center w-[150px] h-[40px] bg-zinc-500 rounded-sm hover:bg-zinc-400 active:bg-zinc-600"
        to="/addproduct"
      >
        Add Product
      </Link>
      <h1>Products</h1>
      <ul>
        {collectionOfProducts.map((product) => (
          <li key={product}>{product.productName}</li>
        ))}
      </ul>
    </StyledProductsWrapper>
  )
}

export default Products
