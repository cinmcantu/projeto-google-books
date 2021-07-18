import React, { useState, useEffect } from 'react';
import { searchApi } from "../api"
import BookSection from '../components/BookSection';
import Header from '../components/Header';
import { } from '../styles/Book.css'



function Home() {
    const [aventura, setAventura] = useState([])
    const [acao, setAcao] = useState([])
    const [infantil, setInfantil] = useState([])

    useEffect(() => {
        fetchData("aventura", setAventura)
        fetchData("infantil", setInfantil)
        fetchData("acao", setAcao)
    }, [])

    async function fetchData(searchValue, lista) {
        const booksApi = await searchApi(searchValue)
        lista(booksApi.items)
    }

    return (
        <>
            <Header />
            <main>
                <BookSection section="Aventura" list={aventura} />
                <BookSection section="Infantil" list={infantil} />
                <BookSection section="Destaques" list={infantil} destaque />
                <BookSection section="Ação" list={acao} />
            </main>
        </>
    )
}

export default Home