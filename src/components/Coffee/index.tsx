import { ShoppingCart } from 'phosphor-react'
import { Action, Aside, Container, Input, Price } from './styles'
import { useContext, useState } from 'react'
import { Coffee, MyContext } from '../../contexts/MyContext'

export function CoffeeCard({ coffee }: { coffee: Coffee }) {
  const { name, description, price, image } = coffee
  const [quantity, setQuantity] = useState(1)
  const { bag, setBag } = useContext(MyContext)

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  function handleAddToBag() {
    const existingItemIndex = bag.findIndex(
      (item) => item.coffee.id === coffee.id,
    )

    if (existingItemIndex !== -1) {
      const updatedBag = [...bag]
      updatedBag[existingItemIndex].quantity += quantity
      setBag(updatedBag)
    } else {
      const newItem = { coffee, quantity }
      setBag((prevBag: Coffee[]) => [...prevBag, newItem])
    }
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
          <button onClick={handleAddToBag}>
            <ShoppingCart />
          </button>
        </div>
      </article>
    </Container>
  )
}
