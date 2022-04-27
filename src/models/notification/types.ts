export interface INotification {
  show: boolean
  type: 'success' | 'danger' | 'info' | 'warning'
  message: string
}
