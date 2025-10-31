import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function Contacto() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    // Aquí iría la lógica de envío
    if (form.checkValidity() === true) {
       event.preventDefault(); // Previene envío real para la demo
       alert("Formulario enviado (simulación)");
    }
  };

  return (
    <Container id="contacto" className="my-5" style={{ maxWidth: '700px' }}>
      <h2 className="text-center mb-4">Contacto</h2>
      {/* Formulario con validación [cite: 127] */}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control required type="text" placeholder="Tu nombre" />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa tu nombre.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control required type="email" placeholder="tu@email.com" />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa un email válido.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control required as="textarea" rows={4} placeholder="Tu consulta..." />
          <Form.Control.Feedback type="invalid">
            Por favor ingresa tu mensaje.
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" variant="primary">Enviar Mensaje</Button>
      </Form>
    </Container>
  );
}
export default Contacto;