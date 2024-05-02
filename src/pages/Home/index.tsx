import { Header } from '../../components/Header/header'
import { Intro, Title, Description, Titles, Imagem } from './styles'
import coffee from '../../assets/coffee.svg'
import { TagItem } from './components/Tags'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Home() {
  return (
    <>
      <Header />
      <Intro>
        <Titles>
          <Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          </Title>
          <Description>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Description>
        </Titles>
        <Imagem>
          <img src={coffee} alt="Coffe image" />
        </Imagem>
        <TagItem
          className={'tags1'}
          icon={ShoppingCart}
          text={'Compra simples e segura'}
        />
        <TagItem
          className={'tags2'}
          icon={Package}
          text={'Embalagem mantém o café intacto'}
        />
        <TagItem
          className={'tags3'}
          icon={Timer}
          text={'Entrega rápida e rastreada'}
        />
        <TagItem
          className={'tags4'}
          icon={Coffee}
          text={'O café chega fresquinho até você'}
        />
      </Intro>
    </>
  )
}
