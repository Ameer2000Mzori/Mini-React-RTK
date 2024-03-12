import React from 'react'
import { Link } from 'react-router-dom'
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
import ErrorComponent from './shared/ErrorComponent.jsx'
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
      console.log('values you input', values)
      dispatch(addProduct(values)) // Dispatching addProduct action with form values
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
          <Link className=" absolute top-[5px] right-[15px]" to="/products">
            back
          </Link>
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
            {formik.touched.productName && formik.errors.productName ? (
              <ErrorComponent>{formik.errors.productName}</ErrorComponent>
            ) : null}
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
            {formik.touched.description && formik.errors.description ? (
              <ErrorComponent>{formik.errors.description}</ErrorComponent>
            ) : null}
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
            {formik.touched.price && formik.errors.price ? (
              <ErrorComponent>{formik.errors.price}</ErrorComponent>
            ) : null}
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
            {formik.touched.stock && formik.errors.stock ? (
              <ErrorComponent>{formik.errors.stock}</ErrorComponent>
            ) : null}
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
            {formik.touched.category && formik.errors.category ? (
              <ErrorComponent>{formik.errors.category}</ErrorComponent>
            ) : null}
          </StyledInputsWrap>

          <StyledButton type="onsubmit">submit</StyledButton>
        </StyledForm>
      </StyledPageWrapper>
    </>
  )
}

export default AddProduct
