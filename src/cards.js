import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({title, text, imageSrc, buttonLabel, buttonAction}) {
    return(
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageSrc} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button variant="danger" onClick={buttonAction}>{buttonLabel}</Button>
            </Card.Body>
            </Card>
        </div>
 );
}

export default Cards;