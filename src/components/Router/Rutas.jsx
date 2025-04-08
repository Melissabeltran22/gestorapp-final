import {Routes, Route} from "react-router-dom"
import {Home} from "../pages/Home/Home"
import {DashBoard} from "../pages/DashBoard/Dashboard"
import {Booking} from "../pages/Booking/Booking"
import {NotFound} from "../pages/NotFound/NotFound"

import { Prueba } from "../pages/Prueba/Prueba"
import { FormularioReserva } from "../common/FormularioReserva/FormularioReserva"

import { Menu } from "../common/Menu/Menu"
import {Footer} from "../common/Footer/Footer"



export function Rutas(){
    return(
        <>
            <Menu />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/dash" element={<DashBoard/>} />
                <Route path="/booking" element={<Booking/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
            <Footer />
        </>
    )
}