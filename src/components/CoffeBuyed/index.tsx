import { Trash } from 'phosphor-react'
import { Container } from './styles'
import { Aside } from '../Coffee/styles'
import { useContext } from 'react'
import { MyContext } from '../../contexts/MyContext'

export interface Coffee {
  image: string | null
  name: string | null
  id?: number | null
  price: number
  description?: string | null
}

export function Coffeebuyed() {
  const { bag, setBag} = useContext(MyContext)
  const { name, price, image } = bag
  console.log(bag)
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
            <strong>{quantity}</strong>
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
