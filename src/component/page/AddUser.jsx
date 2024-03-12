import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import {
  StyledPageWrapper,
  StyledForm,
  StyledInputsWrap,
  StyledLabel,
  StyledInput,
  StyledButton,
} from './shared/StyledComponents.jsx'
const AddUser = () => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('values you input', values)
      dispatch(addUser(values))
    },
  })

  const addUser = (value) => {
    dispatch(addUser(value))
  }

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
            <StyledLabel name="username" htmlFor="username">
              username
            </StyledLabel>
            <StyledInput
              type="text"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
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

export default AddUser
