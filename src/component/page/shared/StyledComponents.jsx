import styled from 'styled-components'

// styling for add product components
export const StyledPageWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const StyledForm = styled.form`
  height: 640px;
  width: 400px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: #67c6e3;
`

export const StyledInputsWrap = styled.div`
  height: 100px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 5px;
`

export const StyledLabel = styled.label`
  height: 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  text-align: start;
  padding-left: 15px;
`

export const StyledInput = styled.input`
  height: 40px;
  width: 90%;
  display: flex;
  padding-left: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: start;
`

export const StyledButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: white;
`

export const StyledErrorMessage = styled.p`
  color: red;
  display: flex;
  width: 90%;
  text-align: start;
`

// navbar stylings

export const StyledNavbar = styled.nav`
  height: 100px;
  width: 100%;
  display: flex;
  top: 0;
  left: 0;
  flex-direction: row;
  justify-content: Center;
  align-items: center;
  position: fixed;
  background-color: #67c6e3;
`

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  align-text: center;
  padding: 0;
  margin: 0;
`

export const StyledLi = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  align-text: center;
  padding: 1rem;
  margin: 5px;
`
