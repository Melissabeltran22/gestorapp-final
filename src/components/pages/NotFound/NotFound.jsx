import './NotFound.css'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="notfound-container">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="display-1">404</h1>
            <h2 className="mb-4">Página no encontrada</h2>
            <p className="lead mb-5">Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
            <Link to="/home" className="btn btn-primary btn-lg">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}