import { useState, useEffect } from 'react'
import Cart from '../components/Cart'
import ShoppingList from '../components/ShoppingList'
import '../styles/Layout.scss'

function App () {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div>
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
    </div>
  )
}

export default App
