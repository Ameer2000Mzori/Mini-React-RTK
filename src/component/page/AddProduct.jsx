import React from 'react'
import { Formik } from 'formik'
import { validationSchema } from './shared/validationSchema.js'
import { StyledPageWrapper } from './shared/StyledComponents.jsx'

const AddProduct = () => {
  const formik = new Formik({
    initialValues: {
      name: '',
      description: '',
      price: '',
      stock: '',
      category: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema: validationSchema,
  })

  return (
    <>
      <StyledPageWrapper>
        <div>AddProduct</div>
      </StyledPageWrapper>
    </>
  )
}

export default AddProduct
