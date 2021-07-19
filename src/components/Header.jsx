import React, { useState } from 'react';
import * as BSIcons from "react-icons/bs";
import { Link } from 'react-router-dom';
import { } from '../styles/Book.css'

function Header(props) {
    const [searchBar, setSearchBar] = useState(false)
    const [searchBox, setSearchBox] = useState("")

    const handleSearchChange = (event) => {
        setSearchBox(event.target.value)
    }

    const showSearchBar = () => setSearchBar(!searchBar)

    return (
        <>
            <header className={searchBar ? "invisible" : ""} >
                <div className="logo"></div>
                <BSIcons.BsSearch onClick={showSearchBar} className="icon" />
            </header>
            <div className={searchBar ? "search-bar" : "invisible"}>
                <BSIcons.BsChevronLeft onClick={showSearchBar} className="icon" />
                <form>
                    <input type="text" placeholder="Busca por livros ou autores"
                        onChange={handleSearchChange} />
                </form>
                <Link to={`/busca/${searchBox}/1`}>
                    <BSIcons.BsSearch className="icon" />
                </Link>
            </div>
        </>
    )
}

export default Header