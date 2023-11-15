
import { Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './views/Home'
import { Store } from './views/Store'
import { About } from './views/About'

function App() {
  

  return (
    
      <Container>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/' element={<Store />}></Route>
            <Route path='/' element={<About />}></Route>
        </Routes>
      </Container>
    
  )
}

export default App
