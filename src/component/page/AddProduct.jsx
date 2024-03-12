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

          <button type="onsubmit">submit</button>
        </StyledForm>
      </StyledPageWrapper>
    </>
  )
}

export default AddProduct
