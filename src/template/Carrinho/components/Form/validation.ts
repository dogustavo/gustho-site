import * as yup from 'yup'

export default yup.object().shape({
  zipcode: yup
    .string()
    .min(8, 'Cep possui 8 números')
    .max(8, 'Cep possui 8 números')
    .required('Campo de cep é obrigatório'),
  street: yup.string().required('Campo rua é obrigatório'),
  district: yup.string().required('Campo bairro é obrigatório'),
  number: yup.string().required('Campo número é obrigatório'),
  city: yup.string().required('Campo cidade é obrigatório'),
  state: yup.string().required('Campo estado é obrigatório')
})
