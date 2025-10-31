import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Soluciones() {
  return (
    <Container id="soluciones" className="my-5">
      <h2 className="text-center mb-4">Soluciones y Kits</h2>
      <Row className="row-cols-1 row-cols-md-2 g-4">
        {/* Categorías de kits [cite: 44] */}
        <Col>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/400x200.png?text=Hogar+3-5kW" />
            <Card.Body>
              <Card.Title>Hogar 3–5 kW</Card.Title>
              <Card.Text>Ideal para casas...</Card.Text>
              <Button variant="primary">Solicitar asesoría</Button> {/* [cite: 45] */}
            </Card.Body>
          </Card>
        </Col>
        {/* ... Repetir para Pyme, Off-grid, Híbridos[cite: 44]... */}
      </Row>
    </Container>
  );
}
export default Soluciones;