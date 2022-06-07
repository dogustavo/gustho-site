import { useEffect } from 'react'
import { Input, Modal, Button } from 'components'
import { FormProvider, useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import findCep from 'cep-promise'

import { updateClient } from 'service'

import * as S from './styles'
import { IAddress } from 'types'
import schema from './validation'
import { useUser } from 'models'

interface IForm {
  isModalOpen: boolean
  setIsModalOpen: (x: boolean) => void
}

const getUserLoaction = async (values: string) => await findCep(values)

export default function Form({ isModalOpen, setIsModalOpen }: IForm) {
  const { userInfo } = useUser()
  const methods = useForm<IAddress>({
    resolver: yupResolver(schema)
  })

  const address = useQuery(
    'getZipCode',
    () => getUserLoaction(methods.watch('zipcode')),
    {
      enabled: false
    }
  )

  const user = useMutation(updateClient)

  const onSubmit = async (values: IAddress) => {
    console.log('clicou', values)

    // user.mutate()
  }

  useEffect(() => {
    if (address) {
      methods.setValue('district', address?.data?.neighborhood)
      methods.setValue('street', address?.data?.street)
      methods.setValue('city', address?.data?.city)
      methods.setValue('state', address?.data?.state)
    }
  }, [address, methods])

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
                  isLoading={address?.isLoading}
                  inputMode="numeric"
                  search={() => address?.refetch()}
                  required
                />

                {address?.isError && (
                  <p>Nenhum endereço foi encontrado com esse CEP</p>
                )}
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
