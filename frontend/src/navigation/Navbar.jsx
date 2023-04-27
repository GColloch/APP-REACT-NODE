import { NavLink } from 'react-router-dom'
import '../styles/Navbar.scss'
import { useAuth } from '../contexts/AuthContext'
import CartIcon from '../components/CartIcon'

function Navbar () {
  const { state: { isAuthenticated, user } } = useAuth()

  return (
    <>
      <nav className='navbar'>
        <img src='/assets/img/logo.png' />
        <ul>
          <NavLink to='/' className={(nav) => (nav.isActive ? 'nav-active' : '')}>
            <li>
              Accueil
            </li>
          </NavLink>
          <NavLink to='/about' className={(nav) => (nav.isActive ? 'nav-active' : '')}>
            <li>
              A propos
            </li>
          </NavLink>
          <NavLink to='/restaurants' className={(nav) => (nav.isActive ? 'nav-active' : '')}>
            <li>
              Restaurants
              {
                isAuthenticated && (
                  <ul>
                    <NavLink to='/add-restaurant' className={(nav) => (nav.isActive ? 'nav-active' : '')}>
                      <li>
                        Ajouter un restaurant
                      </li>
                    </NavLink>
                  </ul>
                )
              }
            </li>
          </NavLink>
          {
            isAuthenticated
              ? <li>Hello, {user.firstName}</li>
              : (
                <NavLink to='/auth' className={(nav) => (nav.isActive ? 'nav-active' : '')}>
                  <li>
                    S'incrire / Se connecter
                  </li>
                </NavLink>
                )
          }
          <NavLink to='/cart'>
            <li>
              <CartIcon />
            </li>
          </NavLink>
        </ul>
        <button className='menu-btn'>H</button>
      </nav>
      <nav className='mobile-menu'>
        <button className='mobile-menu-close'>X</button>
        <NavLink to='/'>Accueil</NavLink>
        <NavLink to='/'>Accueil</NavLink>
        <NavLink to='/'>Accueil</NavLink>
        <NavLink to='/'>Accueil</NavLink>
      </nav>
    </>
  )
}

export default Navbar
