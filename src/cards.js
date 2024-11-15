import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({ titulo, descricao, preco, imagem, buttonLabel, buttonAction }) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imagem} alt={titulo} />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>
                        {descricao} <br />
                        <strong>{preco}</strong>
                    </Card.Text>
                    <Button variant="danger" onClick={buttonAction}>
                        {buttonLabel}
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Cards;
