import { useEffect } from 'react'
import { Input, Modal, Loading, Button } from 'components'
import { FormProvider, useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { yupResolver } from '@hookform/resolvers/yup'

import findCep from 'cep-promise'

import * as S from './styles'

import schema from './validation'

interface IForm {
  isModalOpen: boolean
  setIsModalOpen: (x: boolean) => void
}

interface IHForm {
  zipcode: string
  street: string
  district: string
  number: string
  city: string
  state: string
}

const getUserLoaction = async (values: string) => await findCep(values)

export default function Form({ isModalOpen, setIsModalOpen }: IForm) {
  const methods = useForm<IHForm>({
    resolver: yupResolver(schema)
  })

  const { data, refetch, isLoading, isError } = useQuery(
    'getZipCode',
    () => getUserLoaction(methods.watch('zipcode')),
    {
      enabled: false
    }
  )

  const onSubmit = async (values: IHForm) => {
    console.log('clicou', values)
  }

  useEffect(() => {
    if (data) {
      console.log(data)
      methods.setValue('district', data?.neighborhood)
      methods.setValue('street', data?.street)
      methods.setValue('city', data?.city)
      methods.setValue('state', data?.state)
    }
  }, [data, methods])

  return (
    <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
      <S.Container>
        <h3>Cadastre seu endereço para continuar</h3>
        <FormProvider {...methods}>
          <S.Form onSubmit={methods.handleSubmit(onSubmit)}>
            <S.Wrapper>
              <S.Zipcode>
                <Input
                  name="zipcode"
                  label="CEP"
                  type="text"
                  mask="zipcode"
                  inputMode="numeric"
                  search={() => refetch()}
                  required
                />

                {isError && <p>Nenhum endereço foi encontrado com esse CEP</p>}
              </S.Zipcode>
            </S.Wrapper>
            <S.Wrapper>
              <Input name="street" label="Rua" type="text" required readOnly />
              <Input
                name="district"
                label="Bairro"
                type="text"
                required
                readOnly
              />
            </S.Wrapper>
            <S.Wrapper>
              <Input name="number" label="Número" type="text" required />
              <Input name="city" label="Cidade" type="text" required readOnly />
              <Input
                name="state"
                label="Estado"
                type="text"
                required
                readOnly
              />
            </S.Wrapper>

            <Button title="submit" type="submit">
              Enviar
            </Button>
          </S.Form>
        </FormProvider>
      </S.Container>
    </Modal>
  )
}
