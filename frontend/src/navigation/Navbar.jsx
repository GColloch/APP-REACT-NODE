import { NavLink } from 'react-router-dom'
import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useAuth } from '../contexts/AuthContext'
import CartIcon from '../components/CartIcon'
import '../styles/Navbar.scss'

function Navbar () {
  const { state: { isAuthenticated, user } } = useAuth()
  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle(
      'responsive_nav'
    )
  }

  return (
    <>
      <header>

        <img src='/assets/img/logo.png' />
        <nav ref={navRef}>
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
          <button
            className='nav-btn nav-close-btn'
            onClick={showNavbar}
          >
            <FaTimes />
          </button>
        </nav>
        <button
          className='nav-btn'
          onClick={showNavbar}
        >
          <FaBars />
        </button>
      </header>
    </>
  )
}

export default Navbar
