import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap"


const Header = () => {
    return <Navbar expand="md" bg="light" className="navbar-light" >
        <Container fluid>
            <p></p>
            <Navbar.Brand href="#home">
                <Image height="60px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNit-5k7lXLMpGsJt2iDIeB9PSNqxo0E9a9w&s"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className="active">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <div>Make </div>
            <p>Product </p>
        </Container>
    </Navbar>
}

export default Header