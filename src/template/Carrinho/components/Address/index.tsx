import { Button } from 'components'
import { useUser } from 'models/user/hooks'

import * as S from './styles'

interface IAddress {
  setIsModalOpen: (evt: boolean) => void
}

export default function Address({ setIsModalOpen }: IAddress) {
  const { user } = useUser()

  return (
    <S.Address>
      {!user.addressRegistred ? (
        <S.NoAddress>
          <p>Cadastre seu endereço para continuar</p>

          <Button title="submit" onClick={() => setIsModalOpen(true)}>
            Cadastrar
          </Button>
        </S.NoAddress>
      ) : (
        <>
          <div>
            <p>Rua Valdemir Panneli das Dores, 137</p>
            <p>Jardim Casa Grande</p>
            <p>Itapetininga, SP 18211090</p>
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
