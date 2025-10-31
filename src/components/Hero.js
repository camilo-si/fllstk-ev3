import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

function Hero() {
  return (
    // Le damos un ID para el scroll y padding superior para que no lo tape el Navbar
    <Container id="inicio" style={{ paddingTop: '70px', paddingBottom: '40px' }}>
      <Row className="align-items-center gy-4"> {/* gy-4 añade espacio en móvil */}
        
        {/* Columna de Texto [cite: 39] */}
        <Col xs={12} md={6}>
          <h1>Energía solar accesible y confiable para tu hogar o pyme</h1> {/* [cite: 35] */}
          <p className="lead">
            Dimensiona tu proyecto con nuestra DEMO y descubre cómo el sol puede pagar tus cuentas.
          </p>
          <Button variant="primary" href="#demo-calculadora" className="me-2">
            Ver DEMO
          </Button> {/* [cite: 37] */}
          <Button variant="outline-secondary" href="/catalogo-helioandes.pdf">
            Descargar Catálogo
          </Button> {/* [cite: 38] */}
        </Col>

        {/* Columna de Imagen [cite: 39] */}
        <Col xs={12} md={6}>
          {/* Reemplaza este 'src' con una imagen real (puedes ponerla en la carpeta 'public') */}
          <Image src="public/energia_solar.jpg" alt="Instalación solar"/> {/* [cite: 39] */}
        </Col>

      </Row>
    </Container>
  );
}

export default Hero;