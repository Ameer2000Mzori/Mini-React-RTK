import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  productName: Yup.string().required('name us required'),
  description: Yup.string()
    .min(10, 'too short')
    .max(100, 'too high')
    .required('description is required'),
  price: Yup.number().required('price is required'),
  stock: Yup.number().required('stock is required'),
  category: Yup.string().required('category is required'),
})
