import { ShoppingCart } from 'phosphor-react'
import { Container } from './styles'
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
      <div>
        <span>R$</span>
        <strong>9.90</strong>
        <div>
          <button /*</div>onClick={handleDecrement}*/>-</button>
          <input
            type="number"
            min="1"
            //value={}
            //onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <button /*onClick={handleIncrement}*/>+</button>
        </div>
        <button>
          <ShoppingCart />
        </button>
      </div>
    </Container>
  )
}
