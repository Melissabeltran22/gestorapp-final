#GESTOR APP 2025
## Plataforma para la gestion  de sitios Comunes
JUAN DIEGO SANCHEZ - WD
Melissa Beltran

ENTREGABLES
1. Modifiquen el readme.md para incluir recomendaciones
de instalacion uso y proposito de la app
2. agregar el componente footer a los commons
3. refactorizar el diseño del HOME (menu, banner, acerca)
4. crear pagina nueva llamada booking (incluir en rutas)
5. subir el desarrollo a github con una ramma independiente haciendo
pull request

6. todos espacios inician a las 10 am y terminan 5 pm
7. Quemar 10 objetos 

{
        id:2,
        nombreEspacio:"Piscina",
        descripcion:"piscina olimpica de medidas reglamentarias",
        foto:"NAN",
        capacidad:5,
        calendario:Array(
            {
                dia:"miercoles",
                hora:"2:00 pm - 3:00 pm"
            },
            { 
                dia:"jueves",
                hora:"4:00 pm - 5:00 pm"
            }

        )
    }

8. renderizar de forma dinamica la plantilla de espacio fisico segun el diseño entregado en ev1

9. en las rutas debo tener una ruta default que cargue un componente 404

10. Renderizar N calendarios segun el numero de datos del arreglo DATOSJSON (DASHBOARD)

11. EN el calendario como capturar al hacer clic en algun boton de reserva
el dia y la hora a la que esta asociado dicho boton

12. Aplicar persistencia a todos los input del formulario

13. Tenemos un arreglo que se llama DATOSJSON, debes cargar este JSON con los datos del formulario de reserva (agregar un elemento al arreglo de objetos)

14. Pintar en rojo POR ESPACIO todos los horarios reservados