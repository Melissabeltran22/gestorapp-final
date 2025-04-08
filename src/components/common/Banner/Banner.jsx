import './Banner.css'
import { Link } from 'react-router-dom'

export function Banner() {
    return (
        <section className="banner">
            <div className="banner-content container">
                <h1 className="banner-title">
                    <span className="display-2 fw-bold">GestorApp</span>
                </h1>
                <h2 className="banner-subtitle">
                    Gestiona espacios comunes de manera eficiente
                </h2>
                <p className="banner-text mb-4">
                    Aplicación para reserva y administración de espacios en tu lugar de descanso
                </p>
                <div className="banner-buttons">
                    <Link to="/booking" className="btn btn-primary btn-lg me-3">
                        Reservar ahora
                    </Link>
                    <Link to="/dash" className="btn btn-outline-light btn-lg">
                        Ver calendario
                    </Link>
                </div>
            </div>
        </section>
    )
}