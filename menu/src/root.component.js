import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function Root(props) {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <NavDropdown title="Relatório" id="basic-nav-dropdown">
                <NavDropdown.Item href="/relatorio/">
                  Relatório 1
                </NavDropdown.Item>
                <NavDropdown.Item href="/relatorio/relatorio2">
                  Relatório 2
                </NavDropdown.Item>
                <NavDropdown.Item href="/relatorio/relatorio3">
                  Relatório 3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/relatorio/configuracao">
                  Configuração
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}
