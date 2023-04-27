//Dependencias
import { useState } from "react"

//Styles
import "../../../public/css/ButtonExcel.css"



export const ButtonExcel = () => {  
    const [isExporting, setIsExporting] = useState(false) 
    const [isExpot, setIsExport] = useState(false)
    
    const handleClick = () => {
        setIsExporting(true);
        setTimeout(() => {
            setIsExporting(false)
            setIsExport(true)
            setTimeout(()=> {
                setIsExport(false)
            }, 1700)
        }, 2000)
    }

    return (
        <button
            className="exportarExcel"
            disabled={isExporting || isExpot}
            onClick={handleClick}>
            <span className="rail"></span>
            <span className="iconExcel"></span>
            <span className="text">
                {isExporting
                    ? "Exportando" 
                    : isExpot
                        ? "Completo"
                        : "Descargar Reporte"
                }
                </span>    
        </button>
    )
}