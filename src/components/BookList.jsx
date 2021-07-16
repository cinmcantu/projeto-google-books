import React from 'react';
import Book from './Book'
import { } from '../css/Book.css'

function BookList(props) {
    const { books } = props
    return(
        <ul className="book-list">
            {
                books.map((book => {
                    return (<Book key={book.id} book={book} />)
                }))
            }
        </ul>

    )
}

export default BookList