import Link from 'next/link'
import { useForm, FormProvider } from 'react-hook-form'

import { LayoutDefault } from 'layout'
import { Container, Input, Button } from 'components'

import * as S from './styles'
import { useAuth } from 'models'

export default function TemplateLogin() {
  const methods = useForm()
  const { userIsLogged } = useAuth()

  const onSubmit = methods.handleSubmit(async (values) => {
    console.log(values)

    const response = {
      token: 'Funcionou'
    }

    userIsLogged({
      isAuth: !!response.token,
      token: response.token
    })
  })

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
                  <Input name="email" label="e-mail" type="email" />
                  <Input name="password" label="Senha" type="password" />
                </S.Inputs>

                <Link href="/">
                  <S.Action>Esqueceu a senha?</S.Action>
                </Link>

                <Button>Entrar</Button>

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
