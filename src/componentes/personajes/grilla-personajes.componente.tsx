import { FC, useEffect } from 'react';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from "react-redux";
import { IRootState } from '../../redux/store';
import { fetchCharactersThunk } from '../../redux/actions/characters.actions';
import './grilla-personajes.css';


/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * @returns {React.ReactElement}
 */


const GrillaPersonajes: FC = () => {

    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
    const { status, characters } = useSelector((state) => state.characters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCharactersThunk(""));
    }, [dispatch]);


    if (status === "LOADING") return <div className='alert alert-info'>Cargando personajes...</div>;
    if (status === "FAILED") return <div className='alert alert-warning'>No se encontro el o los personajes.</div>;
    if (!characters || characters.length === 0) return <></>;

    return (
        <div className="grilla-personajes">
            {
                characters.map((character) => (
                    <div key={character.id}>
                        <TarjetaPersonaje character={character} />
                    </div>
                ))
            }

        </div>
    )
}

export default GrillaPersonajes;