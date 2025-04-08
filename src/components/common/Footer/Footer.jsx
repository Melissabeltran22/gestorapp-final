import './Footer.css'

export function Footer() {
  return (
    <footer className="footer mt-5 py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <h5>GestorApp</h5>
            <p>Plataforma para la gestión de espacios comunes en tu lugar de descanso.</p>
          </div>
          <div className="col-12 col-md-4">
            <h5>Enlaces rápidos</h5>
            <ul className="list-unstyled">
              <li><a href="/home">Inicio</a></li>
              <li><a href="/booking">Reservas</a></li>
              <li><a href="/dash">Dashboard</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h5>Contacto</h5>
            <address>
              <p>Email: info@gestorapp.com</p>
              <p>Teléfono: +123 456 7890</p>
            </address>
          </div>
        </div>
        <div className="row text-center mt-3">
          <div className="col-12">
            <p className="mb-0">© 2025 GestorApp - Renting/CESDE - Prof Juan José Gallego.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}