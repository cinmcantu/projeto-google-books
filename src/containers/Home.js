import React, { useState, useEffect } from 'react';
import * as BSIcons from "react-icons/bs";
import { searchApi } from "../components/api"
import BookSection from '../components/BookSection';
import { } from '../css/Book.css'



function Home(){
    const [aventura, setAventura] = useState([])
    const [acao, setAcao] = useState([])
    const [infantil, setInfantil] = useState([])

    useEffect(() => {
        fetchData("aventura", setAventura)
        fetchData("infantil", setInfantil)
        fetchData("acao", setAcao)
    }, [])
    
    async function fetchData(searchValue, lista){
        const booksApi = await searchApi(searchValue)
        lista(booksApi.items)
    }

    return(
        <>
            <header>
                <h2>Google Livros</h2>
                <BSIcons.BsSearch className="icon" />
            </header>
            <main>
                <BookSection section="Aventura" list={ aventura } />
                <BookSection section="Infantil" list={ infantil } />
                <BookSection section="Destaque" list={ infantil } />
                <BookSection section="Açao" list={ acao } />
            </main>
        </>
    )
}

export default Home