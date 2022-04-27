import { useNotification } from 'models/notification/hooks'

export default function Notification() {
  const { notification } = useNotification()

  console.log('executou', notification)

  return (
    <div>
      <div>
        <p>{notification.message}</p>
      </div>
    </div>
  )
}
