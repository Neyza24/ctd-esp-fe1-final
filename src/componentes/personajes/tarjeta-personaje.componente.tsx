import { FC } from 'react';
import { Character } from '../../redux/types/types';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { useNavigate } from 'react-router-dom';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * @param {Character} 
 * @returns {React.ReactElement} un JSX element 
 */

const TarjetaPersonaje: FC<{ character: Character }> = ({ character }) => {

    let navigate = useNavigate();

    const goToDetailPage = () => {
        navigate(`/detalle/${character.id}`, { state: { character: character } });
    }

    return (
        <div className="tarjeta-personaje">
            <img src={character.image} onClick={goToDetailPage} alt={character.name} />
            <div className="tarjeta-personaje-body">
                <span>{character.name}</span>
                <BotonFavorito character={character} />
            </div>
        </div>
    )

}

export default TarjetaPersonaje;