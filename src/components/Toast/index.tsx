import { useNotification } from 'models/notification/hooks'
import { useEffect } from 'react'

import * as S from './styles'

let timer: NodeJS.Timeout

export default function Notification() {
  const { notification, resetNotification } = useNotification()

  useEffect(() => {
    timer = setTimeout(() => {
      resetNotification()
    }, 1500)

    return () => clearTimeout(timer)
  }, [resetNotification, notification.show])

  return (
    <S.Notification type={notification.type} show={notification.show}>
      <div>
        <p>{notification.message}</p>
      </div>
    </S.Notification>
  )
}
