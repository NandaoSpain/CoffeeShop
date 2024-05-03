import { ShoppingCart } from 'phosphor-react'
import { Action, Container, Price } from './styles'
import expressoTradicional from '../../../../assets/expressoTradicional.svg'

export function CoffeeCard() {
  return (
    <Container>
      <aside>
        <img src={expressoTradicional} alt="" />
        <p>TRADICIONAL</p>
        <strong>Expresso Tradicional</strong>
        <span>O tradicional café feito com água quente e grãos moídos</span>
      </aside>
      <article>
        <div>
          <Price>
            <span>R$</span>
            <strong>9.90</strong>
          </Price>
          <Action>
            <button /*</div>onClick={handleDecrement}*/>-</button>
            <input
              type="number"
              min="1"
              //value={}
              //onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <button /*onClick={handleIncrement}*/>+</button>
          </Action>
          <button>
            <ShoppingCart />
          </button>
        </div>
      </article>
    </Container>
  )
}
