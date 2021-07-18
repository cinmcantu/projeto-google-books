import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchApi } from "../api"
import HeaderBusca from "../components/HeaderBusca";
import BookList from '../components/BookList';
import Filter from '../components/Filter';
import SearchFilterBtn from '../components/SearchFilterBtn';

function Busca() {
  const { searchParams } = useParams()
  const [books, setBooks] = useState([])
  const [booksFilter, setBooksFilter] = useState([])
  const [filterBar, setFilterBar] = useState(false)
  const [isFiltered, setIsFiltered] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    if (searchParams) {
      const booksApi = await searchApi(searchParams)
      setBooks(booksApi.items)
      console.log(booksApi.items)
    }
  }
  const showFilterBar = () => {
    setFilterBar(!filterBar)
  }
  const cleanFilter = () => {
    setIsFiltered(false)
  }

  return (
    <>
      <HeaderBusca />
      <Filter filterBar={filterBar}
        setFilterBar={setFilterBar}
        setIsFiltered={setIsFiltered}
        setBooksFilter={setBooksFilter}
        showFilterBar={showFilterBar}
        books={books}
      />
      <SearchFilterBtn cleanFilter={cleanFilter}
        showFilterBar={showFilterBar}
        isFiltered={isFiltered}
      />
      {
        isFiltered ? <BookList books={booksFilter} bookClass="flex-wrap" />
          : <BookList books={books} bookClass="flex-wrap" />
      }

    </>
  )
}

export default Busca;
