import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap

// Importa todos tus componentes
import AppNavbar from './components/Navbar'; // Le puse AppNavbar para evitar conflictos
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Soluciones from './components/Soluciones';
import CalculadoraIntegral from './components/CalculadoraIntegral';
import Planes from './components/Planes';
import Testimonios from './components/Testimonios';
import FAQ from './components/FAQ';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Cada componente se renderiza aquí en orden */}
      <AppNavbar />
      <Hero />
      <Servicios />
      <Soluciones />
      <CalculadoraIntegral />
      <Planes />
      <Testimonios />
      <FAQ />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;