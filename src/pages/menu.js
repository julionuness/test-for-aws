import Cards from '../cards';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Menu() {
    const [cart, setCart] = useState([]);
    
    var handleButtonClick = (pizzaTitle) => {
        setCart([...cart,pizzaTitle])
        alert("Added to cart!")
      };

      const alertCart = () => {
        alert("Carrinho: "+ cart.join(", "));
      }
      
    return (
        <div style={{background: "#272727"}}>
            <center>

            <h1 style={{color: "white", margin: "0 auto"}}> Menu</h1>
            </center>
            <div className="d-flex justify-content-end">
                <Button variant="outline-danger" 
                style={{ padding: "10px 50px", fontSize: "2rem", height: "80px", marginRight: "10px" }}
                onClick={alertCart}>🛒</Button>
            </div>
        <br></br>
        <Row>
            <Col md={3}>
                <Cards
                title="Pizza Margherita"
                text="R$ 56,50"
                imageSrc="https://laticiniosbomdestino.com.br/2016/wp-content/uploads/2023/03/pizza-marguerita-com-mozzarella-de-bufala-bom-destino-scaled.jpg"
                buttonLabel="Add to Cart"
                buttonAction={() =>handleButtonClick("Pizza Margherita")}
                />
            </Col>
            <Col md={3}>
                <Cards
                title="Pizza Pepperoni"
                text="R$ 66,50"
                imageSrc="https://againstthegraingourmet.com/cdn/shop/products/Pepperoni_Pizza_Beauty_1000x1000.jpg?v=1658703726"
                buttonLabel="Add to Cart"
                buttonAction={() => handleButtonClick("Pizza Pepperoni")}
                />
            </Col>
            <Col md={3}>
                <Cards
                title="Pizza Mozzarella"
                text="R$ 67,90"
                imageSrc="https://pizzamia.pe/cdn/shop/products/PZM_-_Sabor_Mozzarella_Cenital_WEB-01_800x.jpg?v=1628540460"
                buttonLabel="Add to Cart"
                buttonAction={() => handleButtonClick("Pizza Mozzarella")}
                />
            </Col>
            <Col md={3}>
                <Cards
                title="Pizza Frango com Catupiry"
                text="R$ 69,90"
                imageSrc="https://sgnh.com.br/wp-content/uploads/2021/07/pizza_frango.png"
                buttonLabel="Add to Cart"
                buttonAction={() => handleButtonClick("Pizza Frango com Catupiry")}
                />
            </Col>
        </Row>
        <Row>
            <Col md={3}>
                <Cards
                title="Pizza à Moda da Casa"
                text="R$ 75,90"
                imageSrc="https://www.cardapio.donnagulla.com.br/wp-content/uploads/2023/02/gulla_especial.png"
                buttonLabel="Add to Cart"
                buttonAction={() => handleButtonClick("Pizza à Moda da Casa")}
                />
            </Col>
            <Col md={3}>
                <Cards
                title="Pizza Lombo Canadense"
                text="R$ 71,90"
                imageSrc="https://thumb-cdn.soluall.net/prod/shp_products/sp1280fw/61126bf0-2c80-46f1-bb13-4b9fac1e09ff/6560f6ad-1f84-480f-9cb3-04bdac1e0fec.jpg"
                buttonLabel="Add to Cart"
                buttonAction={() => handleButtonClick("Pizza Lombo Canadense")}
                />
            </Col>
            <Col md={3}>
                <Cards
                title="Pizza Portuguesa"
                text="R$ 65,90"
                imageSrc="https://phygital-files.mercafacil.com/peruzzo/uploads/produto/pizza_portuguesa_kg_582a78b4-2fb7-4c80-945b-aed3cd558f2d.png"
                buttonLabel="Add to Cart"
                buttonAction={() => handleButtonClick("Pizza Portuguesa")}
                />
            </Col>
            <Col md={3}>
                <Cards
                title="Pizza Chocolate"
                text="R$ 75,90"
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRowYDyficyzsE7Je_KlwLnALhRiioBHSV0Mg&s"
                buttonLabel="Add to Cart"
                buttonAction={() => handleButtonClick("Pizza Chocolate")}
                />
            </Col>
            
        </Row>
            
        
        </div>
    );
}

export default Menu;