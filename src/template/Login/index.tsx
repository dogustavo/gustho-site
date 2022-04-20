import { useForm, FormProvider } from 'react-hook-form'

import { LayoutDefault } from 'layout'
import { Container, Input, Button } from 'components'

import * as S from './styles'

export default function TemplateLogin() {
  const methods = useForm()

  const onSubmit = methods.handleSubmit(async (values) => {
    console.log(values)
  })

  return (
    <LayoutDefault session="Login">
      <Container>
        <S.Wrapper>
          <FormProvider {...methods}>
            <form onSubmit={onSubmit}>
              <Input name="email" label="e-mail" type="email" required={true} />
              <Input
                name="password"
                label="Senha"
                type="password"
                required={true}
              />
              <Button>Entrar</Button>
            </form>
          </FormProvider>
        </S.Wrapper>
      </Container>
    </LayoutDefault>
  )
}
