import { Trash } from 'phosphor-react'
import { Container } from './styles'
import { Aside } from '../Coffee/styles'
export interface Coffee {
  image: string
  name: string
  id?: number
  price: number
  description?: string
}

export function Coffeebuyed({ item }: { item: Coffee }) {
  const { image, name, price } = item
  console.log(name)
  return (
    <Container>
      <Aside>
        <img src={image} alt={name} className="imgBuyed" />
      </Aside>
      <article>
        <div className="title">
          <p>{name}</p>
          <div>
            <span>R$</span>
            <strong>{price}</strong>
          </div>
        </div>
        <div>
          <button className="incDecButton">-</button>
          <input type="number" min="1" />
          <button className="incDecButton">+</button>
          <button className="trash-button">
            <Trash />
            Remover
          </button>
        </div>
      </article>
    </Container>
  )
}
