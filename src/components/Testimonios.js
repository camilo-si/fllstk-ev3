import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Testimonios() {
  return (
    <Container id="testimonios" className="my-5 bg-light p-5 rounded">
      <h2 className="text-center mb-4">Qué dicen nuestros clientes</h2>
      <Row className="row-cols-1 row-cols-md-3 g-4"> {/* [cite: 122] */}
        <Col>
          <Card>
            <Card.Body>
              <Card.Text>"Excelente servicio..."</Card.Text>
              <Card.Footer>— Juan Pérez, Santiago</Card.Footer> {/* [cite: 121] */}
            </Card.Body>
          </Card>
        </Col>
        {/* ... Repetir para 2 testimonios más ... */}
      </Row>
    </Container>
  );
}
export default Testimonios;