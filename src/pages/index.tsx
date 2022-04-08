import { Container } from 'components'
import { LayoutDefault } from 'layout'

export default function Home() {
  return (
    <LayoutDefault session={'Início'}>
      <Container>
        <p>Boilerplate Nextjs</p>
      </Container>
    </LayoutDefault>
  )
}
