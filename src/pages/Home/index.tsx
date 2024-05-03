import { Header } from '../../components/Header/header'
import { Intro, Title, Description, Imagem } from './styles'
import coffee from '../../assets/coffee.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { TagItem } from './components/Tags/Tags'
import { defaultTheme } from '../../styles/themes/default'

export function Home() {
  return (
    <>
      <Header />
      <Intro>
        <Title>
          <h1>Encontre o café perfeito</h1>
          <h1>para qualquer hora do dia</h1>
        </Title>
        <Description>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a</p>
          <p>qualquer hora</p>
        </Description>
        <Imagem>
          <img src={coffee} alt="Coffe image" />
        </Imagem>
        <TagItem
          icon={ShoppingCart}
          text={'Compra simples e segura'}
          backgroundColor={defaultTheme['yellow-dark']}
        />
        <TagItem
          icon={Package}
          text={'Embalagem mantém o café intacto'}
          backgroundColor={defaultTheme['base-text']}
        />
        <TagItem
          icon={Timer}
          text={'Entrega rápida e rastreada'}
          backgroundColor={defaultTheme.yellow}
        />
        <TagItem
          icon={Coffee}
          text={'O café chega fresquinho até você'}
          backgroundColor={defaultTheme.purple}
        />
      </Intro>
    </>
  )
}
