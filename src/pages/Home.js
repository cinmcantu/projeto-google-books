import React, { useState, useEffect } from 'react';
import { searchApi } from "../api"
import BookSection from '../components/BookSection';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { } from '../styles/Book.css'



function Home() {
    const [aventura, setAventura] = useState([])
    const [acao, setAcao] = useState([])
    const [infantil, setInfantil] = useState([])
    const [isLoad, setIsLoad] = useState(false)

    useEffect(() => {
        fetchData("aventura", setAventura)
        fetchData("infantil", setInfantil)
        fetchData("acao", setAcao)
    }, [])

    async function fetchData(searchValue, setLista) {
        const offset = 0
        const limit = 7
        const booksApi = await searchApi(searchValue, offset, limit)
        setLista(booksApi.items)
        setIsLoad(true)
    }

    return (
        <>
            <Header />
            <main>
                {isLoad ? (
                    <>
                        <BookSection section="Aventura" list={aventura} />
                        <BookSection section="Infantil" list={infantil} />
                        <BookSection section="Destaques" list={infantil} destaque />
                        <BookSection section="Ação" list={acao} />
                    </>
                ) : (
                    Array(4).fill(0).map((_, i) => {
                        return <Loading key={i} />
                    })
                )
                }
            </main>
        </>
    )
}

export default Home