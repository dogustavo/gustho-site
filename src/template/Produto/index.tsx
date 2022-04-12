import { LayoutDefault } from 'layout'
import { Title } from 'components'

import { IBreadcrumbs } from 'types'

interface IProps {
  breadcrumbs: IBreadcrumbs[]
}

export default function Produto({ breadcrumbs }: IProps) {
  return (
    <LayoutDefault session={'Produto'}>
      <Title title="Produto 1" breadcrumbs={breadcrumbs} />
      <section>
        <h1>asdasdsad</h1>
      </section>
    </LayoutDefault>
  )
}
