import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as HIIcons from "react-icons/hi";

import { searchApi } from "../components/api"
import HeaderBusca from "../components/HeaderBusca";
import BookList from '../components/BookList';

function Busca() {
  const { searchParams } = useParams()
  const [books, setBooks] = useState([])
  const [booksFilter, setBooksFilter] = useState([])
  const [searchValue, setSearchValue] = useState(searchParams)
  const [filterValue, setFilterValue] = useState("<150")
  const [filterBar, setFilterBar] = useState(false)
  const [cleanFilterBtn, setCleanFilterBtn] = useState(false)
  let fil = ""

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

  useEffect(()=>{

  },[filterValue])

  function handleFilterRadio(event){
    setFilterValue(event.target.value)
    console.log(filterValue, event.target.value)
  }

  const showFilterBar = ()=>{
    setFilterBar(!filterBar)
  }
  const filterBooks =(event)=>{
    event.preventDefault()
    setBooksFilter(
      books.filter((book)=>{
        console.log(book.volumeInfo.pageCount, filterValue)
        switch(filterValue){
          case "<150":
            return book.volumeInfo.pageCount < 150
          case "150-300":
            return (book.volumeInfo.pageCount >= 150 &&
              book.volumeInfo.pageCount < 300)
          case ">300":
            return book.volumeInfo.pageCount > 300
          default:
            return true
        }
      })
    )
    setFilterBar(!filterBar)
    setCleanFilterBtn(!cleanFilterBtn)
  }
  const cleanFilter = ()=>{
    setCleanFilterBtn(!cleanFilterBtn)
  }

  return (
    <>
      <HeaderBusca />
      <div className={filterBar ? "" : "invisible"}>
        <form name="filtro">
          <p>Quantidade de Páginas</p>
          <input type="radio" name="search_filter"
           value="<150"
           checked = {filterValue === "<150"}
           onChange={handleFilterRadio} />
          <label>menos de 150</label><br />
          <input type="radio" name="search_filter"
           value="150-300"
           checked = {filterValue === "150-300"}
           onChange={handleFilterRadio} />
          <label>150 - 300</label><br />
          <input type="radio" name="search_filter"
            value=">300"
            checked = {filterValue === ">300"}
            onChange={handleFilterRadio} />
          <label>mais de 300</label><br />
          <button onClick={filterBooks}>Filtar agora</button>
        </form>
        <p>{filterValue}</p>
        {console.log(filterValue)}
        {console.log(booksFilter)}
      </div>
      <div>
        <button onClick={showFilterBar}><HIIcons.HiOutlineFilter />  Filtrar</button>
        <button className={cleanFilterBtn ? "" : "invisible"} onClick={cleanFilter}>
          Limpar X
        </button>
      </div>
      <BookList books={books} bookClass="flex-wrap" />

    </>
  )
}

export default Busca;
