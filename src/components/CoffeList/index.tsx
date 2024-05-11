import { CoffeeCard } from '../Coffee'
import { Container } from './styles'
import { coffees } from '../Coffee/coffees'

export function CoffeeList() {
  return (
    <Container>
      {coffees.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </Container>
  )
}

