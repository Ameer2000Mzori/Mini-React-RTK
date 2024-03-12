import React from 'react'
import { useDispatch } from 'react-redux'
const AddUser = () => {
  const dispatch = useDispatch()

  const addUser = (value) => {
    dispatch(addUser(value))
  }

  return <div>AddUser</div>
}

export default AddUser
