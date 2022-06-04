import Link from 'next/link'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { LayoutDefault } from 'layout'
import { Container, Input, Button } from 'components'

import * as S from './styles'

import { useAuth } from 'models'
import schema from './validation'
import { useMutation } from 'react-query'
import { authLogin } from 'service'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function TemplateLogin() {
  const router = useRouter()
  const methods = useForm({ resolver: yupResolver(schema) })
  const { autorize, isAuth } = useAuth()

  const { mutate, data, isLoading, isSuccess, error } = useMutation(authLogin)

  const onSubmit = methods.handleSubmit(async ({ mail, password }) => {
    mutate({ mail, password })
  })

  useEffect(() => {
    if (isSuccess && !isAuth) {
      autorize({
        isAuth: !!data.token,
        token: data.token
      })

      router.push('/')
    }
  }, [isSuccess])

  //TO DO - TRATAMENTO DE ERRO LOGIN
  return (
    <LayoutDefault session="Login">
      <article>
        <Container>
          <FormProvider {...methods}>
            <S.Wrapper>
              <S.Form onSubmit={onSubmit}>
                <S.FormHeader>
                  <h2>Login</h2>
                  <p>Olá! Informe seu e-mail e senha para continuar.</p>
                </S.FormHeader>

                <S.Inputs>
                  <Input name="mail" label="e-mail" type="email" />
                  <Input name="password" label="Senha" type="password" />
                </S.Inputs>

                <Link href="/">
                  <S.Action>Esqueceu a senha?</S.Action>
                </Link>

                <Button isDisabled={isLoading} isLoading={isLoading}>
                  Entrar
                </Button>

                <Link href="/auth/criar">
                  <S.Action>Ainda não possui? Criar conta</S.Action>
                </Link>
              </S.Form>
            </S.Wrapper>
          </FormProvider>
        </Container>
      </article>
    </LayoutDefault>
  )
}
