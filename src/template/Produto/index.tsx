import { LayoutDefault } from 'layout'
import { Title } from 'components'

import { IBreadcrumbs, IProductDetalied } from 'types'

interface IProps {
  breadcrumbs: IBreadcrumbs[]
  product: IProductDetalied
}

export default function Produto({ breadcrumbs, product }: IProps) {
  return (
    <LayoutDefault session={'Produto'}>
      <Title title="Detalhes do Produto" breadcrumbs={breadcrumbs} />
      <section>
        <h1>asdasdsad</h1>
      </section>
    </LayoutDefault>
  )
}
