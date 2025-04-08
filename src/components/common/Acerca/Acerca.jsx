import './Acerca.css'

export function Acerca(){
    return(
        <section className="acerca-section py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <div className="acerca-img-container">
                            <img 
                                src="../../../../src/assets/img/mascota.webp" 
                                alt="GestorApp" 
                                className="img-fluid rounded acerca-img"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="acerca-content">
                            <h2 className="section-title">Sobre GestorApp</h2>
                            <div className="section-divider"></div>
                            <p className="lead">
                                Tu solución completa para la gestión de espacios comunes
                            </p>
                            <p>
                                GestorApp es una plataforma innovadora diseñada para facilitar la administración 
                                y reserva de espacios comunes en conjuntos residenciales, clubes y lugares de descanso.
                            </p>
                            <p>
                                Nuestra misión es simplificar el proceso de reserva y gestión, permitiendo 
                                a los usuarios disfrutar de sus instalaciones sin complicaciones, evitando 
                                conflictos de horarios y maximizando el uso de los espacios disponibles.
                            </p>
                            <div className="acerca-features">
                                <div className="feature-item">
                                    <i className="bi bi-calendar-check"></i>
                                    <span>Reservas en tiempo real</span>
                                </div>
                                <div className="feature-item">
                                    <i className="bi bi-people"></i>
                                    <span>Gestión de capacidad</span>
                                </div>
                                <div className="feature-item">
                                    <i className="bi bi-graph-up"></i>
                                    <span>Estadísticas de uso</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}