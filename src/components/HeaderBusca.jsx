import React from 'react';
import * as BSIcons from "react-icons/bs";
import { Link } from 'react-router-dom';
import { } from '../styles/Book.css'

function HeaderBusca() {

    return (
        <>
            <header className="center" >
                <Link to="/">
                    <BSIcons.BsChevronLeft className="icon" />
                </Link>
                <h2>Resultados de busca</h2>
            </header>
        </>
    )
}

export default HeaderBusca