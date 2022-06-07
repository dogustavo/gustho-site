import { Button } from 'components'
import { useUser } from 'models/user/hooks'

import * as S from './styles'

interface IAddress {
  setIsModalOpen: (evt: boolean) => void
}

export default function Address({ setIsModalOpen }: IAddress) {
  const { addressRegistred, address } = useUser()

  return (
    <S.Address>
      {!addressRegistred ? (
        <S.NoAddress>
          <p>Cadastre seu endereço para continuar</p>

          <Button title="submit" onClick={() => setIsModalOpen(true)}>
            Cadastrar
          </Button>
        </S.NoAddress>
      ) : (
        <>
          <div>
            <p>
              {address.street}, {address.number}
            </p>
            <p>{address.district}</p>
            <p>
              {address.city}, {address.state} {address.zipcode}
            </p>
          </div>

          <S.AddressWrapper>
            <Button title="submit">Alterar</Button>
            <Button>Excluir</Button>
          </S.AddressWrapper>
        </>
      )}
    </S.Address>
  )
}
