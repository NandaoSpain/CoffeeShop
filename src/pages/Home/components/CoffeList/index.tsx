import { CoffeeCard } from '../Coffee'
import { Container } from './styles'

export function CoffeeList() {
  return (
    <Container>
      <CoffeeCard />
      <CoffeeCard />
    </Container>
  )
}
