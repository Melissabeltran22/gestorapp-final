import { useEffect, useState } from "react";
import "./Calendario.css";
import { calendario } from "./datosCalendario";
import { useNavigate } from "react-router-dom";
import { datosAPI } from "../../pages/DashBoard/DatosJSON";

export function Calendario({ espacio }) {
  const [dias, setDias] = useState([]);
  const [horas, setHoras] = useState([]);
  const navegador = useNavigate();

  useEffect(() => {
    setDias(calendario[0]);
    setHoras(calendario[1]);
  }, []);

  // Función que capture los dos valores (hora y fecha) y navega a la página de reservas
  function crearReserva(dia, hora) {
    // Solo navegamos si el espacio está disponible
    if (!estaOcupado(dia, hora)) {
      // Navegar a la página de booking con los datos como state
      navegador("/booking", { 
        state: { 
          dia, 
          hora, 
          espacio, 
          fecha: convertirDiaAFecha(dia)  // Convertir día de la semana a una fecha
        } 
      });
    }
  }

  // Función para convertir día de la semana a fecha (aproximada)
  function convertirDiaAFecha(dia) {
    // Obtener fecha actual
    const hoy = new Date();
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    const diaActual = hoy.getDay(); // 0 para domingo, 1 para lunes, etc.
    
    // Encontrar el índice del día seleccionado
    const indiceDiaSeleccionado = diasSemana.findIndex(
      d => d.toLowerCase() === dia.toLowerCase()
    );
    
    if (indiceDiaSeleccionado === -1) return ""; // Si no se encuentra
    
    // Calcular la diferencia de días
    let diferencia = indiceDiaSeleccionado - diaActual;
    if (diferencia <= 0) diferencia += 7; // Si es en el pasado, irá a la próxima semana
    
    // Crear nueva fecha
    const fechaReserva = new Date();
    fechaReserva.setDate(hoy.getDate() + diferencia);
    
    // Formatear fecha como YYYY-MM-DD para el input date
    return fechaReserva.toISOString().split('T')[0];
  }

  // Función para ver si el dia y la hora están ocupados
  function estaOcupado(dia, hora) {
    return datosAPI.some(function (espacioData) {
      return espacioData.calendario.some(function (reserva) {
        return (
          reserva.dia.toLowerCase() === dia.toLowerCase() && 
          reserva.hora === hora
        );
      });
    });
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Hora</th>
            {dias.map((dia) => {
              return <th key={dia}>{dia}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {horas.map((hora) => {
            return (
              <tr key={hora}>
                <td>{hora}</td>
                {dias.map((dia) => {
                  const ocupado = estaOcupado(dia, hora);
                  return (
                    <td key={dia}>
                      <button
                        className={`btn ${
                          ocupado ? "btn-danger" : "btn-success"
                        }`}
                        onClick={() => {
                          crearReserva(dia, hora);
                        }}
                        disabled={ocupado}
                      >
                        {ocupado ? "No disponible" : "Reservar"}
                      </button>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}