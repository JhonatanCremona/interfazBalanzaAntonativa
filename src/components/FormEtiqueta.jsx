//Hooks
import { useState } from "react";

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
      console.log("dato",settings.body);


    
    async function guardarEtiqueta(API, settings) {
        const response = await fetch(API, settings)
        console.log(response.json);
        return await response.json();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        guardarEtiqueta(API,settings)
            .then((data) => console.log(data))
            .catch(err => console.log(err));
        console.log("Crear Etiqueta");
    };

    const opciones = [
        {
            id:"0",
            type: "text",
            className:"text-input",
            data: "nameEtiqueta",
            examples: "Etiqueta Jamon"
        },
        {
            id:"1",
            type: "text",
            className:"text-input",
            data: "producto",
            examples: "Ej: P32J/1"
        },
        {
            id:"2",
            type: "text",
            className:"text-input",
            data: "lote",
            examples:"Ej:4575"
        },
        {
            id:"3",
            type: "date",
            className:"text-input",
            data: "fechaVencimiento",
            examples: "Ej:2023-11-4"
        },
        {
            id:"4",
            type: "text",
            className:"text-input",
            data:"operario",
            examples:"Ej:Carlos"
        }   
    ]
    const espaciosLetra = {
        letterSpacing:"3px",
        textAlign: "initial",
    }
    return (
        <div>
            <form className="formPost" onSubmit={handleSubmit}>
                <article className="caja">
                    {opciones.map(({id, type, className, data, examples}) => {
                        return (
                            <div key={id} className="input-container">
                                <label htmlFor={data} className="label" style={espaciosLetra}>{data.toUpperCase()}</label>
                                <input type={type} onChange={handleChange} className={className} id={data} name={data} placeholder={examples}/>
                                {console.log(handleChange)}
                            </div>
                        )
                    })}
                    <button className="buttonPost">Guardar</button>
                </article>
            </form>
        </div>
    )
}