import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Planes() {
  return (
    <Container id="planes" className="my-5">
      <h2 className="text-center mb-4">Planes</h2>
      <Row className="row-cols-1 row-cols-md-3 g-4"> {/* [cite: 119] */}
        {/* Planes Básico, Optimizado, Autónomo [cite: 118] */}
        <Col>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Plan Básico</Card.Title>
              <Card.Text>...</Card.Text>
              <Button variant="primary">Solicitar evaluación</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* ... Repetir para otros 2 planes ... */}
      </Row>
    </Container>
  );
}
export default Planes;