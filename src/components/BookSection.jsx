import React from 'react';
import BookList from './BookList';
import { } from '../css/Book.css'

function BookSection(props) {
    const { section, list } = props

    return(
        <section className="section">
            <h1>{section}</h1>
            <BookList books={list} />
        </section>
    )
}

export default BookSection