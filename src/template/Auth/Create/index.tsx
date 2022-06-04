import Link from 'next/link'
import { useForm, FormProvider } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import { format, compareAsc } from 'date-fns'

import { LayoutDefault } from 'layout'
import { Container, Input, Button } from 'components'
import { createNewClient } from 'service'

import * as S from './styles'
import schema from './validation'

import { convertDate } from 'utils'
import { IClient } from 'types'

export default function TemplateCreate() {
  const methods = useForm({ resolver: yupResolver(schema) })

  const { mutate, isLoading, isError, error } = useMutation(createNewClient)

  const onSubmit = methods.handleSubmit(async (values) => {
    const payload: IClient = {
      birthdate: convertDate(values.birthdate),
      cpf: values.cpf,
      mail: values.mail,
      name: values.name,
      password: values.password,
      phone: values.phone
    }

    mutate(payload)
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
                      autoComplete="off"
                      required={true}
                    />
                  </S.Inputs>
                  <S.Inputs>
                    <Input
                      name="birthdate"
                      label="Data de nascimento"
                      type="text"
                      mask="date"
                      inputMode="numeric"
                      required={true}
                    />
                    <Input
                      name="cpf"
                      label="CPF"
                      type="text"
                      mask="cpf"
                      inputMode="numeric"
                      required={true}
                    />
                    <Input
                      name="phone"
                      label="Celular"
                      type="tel"
                      inputMode="tel"
                      mask="phone"
                      required={true}
                    />
                  </S.Inputs>
                  <S.Inputs>
                    <Input
                      name="password"
                      label="Senha"
                      autoComplete="off"
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
                  {error && (
                    <S.Error>
                      <p>{(error as Error).message}</p>
                    </S.Error>
                  )}
                </S.InputsWrap>

                <Button
                  type="submit"
                  isLoading={isLoading}
                  disabled={isLoading}
                >
                  Criar conta
                </Button>

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
