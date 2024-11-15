import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import Main from './pages/main';
import Footer from './footer'; // Importando o rodapé

function MenuItem({ item }) {
  if (item.subMenu) {
    return (
      <Dropdown>
        <Dropdown.Toggle as="a" className="nav-link" href={item.href} style={{ color: 'black', border: 'none', outline: 'none', boxShadow: 'none', textDecoration: 'none' }}>
          {item.name}
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ border: 'none', outline: 'none', boxShadow: 'none', textDecoration: 'none', marginLeft: '20px'}}>
          {item.subMenu.map((subItem, index) => (
            <MenuItem key={index} item={subItem} />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
  
  return (
    <Nav.Link href={item.href} style={{ color: 'black' }}>
      {item.name}
    </Nav.Link>
  );
}

function App() {
  var menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Menu', subMenu:[{
      name: 'Pizza\'s', href: '/menu'
    }] },
    { name: 'Top Buyers', href: '/contacts' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar expand={false} style={{ background: "#1e1e1e" }}>
        <Container fluid>
          <img
            src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/74c5bbe5-3f63-4716-a290-efa5c0c1a370/df7ixgt-99bcab86-840a-4660-b7c0-3ab839cc2d23.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc0YzViYmU1LTNmNjMtNDcxNi1hMjkwLWVmYTVjMGMxYTM3MFwvZGY3aXhndC05OWJjYWI4Ni04NDBhLTQ2NjAtYjdjMC0zYWI4MzljYzJkMjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pSBDvEaimBRupoU3WxsQeKnBoKVRQiZc1kuyT-RAhas'
            width="120"
            height="55"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <Navbar.Brand href="#"></Navbar.Brand>
          
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${false}`}
            style={{
              borderColor: "white",
              backgroundColor: "transparent",
              padding: "5px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "white", marginBottom: "4px", borderRadius: "1px" }} />
              <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "white", marginBottom: "4px", borderRadius: "1px" }} />
              <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "white", borderRadius: "1px" }} />
            </div>
          </Navbar.Toggle>
          
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`} />
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {menuItems.map((item, index) => (
                  <MenuItem key={index} item={item} />
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <div style={{ flex: 1 }}>
        <Main />
      </div>

      <Footer />
    </div>
  );
}

export default App;
