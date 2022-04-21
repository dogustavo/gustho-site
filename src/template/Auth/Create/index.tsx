import Link from 'next/link'
import { useForm, FormProvider } from 'react-hook-form'

import { LayoutDefault } from 'layout'
import { Container, Input, Button } from 'components'

import * as S from './styles'

export default function TemplateCreate() {
  const methods = useForm()

  const onSubmit = methods.handleSubmit(async (values) => {
    console.log(values)
  })

  return (
    <LayoutDefault session="Login">
      <article>
        <Container>
          <FormProvider {...methods}>
            <S.Wrapper>
              <S.Form onSubmit={onSubmit}>
                <S.FormHeader>
                  <h2>Criar conta</h2>
                  <p>Olá! Informe seus dados para criar sua conta.</p>
                </S.FormHeader>

                <S.InputsWrap>
                  <S.Inputs>
                    <Input
                      name="name"
                      label="Seu nome"
                      type="text"
                      required={true}
                    />
                    <Input
                      name="mail"
                      label="E-mail"
                      type="email"
                      required={true}
                    />
                  </S.Inputs>
                  <S.Inputs>
                    <Input
                      name="birthdate"
                      label="Data de nascimento"
                      type="text"
                      mask="date"
                      required={true}
                    />
                    <Input
                      name="cpf"
                      label="CPF"
                      type="text"
                      mask="cpf"
                      required={true}
                    />
                    <Input
                      name="phone"
                      label="Celular"
                      type="tel"
                      mask="phone"
                      required={true}
                    />
                  </S.Inputs>
                  <S.Inputs>
                    <Input
                      name="password"
                      label="Senha"
                      type="password"
                      required={true}
                    />
                    <Input
                      name="confirm_password"
                      label="Digite sua senha novamente"
                      type="password"
                      required={true}
                    />
                  </S.Inputs>
                </S.InputsWrap>

                <Button>Criar conta</Button>

                <Link href="/auth">
                  <S.Action>Já possui uma conta? Voltar</S.Action>
                </Link>
              </S.Form>
            </S.Wrapper>
          </FormProvider>
        </Container>
      </article>
    </LayoutDefault>
  )
}
