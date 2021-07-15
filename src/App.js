import React, { useState, useEffect } from 'react';
import { searchApi } from "./components/api"

function App() {
  const [books, setBooks] = useState([])
  const [searchValue, setSearchValue] = useState("")

  // useEffect(() => {
  //   search(searchValue).then((data) => {
  //     setBooks(data.items)
  //   })
  // }, [])
  const handleSearchChange = (event)=>{
    setSearchValue(event.target.value)
  }
  const handleSubmit = (event)=>{
    event.preventDefault()
    searchApi(searchValue).then((data) => {
      setBooks(data.items)
    })
  }

  return (
    <>
      <h1>Hello There</h1>
      <p>Isso é uma aplicação em React</p>
      <form>
        <label>Busca</label>
        <input type="search" name="busca" onChange={handleSearchChange} />
        <button type="submit" onClick={handleSubmit}>Enviar</button>
      </form>
      {
        books.map((book => {
          let image = ""
          if (book.volumeInfo.imageLinks) {
            image = book.volumeInfo.imageLinks.thumbnail
          }
          return (
            <section key={book.id}>
              <p>{book.volumeInfo.categories}</p>
              <img src={image} />
            </section>
          )
        }))
      }
    </>
  )
}

export default App;
