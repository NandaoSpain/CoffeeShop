import { ShoppingCart } from 'phosphor-react'
import { Action, Aside, Container, Input, Price } from './styles'
import { useContext } from 'react'
import { Coffee } from '../CoffeBuyed'
import { MyContext } from '../../contexts/MyContext'

export function CoffeeCard({ coffee }: { coffee: Coffee }) {
  const { name, description, price, image } = coffee
  const { bag, setBag, quantity, setQuantity } = useContext(MyContext)

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  function handleIncrementBag() {
    setBag((prevBag: any) => [...prevBag, { coffee, quantity }])
  }

  return (
    <Container>
      <Aside>
        <img src={image} alt={name} />
        <p>{name}</p>
        <strong>{name}</strong>
        <span>{description}</span>
      </Aside>
      <article>
        <div>
          <Price>
            <span>R$</span>
            <strong>{price.toFixed(2)}</strong>
          </Price>
          <Action>
            <button onClick={handleDecrement}>-</button>
            <Input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <button onClick={handleIncrement}>+</button>
          </Action>
          <button onClick={handleIncrementBag}>
            <ShoppingCart />
          </button>
        </div>
      </article>
    </Container>
  )
}
