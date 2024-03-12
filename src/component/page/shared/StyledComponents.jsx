import styled from 'styled-components'

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
