import * as yup from 'yup'

export default yup.object().shape({
  name: yup.string().required('Campo de cep é obrigatório'),
  mail: yup
    .string()
    .email('Email inválido')
    .required('Campo email é obrigatório'),
  birthdate: yup.string().required('Campo data obrigatório'),
  cpf: yup.string().required('Campo cpf é obrigatório'),
  phone: yup.string().required('Campo celular é obrigatório'),
  password: yup
    .string()
    .min(6, 'Senha deve conter pelo menos 6 caracteres')
    .required('Campo estado é obrigatório'),
  confirm_password: yup
    .string()
    .required('É necessário confirmar a senha')
    .oneOf([yup.ref('password'), null], 'Senhas não batem')
})
