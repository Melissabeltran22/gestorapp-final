import { useState, useEffect } from 'react'
import './Dashboard.css'
import { Calendario } from '../../common/Calendario/Calendario'

export function DashBoard() {
    // Estado para almacenar las reservas
    const [reservas, setReservas] = useState([])

    // Datos de los espacios disponibles
    const espacios = [
        { id: 1, nombre: 'Piscina', imagen: '../../../../src/assets/img/banner.jpg' },
        { id: 2, nombre: 'Gimnasio', imagen: '../../../../src/assets/img/banner.jpg' },
        { id: 3, nombre: 'Salón social', imagen: '../../../../src/assets/img/banner.jpg' },
        { id: 4, nombre: 'Zona BBQ', imagen: '../../../../src/assets/img/banner.jpg' }
    ]

    // Cargar las reservas desde localStorage al inicio
    useEffect(() => {
        const datosGuardados = localStorage.getItem('DATOSJSON')
        if (datosGuardados) {
            setReservas(JSON.parse(datosGuardados))
        }
    }, [])

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div className="container">
                    <h1 className="pt-5 mt-5 text-center text-white">Panel de administración</h1>
                    <p className="text-center text-white mb-4">
                        Gestiona y visualiza todas las reservas de espacios
                    </p>
                </div>
            </div>

            <div className="container my-5">
                <div className="row mb-4">
                    <div className="col-md-3">
                        <div className="dashboard-stat bg-primary">
                            <div className="stat-count">{reservas.length}</div>
                            <div className="stat-label">Total Reservas</div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="dashboard-stat bg-success">
                            <div className="stat-count">
                                {reservas.filter(r => r.espacio === "Piscina").length}
                            </div>
                            <div className="stat-label">Reservas Piscina</div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="dashboard-stat bg-warning">
                            <div className="stat-count">
                                {reservas.filter(r => r.espacio === "Gimnasio").length}
                            </div>
                            <div className="stat-label">Reservas Gimnasio</div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="dashboard-stat bg-info">
                            <div className="stat-count">
                                {reservas.filter(r => r.espacio === "Salón social").length + 
                                 reservas.filter(r => r.espacio === "Zona BBQ").length}
                            </div>
                            <div className="stat-label">Otras Reservas</div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="card shadow-sm">
                            <div className="card-header bg-white">
                                <h2 className="mb-0">Calendarios de reservas por espacio</h2>
                            </div>
                            <div className="card-body">
                                <div className="alert alert-info">
                                    <i className="bi bi-info-circle me-2"></i>
                                    Haz clic en un horario disponible para ver detalles o hacer una reserva.
                                </div>
                                
                                {/* Renderizar dinámicamente los calendarios basados en los espacios */}
                                {espacios.map(espacio => (
                                    <div key={espacio.id} className="mb-5">
                                        <h3 className="espacio-titulo">{espacio.nombre}</h3>
                                        <div className="row align-items-center mb-4">
                                            <div className="col-md-3">
                                                <img 
                                                    src={espacio.imagen} 
                                                    alt={espacio.nombre} 
                                                    className="img-fluid rounded espacio-imagen" 
                                                />
                                            </div>
                                            <div className="col-md-9">
                                                <p className="espacio-descripcion">
                                                    Gestiona las reservas del espacio {espacio.nombre}. 
                                                    Los horarios marcados en rojo ya están reservados.
                                                </p>
                                                <div className="d-flex">
                                                    <div className="me-3">
                                                        <span className="disponible-badge"></span> Disponible
                                                    </div>
                                                    <div>
                                                        <span className="reservado-badge"></span> Reservado
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Calendario 
                                            espacio={espacio.nombre} 
                                            reservas={reservas.filter(r => r.espacio === espacio.nombre)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sección de Listado de Reservas */}
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="card shadow-sm">
                            <div className="card-header bg-white">
                                <h2 className="mb-0">Listado de Reservas</h2>
                            </div>
                            <div className="card-body">
                                {reservas.length > 0 ? (
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead className="table-light">
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Nombre</th>
                                                    <th>Espacio</th>
                                                    <th>Fecha</th>
                                                    <th>Hora</th>
                                                    <th>Personas</th>
                                                    <th>Estado</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {reservas.map(reserva => (
                                                    <tr key={reserva.id}>
                                                        <td>{reserva.id.toString().slice(-4)}</td>
                                                        <td>{reserva.nombre}</td>
                                                        <td>{reserva.espacio}</td>
                                                        <td>{reserva.fecha}</td>
                                                        <td>{reserva.hora}</td>
                                                        <td>{reserva.personas}</td>
                                                        <td>
                                                            <span className="badge bg-success">
                                                                {reserva.estado || 'Confirmado'}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <div className="alert alert-warning">
                                        <i className="bi bi-exclamation-triangle me-2"></i>
                                        No hay reservas registradas. Ve a la página de Reservas para crear una.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}