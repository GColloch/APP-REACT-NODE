import { useAuth } from '../contexts/AuthContext'
import Footer from '../components/Footer'
import Partenariat from '../components/Partenariat'
import Presentation from '../components/Presentation'
import '../styles/_partenariat.scss'
import '../styles/_footer.scss'

function Home () {
  const { state: { isAuthenticated }, logout } = useAuth()
  return (
    <>
      {isAuthenticated && <button onClick={logout}>Se déconnecter</button>}
      <div className='container'>
        <img className='img' src='/assets/img/test.png' />
        <Presentation />
      </div>
      <Partenariat />
      <Footer />
    </>
  )
}

export default Home
