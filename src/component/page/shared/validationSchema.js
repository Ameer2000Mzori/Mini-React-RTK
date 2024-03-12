import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  productName: Yup.string()
    .min(2, 'too short')
    .max(25, 'too long')
    .required('name is required'),
  description: Yup.string()
    .min(10, 'too short')
    .max(100, 'too high')
    .required('description is required'),
  price: Yup.number().required('price is required'),
  stock: Yup.number().required('stock is required'),
  category: Yup.string().required('category is required'),
})

export const userValidation = Yup.object().shape({
  name: Yup.string().required('name is required'),
  password: Yup.string()
    .min(2, 'too short')
    .max(25, 'too long')
    .required('password is required'),
})
