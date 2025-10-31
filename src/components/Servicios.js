import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Servicios() {
  return (
    <Container id="servicios" className="my-5">
      <h2 className="text-center mb-4">Nuestros Servicios</h2>
      {/* Usa la grilla responsive como pide el brief [cite: 42] */}
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {/* Ejemplo de una Card [cite: 42] */}
        <Col>
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Estudio energético</Card.Title>
              <Card.Text>Analizamos tu consumo...</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Instalación certificada SEC</Card.Title>
              <Card.Text>...</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* ... Repetir para Monitoreo y Mantención[cite: 41]... */}
      </Row>
    </Container>
  );
}
export default Servicios;