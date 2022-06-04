interface IProps {
  evt: React.FormEvent<HTMLInputElement>
  mask: string
}

interface TypeOptions {
  [key: string]: void | string
}

interface IMaks {
  evt: React.FormEvent<HTMLInputElement>
  mask: string
}

const maskCpf = ({ evt, mask }: IMaks) => {
  if (mask === 'cpf') {
    evt.currentTarget.maxLength = 14
    let value = evt.currentTarget.value

    value = value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')

    evt.currentTarget.value = value
  }
}

const maskPhone = ({ evt, mask }: IMaks) => {
  if (mask === 'phone') {
    evt.currentTarget.maxLength = 14
    let value = evt.currentTarget.value

    value = value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d{4})/, '$1-$2')

    evt.currentTarget.value = value
  }
}

const maskZipcode = ({ evt, mask }: IMaks) => {
  if (mask === 'zipcode') {
    evt.currentTarget.maxLength = 8
    let value = evt.currentTarget.value

    value = value.replace(/\D/g, '').replace(/^(\d{5})(\d{3})+?$/, '$1-$2')

    evt.currentTarget.value = value
  }
}

const maskDate = ({ evt, mask }: IMaks) => {
  if (mask === 'date') {
    evt.currentTarget.maxLength = 15
    let value = evt.currentTarget.value

    value = value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1')

    evt.currentTarget.value = value
  }
}

export const chooseMask = ({ evt, mask }: IProps) => {
  const masks: TypeOptions = {
    cpf: maskCpf({ evt, mask }),
    phone: maskPhone({ evt, mask }),
    zipcode: maskZipcode({ evt, mask }),
    date: maskDate({ evt, mask })
  }

  return masks[mask]
}
