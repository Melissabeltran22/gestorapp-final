import {Banner} from "../../common/Banner/Banner"
import {Acerca} from "../../common/Acerca/Acerca"
import {Servicios} from "../../common/Servicios/Servicios"

export function Home(){
    return(
        <>
            <Banner></Banner>
            <Acerca></Acerca>
            <Servicios></Servicios>
        </>
    )
}