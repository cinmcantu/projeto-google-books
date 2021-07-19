import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchApi } from "../api"
import HeaderBusca from "../components/HeaderBusca";
import BookList from '../components/BookList';
import Pagination from '../components/Pagination';
import Filter from '../components/Filter';
import SearchFilterBtn from '../components/SearchFilterBtn';
import Loading from '../components/Loading';

function Busca() {
  const { searchParams, pageNum } = useParams()
  const [books, setBooks] = useState([])
  const [booksFilter, setBooksFilter] = useState([])
  const [filterBar, setFilterBar] = useState(false)
  const [isFiltered, setIsFiltered] = useState(false)
  const [isLoad, setIsLoad] = useState(false)

  useEffect(() => {
    fetchData()
  })

  async function fetchData() {
    const offset = pageNum ? (pageNum - 1) : 0
    if (searchParams) {
      const limit = 12
      let booksApi = await searchApi(searchParams, offset, limit)
      setBooks(booksApi.items)
      setIsLoad(true)
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
        isLoad ? (
          isFiltered ? <BookList books={booksFilter} bookClass="flex-wrap" />
            : (<>
              <Pagination currentPagNum={pageNum} search={searchParams} />
              <BookList books={books} bookClass="flex-wrap" />
            </>)
        ) : <Loading />

      }

    </>
  )
}

export default Busca;
