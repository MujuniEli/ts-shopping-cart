
import { Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './views/Home'
import { Store } from './views/Store'
import { About } from './views/About'
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from './context/shoppingCartContext'

function App() {
  

  return (
    <>
    <ShoppingCartProvider>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/store' element={<Store />}></Route>
            <Route path='/about' element={<About />}></Route>
        </Routes>
      </Container>
    </ShoppingCartProvider>
    </>
  )
}

export default App
