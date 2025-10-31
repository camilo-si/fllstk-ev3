import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Table, Alert, Card } from 'react-bootstrap';

function CalculadoraIntegral() {

  // --- 1. ESTADOS PARA CADA INPUT ---
  // Inputs numéricos [cite: 52-58]
  const [potenciaPanel, setPotenciaPanel] = useState(450);
  const [cantidadPaneles, setCantidadPaneles] = useState(8);
  const [precioInversor, setPrecioInversor] = useState(650000);
  const [precioBateria, setPrecioBateria] = useState(320000);
  const [cantidadBaterias, setCantidadBaterias] = useState(1);
  const [precioEstructura, setPrecioEstructura] = useState(180000);
  const [precioInstalacion, setPrecioInstalacion] = useState(350000);
  const [pesoEnvio, setPesoEnvio] = useState(90);
  const [valorPie, setValorPie] = useState(10); // [cite: 89]

  // Selects (almacenamos el *valor* que afecta el cálculo) [cite: 59-89]
  const [tipoTecho, setTipoTecho] = useState(0.05); // Teja/Asfalto (+5%) [cite: 61]
  const [region, setRegion] = useState(5000); // RM ($5.000) [cite: 65]
  const [complejidad, setComplejidad] = useState(0); // Baja (0%) [cite: 70]
  const [subsidio, setSubsidio] = useState(0); // Sin subsidio (0%) [cite: 74]
  const [metodoEnvio, setMetodoEnvio] = useState(1.0); // Estándar (x1.00) [cite: 78]
  const [garantia, setGarantia] = useState(0.02); // 12 meses (+2%) [cite: 81]
  const [planPago, setPlanPago] = useState(0); // Contado (0%) [cite: 85]
  const [tipoPie, setTipoPie] = useState('porcentaje'); // [cite: 89]

  // --- 2. ESTADOS PARA LOS RESULTADOS ---
  const [resultados, setResultados] = useState({});
  const [potenciaEstimada, setPotenciaEstimada] = useState(0);

  // --- 3. LÓGICA DE CÁLCULO (useEffect) ---
  // Se ejecutará cada vez que cambie un input
  useEffect(() => {
    // --- Lógica de Negocio (Aquí va tu trabajo) ---
    // Sigue las reglas de 
    
    const potEstimada = (potenciaPanel * cantidadPaneles) / 1000; // [cite: 91]
    setPotenciaEstimada(potEstimada);

    // [cite: 93, 95]
    const subtotalEquipos = (precioInversor) + (precioBateria * cantidadBaterias) + (precioEstructura);
    const recargoTecho = subtotalEquipos * tipoTecho; // [cite: 96]
    const instalacionFinal = precioInstalacion + (precioInstalacion * complejidad); // [cite: 97]
    
    const subtotalConRecargo = subtotalEquipos + recargoTecho;
    const descuentoSubsidio = subtotalConRecargo * subsidio; // [cite: 98]
    const subtotalConSubsidio = subtotalConRecargo - descuentoSubsidio;

    const baseEnvio = region + (pesoEnvio * 700);
    const costoEnvio = baseEnvio * metodoEnvio; // [cite: 100]
    const costoGarantia = subtotalEquipos * garantia; // [cite: 101]

    const baseIva = subtotalConSubsidio + instalacionFinal;
    const iva = baseIva * 0.19; // [cite: 99]

    const totalAntesFinanciar = baseIva + iva + costoEnvio + costoGarantia; // [cite: 102]

    // ... Lógica de financiamiento [cite: 103-109]
    let pieCalculado = 0;
    if (tipoPie === 'porcentaje') {
      pieCalculado = totalAntesFinanciar * (valorPie / 100); // [cite: 104]
    } else {
      pieCalculado = valorPie; // [cite: 104]
    }
    
    // ... más lógica para cuotas, interés, etc.

    // Guarda los resultados para la tabla
    setResultados({
      subtotalEquipos: subtotalEquipos,
      recargoTecho: recargoTecho,
      descuentoSubsidio: descuentoSubsidio,
      instalacionFinal: instalacionFinal,
      iva: iva,
      costoEnvio: costoEnvio,
      costoGarantia: costoGarantia,
      totalAntesFinanciar: totalAntesFinanciar,
      pieCalculado: pieCalculado,
      // ... más resultados
      totalFinal: totalAntesFinanciar // (Actualizar con financiamiento)
    });

  }, [
    potenciaPanel, cantidadPaneles, precioInversor, precioBateria, cantidadBaterias,
    precioEstructura, precioInstalacion, pesoEnvio, valorPie, tipoTecho, region,
    complejidad, subsidio, metodoEnvio, garantia, planPago, tipoPie
  ]);

  const handleReiniciar = () => {
  // ... resetea todos los useState a sus valores iniciales ...
  setPotenciaPanel(450);
  setCantidadPaneles(8);
  // ... Aquí debes seguir añadiendo el resto de "set..."
  // para cada estado que definiste en tu componente:
  setPrecioInversor(650000);
  setPrecioBateria(320000);
  setCantidadBaterias(1);
  setPrecioEstructura(180000);
  setPrecioInstalacion(350000);
  setPesoEnvio(90);
  setValorPie(10);
  setTipoTecho(0.05);
  setRegion(5000);
  setComplejidad(0);
  setSubsidio(0);
  setMetodoEnvio(1.0);
  setGarantia(0.02);
  setPlanPago(0);
  setTipoPie('porcentaje');
};

  // Helper para formatear números como moneda
  const formatCurrency = (num) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(num);
  };

  return (
    <Container id="demo-calculadora" className="my-5 p-4 bg-light rounded">
      <h2 className="text-center mb-4">DEMO calculadora</h2>
      <Row className="g-5"> {/* g-5 es un gutter grande */}

        {/* --- Columna Izquierda: Formulario --- */}
        <Col xs={12} lg={6}>
          <Card className="p-4 shadow-sm">
            <h3>Formulario</h3>
            <Form>
              <Row>
                {/* Inputs numéricos [cite: 52-58] */}
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Potencia del panel (W)</Form.Label>
                    <Form.Control type="number" value={potenciaPanel} onChange={(e) => setPotenciaPanel(Number(e.target.value))} />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Cantidad de paneles</Form.Label>
                    <Form.Control type="number" value={cantidadPaneles} onChange={(e) => setCantidadPaneles(Number(e.target.value))} />
                  </Form.Group>
                </Col>
                {/* ... Repetir para Inversor, Batería, Cant. Baterías, Estructura, Instalación, Peso ... */}
              </Row>

              {/* Selects [cite: 59-89] */}
              <Form.Group className="mb-3">
                <Form.Label>Tipo de techo</Form.Label>
                <Form.Select value={tipoTecho} onChange={(e) => setTipoTecho(Number(e.target.value))}>
                  <option value={0.05}>Teja/Asfalto (+5%)</option> {/* [cite: 61] */}
                  <option value={0.02}>Zinc/Planchas (+2%)</option> {/* [cite: 62] */}
                  <option value={0.07}>Hormigón (+7%)</option> {/* [cite: 63] */}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Región (para envío)</Form.Label>
                <Form.Select value={region} onChange={(e) => setRegion(Number(e.target.value))}>
                  <option value={5000}>RM ($5.000)</option> {/* [cite: 65] */}
                  <option value={9000}>Norte ($9.000)</option> {/* [cite: 66] */}
                  <option value={10000}>Sur ($10.000)</option> {/* [cite: 67] */}
                  <option value={15000}>Austral ($15.000)</option> {/* [cite: 68] */}
                </Form.Select>
              </Form.Group>

              {/* ... Repetir para Complejidad, Subsidio, Método Envío, Garantía, Plan Pago ... */}

              <Row className="mb-3">
                <Col>
                  <Form.Label>Valor de pie</Form.Label>
                  <Form.Control type="number" value={valorPie} onChange={(e) => setValorPie(Number(e.target.value))} />
                </Col>
                <Col>
                  <Form.Label>Tipo de pie</Form.Label>
                  <Form.Select value={tipoPie} onChange={(e) => setTipoPie(e.target.value)}>
                    <option value="porcentaje">Porcentaje (%)</option>
                    <option value="monto">Monto fijo ($)</option>
                  </Form.Select>
                </Col>
              </Row>

              <Button variant="secondary" onClick={handleReiniciar} className="me-2">Reiniciar</Button> {/* [cite: 112] */}
              <Button variant="primary" disabled>Copiar resumen</Button> {/* [cite: 113] */}

            </Form>
          </Card>
        </Col>

        {/* --- Columna Derecha: Resumen --- */}
        <Col xs={12} lg={6}>
          <Card className="p-4 shadow-sm">
            <h3>Resumen</h3>
            {/* Advertencia [cite: 92] */}
            {(potenciaEstimada > 7 && cantidadBaterias === 0) && (
              <Alert variant="warning">
                Recomendado considerar almacenamiento para estabilidad del sistema.
              </Alert>
            )}

            <Table striped bordered hover> {/* [cite: 109] */}
              <tbody>
                <tr>
                  <td>Potencia estimada (kW)</td>
                  <td>{potenciaEstimada.toFixed(2)} kW</td>
                </tr>
                <tr>
                  <td>Subtotal equipos</td>
                  <td>{formatCurrency(resultados.subtotalEquipos)}</td>
                </tr>
                <tr>
                  <td>Recargo techo</td>
                  <td>{formatCurrency(resultados.recargoTecho)}</td>
                </tr>
                <tr>
                  <td>Subsidio</td>
                  <td className="text-danger">-{formatCurrency(resultados.descuentoSubsidio)}</td>
                </tr>
                <tr>
                  <td>Instalación final</td>
                  <td>{formatCurrency(resultados.instalacionFinal)}</td>
                </tr>
                <tr>
                  <td>IVA 19%</td>
                  <td>{formatCurrency(resultados.iva)}</td>
                </tr>
                <tr>
                  <td>Envío</td>
                  <td>{formatCurrency(resultados.costoEnvio)}</td>
                </tr>
                <tr>
                  <td>Garantía</td>
                  <td>{formatCurrency(resultados.costoGarantia)}</td>
                </tr>
                <tr className="fw-bold">
                  <td>Total antes de financiar</td>
                  <td>{formatCurrency(resultados.totalAntesFinanciar)}</td>
                </tr>
                <tr>
                  <td>Pie</td>
                  <td>{formatCurrency(resultados.pieCalculado)}</td>
                </tr>
                <tr>
                  <td>Interés total</td>
                  <td>$—</td>
                </tr>
                <tr>
                  <td>Cuota</td>
                  <td>$—</td>
                </tr>
                <tr className="fw-bold table-primary">
                  <td>Total final</td>
                  <td>{formatCurrency(resultados.totalFinal)}</td>
                </tr>
              </tbody>
            </Table>
            <small className="text-muted">Valores referenciales para el prototipo.</small>
          </Card>
        </Col>

      </Row>
    </Container>
  );
}

export default CalculadoraIntegral;