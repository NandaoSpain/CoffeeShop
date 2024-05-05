import { Trash } from 'phosphor-react'
import { Container } from './styles'
import { Aside } from '../Coffee/styles'
import { useContext } from 'react'
import { Coffee, MyContext } from '../../contexts/MyContext'

interface CoffeeBuyedProps {
  item: Coffee // Definindo o tipo da prop 'item' como Coffee
}

export function Coffeebuyed({ item }: CoffeeBuyedProps) {
  const { name, price, image } = item
  console.log(item)
  return (
    <Container>
      <Aside>
        <img src={item.coffee.image} className="imgBuyed" />
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
          <input type="number" value={item.quantity} />
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
