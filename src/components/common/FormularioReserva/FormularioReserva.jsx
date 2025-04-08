import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
export function FormularioReserva() {


    //1. Crear una variable de estado para cada uno de los input del form
    const [getResponsableReserva, setResponsableReserva] = useState('')
    const [getContactoReserva, setContactoReserva] = useState('')
    const [getCorreoReserva, setCorreoReserva] = useState('')
    const [getApartamentoReserva, setApartamentoReserva] = useState('')
    const [getDiaReserva, setDiaReserva] = useState('')
    const [getHoraReserva, setHoraReserva] = useState('')
    const [getConsideracionesReserva, setConsideracionReserva] = useState('')

    //2. cerar una variable de estado para almacenar todos los datos formulario una vez se validaron (JSON)
    const [getdatosFormulario, setDatosFormulario] = useState('')

    //3. Crear una variable de estado para controlar el estado de envio de datos del formualio
    const [formualrioHaSidoEnviado, setFormularioHaSidoEnviado] = useState(false)


    const receptor=useLocation()
    const {dia,hora}=receptor.state || {}
    useEffect(()=>{
        if(dia&&hora){
            setDiaReserva(dia)
            setHoraReserva(hora)
        }
    },[dia,hora])

    //4. Una rutina para enviar los datos a un API
    useEffect(() => {
        //alert("nos fimos pal api") //coming soon...
    }, [formualrioHaSidoEnviado])

    //5. una rutina para validar y capturar los datos del formulario (Crear JSON)
    function capturarDatosFormulario() {

        //capturar los datos que escriba el usuario
        //ACTUALIZAR EL JSON CON LOS DATOS QUEMADOS
    }

    return (

        <>

            <br /><br />
            <section className="container">
                <section className="row">
                    <section className="col-12 col-md-8">
                        <h3>Registra tu reserva</h3>
                        <hr />
                        <form className="border rounded p-4 shadow" onSubmit={capturarDatosFormulario}>

                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="bi bi-person-circle"></i>
                                </span>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Responsable Reserva"
                                    value={getResponsableReserva}
                                    onChange={(evento)=>{setResponsableReserva(evento.target.value)}} 
                                />
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="bi bi-phone-fill"></i>
                                </span>
                                <input type="number" className="form-control" placeholder="Contacto Reserva" />
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="bi bi-envelope-fill"></i>
                                </span>
                                <input type="text" className="form-control" placeholder="Correo Contacto" />
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="bi bi-building-fill"></i>
                                </span>
                                <input type="number" className="form-control" placeholder="Apartamento Reserva" />
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="bi bi-calendar-event-fill"></i>
                                </span>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Dia Reserva" 
                                    value={getDiaReserva}
                                />
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="bi bi-clock-fill"></i>
                                </span>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Hora Reserva" 
                                    value={getHoraReserva}
                                />
                            </div>

                            <div className="mb-3">
                                <div className="form-floating">
                                    <textarea className="form-control"></textarea>
                                    <label>Consideraciones</label>
                                </div>
                            </div>

                            <button className="btn btn-outline-primary w-100" type="submit">Reservar</button>

                        </form>

                    </section>
                    <section className="col-12 col-md-4 align-self-center">
                        <img src="../../../../src/assets/img/reserva.webp" alt="foto" className="img-fluid" />
                    </section>
                </section>
            </section>


        </>
    )

}