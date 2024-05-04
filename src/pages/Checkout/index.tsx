import { MapPinLine } from 'phosphor-react'
import { Header } from '../../components/Header/header'
import { Container, Address, Payment, Bag } from './styles'

export function Checkout() {
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
          <Payment />
        </div>
        <div>
          <h1>Cafés selecionados</h1>
          <Bag />
        </div>
      </Container>
    </div>
  )
}
