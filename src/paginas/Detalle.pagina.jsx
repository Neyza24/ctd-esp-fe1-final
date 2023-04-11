import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from "react-redux";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import "./Detalle.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns {React.ReactElement} la pagina de detalle
 */


const PaginaDetalle = () => {    

    const location = useLocation();
    const state = location.state;
    const character = {
        ...state.character
    }

    



    return <div className="container">
        <h3>{character.name}</h3>

        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={character.image} alt={character.name} />
                <div className={"detalle-header-texto"}>

                    <p>{character.name}</p>
                    <p>Planeta: {character.origin.name}</p>
                    <p>Genero: {character.gender}</p>

                </div>
                <BotonFavorito character={character} />
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            <TarjetaEpisodio />
            <TarjetaEpisodio />
            <TarjetaEpisodio />
        </div>
    </div>
}

export default PaginaDetalle