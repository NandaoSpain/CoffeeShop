import { Trash } from 'phosphor-react'
import { Container } from './styles'
import { Aside } from '../../../Home/components/Coffee/styles'
export interface Coffee {
  image?: string
  name?: string
  id?: number
  price?: number
  description?: string
}

export function Coffeebuyed({ coffee }: { coffee: Coffee }) {
  const { image, name, id, price } = coffee
  console.log(name)
  return (
    <Container>
      <Aside>
        <img src={image} alt={name} />
        <p>{name}</p>
        <strong>{name}</strong>
      </Aside>
      <article>
        <div>
          <span>R$</span>
          <strong>{price}</strong>
          <button>-</button>
          <input type="number" min="1" />
          <button>+</button>
          <button>
            <Trash>Remover</Trash>
          </button>
        </div>
      </article>
    </Container>
  )
}
