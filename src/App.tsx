
import { Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './views/Home'
import { Store } from './views/Store'
import { About } from './views/About'
import { Navbar } from './components/Navbar'

function App() {
  

  return (
    <>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/store' element={<Store />}></Route>
            <Route path='/about' element={<About />}></Route>
        </Routes>
      </Container>
    </>
  )
}

export default App
