import { NavLink } from 'react-router-dom'
import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useAuth } from '../contexts/AuthContext'
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
          <NavLink to='/product' className={(nav) => (nav.isActive ? 'nav-active' : '')}>
            <li>
              Figurines
            </li>
          </NavLink>
          {
            isAuthenticated
              ? <li>Hello, {user.firstName}</li>
              : (
                <NavLink to='/connexion' className={(nav) => (nav.isActive ? 'nav-active' : '')}>
                  <li>
                    S'incrire / Se connecter
                  </li>
                </NavLink>
                )
          }
          <NavLink to='/cart' />
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
