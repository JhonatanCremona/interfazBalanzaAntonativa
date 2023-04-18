import { Reorder } from 'framer-motion';
import { ListaEtiqueta } from '../listaEtiquetas';
import { EtiquetaContext } from '../context/EtiquetaContext';
import { reducer } from '../../api/reducer';
import { useReducer } from 'react';

export const HeaderList = ({ todos, setTodos }) => {
    const { etiqueta } = useContext(EtiquetaContext);
    const [allEtiqueta, dispatch] = useReducer(reducer, etiqueta)


    return  (

        <>
            <Reorder.Group className='todo-list' axis='y' values={todos} onReorder={setTodos}>
                <Reorder.Item key={todo.id} value={todo}>
                    <ListaEtiqueta/>
                </Reorder.Item>
            </Reorder.Group>
        </>
    )
}