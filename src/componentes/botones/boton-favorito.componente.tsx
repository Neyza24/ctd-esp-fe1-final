import { FC } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector, } from "react-redux";
import { Character } from '../../redux/types/types';
import { IRootState } from '../../redux/store';
import { toggleFavorite } from '../../redux/actions/favorites.actions';
import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * @param {Character}
 * @returns {React.ReactElement} 
 */
const BotonFavorito: FC<{ character: Character }> = ({ character }) => {
    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
    const favoriteMap = useSelector((state) => state.favorites.favoritesMapa);
    const dispatch = useDispatch();

    const src = require(favoriteMap.has(character.id)
        ? "../../imagenes/star-filled.png"
        : "../../imagenes/star.png");

    /**
  * Function that updates the Favorites status, adding or removing the character
  * @param {event} event
  */
    const toggleFavorites = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        dispatch(toggleFavorite(character));
    };

    return (
        <div onClick={toggleFavorites} className="boton-favorito" >
            <img src={src} alt={"favorito"} />
        </div>
    )
}

export default BotonFavorito;