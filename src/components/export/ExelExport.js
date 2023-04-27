import { useContext } from 'react';
import { EtiquetaContext } from "../context/EtiquetaContext";
import { ExcelJS } from 'exceljs'

//const ExcelJS = require('exceljs');

export const Excel = () => {
    const { producto } = useContext(EtiquetaContext);
    console.log(producto);
    const workbook = new ExcelJS.Workbook();
    return producto

}