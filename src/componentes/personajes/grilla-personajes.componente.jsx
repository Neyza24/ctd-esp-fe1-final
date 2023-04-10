import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import {  getPersonajes } from '../../redux/slices/personajesSlice';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = () => {

    const dispatch = useAppDispatch();
    const personajes = useAppSelector(state => state.personaje.personajesList.results);

    //const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getPersonajes(1))
    })

    // const onChange = (personaje) => {
    //     dispatch(getPersonajeName(personaje.name))
    // }


    return <div className="grilla-personajes">
        {
            personajes && personajes.map((personaje, i) => (
                <TarjetaPersonaje key={i} personaje={personaje} />
            ))
        }

    </div>
}

export default GrillaPersonajes;