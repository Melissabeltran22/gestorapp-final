import { useState,useEffect } from "react"

export const Prueba=()=>{

    //Estoy parado en zona de JS
    const[getContador,setContador]=useState(0)


    //El use effect se usa debajo de las var de estado
    useEffect(()=>{
        alert("ahhhhh cambiaron el contador")
    },[getContador])
    
    function sumar(){
        setContador(getContador+1)
    } 

    

    return(

        <>
            <h2>El contador esta en: {getContador}</h2>

            <button onClick={sumar} className="btn btn-primary my-5">Incrementar</button>
            <button className="btn btn-danger my-5">Decrementar</button>

        </>
    )


}