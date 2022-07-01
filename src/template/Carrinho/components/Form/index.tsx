import { useEffect, useState } from 'react'
import { Input, Modal, Button } from 'components'
import { FormProvider, useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import { default as findCep } from 'cep-promise'

import { updateClient } from 'service'

import * as S from './styles'
import { IAddress } from 'types'
import schema from './validation'
import { useUser } from 'models'

interface IForm {
  isModalOpen: boolean
  setIsModalOpen: (x: boolean) => void
}

// @ts-ignore-start
const getUserLoaction = async (values: string) => await findCep(values)
// @ts-ignore-end

export default function Form({ isModalOpen, setIsModalOpen }: IForm) {
  const { setUserAddress, address: userAddress } = useUser()
  const [findAddress, setFindAddress] = useState(false)

  const methods = useForm<IAddress>({
    resolver: yupResolver(schema)
  })

  const address = useQuery(
    'getZipCode',
    () => getUserLoaction(methods.watch('zipcode')),
    {
      enabled: findAddress
    }
  )

  //TODO - testar funcao onsuccess
  const { data: user, mutate, isSuccess } = useMutation(updateClient)

  const onSubmit = async (values: IAddress) => {
    const payload = {
      ...values,
      id: userAddress[0]?.id || undefined
    }
    mutate({
      payload
    })
  }

  useEffect(() => {
    if (address) {
      methods.setValue('streetname2', address?.data?.neighborhood)
      methods.setValue('streetname', address?.data?.street)
      methods.setValue('city', address?.data?.city)
      methods.setValue('state', address?.data?.state)
    }
  }, [address, methods])

  useEffect(() => {
    if (isSuccess) {
      setUserAddress(user.address)
      setIsModalOpen(false)
    }
  }, [isSuccess])

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
                  search={() => setFindAddress(true)}
                  required
                />

                {address?.isError && (
                  <p>Nenhum endereço foi encontrado com esse CEP</p>
                )}
              </S.Zipcode>
            </S.Wrapper>
            <S.Wrapper>
              <Input
                name="streetname"
                label="Rua"
                type="text"
                required
                readOnly
              />
              <Input
                name="streetname2"
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
