import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {

    


    
    

    return <div className="paginacion">
        <button disabled={true} className={"primary"} >anterior</button>
        <button disabled={false} className={"primary"} >siguiente</button>
    </div>
}

export default Paginacion;