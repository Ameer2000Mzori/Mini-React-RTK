import React from 'react'
import { useFormik } from 'formik'
import { validationSchema } from './shared/validationSchema.js'
import {
  StyledPageWrapper,
  StyledForm,
  StyledInputsWrap,
  StyledLabel,
  StyledInput,
  StyledButton,
} from './shared/StyledComponents.jsx'
import { addProduct } from '../../countSlice.js'

import { useDispatch } from 'react-redux'

const AddProduct = () => {
  const dispatch = useDispatch()

  const formik = new useFormik({
    initialValues: {
      productName: '',
      description: '',
      price: '',
      stock: '',
      category: '',
    },
    onSubmit: (values) => {
      dispatch(addProduct(values)) // Dispatching addProduct action with form values
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
            <StyledLabel name="description" htmlFor="productName">
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
            <StyledLabel name="description" htmlFor="description">
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
            <StyledLabel name="price" htmlFor="price">
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
            <StyledLabel name="stock" htmlFor="stock">
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
            <StyledLabel name="category" htmlFor="category">
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

          <StyledButton type="onsubmit">submit</StyledButton>
        </StyledForm>
      </StyledPageWrapper>
    </>
  )
}

export default AddProduct
