import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  const currentYear = new Date().getFullYear(); // Año dinámico [cite: 129]

  return (
    <footer className="bg-dark text-white mt-5">
      <Container className="text-center py-4"> {/* [cite: 130] */}
        <p>&copy; {currentYear} HelioAndes Energía. Todos los derechos reservados.</p>
        <p>
          <a href="#politicas" className="text-white-50">Política de Privacidad</a>
        </p>
      </Container>
    </footer>
  );
}
export default Footer;