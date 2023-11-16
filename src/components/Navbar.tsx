import { Container, Nav, Navbar as NavBts} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export function Navbar() {
    return (
            <NavBts className='bg-white shadow-sm mb-3'>
                <Container>
                <Nav>
                    <NavLink to={'/'}>
                        Home
                    </NavLink>
                    <NavLink to={'/store'}>
                        Store
                    </NavLink>
                    <NavLink to={'/about'}>
                        About
                    </NavLink>
                </Nav>
                </Container>
            </NavBts>    
    )
}