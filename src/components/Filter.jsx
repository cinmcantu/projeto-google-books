import React, { useState } from 'react';
import * as BSIcons from "react-icons/bs";
import { } from '../styles/Book.css'

export default function Filter(props) {
  const {
    filterBar,
    setFilterBar,
    setIsFiltered,
    setBooksFilter,
    showFilterBar,
    books,
  } = props
  const [filterValue, setFilterValue] = useState("<150")

  function handleFilterRadio(event) {
    setFilterValue(event.target.value)
    console.log(filterValue, event.target.value)
  }
  const filterBooks = (event) => {
    event.preventDefault()
    setBooksFilter(
      books.filter((book) => {
        console.log(book.volumeInfo.pageCount, filterValue)
        switch (filterValue) {
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
    setIsFiltered(true)
  }

  return (
    <div className={filterBar ? "filter-bar" : "invisible"}>
      <div className="header-filter" >
        <h3>Filtro</h3>
        <BSIcons.BsX className="icon" onClick={showFilterBar} />
      </div>
      <form name="filtro">
        <h3><strong>Quantidade de Páginas</strong></h3>
        <input type="radio" name="search_filter"
          value="<150"
          checked={filterValue === "<150"}
          onChange={handleFilterRadio} />
        <label> menos de 150</label><br />
        <input type="radio" name="search_filter"
          value="150-300"
          checked={filterValue === "150-300"}
          onChange={handleFilterRadio} />
        <label> de 150 a 300</label><br />
        <input type="radio" name="search_filter"
          value=">300"
          checked={filterValue === ">300"}
          onChange={handleFilterRadio} />
        <label> mais de 300</label><br />
        <button className="btn-filter" onClick={filterBooks}>Filtar agora</button>
      </form>
    </div>
  )
}





