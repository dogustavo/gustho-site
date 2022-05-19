import { useEffect } from 'react'
import { Input, Modal, Loading } from 'components'
import { FormProvider, useForm } from 'react-hook-form'

import findCep from 'cep-promise'

import * as S from './styles'
import { useQuery } from 'react-query'

interface IForm {
  isModalOpen: boolean
  setIsModalOpen: (x: boolean) => void
}

const getUserLoaction = async (values: string) => await findCep(values)

export default function Form({ isModalOpen, setIsModalOpen }: IForm) {
  const methods = useForm()

  const { data, refetch, isLoading } = useQuery(
    'getZipCode',
    () => getUserLoaction(methods.watch('zipcode')),
    {
      enabled: false
    }
  )

  const onSubmit = methods.handleSubmit(async (values) => {
    console.log(values)
  })

  useEffect(() => {
    //     cep: "18211090"
    // city: "Itapetininga"
    // neighborhood: "Jardim Casa Grande"
    // service: "viacep"
    // state: "SP"
    // street: "Rua Valdemir Panell
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
          <S.Form onSubmit={onSubmit}>
            <S.Wrapper>
              <Input
                name="zipcode"
                label="CEP"
                type="text"
                mask="zipcode"
                inputMode="numeric"
                required={true}
              />
              <button onClick={() => refetch()}>
                {isLoading ? (
                  <Loading />
                ) : (
                  <img src="/static/img/search.svg" alt="Icone lupa" />
                )}
              </button>
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
          </S.Form>
        </FormProvider>
      </S.Container>
    </Modal>
  )
}
