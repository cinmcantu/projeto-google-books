import React from 'react';
import * as BSIcons from "react-icons/bs";
import { Link } from 'react-router-dom';
import { } from '../css/Book.css'

function HeaderFilter() {

    return(
        <>
            <header className="center" >
                <h2>Resultados de busca</h2>
                    <BSIcons.BsX className="icon" />
            </header>
        </>
    )
}

export default HeaderFilter