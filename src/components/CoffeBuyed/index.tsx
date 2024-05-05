import { Trash } from 'phosphor-react'
import { Container } from './styles'
import { Aside } from '../Coffee/styles'
import cafe from '../../assets/cafe1.svg'
export interface Coffee {
  image?: string
  name?: string
  id?: number
  price?: number
  description?: string
}

export function Coffeebuyed({ item }: { item: Coffee }) {
  const { image, name, price } = item
  console.log(name)
  return (
    <Container>
      <Aside>
        <img src={cafe} alt={name} />
      </Aside>
      <article>
        <p>Expresso Tradicional</p>
        <div>
          <button>-</button>
          <input type="number" min="1" />
          <button>+</button>
          <div>
            <button>
              <Trash />
              Remover
            </button>
          </div>
          <div>
            <span>R$</span>
            <strong>9,90</strong>
          </div>
        </div>
      </article>
    </Container>
  )
}
