import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useDispatch } from "react-redux";

import { FC } from "react";
import { fetchCharactersThunk } from "../redux/actions/characters.actions";


/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns {React.ReactElement}
 */


const PaginaInicio: FC = () => {

    const dispatch = useDispatch();

    const cleanFilters = () => {
        dispatch(fetchCharactersThunk(''))
    };

    return (
        <div className="container">
            <div className="actions">
                <h3>Catálogo de Personajes</h3>
                <button className="danger" onClick={cleanFilters}>Limpiar filtros</button>
            </div>
            <Filtros />
            <Paginacion />
            <GrillaPersonajes />
        </div>
    )
}

export default PaginaInicio;