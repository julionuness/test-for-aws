import React, { useState, useEffect } from 'react';
import Cards from '../cards';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Menu() {
    const [menuItems, setMenuItems] = useState([]); // Armazena os dados dos cards
    const [cart, setCart] = useState([]); // Armazena os itens do carrinho

    // Função para buscar os dados do backend
    useEffect(() => {
        fetch('http://ec2-15-228-194-251.sa-east-1.compute.amazonaws.com:9000/get')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar os dados');
                }
                return response.json();
            })
            .then((data) => {
                setMenuItems(data); // Define os itens do menu com os dados do backend
            })
            .catch((error) => {
                console.error('Erro ao buscar os dados do menu:', error);
            });
    }, []);

    // Adiciona item ao carrinho
    const handleButtonClick = (pizzaTitle) => {
        setCart([...cart, pizzaTitle]);
        alert('Adicionado ao carrinho!');
    };

    // Alerta com os itens do carrinho
    const alertCart = () => {
        alert('Carrinho: ' + cart.join(', '));
    };

    return (
        <div style={{ background: '#272727' }}>
            <center>
                <h1 style={{ color: 'white', margin: '0 auto' }}>Pizza's</h1>
            </center>
            <div className="d-flex justify-content-end">
                <Button
                    variant="outline-danger"
                    style={{ padding: '10px 50px', fontSize: '2rem', height: '80px', marginRight: '10px' }}
                    onClick={alertCart}
                >
                    🛒
                </Button>
            </div>
            <br />
            <Row>
                {/* Renderização dinâmica dos cards */}
                {menuItems.map((item) => (
                    <Col md={3} key={item.id}>
                        <Cards
                            titulo={item.titulo}
                            descricao={item.descricao}
                            preco={`R$ ${item.preco}`}
                            imagem={item.imagem}
                            buttonLabel="Add to Cart"
                            buttonAction={() => handleButtonClick(item.titulo)}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Menu;
