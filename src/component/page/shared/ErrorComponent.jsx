import React from 'react'
import { StyledErrorMessage } from './StyledComponents.jsx'

const ErrorComponent = ({ children }) => {
  return (
    <>
      <StyledErrorMessage>{children}</StyledErrorMessage>
    </>
  )
}

export default ErrorComponent
