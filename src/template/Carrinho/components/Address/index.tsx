import { Button } from 'components'
import { useRouter } from 'next/router'
import { useAuth, useUser, useNotification } from 'models'

import * as S from './styles'

interface IAddress {
  setIsModalOpen: (evt: boolean) => void
}

export default function Address({ setIsModalOpen }: IAddress) {
  const router = useRouter()
  const { address } = useUser()
  const { isAuth } = useAuth()
  const { sendNotification } = useNotification()

  const handleUserAddress = () => {
    if (!isAuth) {
      router.push('/auth')
      sendNotification({
        show: true,
        message: `Faça o login ou se cadastre para prosseguirmos!`,
        type: 'info'
      })
    }

    setIsModalOpen(true)
  }

  return (
    <S.Address>
      {!address.length ? (
        <S.NoAddress>
          <p>Cadastre seu endereço para continuar</p>

          <Button title="submit" onClick={handleUserAddress}>
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
