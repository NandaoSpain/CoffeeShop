import { HeaderContainer } from './styles'
import Logo from '../../assets/Logo.svg'
import Location from '../../assets/Location.svg'
import Icon from '../../assets/Icon.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src={Logo} alt="" />
      </NavLink>
      <nav>
        <a>
          <img src={Location} alt="" />
        </a>
        <NavLink to={'/Checkout'}>
          <img src={Icon} alt="" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
