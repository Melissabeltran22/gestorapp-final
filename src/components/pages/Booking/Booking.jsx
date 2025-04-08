import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './Booking.css'

export function Booking() {
  // Obtener location y preselectedData de una vez
  const location = useLocation();
  // Usar un valor por defecto de objeto vacío para evitar errores
  const preselectedData = location.state || {};
  
  // Estado para los datos del formulario con persistencia en localStorage
  const [formData, setFormData] = useState({
    nombre: localStorage.getItem('booking_nombre') || '',
    email: localStorage.getItem('booking_email') || '',
    telefono: localStorage.getItem('booking_telefono') || '',
    espacio: preselectedData.espacio || localStorage.getItem('booking_espacio') || 'Piscina',
    fecha: preselectedData.fecha || localStorage.getItem('booking_fecha') || '',
    hora: preselectedData.hora || localStorage.getItem('booking_hora') || '',
    personas: localStorage.getItem('booking_personas') || '1',
    comentarios: localStorage.getItem('booking_comentarios') || ''
  });

  // Estado para el mensaje de confirmación
  const [confirmMessage, setConfirmMessage] = useState('');

  // Datos simulados de espacios disponibles
  const espacios = [
    { id: 1, nombre: 'Piscina', imagen: '../../../../src/assets/img/banner.jpg' },
    { id: 2, nombre: 'Gimnasio', imagen: '../../../../src/assets/img/banner.jpg' },
    { id: 3, nombre: 'Salón social', imagen: '../../../../src/assets/img/banner.jpg' },
    { id: 4, nombre: 'Zona BBQ', imagen: '../../../../src/assets/img/banner.jpg' }
  ];

  // Estado para almacenar las reservas (simula el JSON)
  const [DATOSJSON, setDATOSJSON] = useState(() => {
    const savedData = localStorage.getItem('DATOSJSON');
    return savedData ? JSON.parse(savedData) : [];
  });

  // Efecto para guardar los datos preseleccionados en localStorage
  useEffect(() => {
    if (preselectedData.espacio) {
      localStorage.setItem('booking_espacio', preselectedData.espacio);
    }
    if (preselectedData.fecha) {
      localStorage.setItem('booking_fecha', preselectedData.fecha);
    }
    if (preselectedData.hora) {
      localStorage.setItem('booking_hora', preselectedData.hora);
    }
  }, [preselectedData.espacio, preselectedData.fecha, preselectedData.hora]);

  // Efecto para persistir DATOSJSON en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('DATOSJSON', JSON.stringify(DATOSJSON));
  }, [DATOSJSON]);

  // Manejador para los cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Guardar en localStorage
    localStorage.setItem(`booking_${name}`, value);
  };

  // Verificar si ya existe una reserva para la fecha y hora seleccionada
  const isSlotReserved = () => {
    return DATOSJSON.some(reserva => 
      reserva.fecha === formData.fecha && 
      reserva.hora === formData.hora && 
      reserva.espacio === formData.espacio
    );
  };

  // Manejador para envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Verificar si el horario ya está reservado
    if (isSlotReserved()) {
      setConfirmMessage('El horario seleccionado ya está reservado. Por favor, elige otro horario.');
      return;
    }
    
    // Crear objeto con datos de la reserva
    const nuevaReserva = {
      id: Date.now(), // ID único basado en timestamp
      ...formData,
      estado: 'confirmado'
    };
    
    // Agregar al arreglo de datos
    setDATOSJSON([...DATOSJSON, nuevaReserva]);
    
    // Mostrar mensaje de confirmación
    setConfirmMessage('¡Reserva realizada con éxito! Puedes ver los detalles en el Dashboard.');
    
    // Opcional: Reiniciar formulario después de enviar
    setTimeout(() => {
      setConfirmMessage('');
    }, 5000);
  };

  return (
    <>
      <div className="booking-header">
        <div className="container">
          <h1 className="pt-5 mt-5 text-center text-white">Reserva tu espacio</h1>
          {preselectedData.espacio && (
            <p className="text-center text-white">
              Has seleccionado: {preselectedData.espacio} - {preselectedData.fecha} a las {preselectedData.hora}
            </p>
          )}
        </div>
      </div>
      
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8">
            <h2>Formulario de reserva</h2>
            
            {confirmMessage && (
              <div className={`alert ${confirmMessage.includes('éxito') ? 'alert-success' : 'alert-danger'}`}>
                {confirmMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="nombre" className="form-label">Nombre completo</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="nombre" 
                    name="nombre" 
                    value={formData.nombre} 
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Correo electrónico</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
              
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="telefono" className="form-label">Teléfono</label>
                  <input 
                    type="tel" 
                    className="form-control" 
                    id="telefono" 
                    name="telefono" 
                    value={formData.telefono} 
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="espacio" className="form-label">Espacio a reservar</label>
                  <select 
                    className="form-select" 
                    id="espacio" 
                    name="espacio" 
                    value={formData.espacio} 
                    onChange={handleInputChange}
                    required
                  >
                    {espacios.map(espacio => (
                      <option key={espacio.id} value={espacio.nombre}>
                        {espacio.nombre}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="fecha" className="form-label">Fecha</label>
                  <input 
                    type="date" 
                    className="form-control" 
                    id="fecha" 
                    name="fecha" 
                    value={formData.fecha} 
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="hora" className="form-label">Hora</label>
                  <input 
                    type="time" 
                    className="form-control" 
                    id="hora" 
                    name="hora" 
                    value={formData.hora} 
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
              
              <div className="mb-3">
                <label htmlFor="personas" className="form-label">Número de personas</label>
                <input 
                  type="number" 
                  className="form-control" 
                  id="personas" 
                  name="personas" 
                  min="1" 
                  max="30" 
                  value={formData.personas} 
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="comentarios" className="form-label">Comentarios adicionales</label>
                <textarea 
                  className="form-control" 
                  id="comentarios" 
                  name="comentarios" 
                  rows="3" 
                  value={formData.comentarios} 
                  onChange={handleInputChange}
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Reservar ahora</button>
            </form>
          </div>
          
          <div className="col-md-4">
            <div className="card espacios-card mb-4">
              <div className="card-header bg-primary text-white">
                <h3 className="mb-0 fs-5">Espacios disponibles</h3>
              </div>
              <div className="card-body">
                <div className="espacios-list">
                  {espacios.map(espacio => (
                    <div key={espacio.id} className="espacio-item mb-3">
                      <img 
                        src={espacio.imagen} 
                        alt={espacio.nombre} 
                        className="img-fluid rounded mb-2" 
                      />
                      <h5>{espacio.nombre}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header bg-info text-white">
                <h3 className="mb-0 fs-5">Reservas existentes</h3>
              </div>
              <div className="card-body">
                <p>Total de reservas: <strong>{DATOSJSON.length}</strong></p>
                {DATOSJSON.length > 0 ? (
                  <ul className="list-group">
                    {DATOSJSON.filter(r => r.espacio === formData.espacio).slice(0, 3).map(reserva => (
                      <li key={reserva.id} className="list-group-item">
                        <small>
                          <strong>{reserva.espacio}</strong><br />
                          Fecha: {reserva.fecha}<br />
                          Hora: {reserva.hora}
                        </small>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="small">No hay reservas todavía.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}