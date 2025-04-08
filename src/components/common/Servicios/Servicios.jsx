import './Servicios.css'
import { Link } from 'react-router-dom'

export function Servicios() {
  const servicios = [
    {
      id: 1,
      nombre: "Piscina",
      descripcion: "Disfruta de nuestra piscina en un ambiente tranquilo y relajante.",
      imagen: "../../../../src/assets/img/banner.jpg"
    },
    {
      id: 2,
      nombre: "Gimnasio",
      descripcion: "Mantente en forma con nuestros equipos de última generación.",
      imagen: "../../../../src/assets/img/banner.jpg"
    },
    {
      id: 3,
      nombre: "Salón social",
      descripcion: "Espacio ideal para reuniones, fiestas y eventos especiales.",
      imagen: "../../../../src/assets/img/banner.jpg"
    },
    {
      id: 4,
      nombre: "Zona BBQ",
      descripcion: "Perfecta para compartir momentos agradables con familiares y amigos.",
      imagen: "../../../../src/assets/img/banner.jpg"
    }
  ]

  return (
    <section className="servicios py-5">
      <div className="container">
        <h2 className="text-center mb-5">Nuestros Espacios</h2>
        
        <div className="row">
          {servicios.map(servicio => (
            <div key={servicio.id} className="col-md-6 col-lg-3 mb-4">
              <div className="card servicio-card h-100">
                <img 
                  src={servicio.imagen} 
                  className="card-img-top" 
                  alt={servicio.nombre} 
                />
                <div className="card-body">
                  <h5 className="card-title">{servicio.nombre}</h5>
                  <p className="card-text">{servicio.descripcion}</p>
                </div>
                <div className="card-footer bg-white border-0 text-center">
                  <Link to="/booking" className="btn btn-primary">
                    Reservar ahora
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <Link to="/booking" className="btn btn-lg btn-outline-primary">
            Ver todos los espacios
          </Link>
        </div>
      </div>
    </section>
  )
}