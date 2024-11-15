import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer
      style={{
        background: "#1e1e1e",
        color: "white",
        padding: "10px 0",
        marginTop: "auto", // Garante que o footer vá para o final da tela
        fontSize: "14px",
      }}
    >
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p>© 2024 Pizza Planet. Todos os direitos reservados.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px", color: "white" }}>
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px", color: "white" }}>
              Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px", color: "white" }}>
              Twitter
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;