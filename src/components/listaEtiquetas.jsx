import { useContext } from "react";
import { EtiquetaContext } from "./context/EtiquetaContext";

import { motion } from 'framer-motion'
import "../../public/css/ListStyle.css";
import { Title } from "./lista/Title";
import { Instrucciones } from "./lista/Instrucciones";

export const ListaEtiqueta = () => {
    const { etiqueta } = useContext(EtiquetaContext);
    console.log({etiqueta});
    
    const variants = {
        hidden: {
          opacity: 0
        },
        visible: ({ delay }) => ({
          opacity: 1,
          transition: {
            delay,
            duration: 1
          }
        })
      }
    const handleState = () => {

    } 

    return (
        <>
            <Title/>
            <div className="box-cards">
                
                <form onSubmit={handleState}>
                {etiqueta.map((etiqueta) => {
                    return (
                        <motion.div
                        custom={{ delay: (etiqueta.id + 1) * 0.1 }}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        variants={variants}
                        layoutId={etiqueta.id}
                        key={etiqueta.id}
                        >
                            <article className="card">
                                <figure>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 list" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </figure>

                                <div className="box-card">
                                    <div>
                                        <h3>{etiqueta.nameEtiqueta != null ? etiqueta.nameEtiqueta : "Etiqueta null"}</h3>
                                        <p className="sub-text">{etiqueta.producto}</p>
                                    </div>

                                    <div className="iconos-button">
                                        <button className="button-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 iconos " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </button>
                                
                                        <button className="button-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  iconos delete" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                    <input type="radio" id="html" name = "test" value={etiqueta.nameEtiqueta}/>
                                </div>
                            </article>
                        </motion.div>
                    )
                })}
                <button className="buttonImprimir"> Imprimir </button>
                </form>
                <Instrucciones/>
            </div>
        </>
    )
}