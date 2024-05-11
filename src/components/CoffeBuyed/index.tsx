import { Trash } from 'phosphor-react'
import { Container } from './styles'
import { Aside } from '../Coffee/styles'
import { Coffee, MyContext } from '../../contexts/MyContext'
import { useContext } from 'react'

interface CoffeeBuyedProps {
  item: Coffee
}

export function Coffeebuyed({ item }: CoffeeBuyedProps) {
  const { bag, setBag } = useContext(MyContext)
  const finalPrice = Number(item.quantity) * item.coffee.price

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(event.target.value)
    const updatedBag = bag.map((coffeeItem) => {
      if (coffeeItem.coffee.id === item.coffee.id) {
        return { ...coffeeItem, quantity: newQuantity }
      }
      return coffeeItem
    })
    setBag(updatedBag)
  }

  const handleDecrement = () => {
    const updatedBag = bag.map((coffeeItem) => {
      if (coffeeItem.coffee.id === item.coffee.id && coffeeItem.quantity > 1) {
        return { ...coffeeItem, quantity: coffeeItem.quantity - 1 }
      }
      return coffeeItem
    })
    setBag(updatedBag)
  }

  const handleIncrement = () => {
    const updatedBag = bag.map((coffeeItem) => {
      if (coffeeItem.coffee.id === item.coffee.id) {
        return { ...coffeeItem, quantity: coffeeItem.quantity + 1 }
      }
      return coffeeItem
    })
    setBag(updatedBag)
  }

  const handleRemove = () => {
    const updatedBag = bag.filter(
      (coffee) => coffee.coffee.id !== item.coffee.id,
    )
    setBag(updatedBag)
  }

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
            <strong>{finalPrice.toFixed(2)}</strong>
          </div>
        </div>
        <div>
          <button className="incDecButton" onClick={handleDecrement}>
            -
          </button>
          <input
            type="number"
            value={item.quantity}
            onChange={handleQuantityChange}
          />
          <button className="incDecButton" onClick={handleIncrement}>
            +
          </button>
          <button className="trash-button" onClick={handleRemove}>
            <Trash />
            Remover
          </button>
        </div>
      </article>
    </Container>
  )
}
