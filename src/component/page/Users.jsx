import React from 'react'
import { useSelector } from 'react-redux'
import { StyledProductsWrapper } from './shared/StyledComponents.jsx'
const Users = () => {
  const users = useSelector((state) => state.counter.users)

  console.log('this is the users: ', users)
  return (
    <>
      <StyledProductsWrapper>
        {users.map((user, index) => {
          return <div key={index}>{user.name}</div>
        })}
      </StyledProductsWrapper>
    </>
  )
}

export default Users
