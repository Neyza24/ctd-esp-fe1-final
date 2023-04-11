import { FC } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from "react-redux";
import { IRootState } from "../redux/store";
import { removeAllFavorite } from "../redux/actions/favorites.actions";
import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns {React.ReactElement} la pagina de favoritos
 */
const PaginaFavoritos: FC = () => {

    const distpach = useDispatch();
    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
    const favoriteMap = useSelector(state => state.favorites.favoritesMapa)

    return (
        <div className="container">
            <div className="actions">
                <h3>CharactersFavoritos</h3>
                <button
                    className="danger"
                    onClick={() => distpach(removeAllFavorite())}
                >
                    Eliminar todos
                </button>
            </div>
            {favoriteMap.size === 0 ? (
                <div className="alert alert-warning">No tienes favoritos</div>
            ) : (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gridGap: "20px",
                        justifyItems: "center",
                    }}
                >
                    {Array.from(favoriteMap.values()).map((character, index) => {
                        return (
                            <div key={character.id}>
                                <TarjetaPersonaje character={character} />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default PaginaFavoritos