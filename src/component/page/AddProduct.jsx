import React from 'react'
import { useFormik } from 'formik'
import { validationSchema } from './shared/validationSchema.js'
import {
  StyledPageWrapper,
  StyledForm,
  StyledInputsWrap,
  StyledLabel,
  StyledInput,
} from './shared/StyledComponents.jsx'

const AddProduct = () => {
  const formik = new useFormik({
    initialValues: {
      productName: '',
      description: '',
      price: '',
      stock: '',
      category: '',
    },
    onSubmit: (values) => {
      console.log('values you input', values)
    },
    validationSchema: validationSchema,
  })

  return (
    <>
      <StyledPageWrapper>
        <StyledForm
          onSubmit={(e) => {
            e.preventDefault()
            formik.handleSubmit()
          }}
        >
          <StyledInputsWrap>
            <StyledLabel id="productName" htmlFor="productName">
              name
            </StyledLabel>
            <StyledInput
              type="text"
              name="productName"
              id="productName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.productName}
            />
          </StyledInputsWrap>

          <StyledInputsWrap>
            <StyledLabel id="description" htmlFor="description">
              description
            </StyledLabel>
            <StyledInput
              type="text"
              name="description"
              id="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
          </StyledInputsWrap>

          <StyledInputsWrap>
            <StyledLabel id="price" htmlFor="price">
              price
            </StyledLabel>
            <StyledInput
              type="number"
              name="price"
              id="price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
            />
          </StyledInputsWrap>

          <StyledInputsWrap>
            <StyledLabel id="stock" htmlFor="stock">
              stock
            </StyledLabel>
            <StyledInput
              type="number"
              name="stock"
              id="stock"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.stock}
            />
          </StyledInputsWrap>

          <StyledInputsWrap>
            <StyledLabel id="category" htmlFor="category">
              category
            </StyledLabel>
            <StyledInput
              type="text"
              name="category"
              id="category"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.category}
            />
          </StyledInputsWrap>

          <button type="onsubmit">submit</button>
        </StyledForm>
      </StyledPageWrapper>
    </>
  )
}

export default AddProduct
