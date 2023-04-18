import { useContext } from 'react'
import { EtiquetaContext } from "../components/context/EtiquetaContext";

export const useTodo = () => useContext(EtiquetaContext);

