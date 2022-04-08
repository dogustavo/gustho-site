import { Container } from 'components'
import { LayoutDefault } from 'layout'

export default function Home() {
  return (
    <LayoutDefault session={'Início'}>
      <Container>
        <h1>Boilerplate Nextjs</h1>
      </Container>
    </LayoutDefault>
  )
}
