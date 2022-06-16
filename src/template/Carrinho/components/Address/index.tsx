import { Button } from 'components'
import { useUser } from 'models/user/hooks'

import * as S from './styles'

interface IAddress {
  setIsModalOpen: (evt: boolean) => void
}

export default function Address({ setIsModalOpen }: IAddress) {
  const { address } = useUser()

  return (
    <S.Address>
      {!address.length ? (
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
              {address[0].streetname}, {address[0].number}
            </p>
            <p>{address[0].streetname2}</p>
            <p>
              {address[0].city}, {address[0].state} {address[0].zipcode}
            </p>
          </div>

          <S.AddressWrapper onClick={() => setIsModalOpen(true)}>
            <Button title="submit">Alterar</Button>
          </S.AddressWrapper>
        </>
      )}
    </S.Address>
  )
}
