import { useState, createContext, useEffect, useReducer } from "react";




export const EtiquetaContext = createContext();
export const EtiquetaContextProvaider = ({ children}) => {
    const [etiqueta, setEtiqueta] = useState([]);
    const API = "http://localhost:5000/api/listar";
    const options = {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
    }

    useEffect(() => {
        fetch(API, options)
        .then(response => response.json()) 
        .then(json => setEtiqueta(json))
        .catch(err => console.log(err));
    },[]);
    console.log({etiqueta});
    const ordernarId = etiqueta.sort((a, b) => a.id - b.id)
    return (
        <EtiquetaContext.Provider value={{ordernarId}}>
            {children}
        </EtiquetaContext.Provider>
    )
}