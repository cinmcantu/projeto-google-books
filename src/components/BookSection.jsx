import React from 'react';
import BookList from './BookList';
import { } from '../styles/Book.css'
import { Bookshelf } from '../styles/styled'

function BookSection(props) {
    const { section, list, destaque } = props

    return (
        <Bookshelf data={destaque ? { bg: "#47B7ED", txtColor: "#fff", bgHover: "#2090B4" }
            : { bg: "#F9F9F9", txtColor: "#000", bgHover: "#D0D0D0" }}
        >
            <h1>{section}</h1>
            <BookList books={list} bookClass="overflow" />
        </Bookshelf>
    )
}

export default BookSection