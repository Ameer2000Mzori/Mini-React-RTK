import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { addUser } from '../../countSlice.js'
import {
  StyledPageWrapper,
  StyledForm,
  StyledInputsWrap,
  StyledLabel,
  StyledInput,
  StyledButton,
} from './shared/StyledComponents.jsx'
import { userValidation } from './shared/validationSchema.js'

const AddUserComponent = () => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('values you input', values)
      dispatch(addUser(values))
    },
    validationSchema: userValidation,
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
            <StyledLabel name="name" htmlFor="name">
              name
            </StyledLabel>
            <StyledInput
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </StyledInputsWrap>
          <StyledInputsWrap>
            <StyledLabel name="password" htmlFor="password">
              password
            </StyledLabel>
            <StyledInput
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </StyledInputsWrap>
          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
      </StyledPageWrapper>
    </>
  )
}

export default AddUserComponent
