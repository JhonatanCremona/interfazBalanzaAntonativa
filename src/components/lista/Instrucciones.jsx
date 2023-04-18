import "../../../public/css/Instrucciones.css"


export const Instrucciones = () => {
    const variants = [
        {
            id:1,
            pathD:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
            spanText: "Editar etiqueta",
            textDet:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor in delectus fugit dolores quod"
        },
        {
            id:2,
            pathD:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
            spanText:"Borrar etiqueta",
            textDet:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor in delectus fugit dolores quod"
        },
        {
            id:3,
            pathD:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
            spanText:"Imprimir etiqueta",
            textDet:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor in delectus fugit dolores quod"
        }
    ]
    return (
        <section className="box-ins">
            {
                variants.map(({id, pathD, spanText, textDet}) => {
                    return(
                        <article key={id} className="art-ins">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 iconos Ins" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d={pathD} />
                            </svg>
                            <h5 className="title-content">
                                <span className="title-ins">{spanText}</span>
                            </h5>
                            <p className="text-details">{textDet}</p>
                        </article>
                    )
                })
            }
        </section>
    )
}