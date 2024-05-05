import { ShoppingCart } from 'phosphor-react'
import { Action, Aside, Container, Input, Price } from './styles'
import { ReactNode, createContext, useContext, useState } from 'react'
import { Coffee } from '../CoffeBuyed'

export const MyContext = createContext({})

interface MyContextProviderProps {
  children: ReactNode
  bag: []
  setBag: () => void
}
export function MyContextProvider({ children }: MyContextProviderProps) {
  const [bag, setBag] = useState<{ coffee: any; quantity: number }[]>([])
  return (
    <MyContext.Provider value={{ bag, setBag }}>{children}</MyContext.Provider>
  )
}

export function CoffeeCard({ coffee }: { coffee: Coffee }) {
  const { name, description, price, image } = coffee
  const { bag, setBag } = useContext(MyContext)
  const [quantity, setQuantity] = useState(1)

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
