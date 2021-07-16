import React, { useState } from 'react';
import * as BSIcons from "react-icons/bs";
import { Link } from 'react-router-dom';
import { } from '../css/Book.css'

function Header(props) {
    const { section, list } = props
    const [searchBar, setSearchBar] = useState(false)
    const [searchBox, setSearchBox] = useState("")
    
    const handleSearchChange = (event) => {
        setSearchBox(event.target.value)
    }

    const showSearchBar = ()=> setSearchBar(!searchBar)

    return(
        <>
            <header className={searchBar ? "invisible" : ""} >
                <h2 className="logo"></h2>
                <BSIcons.BsSearch onClick={showSearchBar} className="icon" />
            </header>
            <div className={searchBar ? "search-bar" : "invisible"}>
                <BSIcons.BsChevronLeft onClick={showSearchBar} className="icon" />
                <form>
                    <input type="text" placeholder="Busca por livros ou autores" 
                    onChange={handleSearchChange} />
                </form>
                <Link to={"/busca/"+searchBox}>
                    <BSIcons.BsSearch className="icon" />
                </Link>
            </div>
        </>
    )
}

export default Header