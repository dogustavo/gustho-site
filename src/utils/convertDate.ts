export const convertDate = (date: string): Date => {
  const [day, month, year] = date.split('/')
  const newDate = new Date(+year, +month, +day)

  return newDate
}
