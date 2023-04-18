//Styles css
import './App.css';

//Dependencias
import { Routes, Route } from 'react-router-dom';

//Components
import { FormEtiqueta } from './components/FormEtiqueta';
import { ListaEtiqueta } from "./components/listaEtiquetas";
import { EtiquetaContextProvaider } from './components/context/EtiquetaContext';
import { Contacts } from './components/Contact';
import { Layout } from './components/Layaout';

function App() {

  return (
      <EtiquetaContextProvaider>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route path='listar' element={<ListaEtiqueta/>}/>
            <Route path='guardar' element={<FormEtiqueta/>}/>
            <Route path='contacts' element={<Contacts/>}/>
          </Route>
        </Routes>
      </EtiquetaContextProvaider>
      
  )
}

export default App
