import { Route, Routes } from 'react-router-dom'
import Auth from '../pages/Auth'
import Accueil from '../pages/Accueil'
import Figurines from '../pages/Figurines'
import { useAuth } from '../contexts/AuthContext'

function Router () {
  const { state: { isAuthenticated } } = useAuth()
  if (isAuthenticated) {
    return (
      <Routes>
        <Route index path='/' element={<Accueil />} />
        <Route path='/product' element={<Figurines />} />
      </Routes>
    )
  } else {
    return (
      <Routes>
        <Route index path='/' element={<Accueil />} />
        <Route path='/connexion' element={<Auth />} />
      </Routes>
    )
  }
}

export default Router
