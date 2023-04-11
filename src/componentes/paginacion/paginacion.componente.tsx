import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from "react-redux";
import { IRootState } from "../../redux/store";
import { FC } from "react";
import { changePageThunk } from "../../redux/actions/characters.actions";
import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns {React.ReactElement} un JSX element 
 */
const Paginacion: FC = () => {

    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
    const dispatch = useDispatch();

    const pageInfo = useSelector(state => state.characters.pageInfo);
    const { prev, next } = pageInfo;

    const prevPage = () => {
        dispatch(changePageThunk(prev))
    }

    const nextPage = () => {
        dispatch(changePageThunk(next))
    }

    return (
    <div className="paginacion">
        <button onClick={prevPage} disabled={prev === null ? true : false} className={"primary"} >anterior</button>
        <button onClick={nextPage} disabled={next === null ? true : false} className={"primary"} >siguiente</button>
    </div>
    )
}

export default Paginacion;