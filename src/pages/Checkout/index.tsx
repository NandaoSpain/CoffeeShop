import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { Header } from '../../components/Header/header'
import { Container, Address, Payment, Bag, TotalPrice } from './styles'
import { useContext } from 'react'
import { Coffeebuyed } from '../../components/CoffeBuyed'
import { v4 as uuidv4 } from 'uuid'
import { Coffee, MyContext } from '../../contexts/MyContext'
export function Checkout() {
  const { bag } = useContext(MyContext)
  console.log(bag)
  return (
    <div>
      <Header />
      <Container>
        <div>
          <h1>Complete seu pedido</h1>
          <Address>
            <div>
              <MapPinLine size={22} color="#ca6507" />
              <div>
                <p>Endereço de entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </div>
            <form action="">
              <label htmlFor="cep"></label>
              <input
                type="text"
                id="cep"
                name="cep"
                pattern="[0-9]{5}-[0-9]{3}"
                placeholder="CEP 00000-000"
                required
              />
              <label htmlFor="rua"></label>
              <input
                type="text"
                id="rua"
                name="rua"
                placeholder="Rua"
                required
              />
              <div>
                <label htmlFor="numero"></label>
                <input
                  type="number"
                  id="numero"
                  name="numero"
                  placeholder="Número"
                  required
                />
                <label htmlFor="complemento"></label>
                <input
                  type="text"
                  id="complemento"
                  name="complemento"
                  placeholder="Complemento                                                                   Opcional"
                />
              </div>
              <div>
                <label htmlFor="bairro"></label>
                <input
                  type="text"
                  id="bairro"
                  name="bairro"
                  placeholder="Bairro"
                  required
                />
                <label htmlFor="cidade"></label>
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  placeholder="Cidade"
                  required
                />
                <label htmlFor="uf"></label>
                <input
                  type="text"
                  id="uf"
                  name="uf"
                  placeholder="UF"
                  required
                />
              </div>
            </form>
          </Address>
          <Payment>
            <div>
              <CurrencyDollar size={32} color="#7e54c4" />
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </div>
            <div>
              <button>
                <CreditCard size={16} color="#871fef" />
                <span>CARTÃO DE CRÉDITO</span>
              </button>
              <button>
                <Bank size={16} color="#871fef" />
                <span>CARTÃO DE DÉBITO</span>
              </button>
              <button>
                <Money size={16} color="#871fef" />
                <span>DINHEIRO</span>
              </button>
            </div>
          </Payment>
        </div>
        <div>
          <h1>Cafés selecionados</h1>
          <Bag>
            {bag.map((item: Coffee) => (
              <Coffeebuyed key={uuidv4()} item={item} />
            ))}
            <TotalPrice>
              <div>
                <p>Total de Itens</p>
                <p>Entrega</p>
                <h3>Total</h3>
              </div>
              <div>
                <p>R$ 29,70</p>
                <p>R$ 3,50</p>
                <h3>R$ 33,20</h3>
              </div>
            </TotalPrice>
            <button>Finalizar Pedido</button>
          </Bag>
        </div>
      </Container>
    </div>
  )
}
