import { Button } from 'components'
import { useUser } from 'models/user/hooks'

import * as S from './styles'

interface IAddress {
  setIsModalOpen: (evt: boolean) => void
}

export default function Address({ setIsModalOpen }: IAddress) {
  const { addressRegistred, address } = useUser()

  const [principal] = address

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
              {principal.streetname}, {principal.number}
            </p>
            <p>{principal.streetname2}</p>
            <p>
              {principal.city}, {principal.state} {principal.zipcode}
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
