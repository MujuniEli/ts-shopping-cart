import { Container, Nav, Navbar as NavBts, Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export function Navbar() {
    return (
            <NavBts sticky='top' className='bg-white shadow-sm mb-3'>
                <Container>
                <Nav className='me-auto'>
                    <Nav.Link to='/' as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to='/store' as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to='/about' as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                <Button 
                style={{ width: "3rem", height: "3rem", position: "relative" }}
                variant='outline-primary'
                className='rounded-circle'
                >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.029 13h2.971l-.266 1h-2.992l.287-1zm.863-3h2.812l.296-1h-2.821l-.287 1zm-.576 2h4.387l.297-1h-4.396l-.288 1zm-11.816 6c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm8-16.5l-.743 2h-1.929l-3.474 12h-11.239l-4.615-11h14.812l-2.541 9h2.102l3.432-12h4.195z"/>
                </svg>
                <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
                    style={{
                        color: "white",
                        width: "1.5rem",
                        height: "1.5rem",
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        transform: "translate(25% 25%)"
                    }}
                >3</div>
                </Button>
                </Container>
            </NavBts>    
    )
}