import { ChangeEvent, FC } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector, } from "react-redux";
import { IRootState } from '../../redux/store';
import { fetchCharactersThunk } from '../../redux/actions/characters.actions';
import './filtros.css';

/**
 * Characters filter component
 *
 * @returns {React.ReactElement} TSX element
 */

const Filtros: FC = () => {

    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
    const query = useSelector((state) => state.characters.query);
    const dispatch = useDispatch();


    const onChange = async (event: ChangeEvent<HTMLInputElement>) => {
        let query = event.target.value;
        dispatch(fetchCharactersThunk(query));
    };


    return (
        <div className="filtros">
            <label htmlFor="filter">Filtrar por nombre:</label>
            <input
                type="text"
                placeholder="Rick, Morty, Beth, Alien, ...etc"
                onChange={onChange}
                value={query}
                name="filter"
                autoFocus={true}
            />
        </div>

    )
}

export default Filtros;