import { Input, Modal } from 'components'
import { FormProvider, useForm } from 'react-hook-form'

// import findCep from 'cep-promise'

import * as S from './styles'

interface IForm {
  isModalOpen: boolean
  setIsModalOpen: (x: boolean) => void
}

export default function Form({ isModalOpen, setIsModalOpen }: IForm) {
  const methods = useForm()
  const onSubmit = methods.handleSubmit(async (values) => {
    console.log(values)
  })

  const getUserLoaction = async () => {
    console.log('teste')
  }

  return (
    <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
      <FormProvider {...methods}>
        <S.Form onSubmit={onSubmit}>
          <div>
            <Input
              name="zipcode"
              label="CEP"
              type="text"
              mask="zipcode"
              inputMode="numeric"
              required={true}
            />
            <button onClick={getUserLoaction}>
              <img src="/static/img/search.svg" alt="Icone lupa" />
            </button>
          </div>
          <div>
            <Input name="street" label="Rua" type="text" required={true} />
            <Input name="district" label="Bairro" type="text" required={true} />
          </div>
          <div>
            <Input name="number" label="Número" type="text" required={true} />
            <Input name="city" label="Cidade" type="text" required={true} />
            <Input name="state" label="Estado" type="text" required={true} />
          </div>
        </S.Form>
      </FormProvider>
    </Modal>
  )
}
