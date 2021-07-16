import React from 'react';
import Book from './Book'
import { } from '../css/Book.css'

function BookList(props) {
    const { books, bookClass } = props

    return(
        <ul className={"book-list " + bookClass }>
            {
                books.map((book => {
                    return (<Book key={book.id} book={book} />)
                }))
            }
        </ul>

    )
}

export default BookList