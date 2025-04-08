import { useState,useEffect } from "react"
import "./Calendar.css"
import { calendar } from "./dataCalendar"



export const Calendar = () => {

    const[dias, setDias]=useState([])
    const[horas, setHoras]=useState([])

    useEffect(()=>{
        setDias(calendar[0])
        setHoras(calendar[1])
    })

  return (
    <table>

        <thead>
            <tr>
                <th>Hora</th>
                {
                    dias.map((dia)=>{
                        return <th>{dia}</th>
                    })
                }
            </tr>

        </thead>
        <tbody>

            {
                horas.map((hora)=>{
                    return <tr>
                        
                        <td>{hora}</td>
                        {
                            dias.map(function(dia){
                                return(
                                    <td>oe</td>
                                )
                            })
                        }
                        </tr>
                })
            }

        </tbody>
    </table>
  )
}
