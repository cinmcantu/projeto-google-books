import React from 'react';
import Book from './Book'
import { } from '../styles/Book.css'

function BookList(props) {
    const { books, bookClass } = props

    return (
        <ul className={"book-list " + bookClass}>
            {books ? (
                books.map((book => {
                    return (<Book key={book.id} book={book} />)
                }))
            ) : <h1>Página não encontrada</h1>
            }
        </ul>

    )
}

export default BookList