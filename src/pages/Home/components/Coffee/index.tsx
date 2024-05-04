import { ShoppingCart } from 'phosphor-react'
import { Action, Aside, Container, Price } from './styles'

export function CoffeeCard({ coffee }: any) {
  const { name, description, price, image } = coffee

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
            <button /* onClick={handleDecrement} */>-</button>
            <input
              type="number"
              min="1"
              // value={}
              // onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <button /* onClick={handleIncrement} */>+</button>
          </Action>
          <button>
            <ShoppingCart />
          </button>
        </div>
      </article>
    </Container>
  )
}
