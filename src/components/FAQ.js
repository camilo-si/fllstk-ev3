import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

function FAQ() {
  return (
    <Container id="faq" className="my-5" style={{ maxWidth: '800px' }}>
      <h2 className="text-center mb-4">Preguntas Frecuentes</h2>
      <Accordion defaultActiveKey="0"> {/* [cite: 124] */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>¿Qué garantía tienen los equipos?</Accordion.Header>
          <Accordion.Body>
            ...
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>¿Cómo funciona la mantención?</Accordion.Header>
          <Accordion.Body>
            ...
          </Accordion.Body>
        </Accordion.Item>
        {/* ... Repetir para más preguntas[cite: 124]... */}
      </Accordion>
    </Container>
  );
}
export default FAQ;