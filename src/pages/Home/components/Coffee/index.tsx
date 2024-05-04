import { ShoppingCart } from 'phosphor-react'
import { Action, Aside, Container, Input, Price } from './styles'
import { useState } from 'react'

export function CoffeeCard({ coffee }: any) {
  const { name, description, price, image } = coffee

  const [quantity, setQuantity] = useState(1)
  const [bag, setBag] = useState<{ coffee: any; quantity: number }[]>([])

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  function handleIncrementBag() {
    setBag((prevBag) => [...prevBag, { coffee, quantity }])
    console.log(quantity, coffee)
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
