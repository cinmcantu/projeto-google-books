import React from 'react';
import BookList from './BookList';
import { } from '../css/Book.css'

function BookSection(props) {
    const { section, list, destaque } = props

    return(
        <section className={"section" + (destaque ? " destaque" : "") }>
            <h1>{section}</h1>
            <BookList books={list} bookClass="overflow" />
        </section>
    )
}

export default BookSection