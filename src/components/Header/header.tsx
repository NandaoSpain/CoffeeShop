import { HeaderContainer } from './styles'
import Logo from '../../assets/Logo.svg'
import Location from '../../assets/Location.svg'
import Icon from '../../assets/Icon.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <nav>
        <a>
          <img src={Location} alt="" />
        </a>
        <a>
          <img src={Icon} alt="" />
        </a>
      </nav>
    </HeaderContainer>
  )
}
