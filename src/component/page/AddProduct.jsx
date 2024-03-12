import React from 'react'
import { Formik } from 'formik'
import { validationSchema } from './shared/validationSchema.js'

const AddProduct = () => {
  const formik = new Formik({
    initialValues: {
      name: '',
      description: '',
      price: '',
      stock: '',
      category: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema: validationSchema,
  })

  return <div>AddProduct</div>
}

export default AddProduct
