import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchApi } from "../components/api"

import HeaderBusca from "../components/HeaderBusca";
import BookList from '../components/BookList';

function Busca() {
  const { searchParams } = useParams()
  const [books, setBooks] = useState([])
  const [searchBox, setSearchBox] = useState("")
  const [searchValue, setSearchValue] = useState(searchParams)
  const [filter, setFilter] = useState("")

  useEffect(() => {
    async function fetchData(){
      if (searchValue) {
        const booksApi = await searchApi(searchValue)
        setBooks(booksApi.items)
        console.log(booksApi.items)
      }
    }
    fetchData()
  }, [searchValue])

  const handleSearchChange = (event) => {
    setSearchBox(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const buscaSemEspaco = searchBox.split(" ").join("+")
    console.log(filter, buscaSemEspaco)
    if(filter==="all" || filter===""){
      setSearchValue(buscaSemEspaco)
    }else{
      setSearchValue(`in${filter}=${buscaSemEspaco}`)
    }
  }
  const handleFilterRadio = (event) => {
    setFilter(event.target.value)
  }

  return (
    <>
      <HeaderBusca />
      <div>
        <form name="filtro">
          <p>Filtro</p>
          <input type="radio" name="search_filter" value="all" onChange={handleFilterRadio} />
          <label>Todos</label><br />
          <input type="radio" name="search_filter" value="author" onChange={handleFilterRadio} />
          <label>Autor</label><br />
          <input type="radio" name="search_filter" value="title" onChange={handleFilterRadio} />
          <label>Título</label><br />
          <button>Filtar agora</button>
        </form>
      </div>

      <form name="busca">
        <input type="search" name="busca" value={searchBox}
          onChange={handleSearchChange} placeholder="Busca..." />
        <button type="submit" onClick={handleSubmit}>Enviar</button>
      </form>
      <BookList books={books} bookClass="flex-wrap" />

    </>
  )
}

export default Busca;
