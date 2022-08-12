import { Container } from "react-bootstrap";
import AuthContext from "../context/AuthContext";
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import { Link } from "react-scroll";

function Navbarra(){

    return(
        <AuthContext.Consumer>
            {
                context => (
                    <div className='contenedor-navbar'>      
      <Navbar bg="dark" expand="lg" fixed="top" variant="dark" >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-center" style={{marginLeft:"auto",marginRight:"auto"}}>
          <Nav className="me-auto" style={{marginLeft:"auto",marginRight:"auto"}}>
            <Nav.Link href="/" style={{marginRight:"2rem",marginLeft:"2rem",fontSize:"1.6rem",paddingLeft:"2rem",paddingRight:"2rem"}}>Home</Nav.Link>
            <Nav.Link href="#about" style={{marginRight:"2rem",marginLeft:"2rem",fontSize:"1.6rem",paddingLeft:"2rem",paddingRight:"2rem"}}>About me</Nav.Link>
            <Nav.Link href="#skills" style={{marginRight:"2rem",marginLeft:"2rem",fontSize:"1.6rem",paddingLeft:"2rem",paddingRight:"2rem"}}>Skills</Nav.Link>
            <Nav.Link href="#studies" style={{marginRight:"2rem",marginLeft:"2rem",fontSize:"1.6rem",paddingLeft:"2rem",paddingRight:"2rem"}}>Studies</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {
            context.userLogin &&
            <Navbar.Collapse className="justify-content-end">
            <Nav>
            <NavDropdown title={context.userInfo.user.email} id="basic-nav-dropdown" style={{marginRight:"1rem",marginLeft:"1rem",fontSize:"20px"}}>
              <NavDropdown.Item href="#action/3.1" onClick={context.logoutUser}>Logout</NavDropdown.Item>
            </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        }
        
      </Container>
    </Navbar>
                    </div>
                )
            }
          </AuthContext.Consumer>
    )
}
export default Navbarra;