//Hooks
import { useState } from "react";

//Componentes
import { Toaster, toast } from 'sonner'
import { Title } from "./listaPlantilla/Title";

//Styls
import "../../public/styles/form.css";


export const FormEtiqueta = () => {
    const [newEtiqueta, setNewEtiqueta] = useState({
        nameEtiqueta:"",
        producto:"",
        lote:"",
        fechaVencimiento:"",
        operario:""
    });

    const handleChange = (event) => {
        setNewEtiqueta({
            ...newEtiqueta,
            [event.target.name] : event.target.value,
        });
    };

    const API = "http://localhost:5000/api/guardar";
    const settings = {
        method: "POST", 
        mode: "cors", 
        cache: "no-cache", 
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer", 
        body: JSON.stringify(newEtiqueta), 
      }
 
    async function guardarEtiqueta(API, settings) {
        const response = await fetch(API, settings)
        console.log(response.json);
        return await response.json();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        guardarEtiqueta(API,settings)
            .then((data) => toast.success('Registro exitoso!'))
            .catch(err => toast.error("Ocurrio un error - sin conexion ERROR 500"));
            
    };

    const opciones = [
        {
            id:"0",
            type: "text",
            className:"text-input",
            data: "nameEtiqueta",
            text:"Nombre Etiqueta",
            examples: "Etiqueta Jamon"
        },
        {
            id:"1",
            type: "text",
            className:"text-input",
            data: "producto",
            text:"Producto",
            examples: "Ej: P32J/1"
        },
        {
            id:"2",
            type: "text",
            className:"text-input",
            data: "lote",
            text:"Lote",
            examples:"Ej:4575"
        },
        {
            id:"3",
            type: "date",
            className:"text-input",
            data: "fechaVencimiento",
            text:"Fecha Vencimiento",
            examples: "Ej:2023-11-4"
        },
        {
            id:"4",
            type: "text",
            className:"text-input",
            data:"operario",
            text: "Operario",
            examples:"Ej:Carlos"
        }   
    ]
    const espaciosLetra = {
        letterSpacing:"3px",
        textAlign: "initial",
    }
    return (
        <div>
            <Title textTile={"Registrar Etiqueta"} subTitle={"⌨ Asegurate de completar todos los campos del formulario! ⌨"}/>
            <Toaster position="top-left" richColors/>
            <form className="formPost" onSubmit={handleSubmit}>
                <article className="caja">
                    {opciones.map(({id, type, className, data, examples,text}) => {
                        return (
                            <div key={id} className="input-container">
                                <label htmlFor={data} className="label" style={espaciosLetra}>{text.toUpperCase()}</label>
                                <input type={type} onChange={handleChange} className={className} id={data} name={data} placeholder={examples} required/>
                            </div>
                        )
                    })}
                    <button className="buttonPost">⏏ Guardar</button>
                </article>
            </form>
        </div>
    )
}