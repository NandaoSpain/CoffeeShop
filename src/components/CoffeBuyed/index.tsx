import { Trash } from 'phosphor-react'
import { Container } from './styles'
import { Aside } from '../Coffee/styles'
import { Coffee } from '../../contexts/MyContext'

interface CoffeeBuyedProps {
  item: Coffee
}

export function Coffeebuyed({ item }: CoffeeBuyedProps) {
  console.log(item)
  const finalPrice = Number(item.quantity) * item.price
  console.log(finalPrice, item.quantity, item.price)
  return (
    <Container>
      <Aside>
        <img src={item.coffee.image} className="imgBuyed" alt="coffe" />
      </Aside>
      <article>
        <div className="title">
          <p>{item.coffee.name}</p>
          <div>
            <span>R$</span>
            <strong>{item.coffee.price.toFixed(2)}</strong>
          </div>
        </div>
        <div>
          <button className="incDecButton">-</button>
          <input type="number" value={finalPrice} />
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
