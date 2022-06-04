import * as yup from 'yup'

export default yup.object().shape({
  mail: yup
    .string()
    .email('Email inválido')
    .required('Campo email é obrigatório'),
  password: yup
    .string()
    .min(6, 'Senha deve conter pelo menos 6 caracteres')
    .required('Campo estado é obrigatório')
})
